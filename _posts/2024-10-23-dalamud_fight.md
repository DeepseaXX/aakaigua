---
title: Dalamud 卫月战斗系列
author: AA
key: 2024-10-23-dalamud_start
tags: Gua Dalamud Fighting
---

<!--more-->

## 写在前面

以下全部是挂！！脚本！！！

请各位像个人！！！！

暂时不包含 PvP！！！

## AntiAfkKick - 防 T

挂亲信、采集、制作等，虽然角色在动，但是依然判定你为离开状态，不开防 T 的话会被干走。

`https://raw.githubusercontent.com/NightmareXIV/MyDalamudPlugins/main/pluginmaster.json`

`https://raw.githubusercontent.com/MeowZWR/DalamudPlugin/main/repo.json`

## 自动战斗循环

### AEassist3.0

[【AEAssist 教程】内含 DC 链接等内容](https://docs.qq.com/doc/DVWxNZWx1ZW5qVFZC)
https://docs.qq.com/doc/DVWxNZWx1ZW5qVFZC

### BossMod 内置

个人推荐仅在开启 BossMod AI 时联动使用。

### Rotation Solver / Reborn

你们用我不拦着，但是别指望我介绍这玩意。

非要用请用 Reborn。

## 大脑按摩类

### BossMod / BossMod Reborn - 小窗雷达画图

这俩的前世今生：BMR 团队（？）跟 BM 作者理念不合分家，但是 BMR 一直在同步 BM 的代码，这让 BM 及其追随者非常不爽。

使用起来基本没有太大区别，会有一些细节上存在优劣。~~反正我都是都装了，看心情用哪个~~

国服能用的库：

BM：`https://raw.githubusercontent.com/44451516/ffxiv_bossmod/CN/pluginmaster.json`

BMR：`https://raw.githubusercontent.com/44451516-ff14/BossmodRebornCN/refs/heads/main/pluginmaster.json`

### NyaDraw - 使用游戏原生特效实现的画图

库：`https://raw.githubusercontent.com/NiGuangOwO/DalamudPlugins/main/pluginmaster.json`

Discord：`https://discord.com/channels/1255182937540919396/1255350055049887774`

### Splatoon / X - 使用 Imgui 绘制的拟真画图

盲区

## vnavmesh - 自动寻路

国服能用的版本

国内`https://gh.atmoomen.top/DalamudPlugins/main/pluginmaster-cn.json`

国服版本的国际库`https://raw.githubusercontent.com/AtmoOmen/DalamudPlugins/main/pluginmaster.json`

建议搭配本人的 qolbar 食用

![](/assets/images/2024-10-23-dalamud_fight_2024-10-23-22-54-49.png)

```
H4sIAAAAAAAACqWTQUvDMBiG/8r48BhrmrZLmpse9DIQ9OBBd6ilm8LWjrUrjDGYiA4V3Tx4mVMG3nYQPAmCP6fb+i/8pnTDOUEqIdDvfb/kSfqSBqwE9YoDEhwgcMhANmYKVgRc/AhdKyw7/hGWfg7k/rzFT1om7WHcuogeuvHwFiUbpbWyV3ODzPjmKjofRJ3XAxeN421cTxVKcOax3AE5rcDeraAhiJ5vkiXbj++fR4N2snFynkzZC53AqhadYGqVQOqMm4LhMFKjNnPrW0tBhZJVnGGErgk1a6bHRCf9HxQ/8CrziwhmUKaZ6QmfYcS9zqj/lqCis5e41Rtdtian75kva5ZZSkz89PhLOoVSfSEcIbiuMs7/A1uaD6K+x8Mp5xpPH8+k04+u7xY5f/tLKFuo4nPaA2loBKYOVbjgwlRVskoVU9NNIYwsdtoenhffVbIa8Rsgg2rNaRIIEc4UDQeF5gc4VfljqwMAAA==
```

## 根据场景的自动化方案

### Fate

大致思路：

- 跟随队友 或使用 Mappy 的 FateList（地图界面的右键开启）标点后使用 Vnavmesh 寻路到下一个点位
- 落地输出（可用任何一个输出插件。个人推荐 AE，BM 有路上吸引野怪仇恨之后直接原地下坐骑开打的问题）
- 躲避黄圈：Bossmod / Bossmod Reborn
- 结束提醒：ChatAlerts/ACT 触发器
- 跟随队友

### Autoduty - 亲信及副本的自动路线规划

`https://puni.sh/api/repository/herc`

需要

- vnavmesh 跑路
- BM/BMR 的 AI 功能躲避伤害
- 以及任何一个自动输出插件

#### Tips

- Trust=亲信（就是会被拂晓卡等级的那个）
- Support=副本辅助器
- 如果路径是灰色看 Paths 是否下载成功
- 灿烂神域除了老一老二两个击退机制，其他搭配 BM/BMR 可完美运行

## 功能性

嗯……不是很能想得起来具体的，
那种会让罗阁寺变红的我都不怎么用。

### Pandora - 底裤版的 Simple Tweaks

建议挨个翻翻选项。包括但不限于自动疾跑，快速交军票等。

### Gearsetter - 自动最强装备

`https://plugins.carvel.li/`

### Deliveroo - 自动交军票

`https://plugins.carvel.li/`

### Waymark Present - 标点存储/放置

[标点文档：群精华/群公告 用卫月导入，塔塔露都会](https://docs.qq.com/doc/DZENUSml5VEluZ3lm?u=undefined)

#### FF14 标点大全（截止到 P8S）

[钻石神兵前](https://docs.qq.com/sheet/DY0ttR2xQT1Vjc2V4?tab=BB08J2)：https://docs.qq.com/sheet/DY0ttR2xQT1Vjc2V4?tab=BB08J2

[按摩店之后](https://bbs.tggfl.com/topic/223/ff14%E5%8D%AB%E6%9C%88-waymark-present-%E6%A0%87%E7%82%B9%E5%90%88%E9%9B%86)

[高难副本标点数据(从 6.5 开始持续更新) 178](https://nga.178.com/read.php?tid=39468696&fav=:FF3CFBCDB)
https://nga.178.com/read.php?tid=39468696&fav=:FF3CFBCDB

### LazyLoot - 自动 roll 点

类似的有很多。比如我自己用的是 Simple Tweaks 的“roll 完一个物品自动跳转到下一个”。

库：`https://raw.githubusercontent.com/NiGuangOwO/DalamudPlugins/main/pluginmaster.json`

### FuckAnimationLock - 三插

`https://raw.githubusercontent.com/NiGuangOwO/DalamudPlugins/main/pluginmaster.json`

### FF Logs Viewer (CN) - 游戏内出警

`https://raw.githubusercontent.com/NukoOoOoOoO/DalamudPlugins/dev/pluginmaster.json`

### Something Need Doing - 功能更强的宏

`https://raw.githubusercontent.com/WorkingRobot/MyDalamudPlugins/main/plogon.json`
