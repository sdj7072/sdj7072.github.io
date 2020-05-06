require "digest"
require "json"
require 'nokogiri'
require 'open-uri'
require 'uri'

require "metainspector"
require "jekyll-linkpreview/version"

module Jekyll
  module Linkpreview
    class OpenGraphProperties
      def get(url)
        og_properties = fetch(url)
        og_url = get_og_property(og_properties, 'og:url')
        og_image = get_og_property(og_properties, 'og:image')
        uri_scheme = get_uri_scheme(og_url)
        uri_host = get_uri_host(og_url)
        nog_image = get_nog_image(uri_scheme, uri_host)
        {
          'title'       => get_og_property(og_properties, 'og:title'),
          'url'         => og_url,
          'image'       => convert_to_absolute_url(og_image, uri_scheme, uri_host),
          'description' => get_og_property(og_properties, 'og:description'),
          'domain'      => uri_host,
          'nog_image'   => convert_to_absolute_url(nog_image,  uri_scheme, uri_host)
        }
      end

      private
      def get_og_property(properties, key)
        if !properties.key? key then
          return nil
        end
        properties[key][0]
      end

      private
      def fetch(url)
        MetaInspector.new(url).meta_tags['property']
      end

      private
      def convert_to_absolute_url(url, uri_schme, uri_host)
        if url.nil? then
          return nil
        end
        # root relative url
        if url[0] == '/' && url[1] != '/' then
          return "#{uri_schme}://#{uri_host}#{url}"
        end
        if url[0] == '/' && url[1] == '/' then
          return "#{uri_schme}:#{url}"
        end
        url
      end

      private
      def get_uri_scheme(url)
        if url.nil? then
          return nil
        end
        uri = URI.parse(URI.escape(url))
        m = uri.scheme
        if m.nil? then
          return nil
        end
        m
      end

      private
      def get_uri_host(url)
        if url.nil? then
          return nil
        end
        uri = URI.parse(URI.escape(url))
        m = uri.host
        if m.nil? then
          return nil
        end
        m
      end

      private
      def get_nog_image(uri_schme, uri_host)
        image = nil
        doc = Nokogiri::HTML(open(uri_schme + "://" + uri_host))
        doc.css('img').each_with_index do |item|
          image = item['src']
          break
        end
        return image
      end
    end

    class LinkpreviewTag < Liquid::Tag
      @@cache_dir = '_cache'

      def initialize(tag_name, markup, parse_context)
        super
        @markup = markup.strip()
        @og_properties = OpenGraphProperties.new
      end

      def render(context)
        url = get_url_from(context)
        properties = get_properties(url)
        title       = properties['title']
        image       = properties['image']
        description = properties['description']
        domain      = properties['domain']
        nog_image   = properties['nog_image']

        if image.nil? && !nog_image.nil? then
          image = nog_image
        end

        if title.nil? || image.nil? || domain.nil? then
          render_linkpreview_nog(context, url, title, description, domain)
        else
          render_linkpreview_og(context, url, title, image, description, domain)
        end
      end

      def get_properties(url)
        cache_filepath = "#{@@cache_dir}/%s.json" % Digest::MD5.hexdigest(url)
        if File.exist?(cache_filepath) then
          return load_cache_file(cache_filepath)
        end
        properties = @og_properties.get(url)
        if Dir.exists?(@@cache_dir) then
          save_cache_file(cache_filepath, properties)
        else
          # TODO: This message will be shown at all linkprevew tag
          warn "'#{@@cache_dir}' directory does not exist. Create it for caching."
        end
        properties
      end

      private
      def get_url_from(context)
        context[@markup]
      end

      private
      def load_cache_file(filepath)
        JSON.parse(File.open(filepath).read)
      end

      protected
      def save_cache_file(filepath, properties)
        File.open(filepath, 'w') { |f| f.write JSON.generate(properties) }
      end

      private
      def render_linkpreview_og(context, url, title, image, description, domain)
        template_path = get_linkpreview_og_template()
        if File.exist?(template_path)
          template_file = File.read template_path
          site = context.registers[:site]
          template_file = (Liquid::Template.parse template_file).render site.site_payload.merge!({"link_url" => url, "link_title" => title, "link_image" => image, "link_description" => description, "link_domain" => domain})
        else
          html = <<-EOS
<div class="jekyll-linkpreview-wrapper">
  <div class="jekyll-linkpreview-wrapper-inner">
    <div class="jekyll-linkpreview-content">
      <div class="jekyll-linkpreview-image">
        <a href="#{url}" target="_blank">
          <img src="#{image}" />
        </a>
      </div>
      <div class="jekyll-linkpreview-body">
        <h2 class="jekyll-linkpreview-title no_toc">
          <a href="#{url}" target="_blank">#{title}</a>
        </h2>
        <div class="jekyll-linkpreview-description">#{description}</div>
      </div>
    </div>
    <div class="jekyll-linkpreview-footer">
      <a href="//#{domain}" target="_blank">#{domain}</a>
    </div>
  </div>
</div>
EOS
          html
        end
      end

      private
      def render_linkpreview_nog(context, url, title, description, domain)
        template_path = get_linkpreview_nog_template()
        if File.exist?(template_path)
          template_file = File.read template_path
          site = context.registers[:site]
          template_file = (Liquid::Template.parse template_file).render site.site_payload.merge!({"link_url" => url, "link_title" => title, "link_description" => description, "link_domain" => domain})
        else
          html = <<-EOS
<div class="jekyll-linkpreview-wrapper">
  <div class="jekyll-linkpreview-wrapper-inner">
    <div class="jekyll-linkpreview-content">
      <div class="jekyll-linkpreview-body">
        <h2 class="jekyll-linkpreview-title no_toc">
          <a href="#{url}" target="_blank">#{title}</a>
        </h2>
        <div class="jekyll-linkpreview-description">#{description}</div>
      </div>
    </div>
    <div class="jekyll-linkpreview-footer">
      <a href="//#{domain}" target="_blank">#{domain}</a>
    </div>
  </div>
</div>
EOS
          html
        end
      end

      private
      def get_linkpreview_og_template()
        File.join Dir.pwd, "_includes", "linkpreview.html"
      end

      private
      def get_linkpreview_nog_template()
        File.join Dir.pwd, "_includes", "linkpreview_nog.html"
      end
    end
  end
end

Liquid::Template.register_tag("linkpreview", Jekyll::Linkpreview::LinkpreviewTag)
