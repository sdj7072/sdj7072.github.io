---
title: Google Search Console과 Analytics 적용하기
date: '2020-03-26 01:22'
categories:
  - GitHub Pages
tags:
  - Google Marketing Platform
  - Google Search Console
  - Google Analytics
toc: true
toc_label: Table of contents
toc_icon: file-alt
toc_sticky: true
---

GitHub Pages를 구축하고 글을 올리기 시작했다면, 방문자 유입에도 관심을 가져야 합니다. 양질의 글을 작성하는것 만큼이나 인터넷 방랑객이 쉽게 찾아올 수 있도록 길을 닦아놓는 것도 중요하겠죠? 분석 도구까지 도입하여 손님이 찾아올 길을 더욱 넓고 예쁘게 꾸며놓으면 금상첨화구요. :) Google Search Console과 Google Analytics 도구를 연동하여 두 마리 토끼를 잡아봅시다.

## 1. Google Marketing Platform
### 1. 소개
뜬금없지만, Google Analytics와 Google Search Console의 정보를 찾던 중, [Google Marketing Platform](https://marketingplatform.google.com/intl/ko/about/)에 대해 알게 되었습니다. Google에서 제공하는 여러 Marketing Tool을 통합하여 Platform Service를 구축했습니다. 소규모 비지니스와 기업의 통합 광고 및 분석을 위한 도구로 소개되어 있지만 개인도 충분히(과할 정도로) 사용할 수 있습니다. GitHub Pages 보다 큰 Tool 처럼 보이긴 합니다만...

[Google 애널리틱스 고객센터](https://support.google.com/analytics/answer/9031231?hl=ko)에서 다음과 같이 안내하고 있습니다.
> "Google Marketing Platform은 DoubleClick과 Google 애널리틱스 360 도구 모음 간에 구축된 기존 통합을 기반으로 마케팅팀을 위해 보다 강력한 공동 작업을 지원하는 통합 광고 및 분석 플랫폼입니다."

![25-01-01]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-01.png){: .rcorners .shadow}

### 2. Analytics + Search Console 통합
'통합 센터'를 선택하면 '통합 추가' 화면이 뜹니다.

![25-01-02]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-02.png){: .rcorners .shadow}

'애널리틱스 + Search Console' 항목을 선택합니다. 블로그가 어느정도 궤도에 오르면 Google AdSense도 추가 연동 해보겠습니다.

![25-01-03]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-03.png){: .rcorners .shadow}

애널리틱스 계정이 필요하다는 안내창이 뜹니다. '애널리틱스 계정 만들기'를 클릭하면 Google Analytics 화면으로 전환됩니다.

![25-01-04]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-04.png){: .rcorners .shadow}

### 3. 통합 결과

결과부터 보여드리는 격이지만, 아래 Guide를 진행하여 통합이 정상 완료되면 '애널리틱스 + Search Console' 통합 내역이 표시됩니다.

![25-01-22]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-22.png){: .rcorners .shadow}

애널리틱스를 기준으로 Search Console 항목이 한 건 통합되어 있음을 확인하였습니다.(AdSense도 연동해서 치킨을 영접할 수 있길 기원하며...)

![25-01-28]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-28.png){: .rcorners .shadow}

## 2. Google Analytics
### 1. 소개
[Google Analytics](https://marketingplatform.google.com/intl/ko/about/analytics/)는 사용자 분석으로 사이트 및 앱의 최적화를 이끌어낼 수 있는 도구입니다.
>"고객에 대한 이해도를 높이세요. Google 애널리틱스를 사용하면 비즈니스 데이터 분석에 필요한 무료 도구를 한곳에서 이용할 수 있습니다."

![25-01-26]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-26.png){: .rcorners .shadow}

### 2. 신규 계정 생성
'+ 계정 만들기' 버튼을 클릭하여 신규 계정을 생성합니다.

![25-01-05]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-05.png){: .rcorners .shadow}   

계정 이름을 입력합니다. 간단하게 'GitHub'... (계정 이름은 언제든지 변경할 수 있습니다.)

![25-01-06]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-06.png){: .rcorners .shadow}

구축하는 서비스에 따라 측정 대상을 선택하면 됩니다. GitHub Pages Monitoring을 위해서 '웹'을 선택합니다.

![25-01-07]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-07.png){: .rcorners .shadow}

속성을 작성합니다. GitHub Pages는 웹사이트 URL을 'https'로 선택해야 합니다.

![25-01-08]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-08.png){: .rcorners .shadow}

### 3. 추적 ID(Tracking ID) 등록
'UA-'로 시작하는 추적 ID가 생성되었습니다. 해당값을 \_config.yml 파일에 등록하면 GitHub Pages와 Google Analytics가 연동됩니다. [Commit ID : 80f53bd](https://github.com/sdj7072/sdj7072.github.io/commit/80f53bd4b8a6cdf39410900158aa45eeec33a9ac)으로 추적 ID를 등록했습니다. 참고해보세요. (이런거 해보고 싶었어... >\_<)

```yml
# Analytics
analytics:
  provider:  "google-gtag" # false (default), "google", "google-universal", "custom"
  google:
    tracking_id:  "UA-161685945-1"
    anonymize_ip:  # true, false (default)
```

![25-01-11]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-11.png){: .rcorners .shadow}

설정을 완료하면 Dashboard 화면과 함께 Google Search Console을 연동 권장 알림을 확인할 수 있습니다.

![25-01-09]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-09.png){: .rcorners .shadow}

## 3. Google Search Console
### 1. 소개

Google Analytics가 '사이트 및 앱의 최적화'에 초점을 맞추고 있다면, Google Search Console은 '유입 최적화'를 목적으로 하는 도구라고 생각하면 될 것 같습니다... 라고 하면 될까요?

> "Search Console 도구와 보고서를 사용하면 사이트의 검색 트래픽 및 실적을 측정하고, 문제를 해결하며, Google 검색결과에서 사이트가 돋보이게 할 수 있습니다."

![25-01-27]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-27.png){: .rcorners .shadow}

### 2. Analytics 통합

알림창에서 '제품연결구성' 버튼을 클릭합니다.

![25-01-12]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-12.png){: .rcorners .shadow}

애널리틱스의 '속성' 탭에서 'Search Console' 항목을 선택합니다.

![25-01-10]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-10.png){: .rcorners .shadow}

설정 화면에서 '추가'를 선택하여 앞서 생성한 애널리틱스 정보를 연결합니다.

![25-01-13]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-13.png){: .rcorners .shadow}

![25-01-14]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-14.png){: .rcorners .shadow}

Analytics와 Search Console의 통합은 완료되었으나 아직 Search Console에 사이트가 등록되지 않은 상태입니다.

![25-01-15]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-15.png){: .rcorners .shadow}

### 3. 사이트 등록

Search Console에 사이트를 등록하여 Google 검색에 노출될 수 있도록 합시다.

![25-01-16]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-16.png){: .rcorners .shadow}

URL을 입력합니다. GitHub Pages에서 제공하는 방식은 'URL 접두어' 입니다. Domain을 구매하여 사용하시는 경우 '도메인' 항목에 URL을 입력하시면 됩니다.

![25-01-17]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-17.png){: .rcorners .shadow}

Google에서 권장하는 방식으로 소유권 확인을 진행합니다. html 파일을 다운로드하여 root 경로에 업로드 합니다. [Commit ID : a649645](https://github.com/sdj7072/sdj7072.github.io/commit/a6496451a35f455aa450c6c9d7c44ebd3c142bea)를 참고하시면 됩니다.

![25-01-18]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-18.png){: .rcorners .shadow}

소유권 확인이 정상 완료되면 다음과 같이 알림창이 나타나고, Search Console에 사이트가 등록된 것을 확인할 수 있습니다.

![25-01-19]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-19.png){: .rcorners .shadow}

![25-01-20]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-20.png){: .rcorners .shadow}

### 4. URL 검사

Search Console 상단의 검색창에 GitHub Pages URL을 입력하고 기다리면 URL 등록 여부를 확인할 수 있습니다.

![25-01-23]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-23.png){: .rcorners .shadow}

![25-01-24]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-24.png){: .rcorners .shadow}

### 5. Analytics + Search Console 통합 결과

애널리틱스의 '획득' 항목에서 Search Console의 Dashboard까지 확인할 수 있습니다. :)

![25-01-25]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/25-01-25.png){: .rcorners .shadow}
