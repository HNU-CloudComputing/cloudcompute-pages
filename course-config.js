/*
 * 课程主页配置
 * 修改资源地址、章节介绍或周次安排时，只需编辑本文件，无需改动页面结构。
 * 链接留空（""）时，页面会展示“暂未提供”，且不会产生无效跳转。
 */
window.COURSE_CONFIG = {
  links: {
    codeRepository: "https://gitee.com/hnu-cloudcomputing",
    fullBook: "PDF/云计算技术实践-260810.pdf",
    chapter1Book: "PDF/第一章.pdf",
    chapter2Book: "PDF/第二章.pdf",
    chapter3Book: "PDF/第三章.pdf",
    chapter4Book: "PDF/第四章.pdf",
    chapter5Book: "PDF/第五章.pdf",
    chapter6Book: "PDF/第六章.pdf",
    ppt1: "PPT/1-Overall-Introduction.pptx",
    ppt2: "PPT/2-以游戏为线的云技术导览及云架构总览.pptx",
    ppt3: "PPT/3-双雄对决-网络基础.pptx",
    ppt4: "PPT/4-英雄集结-并发.pptx",
    ppt5: "PPT/5-裂土封疆-分布式.pptx",
    ppt6: "PPT/6-飞升入定-部署.pptx",
    ppt7: "",
    video1: "",
    video2: "",
    video3: "",
    video4: "",
    video5: "",
    video6: "",
    video7: "",
    labs: ""
  },

  books: [
    { title: "谋定全局：在线系统架构", link: "chapter1Book" },
    { title: "双雄集结：网络通信", link: "chapter2Book" },
    { title: "英雄集结：单机并发", link: "chapter3Book" },
    { title: "裂土封疆：分布式系统", link: "chapter4Book" },
    { title: "飞升入定：云原生部署", link: "chapter5Book" },
    { title: "穷理尽微：云原生核心原理", link: "chapter6Book" }
  ],

  chapters: [
    { id: 1, title: "导论", subtitle: "课程介绍与团队介绍", weeks: 1, description: "认识课程目标、学习方式和协作团队，为后续的系统实践建立共同语境。", outcomes: ["理解课程学习闭环", "了解团队与资料入口"], resources: [{ label: "课程导论课件", link: "ppt1" }, { label: "课程视频", link: "video1" }] },
    { id: 2, title: "云技术导览", subtitle: "以游戏为线的云技术导览及云架构总览", weeks: 1, description: "跟随在线游戏的成长路径，建立从单机原型到云平台的整体架构视角。", outcomes: ["看懂在线系统请求路径", "理解云技术在系统中的位置"], resources: [{ label: "云架构总览课件", link: "ppt2" }, { label: "书籍第一章", link: "chapter1Book" }, { label: "本章视频", link: "video2" }] },
    { id: 3, title: "双雄对决", subtitle: "网络基础：从单机到 CS 架构", weeks: 2, description: "从单机程序演化到客户端—服务器架构，完成网络通信和最小在线闭环。", outcomes: ["理解 CS 架构与网络通信", "建立双人在线对战原型"], resources: [{ label: "网络基础课件", link: "ppt3" }, { label: "书籍第二章", link: "chapter2Book" }, { label: "本章视频", link: "video3" }] },
    { id: 4, title: "英雄集结", subtitle: "并发：Go 语言高并发", weeks: 4, description: "在更多连接与请求同时到达时，学习用 Go 组织并发、保护共享状态并识别性能瓶颈。", outcomes: ["掌握 Go 并发基本模式", "分析共享状态与性能问题"], resources: [{ label: "并发课件", link: "ppt4" }, { label: "书籍第三章", link: "chapter3Book" }, { label: "本章视频", link: "video4" }] },
    { id: 5, title: "裂土封疆", subtitle: "分布式：数据库与逻辑分片", weeks: 3, description: "当单机容量不再足够，系统开始引入数据库、逻辑分片与跨节点协作。", outcomes: ["理解数据持久化与分片", "分析多机协作的代价"], resources: [{ label: "分布式课件", link: "ppt5" }, { label: "书籍第四章", link: "chapter4Book" }, { label: "本章视频", link: "video5" }] },
    { id: 6, title: "飞升入定", subtitle: "部署：容器与 Kubernetes", weeks: 3, description: "将服务标准化交付并交由平台部署、调度、扩缩容和自愈。", outcomes: ["完成容器化交付", "理解 Kubernetes 基本部署方式"], resources: [{ label: "部署课件", link: "ppt6" }, { label: "书籍第五章", link: "chapter5Book" }, { label: "本章视频", link: "video6" }] },
    { id: 7, title: "原理深入", subtitle: "容器隔离、HPA 与 Serverless", weeks: 2, description: "下沉到云原生运行机制，理解隔离、弹性控制和按需执行背后的基本原理。", outcomes: ["理解容器隔离机制", "理解 HPA 与 Serverless 原理"], resources: [{ label: "本章课件", link: "ppt7" }, { label: "书籍第六章", link: "chapter6Book" }, { label: "本章视频", link: "video7" }] }
  ]
};
