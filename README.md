# 关于PDF识别

## PY：

- [ ] 导入pdf2image module
- [ ] 使用百度云/腾讯云进行高精度识别



## 我们的网站主要分成这几块：

### 拍照搜题

主功能 主要实现A-level的搜题，亦可包含SAT/SAT II/ACT搜题

#### 这是大佬的方案

你可以考虑一次性全爬到 阿里云OSS对象存储 里面，然后用云端的Elasticsearch之类的服务直接搜

#### 这是大致的作业帮架构

https://cloud.baidu.com/customer/case/zuoyebang.html

http://www.360doc.com/content/17/0304/15/17426138_633910188.shtml

你需要先研究下哪家OCR拍照视图效果最好更便宜

一般调用几万次内都是免费的

这样整个系统做起来就非常快了，用云端OCR拍照识别，文本处理下，再丢给Elasticsearch之类的云端搜索组件在对象存储的past papaers里搜。最多再做个redis缓存下每次搜索的key和结果 提高效率

你自己要写的东西就是怎么用云端API和小程序或者APP的UI

我刚给你的就是系统的架构了😂 怎么用云原生服务最快的实现你的东西

https://mp.weixin.qq.com/s/EEFYvKC-ItgF8bVQJz-4ow

可能aws的云服务是更强大的一个合集，基本你能想到的通用功能它都有了

#### 个人意见

主要分成四块

1. 拍照并把图片上传至服务器 (网上有现成的代码)
2. 识别图片中的文字 (OCR，天若(https://tianruoocr.cn/)的好像还不错，但不知道怎么用)
3. 寻找题目及其答案 (题目储存在阿里云里面，问题是怎么找最快)
4. 把答案发给使用者
   逐步实现大概就行了吧...

### 练习

这个没有法律风险，我们这个不是个人信息，是公开的合法的信息。

（我唔知A-level的試題係唔係開放的，如果係的話我D就可以做；但係SAT同埋AP的試題都唔係，所以唔可以post出嚟，只可以做爲搜題的一部分）

### 实验（类似“烧杯”，我们设置考核标准还有注意事项）

大致思路是用html内嵌flash

每种反应要用不同的flash动画做（太耗时，需改进）

还有就是怎么设置考核标准达到与否

### 信息

大概就是A-level/AP/SAT/ACT 的备考信息 差不多做好了

### 答疑（论坛）

这一块直接用discuz做 现成的

https://www.discuz.net/forum.php

https://jingyan.baidu.com/article/25648fc17a4d619191fd00e1.html