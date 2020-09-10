---
title: Link Preview 기능 적용하기 - How to apply link preview in Jekyll based on Open Graph Protocol
date: '2020-09-10 01:14'
categories:
  - GitHubPages
tags:
  - Open Graph Protocol
  - Link Preview
toc: true
toc_label: Table of contents
toc_icon: file-alt
toc_sticky: true
---

Link(URL)를 표현하는 방식이 변화하고 있습니다. 사실은 이미 바뀌었죠. 굳이 비교하자면 CLI에서 GUI 환경으로 진화하고 있다고 봐도 좋을것 같습니다.(단순하게 표현하자면 미리보기?!) 이번 Posting에서는 Plugin을 추가하여 Link Preview 기능을 적용해 봅니다. 짜잔~!

{% linkpreview "https://www.github.com" %}


## 1.jekyll-linkpreview
[jekyll-linkpreview](https://github.com/ysk24ok/jekyll-linkpreview)는 Facebook에서 제정한 Open Graph Protocol을 기반으로 link preview를 생성하는 Jekyll plugin 입니다. URL을 작성하면 아래와 같이 미리보기가 생성됩니다. Open Graph Protocol에 대해서는 마지막에 기술하고, 우선 어떻게 적용 하였는지 살펴봅시다. 전체 변경 내용은 [Commit ID : e33d4fa](https://github.com/sdj7072/sdj7072.github.io/commit/e33d4fac7d41446b4cc7d36965a303e9fbae14e9)를 보시면 됩니다.(플러그인을 수정한 이력이 있어서 보기 좀 지저분하네요.)

### a.폴더 생성
root 경로에 '_cache', '_plugins' 폴더를 생성합니다.
- _cache : Open Graph Protocol을 기반으로 수집한 정보의 Cache 입니다. json 형태로 저장됩니다.
- _plugins : jekyll-linkpreview plugin을 설치하기 위한 폴더입니다.

### b.Library install
* Jekyll plugin 설치에 관한 기본적인 내용은 [Jekyll DOCS](https://jekyllrb-ko.github.io/docs/plugins/installation/)를 참고하세요.

먼저, [jekyll-linkpreview/lib](https://github.com/ysk24ok/jekyll-linkpreview/tree/master/lib)에서 'jekyll-linkpreview.rb' 파일을 받아 '_plugins' 폴더에 넣고, Gemfile을 수정합니다. 기존에 설치한 플러그인이 있다면 gem 'jekyll-linkpreview' 항목을 추가하면 됩니다.

```xml
source "https://rubygems.org"

gemspec

group :jekyll_plugins do
  gem 'jekyll-linkpreview', '~> 0.3.1'

end
```

Gemfile 수정까지 완료되면, 터미널에서 bundle install을 수행합니다.
```sh
bundle install
```

![20200909-01]({{ site.url }}{{ site.baseurl }}/assets/images/2020/09/20200909-01.png){: .rcorners .shadow}

jekyll-linkpreview 0.3.2 버전이 설치된 것을 확인할 수 있습니다.

### c.CSS import
이어서 css 파일을 가져오면 모든 준비가 완료되었습니다.
[jekyll-linkprevew/css](https://github.com/ysk24ok/jekyll-linkpreview/tree/master/assets/css)에서 'linkpreview.css' 파일을 가져옵니다. minimal-mistakes 테마를 기준으로 '/_sass/minimal-mistakes/' 경로 입니다. 이어서 'minimal-mistakes.scss' 파일을 열어 'linkpreview.css' 파일을 import 합니다.

```xml
@import "minimal-mistakes/linkpreview";
```
* 확장자를 css 에서 scss로 바꿔주면 Github Pages Build failed 메시지가 발생하지 않습니다. [Commit ID : 5231a25](https://github.com/sdj7072/sdj7072.github.io/commit/5231a257a181a20f3649fbd5d2d848ab2dc7d781)를 참고하세요.


## 2.Tag 사용 방법

`{`% linkpreview "https://sdj7072.github.io" %`}`

위와 같이 표현하면 됩니다. 중괄호({})와 퍼센트(%) 사이의 공백은 지워주셔야 합니다. Open Graph Protocol을 준수하는 사이트는 깔끔하게 표시됩니다.

{% linkpreview "https://www.naver.com" %}


## 3.Customize
### a..gitignore 수정
_cache 폴더에 생성된 json 파일을 Push/Pull 하지 않도록 .gitignore 파일을 수정합니다.
```
_cache/
```

### b.Custom template
linkpreview를 적용하면 미리보기 위에 url이 표시되는 것을 볼 수 있습니다. 상단의 url을 지우기 위해 Custom template을 적용해 봅시다.

![20200909-02]({{ site.url }}{{ site.baseurl }}/assets/images/2020/09/20200909-02.png){: .rcorners .shadow}

`_includes` 폴더에 `linkpreview.html`과 `linkpreview_nog.html` 파일을 생성하여 디자인을 수정할 수 있습니다.

`linkpreview.html`
```html
<div class="jekyll-linkpreview-wrapper">
  <div class="jekyll-linkpreview-wrapper-inner">
    <div class="jekyll-linkpreview-content">
      <div class="jekyll-linkpreview-image">
        <a href="{{ link_url }}" target="_blank">
          <img src="{{ link_image }}" />
        </a>
      </div>
      <div class="jekyll-linkpreview-body">
        <div class="jekyll-linkpreview-title">
          <a href="#{url}" target="_blank">{{ link_title }}</a>
        </div>
        <div class="jekyll-linkpreview-description">{{ link_description }}</div>
      </div>
    </div>
    <div class="jekyll-linkpreview-footer">
      <a href="#{domain}" target="_blank">{{ link_domain }}</a>
    </div>
  </div>
</div>
```

수정까지 완료되었습니다. 변경 내용은 [Commit ID : c8979c0](https://github.com/sdj7072/sdj7072.github.io/commit/c8979c0e98269ccc65fbbe5586141a1ebaffd6a2)을 참고해주세요.


## 4.Open Graph Protocol
>The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.

[OGP](https://ogp.me)에서 발췌한 소개문입니다.(Oger Gauntlet Power...?!) META Tag 규격도 기술되어 있습니다.

페이스북에서 최초로 정의한 메타 태그 규약입니다. 통일된 규격으로 웹 페이지의 정보를 일목요연하게 볼 수 있으며 이는 일반 사용자와 검색 엔진 모두에게 이롭게 사용될 수 있습니다. twitter와 같이 확장된 META Tag를 사용하는 경우도 있습니다.

[Facebook 공유 디버거](https://developers.facebook.com/tools/debug/)에서 제공하는 도구로 입력하는 url의 Open Graph Protocol을 기반으로 한 미리보기와 META Tag 정보를 확인할 수 있습니다.
