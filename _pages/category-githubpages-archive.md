---
title: "GitHub Pages with Jekyll"
layout: archive
permalink: /GitHub Pages/
author_profile: true
---

GitHub Pages를 구축하고 운영하면서 도움이 될 만한 내용을 정리하는 페이지 입니다.

* [취미로 코딩하는 개발자](https://devinlife.com/howto/)님의 Blog에서 많은 도움을 받았습니다. 감사합니다.

## Table of Contents
---
<div class="entries-{{ page.entries_layout }}">

{%- for post in site.categories['GitHubPages'] -%}
  {%- unless post.hidden -%}

  {% if post.id %}
    {% assign title = post.title | markdownify | remove: "<p>" | remove: "</p>" %}
  {% else %}
    {% assign title = post.title %}
  {% endif %}

  <div class="list__item">
    <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
    {{ forloop.rindex }}.
      {% if post.link %}
        <a href="{{ post.link }}">{{ title }}</a> <a href="{{ post.url | relative_url }}" rel="permalink"><i class="fas fa-link" aria-hidden="true" title="permalink"></i><span class="sr-only">Permalink</span></a>
      {% else %}
        <a href="{{ post.url | relative_url }}" rel="permalink">{{ title }}</a>
      {% endif %}

      {% if post.date %}
        <p class="page__meta"><i class="far fa-fw fa-calendar-alt" aria-hidden="true"></i> {{ post.date | date: "%B %d %Y" }}</p>
      {% endif %}
    </article>
  </div>
  {%- endunless -%}
{%- endfor -%}

</div>
---
