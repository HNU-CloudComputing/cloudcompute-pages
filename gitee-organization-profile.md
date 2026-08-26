## 组织介绍

HNU-cloudcomputing 是湖南大学计算机学院云计算课程组维护的开放教学资源平台，主要服务于本科专业选修课《云计算原理与实践：以在线游戏为载体》。平台集中发布课程主页、教材、课件、教学视频、示例代码、课程实验和自动测试。

## 课程介绍

《云计算原理与实践：以在线游戏为载体》面向希望系统学习云计算基本原理、核心机制和工程方法的本科生。课程的学习主线是从问题走向机制，再回到工程取舍。学生需要理解一项技术为什么出现、受到哪些约束、解决了什么问题，以及为此付出了什么代价。

课程内容包括客户端与服务器通信、状态同步、Go 并发与资源复用，数据分片、复制、事务与共识，以及容器化、Kubernetes 编排、弹性伸缩和 Serverless。学习这些内容时，还需要分析性能、状态正确性、可扩展性、可用性和成本之间的取舍。

在线游戏承担贯穿课程的教学案例作用。它包含长连接、并发处理、共享状态、跨节点协作、故障恢复和弹性伸缩等问题，每项机制都可以落实到代码并通过实验观察。业务形式可以变化，规模、状态、故障和资源问题具有共通性。课程所讲的云计算机制和系统工程方法同样适用于在线协作、电商平台和大模型服务。

每个教学阶段均配有代码演示和递进式实验。学生需要运行系统，记录延迟、吞吐和资源占用，修改关键机制并比较结果。课程结束时，学生能够分析云计算系统中的规模、状态、故障和资源问题，选择合适的机制，并通过实验验证设计方案。本课程适合具备基本编程能力和数据结构知识的学习者；接触过计算机网络和操作系统则更佳。

<p align="center">
  <img src="https://gitee.com/hnu-cloudcomputing/course-pages/raw/main/images/cloud-computing-overview.png" alt="云计算概览：应用通过网络按需使用共享的计算、存储与网络资源" width="92%">
</p>
<p align="center"><sub>云计算系统把计算、存储和网络组织为共享资源池，并提供按需扩容与故障恢复能力。</sub></p>

## 课程团队

课程团队包括一位授课教师和六位课程助教。授课教师负责确定课程目标和内容体系，承担课堂讲授，并统筹教材、课件、实验、代码和视频的整体安排；课程助教分别参与教材整理、实验验证、代码维护、视频制作和课程答疑。

<table>
  <tr>
    <td align="center" width="24%">
      <img src="https://gitee.com/hnu-cloudcomputing/course-pages/raw/main/images/chenguo-profile.png" alt="陈果教授" width="190">
    </td>
    <td>
      <strong>陈果</strong><br>
      湖南大学计算机学院教授，国家超算长沙中心常务副主任。<br><br>
      长期承担本科生《云计算技术》《编译原理》《互联网技术与网络安全》等课程教学。科研方面，主持国家自然科学基金企业联合重点项目、国家重点研发计划课题、国家级青年人才项目、长沙市重大专项及企业合作项目，研究方向涵盖高性能网络、云计算系统和人工智能系统。相关成果发表于 NSDI、INFOCOM、IEEE/ACM ToN、IEEE TCC 等重要会议和期刊，并应用于华为、腾讯、字节跳动等企业产品；获 2025 年湖南省高等教育本科教学成果一等奖、二等奖及 2026 年第十届华为 ICT 大赛中国总决赛特等奖，具有非常强的教学科研能力和产教融合基础。<br><br>
      <a href="mailto:guochen@hnu.edu.cn">guochen@hnu.edu.cn</a> · <a href="https://grzy.hnu.edu.cn/site/index/chenguo">个人主页</a> · <a href="https://hnu-cloudcomputing.github.io/cloudcompute-pages/staff.html">课程团队介绍</a>
    </td>
  </tr>
</table>

| 成员 | 分工 | 具体工作 | 联系方式 |
| --- | --- | --- | --- |
| 徐方林 | 内容与教材 | 参与课程内容与教材编写，负责云原生核心原理与前沿研究内容，并承担终稿核定。 | [xfl825@hnu.edu.cn](mailto:xfl825@hnu.edu.cn) |
| 胡文举 | 实验验证 | 负责课程实验内容的验证与复核，并参与指导教材配图的视觉修订。 | [957278980@qq.com](mailto:957278980@qq.com) |
| 陈俊杰 | 代码与文档 | 参与在线游戏案例代码、实验文档和自动测试用例的建设。 | [843515223@qq.com](mailto:843515223@qq.com) |
| 王煌 | 代码与测试 | 参与游戏案例实现、实验材料与测试用例的完善。 | [1292659693@qq.com](mailto:1292659693@qq.com) |
| 刘筱芊 | 视频制作 | 参与课程视频录制、剪辑与后期整理，使视频内容与教学进度对应。 | [2498646125@qq.com](mailto:2498646125@qq.com) |
| 赵思程 | 教学支持 | 参与课程实验、日常答疑与教学组织支持。 | [1146184921@qq.com](mailto:1146184921@qq.com) |

## 课程实验

四组实验围绕同一个 Go 语言文字游戏逐步扩大系统规模。学生在可运行的程序骨架上补充核心逻辑，再通过自动测试、运行日志和故障模拟检查系统行为。

| 实验 | 系统变化 | 主要内容 |
| --- | --- | --- |
| Lab 1 | 从单机程序扩展为双人在线对战 | TCP、JSON 消息、客户端/服务器架构、服务器权威裁决 |
| Lab 2 | 从双人对战扩展为多人实时世界 | Goroutine、共享状态、锁、数据竞争与性能分析 |
| Lab 3 | 从单节点扩展为多地图、多节点系统 | 数据分层、一致性哈希、Gossip、2PC、Raft 与故障恢复 |
| Lab 4 | 将分布式服务运行在 Kubernetes | 容器、Deployment、Service、RBAC、HPA、弹性与资源成本 |

## 课程资源

| 项目 | 内容 |
| --- | --- |
| [课程主页](https://hnu-cloudcomputing.github.io/cloudcompute-pages/) | 课程介绍、团队、实验、视频与资料入口 |
| [配套教材 PDF](https://gitee.com/hnu-cloudcomputing/cloud-computing-book-pdf) | 《云计算原理与实践：以在线游戏为载体》逐章 PDF |
| [课程示例代码](https://gitee.com/hnu-cloudcomputing/cloud-compute-book-code) | 教材示例、实验骨架与自动测试 |
| [课程实验](https://gitee.com/hnu-cloudcomputing/CloudComputingLabs) | 实验代码与说明 |
| [课程课件](https://gitee.com/hnu-cloudcomputing/cloud-compute-slides) | 课堂讲授课件 |
| [教学视频](https://space.bilibili.com/472679948/lists?sid=8828254) | 课程讲授与助教带做视频 |

## 参与与联系

发现教材、课件、代码或实验中的问题，可以在对应仓库提交 Issue。文档修订、代码改进和测试补充可以通过 Pull Request 提交。

- 课程网站：https://hnu-cloudcomputing.github.io/cloudcompute-pages/
- 联系邮箱：guochen@hnu.edu.cn
