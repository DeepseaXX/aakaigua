---
title: 【DLSS】在 NVIDIA APP 中强行开启 dlss 模型选项
author: AA
key: 2026-05-04-nvapp-dlss
tags: Fate DLSS
---

反正就是国服莫名其妙不能直接在 NVIDIA APP 里修改 DLSS 版本和模式，得自己操作一下。

<!--more-->

## 写在前面

相比 FF14 自带的 dlss 版本，至少 dlss 4 也就是 Present K 开始，画质有了非常明显的提升。国际服不需要这样修改，国服默认不支持，所以需要使用这个方法启用修改选项。

本文使用的修改方法参照 [NGA 帖子](https://bbs.nga.cn/read.php?pid=816049181&opt=128)

### 相比 DLSS Mod

如果你已经在使用 DLSS Mod，而且目前运行一切正常，那么完全没必要为了这篇文章再重新折腾一遍。除了需要自行下载模型文件之外，DLSS Mod 最终实现的效果与本文介绍的方法基本一致。两者的主要区别在于：

* 本文的方法配置不需要额外安装和维护 Mod。
* 理论上兼容性问题会更少，例如曾经存在的与卫月（Dalamud）无法正常交互的问题。
* 如果你已经在用 DLSS Mod，或者需要它提供的额外功能，继续使用 DLSS Mod 也完全没问题。

不过就我个人的使用体验来看，我已经使用 DLSS Mod 很长时间了，最近基本没有再遇到过无法与卫月交互的情况。因此，这方面的差异现在已经没有以前那么明显。

**DLSS Mod 相关阅读**

* [幻想科技 PVP 看烦了？来试试最新最潮的 DLSS4 Mod 吧！效果真不错！ 178](https://nga.178.com/read.php?tid=43115798)
* [nexus 站 DLSS Mod 下载地址](https://www.nexusmods.com/finalfantasy14/mods/2196?tab=description)
* [其他 DLSS Mod 中文教程](https://www.bilibili.com/opus/981581592623316993)：

### 我该用哪个模型？

以下个人观点+AI 总结且仅限 N 卡，不是专业测评所以给不出太多太详细的建议，具体使用哪个配置以及哪个超分模式更好，请带着自己的配置单去找 AI 聊聊。

首先只要是 RTX 显卡都可以用 DLSS 最新模型，例如 30 系也可以使用 DLSS4 或 4.5 只是不能使用 DLSS4 中的倍帧而已。

* 最常规配置：Preset K（DLSS 4）。~~如果性能足够，推荐开启 DLAA。~~相比游戏自带模型，画质提升明显，运动镜头下的清晰度更高，“一动就马赛克”的情况大幅缓解。
* 推荐高端显卡：Preset L（DLSS 4.5）。适合高分辨率 / Ultra Performance 模式。相比 K，性能更高，适合 4K 及以上分辨率或追求极限帧数的场景。
* 推荐较弱显卡：Preset M（DLSS 4.5，仅限 Performance 模式）适合 50% 内分辨率的 Performance 模式。在高画质模式下表现不佳，因此弱显卡使用 M 时应避免 Quality / Balanced。

※更新：无论哪个模型， `DLSS 优设 - 超分辨率模式` 强制开启 DLAA 之后会出现非常强烈的全屏锯齿抖动，不建议开启，使用默认 `使用 3D 应用程序设置` 即可。

### 那我要不是 N 卡呢？

请使用 DLSS Mod，可以替换成 XeSS 或 FSR。

* [nexus 站 DLSS Mod 下载地址](https://www.nexusmods.com/finalfantasy14/mods/2196?tab=description)
* [其他 DLSS Mod 中文教程](https://www.bilibili.com/opus/981581592623316993)：

## 具体步骤

以下几种方案，选一种实现即可，分别是：让把国际服的识别特种搬家到国服客户端、外挂、和修改配置 json。

### Daily Routines 插件功能

Daily Routines 中搜索 `DLSS` 并开启

![](assets/images/2026-05-04-nvapp-dlss_2026-05-06-19-14-26.png)

（特别鸣谢猫耳娘）

### boot 内文件拷贝方法（个人推荐）

NVIDIA App 判断 FF14 是否为国际服，主要是检查 FF14 游戏目录是否满足下面几个条件：

a. `boot` 目录下存在 `ffxivboot.exe`

   效果应为： `最终幻想 XIV\boot\ffxivboot.exe`

b. `boot` 目录下存在 `ffxivupdater64.exe`

   效果应为： `最终幻想 XIV\boot\ffxivupdater64.exe`

c. 游戏根目录下不存在旧版启动器 `FFXIVBoot.exe`

   如果有，可以先重命名备份为其他文件名。
   （启动器可以从官网下载新版 `FFXIVBootV3.exe` 替代。）

d. **（待查证）**游戏根目录下不存在 `FFXIVRepair.exe`

   如果前面几项都处理好了，但 NVIDIA App 反复扫描还是识别不成国际服，可以尝试把这个文件也改个名字。

具体操作：

1. 前两项并不需要真正的程序文件。**直接在本地新建两个随便什么文件（比如空白记事本），然后分别把文件名改成 `ffxivboot.exe` 和 `ffxivupdater64.exe` ，再放进 `boot` 目录即可。**

2. 后两项如果原本存在，可以先重命名或者备份到其他地方，不需要直接删除。

3. 完成后重启 NVidia APP。

> **特别注意：**如果你把文件改成 `.exe` 以后，双击发现还是能直接用记事本打开，那大概率是 Windows 隐藏了文件扩展名。实际文件名可能变成了 `ffxivboot.exe.txt` 。这种情况可以自行搜索一下「Windows 怎么显示文件扩展名」，打开扩展名显示后再重新修改。

如果这些都做完了，NVIDIA App 反复扫描还是无法识别成国际服，可以再试试把根目录下的 `FFXIVRepair.exe` 重命名。

（同样鸣谢猫耳娘）

### 手动修改 json 步骤（繁琐，不建议）

1. 进入路径 `%LocalAppData%\NVIDIA Corporation\NVIDIA App\NvBackend`
2. 在文件夹中找到 `ApplicationStorage.json`，建议先备份一份，然后使用记事本或代码编辑器打开。
3. 搜索目标字段在文件中搜索关键词 `final fantasy`，或 `ffxiv` 。（此时你可以看到，搜索定位附近有 `"DisplayName": "Final Fantasy XIV - DX9"`,                       `"ShortName": "final_fantasy_xiv_kr"`的关键字，还有路径中有国服特色 `上海 XX 科技有限公司`字样）~~（别问为什么是 DX9，为什么是 kr，我也不知道）~~
4. 找到该项目后，将其下方的以下几项全部改为 false：

* "Disable_FG_Override": false
* "Disable_RR_Override": false
* "Disable_SR_Override": false
* "Disable_RR_Model_Override": false
* "Disable_SR_Model_Override": false

（我在重启之后有几个项被重置成了 true，但是对修改模型没影响）

5. 保存并关闭文件。随后重启电脑。

6. 然后就可以在 NVidia APP 的 `图形-程序设置-驱动程序设置`中，`DLSS 优设 - 模型预设`修改模型，`DLSS 优设 - 超分辨率模式`修改模式。

## 判断正在使用的模型方法

贴出这篇帖子（[\[幻想科技、] \[2/4 更新正式版、] 来试试最新最潮的 DLSS4 Mod 吧！效果真不错！ 178](https://nga.178.com/read.php?tid=43115798)）里的方法

> 验证方法：修改注册表项开启左下角 DLSS 信息显示 `\HKEY_LOCAL_MACHINE\SOFTWARE\NVIDIA Corporation\Global\NGXCore` ，
> 右侧新建 DWORD 值命名为 `ShowDlssIndicator` ，数值设置为十进制 1024（或者 16 进制 0x400) 保存，
> 验证完了没问题把这个删掉就可以还原。
