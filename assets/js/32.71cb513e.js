(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{197:function(e,t,_){"use strict";_.r(t);var r=_(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"content"},[e._m(0),e._v(" "),_("p",[e._v("自己编写 Dockerfile 能够很好的实现我们想要的程序运行环境，不过如果装有我们想要环境的镜像已经由热心的开发者构建好并共享在 Docker Hub 上，直接使用它们就会远比自己编写 Dockerfile 并进行构建要来的简单的多了。事实上，在开发过程中我们用到的镜像大部分还是直接采用 Docker Hub 中已经存在的镜像的，即使自己编写 Dockerfile，也只是对已有镜像进行简单的改动，很少会从零开始搭建镜像。在这一节中，我们要来看看如何更好地使用 Docker Hub 上由其他开发者共享的镜像。")]),e._v(" "),e._m(1),e._v(" "),_("p",[e._v("由于 Docker 的容器设计是程序即容器的，所以组成我们服务系统的多个程序一般会搭建在多个容器里，互相之间协作提供服务。例如一套最简单的 Web 服务，我们可能会需要 Java 容器来运行基于 Spring Boot 的程序，需要 MySQL 容器来提供数据库支持，需要 Redis 容器来作为高速 KV 存储等等。装有这些程序的镜像我们都可以很容易的在 Docker Hub 上找到并直接使用，但在我们使用前，光选择镜像还是不够的，我们还得根据需要选择对应程序版本的镜像。")]),e._v(" "),_("p",[e._v("虽然我们常把软件的版本放在 Tag 里作为镜像名的一部分，但对于一些复杂的应用，除了版本外，还存在很多的变量，镜像的维护者们也喜欢将这些变量一同组合到镜像的 Tag 里，所以我们在使用镜像前，一定要先了解不同 Tag 对应的不同内容。")]),e._v(" "),_("p",[e._v("这里我们来看个例子，下面是由 Docker 官方提供的 OpenJDK 镜像的说明页面。")]),e._v(" "),e._m(2),e._v(" "),_("p",[e._v("通常来说，镜像的维护者会在镜像介绍中展示出镜像所有的 Tag，如果没有，我们也能够从页面上的 Tags 导航里进入到镜像标签列表页面。")]),e._v(" "),_("p",[e._v("在 OpenJDK 镜像的 Tag 列表里，我们可以看到同样版本号的镜像就存在多种标签。在这些不同的标签上，除了定义 OpenJDK 的版本，还有操作系统，软件提供者等信息。")]),e._v(" "),_("p",[e._v("镜像维护者为我们提供这么多的标签进行选择，其实方便了我们在不同场景下选择不同环境实现细节时，都能直接用到这个镜像，而不需要再单独编写 Dockerfile 并构建。")]),e._v(" "),_("p",[e._v("但是换句话说，正是有这么多不同标签的镜像存在，所以我们在选择的时候，更要仔细认真，找到我们想要的那个镜像。")]),e._v(" "),e._m(3),e._v(" "),_("p",[e._v("如果大家多接触几个镜像，就会发现带有 Alpine 的版本是许多镜像中都常见的标签。带有 Alpine 标签的镜像到底是什么样的存在呢？它与相同软件不同标签的镜像又有什么样的区别呢？")]),e._v(" "),_("p",[e._v("镜像标签中的 Alpine 其实指的是这个镜像内的文件系统内容，是基于 Alpine Linux 这个操作系统的。Alpine Linux 是一个相当精简的操作系统，而基于它的 Docker 镜像可以仅有数 MB 的尺寸。如果软件基于这样的系统镜像之上构建而得，可以想象新的镜像也是十分小巧的。")]),e._v(" "),_("p",[e._v("在 Docker 里，Alpine 系统的镜像到底有多小，我们不妨来与其他系统镜像做一个比较。")]),e._v(" "),_("p",[e._v("操作系统镜像")]),e._v(" "),_("p",[e._v("占用空间")]),e._v(" "),_("p",[e._v("alpine:latest")]),e._v(" "),_("p",[e._v("4.4 MB")]),e._v(" "),_("p",[e._v("ubuntu:latest")]),e._v(" "),_("p",[e._v("84.1 MB")]),e._v(" "),_("p",[e._v("debian:latest")]),e._v(" "),_("p",[e._v("101 MB")]),e._v(" "),_("p",[e._v("centos:latest")]),e._v(" "),_("p",[e._v("200 MB")]),e._v(" "),_("p",[e._v("可以看到，Alpine 系统镜像的尺寸要远小于其他常见的系统镜像。让我们再来比较同一个软件在基于普通系统的镜像和基于 Alpine 系统的镜像后尺寸上的区别。")]),e._v(" "),_("p",[e._v("镜像标签")]),e._v(" "),_("p",[e._v("占用空间")]),e._v(" "),_("p",[e._v("python:3.6-alpine")]),e._v(" "),_("p",[e._v("74.2 MB")]),e._v(" "),_("p",[e._v("python:3.6-jessie")]),e._v(" "),_("p",[e._v("697 MB")]),e._v(" "),_("p",[e._v("由于基于 Alpine 系统建立的软件镜像远远小于基于其他系统的软件镜像，它在网络传输上的优势尤为明显。如果我们选择这类的镜像，不但可以节约网络传输的时间，也能减少镜像对硬盘空间的占用。")]),e._v(" "),_("p",[e._v("当然，有优点也会有缺点，Alpine 镜像的缺点就在于它实在过于精简，以至于麻雀虽小，也无法做到五脏俱全了。在 Alpine 中缺少很多常见的工具和类库，以至于如果我们想基于软件 Alpine 标签的镜像进行二次构建，那搭建的过程会相当烦琐。所以如果你想要对软件镜像进行改造，并基于其构建新的镜像，那么 Alpine 镜像不是一个很好的选择 (这时候我们更提倡基于 Ubuntu、Debian、CentOS 这类相对完整的系统镜像来构建)。")]),e._v(" "),e._m(4),e._v(" "),_("p",[e._v("除了合理选择镜像外，许多镜像还为我们提供了更加方便的功能，这些细节我们通常都可以在镜像的详情里阅读到。")]),e._v(" "),_("p",[e._v("这里我们以 MySQL 为例，看看通常我们是怎样阅读和使用镜像的特殊功能的。")]),e._v(" "),_("p",[e._v("自己安装过 MySQL 的朋友一定知道，搭建 MySQL 最麻烦的地方并不是安装的过程，而是安装后进行初始化配置的过程。就拿更改 root 账号的密码来说，在初始的 MySQL 里就要耗费不少工作量。")]),e._v(" "),_("p",[e._v("如果我们拿到一个 MySQL 镜像，运行起来的 MySQL 也就约等于一个刚刚安装好的程序，面临的正好是复杂的初始化过程。")]),e._v(" "),_("p",[e._v("好在 MySQL 镜像的维护者们为我们打造了一些自动化脚本，通过它们，我们只需要简单的传入几个参数，就能够快速实现对 MySQL 数据库的初始化。")]),e._v(" "),_("p",[e._v("在 MySQL 镜像的详情里，描述了我们要如何传入这些参数来启动 MySQL 容器。")]),e._v(" "),e._m(5),e._v(" "),_("p",[e._v("对于 MySQL 镜像来说，进行软件配置的方法是通过环境变量的方式来实现的 ( 在其他的镜像里，还有通过启动命令、挂载等方式来实现的 )。我们只需要通过这些给出的环境变量，就可以初始化 MySQL 的配置了。")]),e._v(" "),_("p",[e._v("例如，我们可以通过下面的命令来直接建立 MySQL 中的用户和数据库。")]),e._v(" "),e._m(6),_("p",[e._v("通过这条命令启动的 MySQL 容器，在内部就已经完成了用户的创建和数据库的创建，我们通过 MySQL 客户端就能够直接登录这个用户和访问对应的数据库了。")]),e._v(" "),_("p",[e._v("如果深究 MySQL 是如何实现这样复杂的功能的，大家可以到 MySQL 镜像的 Dockerfile 源码库里，找到 "),_("a",{attrs:{href:"https://github.com/docker-library/mysql/blob/master/5.7/docker-entrypoint.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-entrypoint.sh"),_("OutboundLink")],1),e._v(" 这个脚本，所有的秘密正暗藏在其中。MySQL 正是利用了 ENTRYPOINT 指令进行初始化这种任务安排，对容器中的 MySQL 进行初始化的。")]),e._v(" "),_("p",[e._v("通过 MySQL 镜像这样的逻辑，大家还可以举一反三，了解其他镜像所特用的使用方法，甚至可以参考编写、构建一些能够提供这类方法的 Dockerfile 和镜像。")]),e._v(" "),e._m(7),e._v(" "),_("p",[e._v("如果我们希望将我们镜像公开给网络上的开发者们，那通过 Docker Hub 无疑是最佳的方式。")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),_("p",[e._v("自动构建让不需要我们再用本机进行镜像的构建，既能节约时间，又能享受高速的云端机器构建。")]),e._v(" "),e._m(11),e._v(" "),_("p",[e._v("在 Docker Hub 中并不直接存放我们用于构建的 Dockerfile 和相关文件，我们必须将 Docker Hub 账号授权到 GitHub 或是 Bitbucket 来从这些代码库中获取 Dockerfile 和相关文件。")]),e._v(" "),e._m(12),e._v(" "),_("p",[e._v("在连接到 GitHub 或 Bitbucket 后，我们就可以选择我们存放 Dockerfile 和相关文件的代码仓库用来创建自动构建了。")]),e._v(" "),e._m(13),e._v(" "),_("p",[e._v("在基本信息填写完成，点击创建按钮后，Docker Hub 就会开始根据我们 Dockerfile 的内容构建镜像了。而此时，我们也能够访问我们镜像专有的详情页面了。")]),e._v(" "),e._m(14),e._v(" "),_("p",[e._v("在 Build Details 页面里，我们可以看到镜像构建的进度和详细的构建情况。")])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"使用-docker-hub-中的镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-hub-中的镜像"}},[this._v("#")]),this._v(" 使用 Docker Hub 中的镜像")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"选择镜像与程序版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择镜像与程序版本"}},[this._v("#")]),this._v(" 选择镜像与程序版本")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/3/166387eaadcb9fe1?w=816&h=762&f=png&s=65318",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"alpine-镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alpine-镜像"}},[this._v("#")]),this._v(" Alpine 镜像")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"对容器进行配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对容器进行配置"}},[this._v("#")]),this._v(" 对容器进行配置")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/3/16639074fdc48422?w=816&h=762&f=png&s=97212",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ sudo docker run --name mysql -e MYSQL_DATABASE=webapp -e MYSQL_USER=www -e MYSQL_PASSWORD=my-secret-pw -d mysql:5.7\n\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"共享自己的镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共享自己的镜像"}},[this._v("#")]),this._v(" 共享自己的镜像")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("要在 Docker Hub 上共享镜像，我们必须有一个 Docker Hub 的账号，这自不必说了。在登录到我们账号的控制面板后，我们能够找到创建的按钮，在这里选择 "),t("code",[this._v("Create Automated Build")]),this._v(" ( 创建自动构建 )。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/3/16638f7a60c3c8a9?w=916&h=558&f=png&s=69134",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("自动构建镜像是 Docker Hub 为我们提供的一套镜像构建服务，我们只需要提供 Dockerfile 和相关的基本文件，Docker Hub 就能够在云端自动将它们构建成镜像，之后便可以让其他开发者通过 "),t("code",[this._v("docker pull")]),this._v(" 命令拉取到这一镜像。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/3/16638fbdcfee0b77?w=2558&h=918&f=png&s=89388",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/3/16638fbc9c1ac1c2?w=2558&h=708&f=png&s=79510",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/3/16638fbbd4f6d20a?w=1934&h=1034&f=png&s=96802",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/3/16638fb9fa6cd7f7?w=2554&h=952&f=png&s=137319",alt:""}})])}],!1,null,null,null);t.default=s.exports}}]);