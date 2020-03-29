---
title: GitHub Pages Navigation 구성하기
date: '2020-03-29 17:29'
categories:
  - GitHub Pages
tags:
  - Navigation 구성하기
toc: true
toc_label: Table of contents
toc_icon: file-alt
toc_sticky: true
---

Navigation 구성을 입맛에 맞게 수정해 봅시다.

## 1. AS-IS

 Minimal Mistakes Theme는 'Quick-Start Guide'가 Navigation에 등록되어 있습니다. 방문자가 접근하기 쉽도록 Navigation 구성을 변경해 봅시다.

![29-01-01]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-01-01.png){: .rcorners .shadow}

## 2. TO-BE

TO-BE Navigation 구성 입니다. 'GitHub Pages', 'Categories', 'Archive'로 구성합니다. 주요 변경내용은 [Commit ID : 32cdb59](https://github.com/sdj7072/sdj7072.github.io/commit/32cdb59dc635af9addcad5618438487c37c8ea18)에서 확인할 수 있습니다.
![29-01-02]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-01-02.png){: .rcorners .shadow}

### 1. Directory 구성
Navigation 구성을 위해 수정한 파일 목록 입니다.
```
|-- _data
    +-- navigation.yml
|-- pages
    +-- category-archive.md
    +-- tag-archive.md
    +-- year-archive.md
    +-- category-githubpages-archive.md
|-- _config.yml
```

#### a. category-archive.md

Category 단위로 Post를 구분하여 보여주는 페이지 입니다. category-archive.md File은 minimal-mistakes에서 제공하는 Template를 그대로 가져왔습니다.

```md
---
title: "Posts by Category"
layout: categories
permalink: /categories/
author_profile: true
---
```
![29-01-04]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-01-04.png){: .rcorners .shadow}

#### b. tag-archive.md

Tag 단위로 Post를 구분하여 보여주는 페이지 입니다. tag-archive.md File도 minimal-mistakes에서 제공하는 Template를 그대로 가져왔습니다.

```md
---
title: "Posts by Tag"
permalink: /tags/
layout: tags
author_profile: true
---
```
![29-01-07]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-01-07.png){: .rcorners .shadow}

#### c. year-archive.md

year-archvie.md File은 전체 Post를 시간 단위로 엮어서 보여주는 페이지 입니다.

![29-01-05]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-01-05.png){: .rcorners .shadow}

Navigation에 tag-archive.md 페이지를 연결하지 않았기 때문에 Category와 Tag단위 페이지로 연결할 수 있는 링크를 추가하였습니다. (Navigation의 Categories 연결을 없앨수도 있기 때문에 본 페이지에 링크를 함께 추가하였습니다.)

![29-01-06]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-01-06.png){: .rcorners .shadow}

```md
---
title: "Posts by Year"
permalink: /year-archive/
layout: posts
author_profile: true
---

---
<div style="display: flex">
  <div style="flex: 1;">
    <i class="fas fa-fw fa-th-list" aria-hidden="true"></i> Posts by Categories <a href="/categories">here</a>
  </div>
  <div style="flex: 1; text-align: right;">
    <i class="fas fa-fw fa-tags" aria-hidden="true"></i> Posts by Tags <a href="/tags">here</a>
  </div>
</div>
---
```

#### d. category-githubpages-archive.md

GitHub Pages 관련 Posting만 엮어서 보여주는 페이지 입니다. Minimal Mistakes Theme에서 제공하는 Page도 있으나 적절한 수준에서 Customizing 하였습니다.

![29-01-03]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/29-01-03.png){: .rcorners .shadow}

해당 Page를 변경하실 분은 아래 항목에서 갖고 올 Category 값을 변경하여 사용하시면 됩니다.

```md
for post in site.categories['GitHub Pages']
```
