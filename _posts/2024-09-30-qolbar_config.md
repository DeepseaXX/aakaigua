---
title: Qol Bar 设置教程
author: AA
key: 2024-09-30-qolbar_config
tags: Qolbar Gua Dalamud
---

一个很好用的，自建快捷栏插件（外挂），支持绑定技能 id 以显示 cd、绑定键位、自定义图标、执行宏、折叠展开菜单等等。

<!--more-->

一些自己的设置：

腾讯文档版：太卡放弃更新了，作为参考留下。[qolbar 自用分享](https://docs.qq.com/doc/DTUFrb3hBRVdtc3VK)

Github 版：[Qol bar 分享](/2024/09/30/qolbar_share.html)

Github 版：[Qol bar 设置教程](/2024/09/30/qolbar_config.html)

**欢迎各位补充修改**

欢迎前往[讨论页面](https://github.com/DeepseaXX/aakaigua/discussions)参与讨论。

## 已知问题

使用微软输入法输入时会出现卡顿，按一次出三次的现象。换别的输入法可破。

## Qolbar 主界面

从左到右依次是
bar 管理、条件组、备份、设置、debug

![](/assets/images/Qolbar设置教程_2024-09-30-14-39-50.png)

### Bar Manager bar 管理

![](/assets/images/Qolbar设置教程_2024-09-30-14-39-55.png)

**编号和姓名**是/qolvisible on/off/toggle roll 指令中指定某特定 bar 用的。**设置和显隐切换**是在你不小心隐藏或者设置鼠标穿透后用的。**状态组**可设定仅在特定职业、战斗状态、地图等等条件下显示。**导出**剪贴板后可以和别人分享。

![](/assets/images/Qolbar设置教程_2024-09-30-14-39-58.png)

### Condition Sets 条件组

![](/assets/images/Qolbar设置教程_2024-09-30-14-40-02.png)

**示例 1**：25 号状态栏仅在当前职业为骑士，且战斗中才会出现。

![](/assets/images/Qolbar设置教程_2024-09-30-14-40-08.png)

**示例 2**：48 号状态栏仅在当前地图为无名岛时才会出现。

![](/assets/images/Qolbar设置教程_2024-09-30-14-40-13.png)
![](/assets/images/Qolbar设置教程_2024-09-30-14-40-17.png)

### Backup 备份

![](/assets/images/Qolbar设置教程_2024-09-30-14-40-34.png)

### Settings 设置

特别要注意如果想要图标上添加外框，和游戏自带快捷栏一样的效果需要选中左边第二条（Hotbar Frames on Icons）。

![](/assets/images/Qolbar设置教程_2024-09-30-14-40-39.png)![](/assets/images/Qolbar设置教程_2024-09-30-14-40-43.png)

图标模糊需要选中右边第二条。设置倍率时尤为明显。（HR Icons）

![](/assets/images/Qolbar设置教程_2024-09-30-14-40-54.png)

图标高清与非高清的效果。

![](/assets/images/Qolbar设置教程_2024-09-30-14-41-06.png)![](/assets/images/Qolbar设置教程_2024-09-30-14-41-09.png)

## Bar 设置

对快捷栏的外观、功能等详细设置。

### 总设置

在**右键**点击图标和图标中间的**缝隙**时展开设置（与/qolbar 处的 O 相同）。
**按住缝隙可以直接拖动**

![](/assets/images/Qolbar设置教程_2024-09-30-14-41-15.png)

![](/assets/images/Qolbar设置教程_2024-09-30-14-41-19.png)

![](/assets/images/Qolbar设置教程_2024-09-30-14-41-26.png)

按钮宽度为 0 时效果：

![](/assets/images/Qolbar设置教程_2024-09-30-14-41-35.png)

按钮宽度为 46 时效果：

![](/assets/images/Qolbar设置教程_2024-09-30-14-41-40.png)

### 子菜单设置

直接在图标上**右键**时展开子菜单设置。

![](/assets/images/Qolbar设置教程_2024-09-30-14-41-45.png)

### 编辑模式

编辑模式下单击加号，即可添加新按钮。详细设置方式后述。完成后点击 Create 创建，或复制现有菜单单击 Import 导入。

![](/assets/images/Qolbar设置教程_2024-09-30-14-41-52.png)

### 名称设置

::后接图标 id，##后接**鼠标悬停**时出现的文字，其他跟随在::后的字母有单独设置，见图。

![](/assets/images/Qolbar设置教程_2024-09-30-14-41-59.png)

示例：
图标 id 为 59，灰度图标，鼠标悬停时显示“宠物”。

![](/assets/images/Qolbar设置教程_2024-09-30-14-42-05.png)（原图标 ![](/assets/images/Qolbar设置教程_2024-09-30-14-42-09.png)）

### 图标设置

右键子菜单后，单击右下角进入（游戏自带）图标的浏览器。

![](/assets/images/Qolbar设置教程_2024-09-30-14-42-22.png)

![](/assets/images/Qolbar设置教程_2024-09-30-14-42-27.png)

悬停时可见图标编号，单击想要设置的图标，右键想要被设置的图标即可快速应用。

![](/assets/images/Qolbar设置教程_2024-09-30-14-42-39.png)

### 指令设置

分为三种类型，仅指令，目录和间隔符。如果设置为目录，既可以设置展开子菜单（推荐开启悬停时展开），单击时也可以执行指令。
指令既支持游戏自带[文本指令](https://ff14.huijiwiki.com/wiki/%E6%96%87%E6%9C%AC%E6%8C%87%E4%BB%A4)，也支持卫月插件的指令。

![](/assets/images/Qolbar设置教程_2024-09-30-14-42-47.png)

**示例：**
宠物按钮的类型设置为 Category，指令为/minionguide，且开启 Open on Hover，效果为悬停时打开子菜单，单击时打开游戏内置的“宠物一览”界面。

![](/assets/images/Qolbar设置教程_2024-09-30-14-42-57.png)

![](/assets/images/Qolbar设置教程_2024-09-30-14-43-01.png)

### 模式设置

设置图标的模式（个人感觉没卵用），颜色，绑定快捷键。

![](/assets/images/Qolbar设置教程_2024-09-30-14-43-06.png)

颜色的 rgb 值，用 qq 截图等工具悬停即可查看。A 为 Alpha 通道，即透明度。

![](/assets/images/Qolbar设置教程_2024-09-30-14-43-11.png)

### 子目录设置（仅在类型为目录时出现）

![](/assets/images/Qolbar设置教程_2024-09-30-14-43-37.png)

### 图标详细设置

![](/assets/images/Qolbar设置教程_2024-09-30-14-43-31.png)

**图标详细设置示例：**
从 id 为 10002000 的图标中截取各区域图标，并应用到各个按钮。

![](/assets/images/Qolbar设置教程_2024-09-30-14-43-54.png)

![](/assets/images/Qolbar设置教程_2024-09-30-14-43-59.png)

![](/assets/images/Qolbar设置教程_2024-09-30-14-44-03.png)

**绑定冷却技能 ID 示例：**
图标绑定技能石之心之后，同步显示技能 cd。由于刚玉之心是石之心的上位替换所以同样生效。

![](/assets/images/Qolbar设置教程_2024-09-30-14-44-11.png)

图中由上往下 1 和 2 为同时开启 1 和 3 的效果
3-7 是分别只开启 12345 的效果。根据自己喜好调整。

![](/assets/images/Qolbar设置教程_2024-09-30-14-44-15.png)
