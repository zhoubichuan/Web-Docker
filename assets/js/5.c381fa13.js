(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{170:function(e,s,t){"use strict";t.r(s);var n=t(0),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p",[e._v("既然 Docker 是一款实用软件，我们就不得不先从它的安装说起，只有让 Docker 运行在我们的计算机上，才能更方便我们对 Docker 相关知识和使用方式的学习。得益于与商业性的优雅结合，Docker 背后拥有大量的优秀开发者为其提供技术支持，而这个优势所造就的结果之一，就是 Docker 拥有丰富且完善的安装体系，我们可以很轻松的通过多种方式安装和运行 Docker。")]),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("由于 Docker 容器实现本身就采用了 Linux 内核中很多的特性，所以它自然与 Linux 系统亲密性很高，所以我们可以很轻松的将 Docker Engine 安装在 Linux 系统中。")]),e._v(" "),t("p",[e._v("不过，在安装之前，我还得不厌其烦的啰嗦一些基本概念，让大家在安装 Docker 时能够更好的进行选择。掌握这些概念，能够帮助大家理解一些安装流程中操作的目的，不至于总是一味的进行“下一步”式安装。")]),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("在安装 Docker 之前，我们先来了解一下 Docker 的版本定义，这有利于我们在之后的开发中选择和使用合适的 Docker 版本。")]),e._v(" "),t("p",[e._v("对于 Docker Engine 来说，其主要分为两个系列：")]),e._v(" "),e._m(3),e._v(" "),t("p",[e._v("社区版 ( Docker Engine CE ) 主要提供了 Docker 中的容器管理等基础功能，主要针对开发者和小型团队进行开发和试验。而企业版 ( Docker Engine EE ) 则在社区版的基础上增加了诸如容器管理、镜像管理、插件、安全等额外服务与功能，为容器的稳定运行提供了支持，适合于中大型项目的线上运行。")]),e._v(" "),e._m(4),e._v(" "),t("p",[e._v("社区版和企业版的另一区别就是免费与收费了。对于我们开发者来说，社区版已经提供了 Docker 所有核心的功能，足够满足我们在开发、测试中的需求，所以我们直接选择使用社区版进行开发即可。在这本小册中，所有的内容也是围绕着社区版的 Docker Engine 展开的。")]),e._v(" "),t("p",[e._v("从另外一个角度，Docker Engine 的迭代版本又会分为稳定版 ( Stable release ) 和预览版 ( Edge release )。不论是稳定版还是预览版，它们都会以发布时的年月来命名版本号，例如如 17 年 3 月的版本，版本号就是 17.03。")]),e._v(" "),e._m(5),e._v(" "),t("p",[e._v("Docker Engine 的稳定版固定为每三个月更新一次，而预览版则每月都会更新。在预览版中可以及时掌握到最新的功能特性，不过这对于我们仅是使用 Docker 的开发者来说，意义并不是特别重大的，所以我还是更推荐安装更有保障的稳定版本。")]),e._v(" "),t("p",[e._v("在主要版本之外，Docker 官方也以解决 Bug 为主要目的，不定期发布次要版本。次要版本的版本号由主要版本和发布序号组成，如：17.03.2 就是对 17.03 版本的第二次修正。")]),e._v(" "),e._m(6),e._v(" "),t("p",[e._v("由于 Docker 的容器隔离依赖于 Linux 内核中的相关支持，所以使用 Docker 首先需要确保安装机器的 Linux kernel 中包含 Docker 所需要使用的特性。以目前 Docker 官方主要维护的版本为例，我们需要使用基于 Linux kernel 3.10 以上版本的 Linux 系统来安装 Docker。")]),e._v(" "),t("p",[e._v("也许 Linux kernel 的版本还不够直观，下面的表格就直接展示了 Docker 对主流几款 Linux 系统版本的要求。")]),e._v(" "),t("p",[e._v("操作系统")]),e._v(" "),t("p",[e._v("支持的系统版本")]),e._v(" "),t("p",[e._v("CentOS")]),e._v(" "),t("p",[e._v("CentOS 7")]),e._v(" "),t("p",[e._v("Debian")]),e._v(" "),e._m(7),e._v(" "),t("p",[e._v("Fedora")]),e._v(" "),e._m(8),e._v(" "),t("p",[e._v("Ubuntu")]),e._v(" "),e._m(9),e._v(" "),t("p",[e._v("当然，在较低版本的 Linux 系统中也能安装 Docker，不过只能是版本较低的 Docker，其功能存在一些缺失，或者与最新版本有所区别。在这本小册里，我们主要以较新版本的 Docker 功能和操作作为介绍，所以如果条件允许，建议将系统升级到支持最新版本 Docker 的系统版本。")]),e._v(" "),e._m(10),e._v(" "),t("p",[e._v("因为 Docker 本身就基于 Linux 的核心能力，同时目前主流的 Linux 系统中所拥有的软件包管理程序，已经可以很轻松的帮助我们处理各种依赖问题，所以在 Linux 中安装 Docker 并非什么难事。")]),e._v(" "),t("p",[e._v("更多的细节就不多说了，Docker 已经为我们准备了好了各系统的安装包，毕竟安装 Docker 并不是我们所要掌握的重点，所以这里我就直接给出安装的命令了。")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),e._m(17),e._v(" "),e._m(18),e._m(19),e._v(" "),t("p",[e._v("在安装 Docker 完成之后，我们需要先启动 docker daemon 使其能够为我们提供 Docker 服务，这样我们才能正常使用 Docker。")]),e._v(" "),e._m(20),e._v(" "),e._m(21),t("p",[e._v("当然，为了实现 Docker 服务开机自启动，我们还可以运行这个命令：")]),e._v(" "),e._m(22),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),t("p",[e._v("这个命令能够显示 Docker C/S 结构中的服务端 ( docker daemon ) 和客户端 ( docker CLI ) 相关的版本信息。在默认情况下，docker CLI 连接的是本机运行的 docker daemon ，由于 docker daemon 和 docker CLI 通过 RESTful 接口进行了解耦，所以我们也能修改配置用于操作其他机器上运行的 docker daemon 。")]),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._m(29),e._v(" "),e._m(30),e._v(" "),t("p",[e._v("在很多编程语言中，为了更好的向大家提供依赖包的管理，通常都会有一些组织研发相应的包管理工具，例如 Java 的 Maven，PHP 的 Composer，Node.js 的 NPM 等等。而这些管理工具背后，也对应着一个默认的依赖包仓库。")]),e._v(" "),t("p",[e._v("由于众所周知的原因，我们直接连接这些位于国外服务器上的仓库去获取依赖包速度是非常慢的，这时候我们通常会采用国内一些组织或开发者贡献的国内镜像仓库 ( 注意，这里的“镜像”是指复制于国外源的意思，而不是 Docker 里的镜像 )。")]),e._v(" "),t("p",[e._v("在 Docker 中也有一个由官方提供的中央镜像仓库，不过，它与之前我们所说的国外依赖包仓库一样，除了慢的可怜以外，还经常莫名其妙的完全无法访问。")]),e._v(" "),t("p",[e._v("为了解决这个问题，我们最佳的方式依旧是在国内找一个镜像仓库的镜像源进行替换。很感谢 DaoCloud、阿里云等企业的支持，在国内我们可以找到许多镜像源。这里我们给出一个由 Docker 官方提供的国内镜像源：")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://registry.docker-cn.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://registry.docker-cn.com"),t("OutboundLink")],1)])]),e._v(" "),e._m(31),e._v(" "),t("p",[e._v("那么有了地址，我们要如何将其配置到 Docker 中呢？")]),e._v(" "),e._m(32),e._v(" "),e._m(33),t("p",[e._v("在修改之后，别忘了重新启动 docker daemon 来让配置生效哟：")]),e._v(" "),e._m(34),e._m(35),e._v(" "),e._m(36)])}),[function(){var e=this.$createElement,s=this._self._c||e;return s("h1",{attrs:{id:"搭建-docker-运行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建-docker-运行环境"}},[this._v("#")]),this._v(" 搭建 Docker 运行环境")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"安装前的准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装前的准备"}},[this._v("#")]),this._v(" 安装前的准备")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"docker-engine-的版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-engine-的版本"}},[this._v("#")]),this._v(" Docker Engine 的版本")])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[this._v("社区版 ( CE, Community Edition )")]),this._v(" "),s("li",[this._v("企业版 ( EE, Enterprise Edition )")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/29/16586347c98cc591?w=2022&h=276&f=png&s=40439",alt:""}})])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/29/165863f7df36e81f?w=914&h=200&f=png&s=43434",alt:""}})])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"docker-的环境依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-的环境依赖"}},[this._v("#")]),this._v(" Docker 的环境依赖")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("Debian Wheezy 7.7 (LTS)"),s("br"),this._v("\nDebian Jessie 8 (LTS)"),s("br"),this._v("\nDebian Stretch 9"),s("br"),this._v("\nDebian Buster 10")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("Fedora 26"),s("br"),this._v("\nFedora 27")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("Ubuntu Trusty 14.04 (LTS)"),s("br"),this._v("\nUbuntu Xenial 16.04 (LTS)"),s("br"),this._v("\nUbuntu Artful 17.10")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"在-linux-系统中安装-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-linux-系统中安装-docker"}},[this._v("#")]),this._v(" 在 Linux 系统中安装 Docker")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"centos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[this._v("#")]),this._v(" CentOS")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo yum install yum-utils device-mapper-persistent-data lvm2\n$\n$ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n$ sudo yum install docker-ce\n$\n$ sudo systemctl enable docker\n$ sudo systemctl start docker\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"debian"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debian"}},[this._v("#")]),this._v(" Debian")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common\n$\n$ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -\n$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"\n$ sudo apt-get update\n$ sudo apt-get install docker-ce\n$\n$ sudo systemctl enable docker\n$ sudo systemctl start docker\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"fedora"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fedora"}},[this._v("#")]),this._v(" Fedora")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo dnf -y install dnf-plugins-core\n$\n$ sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo\n$ sudo dnf install docker-ce\n$\n$ sudo systemctl enable docker\n$ sudo systemctl start docker\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[this._v("#")]),this._v(" Ubuntu")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common\n$\n$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\n$ sudo apt-get update\n$ sudo apt-get install docker-ce\n$\n$ sudo systemctl enable docker\n$ sudo systemctl start docker\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"上手使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上手使用"}},[this._v("#")]),this._v(" 上手使用")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("在我们通过软件包的形式安装 Docker Engine 时，安装包已经为我们在 Linux 系统中注册了一个 Docker 服务，所以我们不需要直接启动 docker daemon 对应的 "),s("code",[this._v("dockerd")]),this._v(" 这个程序，而是直接启动 Docker 服务即可。启动的 Docker 服务的命令其实我已经包含在了前面谈到的安装命令中，也就是：")])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ sudo systemctl start docker\n\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ sudo systemctl enable docker\n\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"docker-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-version"}},[this._v("#")]),this._v(" docker version")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("在 Docker 服务启动之后，我们先来尝试一个最简单的查看 Docker 版本的命令："),s("code",[this._v("docker version")]),this._v("。")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo docker version\nClient:\n Version:           18.06.1-ce\n API version:       1.38\n Go version:        go1.10.3\n Git commit:        e68fc7a\n Built:             Tue Aug 21 17:23:03 2018\n OS/Arch:           linux/amd64\n Experimental:      false\n\nServer:\n Engine:\n  Version:          18.06.1-ce\n  API version:      1.38 (minimum version 1.12)\n  Go version:       go1.10.3\n  Git commit:       e68fc7a\n  Built:            Tue Aug 21 17:25:29 2018\n  OS/Arch:          linux/amd64\n  Experimental:     false\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"docker-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-info"}},[this._v("#")]),this._v(" docker info")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("如果想要了解 Docker Engine 更多相关的信息，我们还可以通过 "),s("code",[this._v("docker info")]),this._v(" 这个命令。")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo docker info\nContainers: 0\n Running: 0\n Paused: 0\n Stopped: 0\nImages: 0\nServer Version: 18.06.0-ce\nStorage Driver: overlay2\n Backing Filesystem: extfs\n Supports d_type: true\n Native Overlay Diff: true\nLogging Driver: json-file\nCgroup Driver: cgroupfs\n## ......\nLive Restore Enabled: false\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("在 "),s("code",[this._v("docker info")]),this._v(" 这条命令的结果中，我们可以看到正在运行的 Docker Engine 实例中运行的容器数量，存储的引擎等等信息。由于命令结果比较多，这里我省略了大部分内容，大家可以自己操作来尝试获得完整的信息。在之后的章节里，较多结果的命令我也会省去一些与讲解内容无关的部分，节约大家阅读的时间并强化重点。")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",{attrs:{id:"配置国内镜像源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置国内镜像源"}},[this._v("#")]),this._v(" 配置国内镜像源")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[s("em",[this._v("( 注：部分读者反映配置了这个镜像源无效，大家需要注意此地址的协议是 https，不要搞错哟 )")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("在 Linux 环境下，我们可以通过修改 "),s("code",[this._v("/etc/docker/daemon.json")]),this._v(" ( 如果文件不存在，你可以直接创建它 ) 这个 Docker 服务的配置文件达到效果。")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "registry-mirrors": [\n        "https://registry.docker-cn.com"\n    ]\n}\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ sudo systemctl restart docker\n\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("要验证我们配置的镜像源是否生效，我们可以通过 "),s("code",[this._v("docker info")]),this._v(" 来查阅当前注册的镜像源列表。")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo docker info\n## ......\nRegistry Mirrors:\n https://registry.docker-cn.com/\n## ......\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])])}],!1,null,null,null);s.default=r.exports}}]);