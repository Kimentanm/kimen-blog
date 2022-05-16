(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{521:function(a,s,t){"use strict";t.r(s);var n=t(21),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("blockquote",[t("p",[a._v("本篇博客转载自微信公众号 "),t("code",[a._v("Java知音")]),a._v(" "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/bNrAtqMKZPX5Uk1WRF5wPw",target:"_blank",rel:"noopener noreferrer"}},[a._v("《JVM超神之路：年后跳槽需要的JVM知识点，周末给你整理了一份！！！》"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"一、classloader类加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、classloader类加载器"}},[a._v("#")]),a._v(" 一、ClassLoader类加载器")]),a._v(" "),t("h3",{attrs:{id:"类加载过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载过程"}},[a._v("#")]),a._v(" 类加载过程")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img.whalenas.com:283/image/20210209095926.png",alt:"类加载时机"}})]),a._v(" "),t("h3",{attrs:{id:"加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载"}},[a._v("#")]),a._v(" 加载")]),a._v(" "),t("p",[a._v("将类的.class文件中的二进制数据读入到内存中，将其放在运行时数据区的方法区内，然后在内存\n上创建一个java.lang.Class对象用来封装类在方法区内的数据结构作为这个类各种数据的访问\n入口")]),a._v(" "),t("h3",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[a._v("#")]),a._v(" 验证")]),a._v(" "),t("p",[a._v("主要是为了确保class文件中的字节流包含的信息是否符合当前JVM的要求，且不会危害JVM自身安\n全，比如校验文件格式、是否是cafe baby魔术、字节码验证等等。")]),a._v(" "),t("h3",{attrs:{id:"准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[a._v("#")]),a._v(" 准备")]),a._v(" "),t("p",[a._v("为类变量分配内存并设置类变量（是被static修饰的变量，变量不是常量，所以不是final的，就是\nstatic的）初始值的阶段。这些变量所使用的内存在方法区中进行分配。比如")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("26")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("类变量age会在准备阶段过后为 其分配四个（int四个字节）字节的空间")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),t("p",[a._v("设置初始值为0，而不是26，若是final的，则在编译期就会设置上最终值。")])]),a._v(" "),t("h3",{attrs:{id:"解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[a._v("#")]),a._v(" 解析")]),a._v(" "),t("p",[a._v("JVM会在此阶段把类的二进制数据中的符号引用替换为直接引用。")]),a._v(" "),t("blockquote",[t("p",[a._v("是什么是符号引用和直接引用？")])]),a._v(" "),t("div",{staticClass:"language-md line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[t("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("1.")]),a._v(" 符号引用：字符串，能根据这个字符串定位到指定的数据，比如java/lang/StringBuilder\n"),t("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("2.")]),a._v(" 直接引用：内存地址\n\n类加载之后，常量池的内容会进入运行时常量池，这时候里面的数据也许还保持着符号引用。\n（因为解析的时机由JVM自己设定）\n\n如果在虚拟机栈的 栈帧中，我准备调用 main() 函数，那么会通过栈帧中持有的动态连接，找到运行时常量池，\n然后找到main函数的常量 比如 #2 ，如果这个常量没有被解析过，那么就通过这个常量进行解析过程，\n其中包括，通过常量 找到 类名 和 nameAndType，通过 nameAndType 找到方法名和返回值。\n\n这时候 我手里有 类名/方法名/方法返回值，下一步，我通过类名和方法名，通过JVM记录的方法列表，找到对应的方法体。\n\n而这个方法体实际上是一段内存地址，那么这时候我就把这段内存地址复制给 #2，并且给 #2设定一个已经解析的 flag。\n\n这样就完成了 符号引用到直接引用的过程。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br")])]),t("h3",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[a._v("#")]),a._v(" 初始化")]),a._v(" "),t("p",[a._v("初始化阶段是执行类构造器"),t("code",[a._v("<clinit>()")]),a._v("方法的过程，到了初始化阶段，才真正开始执行类定义的\nJava程序代码（或者说字节码 ）。比如准备阶段的那个age初始值是0，到这一步就设置为26。")]),a._v(" "),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),t("p",[a._v("对象都出来了，业务系统直接调用阶段。")]),a._v(" "),t("h3",{attrs:{id:"卸载-回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载-回收"}},[a._v("#")]),a._v(" 卸载（回收）")]),a._v(" "),t("p",[a._v("用完了，可以被GC回收了。")]),a._v(" "),t("h2",{attrs:{id:"类加载器种类以及加载范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载器种类以及加载范围"}},[a._v("#")]),a._v(" 类加载器种类以及加载范围")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img.whalenas.com:283/image/20210209102439.png",alt:"类加载器的种类"}})]),a._v(" "),t("h3",{attrs:{id:"应用类加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用类加载器"}},[a._v("#")]),a._v(" 应用类加载器")]),a._v(" "),t("p",[a._v("最顶层类加载器，他的父类加载器是个null，也就是没有父类加载器。负责加载jvm的核心类库，\n比如java.lang.*等，从系统属性中的sun.boot.class.path所指定的目录中加载类库。他的\n具体实现由Java虚拟机底层C++代码实现。")]),a._v(" "),t("blockquote",[t("p",[a._v("未完待续……")])])])}),[],!1,null,null,null);s.default=e.exports}}]);