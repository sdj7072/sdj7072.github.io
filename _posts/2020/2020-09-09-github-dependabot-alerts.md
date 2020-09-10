---
title: Github Dependabot alerts 해결하기
date: '2020-09-09 00:27'
categories:
  - GitHubPages
tags:
  - Github Dependabot alerts
toc: true
toc_label: Table of contents
toc_icon: file-alt
toc_sticky: true
---

Jekyll Theme 중 하나인 'minimal-mistakes'는 매우 대중적이고 활성화된 만큼, 많은 의존성을 갖고 있습니다. Github에서 제공하는 [Dependabot alerts](https://github.com/sdj7072/sdj7072.github.io/network/alerts)에서 제공하는 기능을 통해 보안 취약점이 존재하는 각종 라이브러리의 버전 업데이트를 안내받을 수 있습니다.

## 1. Github Dependabot alerts

![2020090801]({{ site.url }}{{ site.baseurl }}/assets/images/2020/09/2020090801.png){: .rcorners .shadow}

Github에서 Security로 시작하는 메일을 받아서 당황했습니다.(그간 글을 쓰지 않기도 하였고...) 링크를 타고 들어가보니 'tree-kill'과 'kramdown'의 라이브러리 버전 업데이트를 권장하고 있습니다.

![20200908-02]({{ site.url }}{{ site.baseurl }}/assets/images/2020/09/20200908-02.png){: .rcorners .shadow}

kramdown의 경우, 현재 사용중인 버전 '2.1.0'에서 '2.3.0' 혹은 그 이상으로 업데이트가 필요하다는 안내 문구를 확인할 수 있습니다.


## 2. Bundle (Re) install

친절하게도 Gemfile.lock, package-lock.json 두 개 파일의 수정이 필요하다고 알려줍니다. kramdown의 버전 업데이트를 위해 로컬 개발 환경에서 Bundle install을 다시 수행합니다.

```zsh
bundle install
```

![20200908-04]({{ site.url }}{{ site.baseurl }}/assets/images/2020/09/20200908-04.png){: .rcorners .shadow}

Gemfile.lock 파일이 재생성되었습니다. 더불어 package-lock.json 파일도 수정합니다. 해당 변경 내역은 [Commit ID : 165d0ad](https://github.com/sdj7072/sdj7072.github.io/commit/165d0adb212602430b561f2c58ce61a363220aa0)에서 확인할 수 있습니다.


## 3. Result

![20200908-03]({{ site.url }}{{ site.baseurl }}/assets/images/2020/09/20200908-03.png){: .rcorners .shadow}

alert이 모두 해소되어 사라졌습니다~! (관련 메일도 받을 수 있습니다.) 해당 문제는 Github Pages 뿐만 아니라 일반적인 Project에서도 흔히 발생할 수 있으니 Dependabot alerts 메일을 받더라도 당황하지 말고 차근차근 해결하시면 되겠습니다. :)
