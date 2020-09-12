var store = [{
        "title": "GitHub Pages 만들기",
        "excerpt":"1. Environment &amp; Tools Environment OS : macOS Catalina 10.15.3 Jekyll : jekyll 4.0.0 Bundler : Bundler version 2.1.4 Ruby : ruby 2.6.3p62 Homebrew : Homebrew 2.2.9 Tools GitHub Desktop ETC Theme : Minimal-Mistakes 2. 사전 준비 사항 Jekyll, Bundler 설치가 필요합니다. Homebrew, Ruby 설치에 관해서는 본 Post에 기술하지 않았습니다....","categories": ["GitHubPages"],
        "tags": ["Jekyll","Minimal Mistakes"],
        "url": "/githubpages/create-github-page/",
        "teaser": null
      },{
        "title": ".gitignore File 설정하기",
        "excerpt":"온갖 File이 GitHub Repository에 올라가는 참사를 방지하고 싶다면… 1. Create .gitignore File GitHub Repository의 Root Path에 .gitignore File을 생성합니다. Jekyll과 OS(macOS &amp; Windows)에서 자동 생성되는 Folder 및 File을 GitHub 관리 대상에서 제외 처리하게 됩니다. # Jekyll _site/ .sass-cache/ .jekyll-cache/ .jekyll-metadata # Folder view configuration files .DS_Store Desktop.ini # Thumbnail cache...","categories": ["GitHubPages"],
        "tags": [".gitignore"],
        "url": "/githubpages/gitignore/",
        "teaser": null
      },{
        "title": "Atom으로 Markdown Document 작성하기",
        "excerpt":"방문자가 필요한 정보를 얻기 위해 검색을 하고 글을 읽거나 영상을 보는데 소모하는 시간은, 정보를 가공하여 Post를 만들어내는 작성자의 수고로움에 비하면 찰나지간에 불과합니다. 게다가 대부분의 정보는 이미 누군가 앞서(그리고 더욱 정성스럽게) Posting 했습니다. 그럼에도 불구하고 글을 쓴다는 행위는 중요하고 존중받아야 합니다. 글을 작성하는데 집중하게 해줄 도구도 중요하겠죠. GitHub Page를 편하게 다루기...","categories": ["GitHubPages"],
        "tags": ["ATOM","Markdown"],
        "url": "/githubpages/about-atom/",
        "teaser": null
      },{
        "title": "MacBook RAM Upgrade",
        "excerpt":"철없던 시절에(그럼 지금은 철이 들었나?) 구매한 MacBook(White Unibody Ver.)이 있습니다. 이젠 꽤 오래되어서 사용하기 불편한 감이 있지만 현역으로 더 쓸수 있을까 하는 마음에 RAM Upgrade에 도전해 봅니다. (노인 학대…) 1. MacBook Spec MacBook (13-inch, Late 2009) 열살도 더 드신 White Unibody 버전의 MacBook 입니다. macOS Catalina가 설치된 상태네요.(왜? 어떻게?) 2....","categories": ["Mac"],
        "tags": ["MacBook","Ram Upgrade"],
        "url": "/mac/macbook-ram-upgrade/",
        "teaser": null
      },{
        "title": "Google Search Console과 Analytics 적용하기",
        "excerpt":"GitHub Pages를 구축하고 글을 올리기 시작했다면, 방문자 유입에도 관심을 가져야 합니다. 양질의 글을 작성하는것 만큼이나 인터넷 방랑객이 쉽게 찾아올 수 있도록 길을 닦아놓는 것도 중요하겠죠? 분석 도구까지 도입하여 손님이 찾아올 길을 더욱 넓고 예쁘게 꾸며놓으면 금상첨화구요. :) Google Search Console과 Google Analytics 도구를 연동하여 두 마리 토끼를 잡아봅시다. 1. Google...","categories": ["GitHubPages"],
        "tags": ["Google Marketing Platform","Google Search Console","Google Analytics"],
        "url": "/githubpages/google-search-console-analytics/",
        "teaser": null
      },{
        "title": "sitemap.xml을 생성하고 Google, Naver, Bing, Daum, Zum 검색 엔진 등록하기",
        "excerpt":"지난 Post에서 Google Analytics와 Google Search Console을 통합 했습니다. 이어서 sitemap.xml을 생성하고 포털 사이트의 검색 엔진에 등록하는 방법을 알아봅시다. 1. sitemap.xml 생성 우선, sitemap.xml은 무엇일까요? 검색해보면 ‘SEO’ 개념에서 중요한 요소 중 하나라고 합니다.(그럼 SEO는 또 무엇일까요…?!?!) 쉽게 생각하면, 검색 엔진에서 사이트를 효율적으로 크롤링할 수 있도록 제공하는 표준 문서라고 보아도 될...","categories": ["GitHubPages"],
        "tags": ["sitemap.xml","SEO"],
        "url": "/githubpages/create-sitemap/",
        "teaser": null
      },{
        "title": "GitHub Pages Navigation 구성하기",
        "excerpt":"Navigation 구성을 입맛에 맞게 수정해 봅시다. 1. AS-IS Minimal Mistakes Theme는 ‘Quick-Start Guide’가 Navigation에 등록되어 있습니다. 방문자가 접근하기 쉽도록 Navigation 구성을 변경해 봅시다. 2. TO-BE TO-BE Navigation 구성 입니다. ‘GitHub Pages’, ‘Categories’, ‘Archive’로 구성합니다. 주요 변경내용은 Commit ID : 32cdb59에서 확인할 수 있습니다. 1. Directory 구성 Navigation 구성을 위해 수정한 파일...","categories": ["GitHubPages"],
        "tags": ["Navigation 구성하기"],
        "url": "/githubpages/navigation-customize/",
        "teaser": null
      },{
        "title": "DISQUS를 이용한 댓글 기능 설정하기",
        "excerpt":"GitHub Pages를 구축하면서 많은 고민을 하게 되었습니다. 아마 Blog를 운영하시는 다른 분들도 비슷한 고민과 나름의 해결책을 갖고 계시리라 짐작됩니다. 머릿속에 쌓여있던 고민을 정리하니 세 묶음 정도로 구분됩니다. 첫 번째, 어떤 주제와 양질의 Posting으로 Blog를 채울 것인가? 두 번째, 방문자 유입을 위한 SEO 전략은 어떻게 수립할 것인가? 세 번째, 어떠한 방식으로...","categories": ["GitHubPages"],
        "tags": ["DISQUS","GitHub Pages 댓글 설정"],
        "url": "/githubpages/disqus-reply/",
        "teaser": null
      },{
        "title": "[Review] Tomtoc Sleeve for MacBook Pro (탐탁 맥북 파우치)",
        "excerpt":"MacBook은 고가의 제품입니다. MacBook의 휴대성은 노트북 중에서도 준수한 편이나 이곳 저곳 들고 다니기에 불안한 것도 사실입니다. 게다가 액세서리도 비쌉니다. MacBook을 사용할수록 ‘편하게, 안심할 수 있게.’ 보관하고 휴대할 수 있는 파우치의 필요성을 느끼게 되었습니다. 물론 Apple Store에서 판매하는 가죽 슬리브도 있지만 안정성과 액세서리를 보관할 수 없는 단점 때문에 대체재를 찾게 되었습니다.(가격...","categories": ["Review"],
        "tags": ["Tomtoc","MacBook Pro Sleeve","탐탁 맥북 파우치"],
        "url": "/review/review-tomtoc/",
        "teaser": null
      },{
        "title": "Github Dependabot alerts 해결하기",
        "excerpt":"Jekyll Theme 중 하나인 ‘minimal-mistakes’는 매우 대중적이고 활성화된 만큼, 많은 의존성을 갖고 있습니다. Github에서 제공하는 Dependabot alerts에서 제공하는 기능을 통해 보안 취약점이 존재하는 각종 라이브러리의 버전 업데이트를 안내받을 수 있습니다. 1. Github Dependabot alerts Github에서 Security로 시작하는 메일을 받아서 당황했습니다.(그간 글을 쓰지 않기도 하였고…) 링크를 타고 들어가보니 ‘tree-kill’과 ‘kramdown’의 라이브러리...","categories": ["GitHubPages"],
        "tags": ["Github Dependabot alerts"],
        "url": "/githubpages/github-dependabot-alerts/",
        "teaser": null
      },{
        "title": "Link Preview 기능 적용하기 - How to apply link preview in Jekyll based on Open Graph Protocol",
        "excerpt":"Link(URL)를 표현하는 방식이 변화하고 있습니다. 사실은 이미 바뀌었죠. 굳이 비교하자면 CLI에서 GUI 환경으로 진화하고 있다고 봐도 좋을것 같습니다.(단순하게 표현하자면 미리보기?!) 이번 Posting에서는 Plugin을 추가하여 Link Preview 기능을 적용해 봅니다. 짜잔~! Build software better, together GitHub is where people build software. More than 50 million people use GitHub to discover, fork,...","categories": ["GitHubPages"],
        "tags": ["Open Graph Protocol","Link Preview"],
        "url": "/githubpages/link-preview-lib/",
        "teaser": null
      }]
