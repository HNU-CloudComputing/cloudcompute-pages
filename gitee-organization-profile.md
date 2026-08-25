## 组织介绍

HNU-cloudcomputing 由湖南大学计算机科学与工程学院云计算课程组维护。组织围绕本科专业选修课《云计算原理与实践：以在线游戏为载体》，发布课程主页、教材、课件、教学视频、示例代码、实验代码和自动测试。

## 课程介绍

《云计算原理与实践：以在线游戏为载体》是一门面向希望系统理解并亲手构建现代在线服务的本科实践课程。课程以一个可运行的在线游戏服务端为贯穿案例，从最小的双人对战原型出发，逐步讲解系统在连接规模、并发状态、单机容量、节点故障和负载波动等压力下的演进过程。

讲授内容包括客户端与服务器通信、服务器权威裁决与状态同步，Go 并发模型、锁与资源复用，分片、一致性哈希、Gossip、2PC 与 Raft，以及容器化交付、Kubernetes 编排、HPA 和 Serverless。每个阶段均配有代码演示和递进式实验，学生需要运行系统、记录延迟、吞吐和资源占用，修改关键机制并比较结果。

课程结束时，学生将能够构建并部署一个具备网络通信、并发处理、分布式协作和弹性伸缩能力的在线服务，并掌握通过实验验证系统设计的方法。本课程适合具备基本编程能力和数据结构知识的学习者；接触过计算机网络和操作系统则更佳。

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
      湖南大学计算机学院教授，国家超算长沙中心常务副主任。长期承担本科生《云计算技术》《编译原理》《互联网技术与网络安全》等课程教学。研究方向包括高性能网络、云计算系统和人工智能系统，相关成果发表于 NSDI、INFOCOM、IEEE/ACM ToN、IEEE TCC 等会议和期刊。<br><br>
      <a href="https://grzy.hnu.edu.cn/site/index/chenguo">个人主页</a> · <a href="https://hnu-cloudcomputing.github.io/cloudcompute-pages/staff.html">课程团队介绍</a>
    </td>
  </tr>
</table>

| 成员 | 课程工作 |
| --- | --- |
| 徐方林 | 课程内容与教材整理 |
| 胡文举 | 实验验证与教材配图复核 |
| 陈俊杰 | 案例代码、实验文档与自动测试 |
| 王煌 | 游戏案例、实验材料与测试用例 |
| 刘筱芊 | 课程视频录制、剪辑与整理 |
| 赵思程 | 实验支持、课程答疑与教学组织 |

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
