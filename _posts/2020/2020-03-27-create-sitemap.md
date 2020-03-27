---
title: 'Google, Naver, Bing, Daum, Zum 검색 엔진 등록하기'
date: '2020-03-27 16:24'
categories:
  - GitHub Pages
tags:
  - sitemap.xml
  - SEO
toc: true
toc_label: Table of contents
toc_icon: file-alt
toc_sticky: true
---

지난 Post에서 Google Analytics와 Google Search Console을 통합 했습니다. 이어서 sitemap.xml을 생성하고 포털 사이트의 검색 엔진에 등록하는 방법을 알아봅시다.

## 1. sitemap.xml 생성

우선, sitemap.xml은 무엇일까요? 검색해보면 'SEO' 개념에서  중요한 요소 중 하나라고 합니다.(그럼 SEO는 또 무엇일까요...?!?!) 쉽게 생각하면, 검색 엔진에서 사이트를 효율적으로 크롤링할 수 있도록 제공하는 표준 문서라고 보아도 될 것 같습니다.

[sitemaps.org](https://www.sitemaps.org)에서는 다음과 같이 설명하고 있습니다.
> "Sitemap은 웹마스터가 크롤링에 사용할 수 있는 사이트의 페이지에 대한 정보를 검색 엔진에 알리는 손쉬운 방법입니다. Sitemap의 가장 간단한 형식은 검색 엔진에서 사이트를 보다 지능적으로 크롤링할 수 있도록 각 URL에 대한 추가 메타데이터(마지막 업데이트된 날짜, 변경 빈도, 사이트의 다른 URL에 상대적인 중요도)와 함께 사이트에 대한 URL을 나열하는 XML 파일입니다."

### 1. (권장) jekyll plugin
보고계신 GitHub Pages에 적용된 [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) 테마는 'jekyll-sitemap'이라는 기본 plugin을 import하여 sitemap.xml Generator 기능을 제공하고 있습니다. \_config.xml 파일을 열어보면 아래와 같이 확인할 수 있습니다.

```yml
# Plugins (previously gems:)
plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jekyll-include-cache
```

Terminal에서 아래 명령어로 jekyll server를 기동하면 sitemap.xml을 생성합니다.

```sh
jekyll serve --draft
```

Local 환경에서 접속해보면 sitemap.xml이 예쁘게 생성된 것을 확인할 수 있습니다. 실제 GitHub Pages에서도 동일하게 확인 가능합니다. [이렇게 말이죠.](https://sdj7072.github.io/sitemap.xml)

```html
http://localhost:4000/sitemap.xml
```
![26-01-01]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-01.png){: .rcorners .shadow}

### 2. sitemap.xml Generator

Plugin 적용이 귀찮거나 원하는 양식이 있는 경우(jekyll-sitemap plugin의 customizing이 가능할까요...?), sitemap.xml을 생성해주는 사이트를 이용할 수 있습니다. [xml-sitemaps](https://www.xml-sitemaps.com)를 이용해서 sitemap.xml을 생성해 봅시다. 이 외에도 여러 사이트가 있으며 무료로 크롤링 가능한 url 수, 생성 양식 등의 차이가 있습니다.

생성 과정은 아주 간단합니다. site url만 입력하면 완료~!

![26-01-02]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-02.png){: .rcorners .shadow}

sitemap.xml 생성 결과를 쉽게 알 수 있습니다.

![26-01-03]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-03.png){: .rcorners .shadow}

다운로드 받은 sitemap.xml 파일을 GitHub에 Commit 하면 완료됩니다.

![26-01-04]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-04.png){: .rcorners .shadow}

sitemap.xml을 수동으로 생성하는 방법도 어렵진 않지만 주기적으로 직접 갱신을 해야하는 번거로움이 있습니다.

## 2. 검색 엔진 등록

sitemap.xml을 생성했으면 포털 사이트의 검색 엔진에 등록 요청을 해봅니다.

### 1. Google Search Console

GitHub Pages를 시작한다면 누구라도 구글 검색 등록부터 시작하지 않을까요? [Google Search Console](https://search.google.com/search-console/about)에 sitemap.xml을 등록합시다.

지난 Post에서 Google Analytics와 Google Search Console을 통합하였습니다. '색인 > sitemaps' 메뉴로 진입하여 sitemap.xml 파일 경로를 등록합니다.

![26-01-05]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-05.png){: .rcorners .shadow}

등록이 완료되면 아래와 같이 결과가 나타나고, 앞으로는 Google Search Console이 주기적으로 sitemap.xml을 읽어와 색인을 갱신합니다.

![26-01-06]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-06.png){: .rcorners .shadow}

### 2. Naver

네이버는 [Search Advisor](https://searchadvisor.naver.com) 서비스를 제공하고 있습니다. 깔끔한 구성이 돋보이네요.

#### a. 검색 등록

![26-01-07]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-07.png){: .rcorners .shadow}

네이버 아이디로 로그인한 후, 사이트 등록을 진행합니다. site url을 입력하면...

![26-01-08]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-08.png){: .rcorners .shadow}

Google Search Console처럼 사이트 소유권 확인을 위한 html 페이지 업로드가 필요합니다. GitHub에 html파일을 push하고 소유권 확인 버튼을 클릭하면 사이트 등록 절차가 완료됩니다.

![26-01-09]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-09.png){: .rcorners .shadow}

#### b. sitemap.xml 등록

사이트 등록이 완료되면 관리 화면으로 이동합니다. '요청 > 사이트맵 제출' 메뉴에서 sitemap.xml 파일의 경로를 입력하면 됩니다.

![26-01-10]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-10.png){: .rcorners .shadow}

### 3. Bing

[Bing 웹마스터 도구](https://www.bing.com/toolbox/webmaster?mkt=ko-kr) 서비스를 이용하여 사이트 등록을 진행합니다. 필요한 내용을 직접 입력하여 사이트 등록을 진행하거나 Google Search Console을 정보를 가져와서 적용할 수도 있습니다.

![26-01-11]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-11.png){: .rcorners .shadow}

#### a. 직접 등록

직접 등록하는 방법은 Google, Naver와 동일합니다. 먼저, site url을 입력합니다.

![26-01-12]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-12.png){: .rcorners .shadow}

사이트의 정보를 입력합니다. 사이트 등록 시점에 sitemap.xml 정보를 함께 기재하는것이 Google, Naver와의 차이라고 할 수 있겠네요.

![26-01-13]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-13.png){: .rcorners .shadow}

입력이 완료되면 소유권 확인을 위한 xml 파일 업로드를 요구합니다. xml 파일 업로드 후, 소유권 확인까지 처리되면 등록 절차가 완료됩니다.

![26-01-14]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-14.png){: .rcorners .shadow}

#### b. Google Search Console 연동

Google Search Console 연동은 매우 간편합니다. 우측의 '가져오기' 버튼을 클릭하고 Google 계정과 연동만 하면 모든 절차가 완료됩니다. 당연한 얘기지만 Google Search Console에서 사이트 등록 및 sitemap.xml 등록을 먼저 완료해야 합니다.

![26-01-12]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-12.png){: .rcorners .shadow}

![26-01-15]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-15.png){: .rcorners .shadow}

### 4. Daum

[Daum 검색 등록](https://register.search.daum.net/index.daum) 서비스는... 여튼 진행해보도록 합시다.

'신규등록하기' 버튼을 선택합니다.

![26-01-16]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-16.png){: .rcorners .shadow}

'블로그 등록'을 선택하고 site url을 입력합니다. 시작이 'http://'로 고정되어 있어 'https://'를 입력할 수 없습니다.(?!)

![26-01-17]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-17.png){: .rcorners .shadow}

검색 등록 **신청** 이 완료되었습니다...만 처리 결과는 따로 알려주지 않는다고 합니다...만 등록 조회 기능을 이용하여 등록 여부를 확인할 수 있습니다.

![26-01-18]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-18.png){: .rcorners .shadow}

Posting 시점에는 미등록 사이트로 조회됩니다. 검색 등록에 시일이 소요된다고 안내되어 있으니 나중에 기억이 나면 다시 조회해봐야 겠습니다.

![26-01-21]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-21.png){: .rcorners .shadow}

### 5. Zum

[Zum 검색등록](http://help.zum.com/submit)은 Daum과 유사합니다. 등록 결과를 수신받을 이메일 주소와 간단한 사이트 정보를 입력하면 등록 신청이 완료됩니다.

![26-01-19]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-19.png){: .rcorners .shadow}

![26-01-20]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/26-01-20.png){: .rcorners .shadow}
