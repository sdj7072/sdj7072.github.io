---
title: DISQUS를 이용한 댓글 기능 설정하기
date: '2020-03-30 00:20'
categories:
  - GitHub Pages
tags:
  - DISQUS
  - GitHub Pages 댓글 설정
toc: true
toc_label: Table of contents
toc_icon: file-alt
toc_sticky: true
---

GitHub Pages를 구축하면서 많은 고민을 하게 되었습니다. 아마 Blog를 운영하시는 다른 분들도 비슷한 고민과 나름의 해결책을 갖고 계시리라 짐작됩니다. 머릿속에 쌓여있던 고민을 정리하니 세 묶음 정도로 구분됩니다.

첫 번째, 어떤 주제와 양질의 Posting으로 Blog를 채울 것인가?  
두 번째, 방문자 유입을 위한 SEO 전략은 어떻게 수립할 것인가?  
세 번째, 어떠한 방식으로 소통할 것인가?

첫 번째 고민을 해결하기 위해 나름의 방향을 잡고 있고... 두 번째 고민을 해결하기 위해 각종 검색 엔진에 Blog를 등록하였습니다. 이제 세 번째 고민을 해결하기 위해 DISQUS를 도입하여 댓글 기능을 활성화 해 봅시다.

---

## 1. DISQUS
[DISQUS](https://disqus.com)는 전세계에서 가장 활성화된 소셜 댓글 플랫폼 서비스 입니다. SNS를 통한 댓글 기능부터 통합 분석 서비스까지 지원하네요. 국내 유사 서비스로는 [LiveRe](https://livere.com)가 있습니다.

![29-02-01]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-02-01.png){: .rcorners .shadow}

### a. Website 등록하기

'GET STARTED' 버튼을 클릭하면 아래와 같은 선택창이 나타납니다. Blog에 적용기위해 'I want to install Disqus on my site'를 선택합니다.

![29-02-02]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-02-02.png){: .rcorners .shadow}

사실상 가장 중요한(?) 화면입니다. 'Website Name'을 입력하면 아래에 unique disqus URL을 표시해줍니다. 이 값을 \_config.yml 파일에 적용하면 됩니다. Category와 Language는 본인 취향(?)에 맞게 선택합니다.

![29-02-03]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-02-03.png){: .rcorners .shadow}

Plan을 선택합니다. 'Basic'을 선택하시면 무난합니다. 무료인 대신 광고가 붙게됩니다.

![29-02-04]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-02-04.png){: .rcorners .shadow}

등록한 Website의 Platform을 선택합니다. Jekyll을 선택하고 넘어갑시다.

![29-02-05]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-02-05.png){: .rcorners .shadow}

Jekyll Platform에서의 설정 방법을 안내해줍니다. Minimal Mistakes에서 이미 기본적인 설정이 되어 있으니 한번 쓱 훓어보고 지나갑시다.

![29-02-06]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-02-06.png){: .rcorners .shadow}

Disqus 세부 설정을 진행합니다. Website Name과 Website URL만 꼼꼼하게 작성하고 나머지는 필요한 경우 입력하면 됩니다.

![29-02-07]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-02-07.png){: .rcorners .shadow}

모든 설정이 완료되었습니다. 이제 GitHub Pages에 간단히 설정만 해주면 댓글 기능이 쉽게 활성화 됩니다.

![29-02-08]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-02-08.png){: .rcorners .shadow}

## 2. GitHub Pages 설정

GitHub Pages 설정 내용은 [Commit ID : 4f66f81](https://github.com/sdj7072/sdj7072.github.io/commit/4f66f81e29b1a1bde83d6e11ed717df092cff077)에서 확인할 수 있습니다.

### a. \_config.yml 설정

comments 항목의 provider와 shortname을 입력합니다. 여기서 shortname은 Website 등록 과정에서 생성된 disqus unique URL 입니다. 그리고 모든 Post에서 댓글 기능이 활성화되도록 defaults 항목의 comments 값을 'true'로 설정합니다.

```yml
# Comments
comments:
  provider: "disqus"
  disqus:
    shortname: "sdj7072-github-io"

# Defaults
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
```

설정이 완료되면 Post 하단에 댓글 기능이 활성화된 것을 확인할 수 있습니다.

![29-02-09]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-02-09.png){: .rcorners .shadow}

### b. Post 댓글 활성화 여부 설정

특정 Post의 댓글 기능을 비활성화 하고싶을 때, 다음과 같이 Post의 Front Matter를 설정합니다. comments 항목을 'false'로 설정하여 댓글 기능을 비활성화 할 수 있습니다.

```yml
---
title: GitHub Pages Navigation 구성하기
date: '2020-03-29 17:29'
comments: false
---
```

## 3. Tip. Local 환경에서 댓글 기능 확인하기

Commit과 Push는 중요합니다. 오남용하면 본인의 개발 이력을 명확하게 관리하기 어렵습니다. Local 환경에서 댓글 기능을 확인하기 위해서 Jekyll 기동 명령을 조금 바꿔 봅니다. 기존에는 아래와 같이 기동했었습니다.

```sh
bundle exec jekyll serve --draft
```

운영(production) 환경에서 Jekyll을 기동해야 댓글 기능을 정상적으로 확인할 수 있습니다. 아래와 같은 명령어로 Jekyll을 기동해 봅시다.

```sh
JEKYLL_ENV=production bundle exec jekyll serve --draft
```
