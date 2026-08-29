/*
 * 课程主页配置
 * 修改资源地址、章节介绍或周次安排时，只需编辑本文件，无需改动页面结构。
 * 链接留空（""）时，页面会展示“暂未提供”，且不会产生无效跳转。
 */
window.COURSE_CONFIG = {
  links: {
    codeRepository: "https://gitee.com/hnu-cloudcomputing/cloud-compute-book-code",
    slidesRepository: "https://github.com/HNU-CloudComputing/CloudComputingCoursePPT",
    bookRepository: "https://gitee.com/hnu-cloudcomputing/cloud-computing-book-pdf",
    videoPlaylist: "https://space.bilibili.com/472679948/lists?sid=8828254&spm_id_from=333.788.0.0",
    contactEmail: "mailto:guochen@hnu.edu.cn",
    fullBook: "https://gitee.com/hnu-cloudcomputing/cloud-computing-book-pdf",
    chapter1Book: "https://gitee.com/hnu-cloudcomputing/cloud-computing-book-pdf/blob/main/chapters/云计算技术实践_第一章.pdf",
    chapter2Book: "https://gitee.com/hnu-cloudcomputing/cloud-computing-book-pdf/blob/main/chapters/云计算技术实践_第二章.pdf",
    chapter3Book: "https://gitee.com/hnu-cloudcomputing/cloud-computing-book-pdf/blob/main/chapters/云计算技术实践_第三章.pdf",
    chapter4Book: "https://gitee.com/hnu-cloudcomputing/cloud-computing-book-pdf/blob/main/chapters/云计算技术实践_第四章.pdf",
    chapter5Book: "https://gitee.com/hnu-cloudcomputing/cloud-computing-book-pdf/blob/main/chapters/云计算技术实践_第五章.pdf",
    chapter6Book: "https://gitee.com/hnu-cloudcomputing/cloud-computing-book-pdf/blob/main/chapters/云计算技术实践_第六章.pdf",
    ppt1: "https://media.githubusercontent.com/media/HNU-CloudComputing/CloudComputingCoursePPT/main/1-引言.pptx",
    ppt2: "https://media.githubusercontent.com/media/HNU-CloudComputing/CloudComputingCoursePPT/main/2-创世之光-概览.pptx",
    ppt3: "https://media.githubusercontent.com/media/HNU-CloudComputing/CloudComputingCoursePPT/main/3-双雄对决-网络.pptx",
    ppt4: "https://media.githubusercontent.com/media/HNU-CloudComputing/CloudComputingCoursePPT/main/4-英雄集结-并发.pptx",
    ppt5: "https://media.githubusercontent.com/media/HNU-CloudComputing/CloudComputingCoursePPT/main/5-裂土封疆-分布式.pptx",
    ppt6: "https://media.githubusercontent.com/media/HNU-CloudComputing/CloudComputingCoursePPT/main/6-飞升入定-部署.pptx",
    ppt7: "https://media.githubusercontent.com/media/HNU-CloudComputing/CloudComputingCoursePPT/main/7-穷理尽微-核心原理与前沿研究.pptx",
    ppt8: "https://media.githubusercontent.com/media/HNU-CloudComputing/CloudComputingCoursePPT/main/助教带做-Docker上云实战.pptx",
    ppt9: "https://media.githubusercontent.com/media/HNU-CloudComputing/CloudComputingCoursePPT/main/助教带做-k8s使用.pptx",
    video1: "https://www.bilibili.com/video/BV1Jngs6wEjR/",
    video2: "https://www.bilibili.com/video/BV1P3gs6uEF3/",
    video3: "https://www.bilibili.com/video/BV1MFgw67Eet/",
    video4: "https://www.bilibili.com/video/BV16sgK62ETX/",
    video5: "https://www.bilibili.com/video/BV1iq8n6YEic/",
    video6: "https://www.bilibili.com/video/BV17t4r6JEJM/",
    video7: "https://www.bilibili.com/video/BV1hF4r6BELo/",
    labs: "",
    lab1: "https://gitee.com/hnu-cloudcomputing/cloud-compute-book-code/tree/master/Lab/Lab1",
    lab2: "https://gitee.com/hnu-cloudcomputing/cloud-compute-book-code/tree/master/Lab/Lab2",
    lab3: "https://gitee.com/hnu-cloudcomputing/cloud-compute-book-code/tree/master/Lab/Lab3",
    lab4: "https://gitee.com/hnu-cloudcomputing/cloud-compute-book-code/tree/master/Lab/Lab4"
  },

  books: [
    { title: "谋定全局：在线系统架构", link: "chapter1Book" },
    { title: "双雄对战：网络通信", link: "chapter2Book" },
    { title: "英雄集结：单机并发", link: "chapter3Book" },
    { title: "切分世界：分布式系统", link: "chapter4Book" },
    { title: "飞升入定：云原生部署", link: "chapter5Book" },
    { title: "穷理尽微：云原生核心原理", link: "chapter6Book" }
  ],

  supplementarySlides: [
    { id: "08", title: "助教带做：Docker 上云实战", link: "ppt8" },
    { id: "09", title: "助教带做：Kubernetes 使用", link: "ppt9" }
  ],

  videos: [
    { id: "01", kind: "课程讲授", title: "云计算导论与课程介绍", topics: ["课程目标、内容结构与学习方法", "云计算系统关注的基本问题", "教材、实验与配套资源的使用方式"], slides: "ppt1", slideLabel: "课件 1", thumbnail: "images/videos/lecture-01.jpg", duration: "38:47", url: "https://www.bilibili.com/video/BV1Jngs6wEjR/" },
    { id: "02", kind: "课程讲授", title: "创世之光：在线游戏里的云计算技术", topics: ["在线游戏服务端的系统演进", "网络、并发、分布式与云原生技术", "从单机原型到云平台的课程主线"], slides: "ppt2", slideLabel: "课件 2", thumbnail: "images/videos/lecture-02.jpg", duration: "1:10:33", url: "https://www.bilibili.com/video/BV1P3gs6uEF3/" },
    { id: "03", kind: "课程讲授", title: "双雄对决：环境介绍与网络基础", topics: ["Go 工程与课程代码环境", "网络通信的基本过程", "TCP、UDP 与 Socket 编程基础"], slides: "ppt3", slideLabel: "课件 3", thumbnail: "images/videos/lecture-03.jpg", duration: "25:13", url: "https://www.bilibili.com/video/BV1MFgw67Eet/" },
    { id: "04", kind: "助教带做", title: "实验环境搭建", topics: ["Go、Git 与开发工具准备", "课程实验仓库结构", "自动测试的运行方法"], slides: "ppt3", slideLabel: "课件 3", thumbnail: "images/videos/lecture-04.jpg", duration: "21:33", url: "https://www.bilibili.com/video/BV1TAgw6LE1N/" },
    { id: "05", kind: "课程讲授", title: "双雄对决：P2P 对战实现", topics: ["P2P 对战通信模型", "连接建立与消息收发", "基础对战流程的程序实现"], slides: "ppt3", slideLabel: "课件 3", thumbnail: "images/videos/lecture-05.jpg", duration: "1:15:05", url: "https://www.bilibili.com/video/BV1gogc6JEkf/" },
    { id: "06", kind: "课程讲授", title: "双雄对决：C/S 对战与异常处理", topics: ["客户端/服务器架构", "服务器权威状态管理", "断线、异常输入与连接处理"], slides: "ppt3", slideLabel: "课件 3", thumbnail: "images/videos/lecture-06.jpg", duration: "1:06:26", url: "https://www.bilibili.com/video/BV1mBgF6rEnU/" },
    { id: "07", kind: "助教带做", title: "Lab 1 双雄对战讲解", topics: ["实验任务与 TODO 位置", "自动测试用例说明", "常见错误与调试方法"], slides: "ppt3", slideLabel: "课件 3", thumbnail: "images/videos/lecture-07.jpg", duration: "09:44", url: "https://www.bilibili.com/video/BV1mBgF6kEZB/" },
    { id: "08", kind: "课程讲授", title: "英雄集结：并发基础", topics: ["进程、线程与 Goroutine", "并发任务的组织方式", "多人服务器中的共享状态"], slides: "ppt4", slideLabel: "课件 4", thumbnail: "images/videos/lecture-08.jpg", duration: "1:26:48", url: "https://www.bilibili.com/video/BV16sgK62ETX/" },
    { id: "09", kind: "课程讲授", title: "英雄集结：并发高级", topics: ["锁、临界区与并发安全接口", "数据竞争与死锁", "高并发服务器的性能分析"], slides: "ppt4", slideLabel: "课件 4", thumbnail: "images/videos/lecture-09.jpg", duration: "55:03", url: "https://www.bilibili.com/video/BV1Ysgu6VEzq/" },
    { id: "10", kind: "助教带做", title: "火焰图性能分析与 Lab 2 讲解", topics: ["pprof 与火焰图的使用", "程序热点与性能瓶颈定位", "Lab 2 并发任务讲解"], slides: "ppt4", slideLabel: "课件 4", thumbnail: "images/videos/lecture-10.jpg", duration: "26:41", url: "https://www.bilibili.com/video/BV1Zjgu6UEF1/" },
    { id: "11", kind: "课程讲授", title: "切分世界：数据分层存储与分布式导论", topics: ["账号、会话与世界状态的分层存储", "单机容量限制与多节点扩展", "分布式系统需要处理的基本问题"], slides: "ppt5", slideLabel: "课件 5", thumbnail: "images/videos/lecture-11.jpg", duration: "1:18:40", url: "https://www.bilibili.com/video/BV1iq8n6YEic/" },
    { id: "12", kind: "课程讲授", title: "切分世界：一致性哈希、Gossip 与 2PC", topics: ["一致性哈希与地图放置", "Gossip 成员状态传播", "跨节点交易与两阶段提交"], slides: "ppt5", slideLabel: "课件 5", thumbnail: "images/videos/lecture-12.jpg", duration: "1:26:59", url: "https://www.bilibili.com/video/BV19E8J6dEXY/" },
    { id: "13", kind: "课程讲授", title: "切分世界：分布式一致性与 Raft", topics: ["分布式一致性问题", "Raft 选主与日志复制", "元数据提交与节点故障恢复"], slides: "ppt5", slideLabel: "课件 5", thumbnail: "images/videos/lecture-13.jpg", duration: "57:49", url: "https://www.bilibili.com/video/BV1vu8P6mEBB/" },
    { id: "14", kind: "助教带做", title: "实验 3 切分世界讲解", topics: ["实验任务与 TODO 位置", "一致性哈希、Gossip、2PC 与 Raft 的实验实现", "自动测试、故障模拟与调试方法"], slides: "ppt5", slideLabel: "课件 5", thumbnail: "images/videos/lecture-14.jpg", duration: "10:10", url: "https://www.bilibili.com/video/BV1LM8P6EEsJ/" },
    { id: "15", kind: "课程讲授", title: "飞升入定：容器上云", topics: ["从进程部署到容器化交付", "镜像、容器与云平台的协作关系", "应用上云的基本流程"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-15.jpg", duration: "32:58", url: "https://www.bilibili.com/video/BV17t4r6JEJM/" },
    { id: "16", kind: "助教带做", title: "容器上云演示", topics: ["应用容器化准备", "镜像构建与运行", "云上部署与结果验证"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-16.jpg", duration: "43:02", url: "https://www.bilibili.com/video/BV1HJ4r6REJ3/" },
    { id: "17", kind: "助教带做", title: "容器制作", topics: ["Dockerfile 编写", "容器镜像构建", "容器启动与调试"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-17.jpg", duration: "13:02", url: "https://www.bilibili.com/video/BV1cJ4r6REKS/" },
    { id: "18", kind: "课程讲授", title: "飞升入定：单机多容器编排", topics: ["多容器应用的依赖关系", "单机编排的基本目标", "服务组合与生命周期管理"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-18.jpg", duration: "07:05", url: "https://www.bilibili.com/video/BV1wE4r6xEdb/" },
    { id: "19", kind: "助教带做", title: "Docker Compose", topics: ["Compose 配置文件", "多服务统一启动", "容器网络与依赖管理"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-19.jpg", duration: "05:33", url: "https://www.bilibili.com/video/BV1wE4r6xEp4/" },
    { id: "20", kind: "课程讲授", title: "飞升入定：多机多容器编排", topics: ["单机编排的能力边界", "多节点资源统一管理", "调度、服务发现与故障恢复问题"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-20.jpg", duration: "13:34", url: "https://www.bilibili.com/video/BV1Fp4r6XEwq/" },
    { id: "21", kind: "助教带做", title: "Kubernetes 使用演示", topics: ["集群与命令行环境", "工作负载创建与查看", "服务访问与运行状态检查"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-21.jpg", duration: "32:41", url: "https://www.bilibili.com/video/BV1fp4r6QErv/" },
    { id: "22", kind: "课程讲授", title: "飞升入定：Kubernetes 多机编排", topics: ["Kubernetes 集群架构", "Pod、Deployment 与 Service", "声明式编排与控制循环"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-22.jpg", duration: "13:49", url: "https://www.bilibili.com/video/BV1nH4r6WEJ9/" },
    { id: "23", kind: "助教带做", title: "Kubernetes 配置演示", topics: ["资源清单编写", "配置应用与更新", "部署状态观察与排错"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-23.jpg", duration: "11:18", url: "https://www.bilibili.com/video/BV1jS466LE3o/" },
    { id: "24", kind: "课程讲授", title: "飞升入定：伸缩调度之调度", topics: ["调度器的输入与目标", "资源请求、限制与节点选择", "调度约束与放置决策"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-24.jpg", duration: "07:21", url: "https://www.bilibili.com/video/BV1JC466JE44/" },
    { id: "25", kind: "助教带做", title: "容器自动调度", topics: ["调度配置与运行", "工作负载自动放置", "调度结果检查"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-25.jpg", duration: "05:47", url: "https://www.bilibili.com/video/BV1JC466JEgo/" },
    { id: "26", kind: "课程讲授", title: "飞升入定：伸缩调度之伸缩", topics: ["负载变化与弹性需求", "副本级自动伸缩", "指标、阈值与控制过程"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-26.jpg", duration: "05:39", url: "https://www.bilibili.com/video/BV1nr466DE3F/" },
    { id: "27", kind: "助教带做", title: "Kubernetes HPA 与 VPA", topics: ["HPA 水平伸缩配置", "VPA 垂直伸缩机制", "伸缩状态与指标观察"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-27.jpg", duration: "11:10", url: "https://www.bilibili.com/video/BV1Jr466DE1s/" },
    { id: "28", kind: "课程讲授", title: "飞升入定：应用状态与节点级伸缩", topics: ["有状态应用的伸缩约束", "节点级容量调整", "应用副本与集群资源的协同"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-28.jpg", duration: "10:33", url: "https://www.bilibili.com/video/BV1724667EBD/" },
    { id: "29", kind: "助教带做", title: "Kubernetes HPA 与 VPA II", topics: ["伸缩策略进阶配置", "应用状态与资源调整", "伸缩效果验证"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-29.jpg", duration: "06:24", url: "https://www.bilibili.com/video/BV1B24667ETF/" },
    { id: "30", kind: "助教带做", title: "实验 4 飞升入定", topics: ["容器化与 Kubernetes 部署任务", "HPA 自动扩缩容与异常恢复", "实验验收与常见问题"], slides: "ppt6", slideLabel: "课件 6", thumbnail: "images/videos/lecture-30.jpg", duration: "1:23:57", url: "https://www.bilibili.com/video/BV1uw4r6TEUM/" },
    { id: "31", kind: "课程讲授", title: "穷理尽微：容器虚拟化原理与前沿研究", topics: ["Namespace 与 Cgroup 隔离机制", "容器运行时的关键路径", "容器虚拟化前沿研究导读"], slides: "ppt7", slideLabel: "课件 7", thumbnail: "images/videos/lecture-31.jpg", duration: "1:14:04", url: "https://www.bilibili.com/video/BV1hF4r6BELo/" },
    { id: "32", kind: "课程讲授", title: "穷理尽微：网络虚拟化与容器启动加速", topics: ["容器网络虚拟化机制", "数据包转发与网络路径", "容器启动加速研究导读"], slides: "ppt7", slideLabel: "课件 7", thumbnail: "images/videos/lecture-32.jpg", duration: "1:22:28", url: "https://www.bilibili.com/video/BV1MN4r6NEsT/" }
  ],

  labs: [
    { id: 1, weeks: "第 3–4 周", title: "网络编程：双人对战游戏", subtitle: "C/S 架构", description: "使用 TCP 与 JSON 完成双人对战，理解客户端只发送意图、服务器负责验证与更新状态的权威模型。", skills: "TCP · JSON · C/S", link: "lab1" },
    { id: 2, weeks: "第 5–8 周", title: "并发编程：多人开放世界", subtitle: "Goroutine + 锁", description: "把双人回合制程序扩展为多人实时世界，处理并发连接、共享状态、数据竞争与周期广播。", skills: "Goroutine · RWMutex · 数据竞争", link: "lab2" },
    { id: 3, weeks: "第 9–11 周", title: "多地图并行与多节点协同", subtitle: "分布式系统", description: "将一致性哈希、Gossip、2PC 与 Raft 融入地图分片、节点故障、跨服交易和主从切换。", skills: "分片 · Gossip · 2PC · Raft", link: "lab3" },
    { id: 4, weeks: "第 12–14 周", title: "自建 Kubernetes 游戏部署", subtitle: "云原生部署", description: "完成镜像构建、Kubernetes 部署、HPA 自动扩缩容、异常恢复、状态一致性与资源调优。", skills: "Docker · Kubernetes · HPA", link: "lab4" }
  ],

  chapters: [
    { id: 1, title: "导论", subtitle: "课程介绍与团队介绍", weeks: 1, description: "认识课程目标、学习方式和协作团队，为后续的系统实践建立共同语境。", outcomes: ["理解课程学习闭环", "了解团队与资料入口"], resources: [{ label: "课程导论课件", link: "ppt1" }, { label: "课程视频", link: "video1" }] },
    { id: 2, title: "云技术导览", subtitle: "以游戏为线的云技术导览及云架构总览", weeks: 1, description: "跟随在线游戏的成长路径，建立从单机原型到云平台的整体架构视角。", outcomes: ["看懂在线系统请求路径", "理解云技术在系统中的位置"], resources: [{ label: "云架构总览课件", link: "ppt2" }, { label: "书籍第一章", link: "chapter1Book" }, { label: "本章视频", link: "video2" }] },
    { id: 3, title: "双雄对决", subtitle: "网络基础：从单机到 CS 架构", weeks: 2, description: "从单机程序演化到客户端—服务器架构，完成网络通信和最小在线闭环。", outcomes: ["理解 CS 架构与网络通信", "建立双人在线对战原型"], resources: [{ label: "网络基础课件", link: "ppt3" }, { label: "书籍第二章", link: "chapter2Book" }, { label: "本章视频", link: "video3" }] },
    { id: 4, title: "英雄集结", subtitle: "并发：Go 语言高并发", weeks: 4, description: "在更多连接与请求同时到达时，学习用 Go 组织并发、保护共享状态并识别性能瓶颈。", outcomes: ["掌握 Go 并发基本模式", "分析共享状态与性能问题"], resources: [{ label: "并发课件", link: "ppt4" }, { label: "书籍第三章", link: "chapter3Book" }, { label: "本章视频", link: "video4" }] },
    { id: 5, title: "切分世界", subtitle: "分布式：数据库与逻辑分片", weeks: 3, description: "当单机容量不再足够，系统开始引入数据库、逻辑分片与跨节点协作。", outcomes: ["理解数据持久化与分片", "分析多机协作的代价"], resources: [{ label: "分布式课件", link: "ppt5" }, { label: "书籍第四章", link: "chapter4Book" }, { label: "本章视频", link: "video5" }] },
    { id: 6, title: "飞升入定", subtitle: "部署：容器与 Kubernetes", weeks: 3, description: "将服务标准化交付并交由平台部署、调度、扩缩容和自愈。", outcomes: ["完成容器化交付", "理解 Kubernetes 基本部署方式"], resources: [{ label: "部署课件", link: "ppt6" }, { label: "书籍第五章", link: "chapter5Book" }, { label: "本章视频", link: "video6" }] },
    { id: 7, title: "原理深入", subtitle: "容器隔离、HPA 与 Serverless", weeks: 2, description: "下沉到云原生运行机制，理解隔离、弹性控制和按需执行背后的基本原理。", outcomes: ["理解容器隔离机制", "理解 HPA 与 Serverless 原理"], resources: [{ label: "本章课件", link: "ppt7" }, { label: "书籍第六章", link: "chapter6Book" }, { label: "本章视频", link: "video7" }] }
  ]
};
