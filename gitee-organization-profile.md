## 组织介绍

HNU-cloudcomputing 由湖南大学计算机科学与工程学院云计算课程组维护。组织围绕本科专业选修课《云计算原理与实践：以在线游戏为载体》，发布课程主页、教材、课件、教学视频、示例代码、实验代码和自动测试。

课程使用一个持续演进的在线游戏系统串联教学内容。学生先完成客户端与服务器之间的网络通信，再处理多人并发、数据分片和跨节点协同，最后把整套服务部署到 Kubernetes。教材解释系统机制，课件对应课堂讲授，代码和实验用于复现系统行为与验证设计取舍。

<p align="center">
  <a href="https://hnu-cloudcomputing.github.io/cloudcompute-pages/index.html">
    <img src="https://gitee.com/hnu-cloudcomputing/course-pages/raw/main/images/organization/course-home.png" alt="云计算原理与实践课程主页" width="90%">
  </a>
</p>
<p align="center"><sub>课程主页：点击图片查看完整网站</sub></p>

## 课程内容

| 教学阶段 | 系统变化 | 主要内容 |
| --- | --- | --- |
| 双雄对战 | 从单机程序扩展为双人在线对战 | TCP、JSON 消息、客户端/服务器架构、服务器权威裁决 |
| 英雄集结 | 从双人对战扩展为多人实时世界 | Goroutine、共享状态、锁、数据竞争与性能分析 |
| 切分世界 | 从单节点扩展为多地图、多节点系统 | 数据分层、一致性哈希、Gossip、2PC、Raft 与故障恢复 |
| 云原生部署 | 将分布式服务运行在 Kubernetes | 容器、Deployment、Service、RBAC、HPA、弹性与资源成本 |

课程实验与教材章节同步。每组实验提供可运行的 Go 程序骨架，学生在预留的 TODO 位置补充核心逻辑，再通过自动测试、运行日志和故障模拟检查系统行为。

## 课程团队

课程团队包括一位授课教师和六位课程助教。授课教师负责课程目标、内容体系、课堂讲授和教学质量；课程助教参与教材整理、实验验证、代码维护、视频制作与课程答疑。

<p align="center">
  <a href="https://hnu-cloudcomputing.github.io/cloudcompute-pages/staff.html">
    <img src="https://gitee.com/hnu-cloudcomputing/course-pages/raw/main/images/organization/course-team.png" alt="云计算原理与实践课程团队" width="90%">
  </a>
</p>
<p align="center"><sub>课程团队：点击图片查看教师与助教介绍</sub></p>

## 主要项目

| 项目 | 内容 |
| --- | --- |
| [Course-pages](https://gitee.com/hnu-cloudcomputing/course-pages) | 课程主页及静态网站源码 |
| [CloudComputingBookPDF](https://gitee.com/hnu-cloudcomputing/cloud-computing-book-pdf) | 配套教材的逐章 PDF |
| [CloudComputeBookCode](https://gitee.com/hnu-cloudcomputing/cloud-compute-book-code) | 教材示例代码、实验骨架和自动测试 |
| [CloudComputingLabs](https://gitee.com/hnu-cloudcomputing/CloudComputingLabs) | 课程实验代码与说明 |
| [CloudComputeSlides](https://gitee.com/hnu-cloudcomputing/cloud-compute-slides) | 课程讲授课件 |
| [CloudComputingBook](https://gitee.com/hnu-cloudcomputing/cloud-computing-book) | 教材源码与编辑记录 |

## 如何参与

发现教材、课件、代码或实验中的问题，可以在对应仓库提交 Issue。文档修订、代码改进和测试补充可以通过 Pull Request 提交。

组织成员由课程组统一维护。如需参与课程资源建设、开展教学合作或反馈课程使用情况，请通过邮件联系课程组。

## 联系方式

- 课程网站：https://hnu-cloudcomputing.github.io/cloudcompute-pages/
- 教学视频：https://space.bilibili.com/472679948/lists?sid=8828254
- 联系邮箱：guochen@hnu.edu.cn

