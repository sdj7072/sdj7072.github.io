---
title: .gitignore File 설정하기
date: '2020-03-10 23:58'
categories:
  - GitHub Pages
tags:
  - .gitignore
---

온갖 File이 GitHub Repository에 올라가는 참사를 방지하고 싶다면...

## 1. Create .gitignore File
GitHub Repository의 Root Path에 .gitignore File을 생성합니다.  
Jekyll과 OS(macOS & Windows)에서 자동 생성되는 Folder 및 File을 GitHub 관리 대상에서 제외 처리하게 됩니다.
```xml
# Jekyll
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata

# Folder view configuration files
.DS_Store
Desktop.ini

# Thumbnail cache files
._*
Thumbs.db
```

![alt]({{ site.url }}{{ site.baseurl }}/assets/images/2020/03/10-02-01.png)

[https://github.com/github/gitignore](https://github.com/github/gitignore
)
