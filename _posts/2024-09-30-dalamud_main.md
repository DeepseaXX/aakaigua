---
title: 卫月非官方无底线售后
author: AA
key: 2024-09-30-dalamud_main
tags: Gua Dalamud
---

## 写在前面

由于本人基本 AFK，打算开一个新坑介绍所有个人使用插件的主观推荐。其他作者已写的内容，大概率将直接贴链接而不是重复造轮。

懒了，我打算遇到什么问题写什么问题，以免天天回答一些车轱辘问题。

<!--more-->

善用 Ctrl+F 搜索，和左边目录功能

### 推荐阅读的其他文档

根据需求自取捏

- 无人岛体验提升的卫月插件已知汇总
- Qol bar 自用分享
- Qol bar 设置教程
- 狩猎触发用到的好物（工具）推荐

### 友情（陌生人）链接：

- 底线爆炸但是又不怎么爆炸的第三方库小小梦魇介绍：[卫月仓库链接整理 - 小小梦魇的博客 LittleNightmare Blog](https://blog.littlenightmare.top/2021/05/18/%E5%8D%AB%E6%9C%88%E4%BB%93%E5%BA%93%E9%93%BE%E6%8E%A5/)
- 外挂名搜挂网[XIV Plugins](https://xivplugins.com/)
- 介绍了很多底线爆炸挂和加载本地文件等等适合上不去 github 宝宝体质的解决方法 [-柒染凌-的个人空间\_哔哩哔哩\_bilibili](https://space.bilibili.com/32799123)
- [日本小小梦魇](https://toramemoblog.com/category/tools)（配合机翻食用）

## 写在前面的后面：看日志的方法

在游戏里输入`/xllog`，在游戏外找到卫月本地目录的 `dalamud.log`。

没有日志和清晰大截图，除了赛博老中医谁也没法解决你的问题！！！！！

问问题带日志和截图！不要让对方猜你遇到了什么问题！大家都是成年人了来点互相照顾！未成年就别开挂了。

### 私心安利 偷完魔改的 Clear Blue 卫月样式

在卫月设置，样式编辑器里导入。

```
DS1H4sIAAAAAAAACqVY3VPjNhD/Vxg/tTMMI8uyZeWNQDk6c3SYg/aufTOJSFxMnDoOxx1z/3v1sSvJskNhmhdb8u5vv1ervCRVMktPyHFyl8xeki/JrNSLP83zx3GySGZEbyyBSgIVASpykiuqe/X1OFkBzRqedTKj+lndAf3fwMyAOTMiHoC8AarHSBFmqDYRr91to11qdrcjJfXuP+qzEdQpgUaxHUju1dPQ7mHjCRC/wvoZsL454Dyw/vukuKqC7Wxg7aJVdr4kt/K5h+8pfDfPv+D52TwVvSY8r3fVXSOXY+mGwTwdw+d6s2y/zleOOC3KgnJWAE8qCsJLlgErFUTtpAaAnBjKPFUwZ+u6WYYoVLA05RxQqHovGE8BhWVpxmlu9bD2X7fb/TYEYCgJAHKtVwkAGcuJKAkCCL3IhIKZt91Sdh5Fi2ECUTKtBCkApBjYwnOtMnUYN+tKOWYcK2Amge4XXfUone6HAuRt8iyX7ZPsgkiVmfmBLLcyEt3KYDEPcrro6ydfaWVmLHEYsAIMWBmMQrmGaItv677xBiijMmEcXmISaCcSitGzwcQcMOmR5h4m0oe6YNsY4MpimcBRGqawRTlrm6ba7gLnvBfoSm7286r7/0l1s+iUMncDqNfywdF/6HQzAw6WlyXNcgyuEc1RfY5V5rQfgMR5YhTNBLqisFXKMcrGroNgUXzei3W2louHq6p78BmHzUK/WK4iFN7Uqp4GvihNgmF30PmjYonMwnagfBJilOzvA5rv+77FwyFoZzajTAqlrj8EeR5yx8GwNUUBhA11KJR85eARSGQHI4yUhS4xmxxpWuSUuOwoeV6moSaXshr0ORtDZKcUpUK7RQ0j/tgSakqZTXZLl70RRlzt74K4kduqq/rWW0LpoH1lwzKxHWsKIDYFARi6EMualyFbpP0BLivrk9zV3+WHrvYDAxfAoF8shwA5NB+wxPpx7K36BYKMbZkPOOOMR0b9YosNGYVpwkGZjU5he5hP9HFoveNOQ23QXEBtB8WjIB9371GJUsoEE+ioLBc6WV1AhcgIiXT4fXPfLvZh6yeFO4qUePVD21NWEvXDU1FwyiKMOMJKActvXaLanfphhjLKAlXO28VDvVldd/Kpln4U0LVtqxSDDvWtYui5fnnc9t+CA8PVJk5SgaDrpu0/1hu5c9SuJ+kX6EZTDMNw4eihSx4PtTxiu6x3fbtSk4OT5XJ4cJRNcBwSht4bDKJ6BLUd4n2TkWGEEazv2o33YOaaQjplXMD4sV6t+2BuQNe7KXbE92kwA792uHvy0+a/ZnKduDCU38hGLnoZzsiv5FGmK/m8q1bnXbu9rbqVPCTKK6cnld+qp0tlezO0/5Aca7/isZcAlbQx82HDeMR5Xj8GprkehS0Km6Iey9pl1Vi+tzEpZ+gbnZp1k1lycfHl1z+OzhpZdUfzZi+PbtfyUR79dHp6VT//nKirp70x4XVKzyKM5hk2MEYoV3OBOxl5ITiMfNYdvnvyqC7CLqUuum+getsVTL7pZnfvDXJnh3mzvoLTw9LGBae0Ihj7EHM9yvhiQnI9onLdN7iSWFq8sysakQvKMfVUCIqiEFiAfuk4Hw4meNiSG+/32PGiCJ3q25uL/AScnwTVWThZV5YO/zjwLmCZdejQVX4yKPR323X08WY1HLhK/cEQBSkn2NhCTD8blW7QZg6zyMPA+wOkdEccBsugA6UiVa1c7f74F30YWZLSEQAA
```

## 问题们

### 第三方插件安装失败怎么办，我用第三方库爆炸了怎么办，我找不到某第三方插件怎么办，有没有能实现 xxx 的功能的插件？

首先别去**国服卫月维护团队**问，去找**对应的作者或者反馈频道**。其次大家都是用爱发电（司马小店除外），别人给你回答是慈善，不愿意理你是正常。开挂本就逆天而行，有信息差是常态，但是先尝试自己思考自己寻找再解决。

**安装失败**大概率是因为没更新，小概率因为网络问题。具体看日志，或者带日志撞人。

**第三方库爆炸**可能是因为你用了国际服版本的，也有可能是作者学艺不精。还是那句话，开挂本就逆天而行，什么都有可能，但是在你问问题之前，先去找到你问题发生前后的日志，并描述你当时的操作。谁也不是赛博老中医，不会隔空知道你有什么问题。

**找不到某个挂了**，可能有各种原因：作者只放了压缩包，没放库导致你迷路了；作者摆了几天没更新；作者改名了，库地址突然变了但是你不知道。善用搜索，在 github 或者最上面的链接搜，可能会搜到。但是，耐心和好的态度永远会让你离答案更近一点。

有没有实现 xxx 功能的插件这个事情，我可能知道也可能不知道，如果你恰好有我的联系方式我又看见了，可能会说。我也想过把我会的都写下来，但是啥必闲鱼小店四个吗，我不能让他们赚黑心钱赚得太舒服，所以可能不会太公开写，尤其是那些底线爆炸的挂。

### 第三方库下载失败怎么办？

首先确认你能上 Github。不能的话，我只知道微软商店的上 Watt Toolkit，~~或者用 fastgit，~~或者其他国内代理。由于我没有这方面经验所以自行解决，多的我也不会。

### Fastgit？

举例，以下两个链接，第二个就是第一个的 fastgit 版本。另外替换格式不完全相同，自行搜索。

> https://raw.githubusercontent.com/44451516/XIVSlothCombo/CN/release/pluginmaster.json >https://raw.fastgit.org/44451516/XIVSlothCombo/CN/release/pluginmaster.json

### 本地包？

**现在大部分底线挂不支持本地包访问，并且因为无法及时得知更新情报导致各种爆炸，仅建议对自己水平足够自信、原作者跑路、实在没办法了的情况使用。**

可以从 fastgit 之类你能访问的地方下载 lastest.zip，导入 devplugins……算了太长了自己看这个（反正他写也是参考了我的图）（而且他也会发一些本地包）（但我的建议是非必要不使用本地包）。

https://www.bilibili.com/read/cv16837112

**使用本地包的，请保证你自己知道插件来源以及如何重复这个过程，以避免每次更新完找不到北然后到处去问。**

### 我英语不好，看不懂怎么办

Google，DeepL，有道，QQ 截图翻译等等

### 我在闲鱼小店买的挂/卫月，我!_(@&#^_(^&\*^!

首先想尽一切办法**退款**。卫月本体及第三方插件 99.9%（不排除真的有作者自己写了拿去卖）都是免费使用的，你不知道只是因为有信息差，并不是你没交钱。

所有宣称插件是自己写的、插件包更新包维护包售后、“我的挂无敌好用毕竟收费的就是比免费的好“的小店**都在放屁**，永远不要低估插件小店脸皮厚的程度。

### 我（以为我）加载了第三方库但是为啥搜不到 xxx？

检查一下这里 plz

并确定自己保存了。

再没有，看日志。

![](/assets/images/2024-09-30-dalamud_main_2024-09-30-15-25-19.png)

### Auto Action 为什么没了

用比喻的手法说就是，原作者一边不穿裤子在大街上拉稀后面的人被他 pua 给他擦屁股，然后他回头抱怨这群人擦屁股不够勤快，没有给他 996 免费打白工，所以国服不行，所以他去找洋大人给他擦屁股了。

顺便国服卫月 ban 掉 AutoAction 是因为原作者太跳，天天在 B 站发视频才 ban 的。

### Rotation Solver 为什么司马

`Rotation Solver` 就是`Auto Action`，又叫`Auto Attack`的原主作者司马转生产物。关于这个故事请参见上一条或者相关阅读：[NiGuangOwO/-](https://github.com/NiGuangOwO/-)

非要使用请选择去除了 40% 冗余代码的 `Rotation Solver Reborn`，或`AEAssistv3`谢谢喵。

#### 上古手搓替代品？Sloth Combo+Something need doing

**SC**

国服汉化维护版本，感谢菩萨。（可能已过期，自己看着办）
https://raw.githubusercontent.com/44451516/XIVSlothCombo/CN/release/pluginmaster.json
https://raw.fastgit.org/44451516/XIVSlothCombo/CN/release/pluginmaster.json

**SND**

在国服和国际服版本同步的时候 daemitus 库直接能下，不同步的时候 CN 分支。库见小小梦魇。

举例：这个宏可以无限循环以 0.28 秒间隔按下 1 键。`/pcraft run 宏名 启动`，`/pcraft stop 停止`。

```
/send KEY_1 <wait.0.28>
/loop
```

### 理符？

DR

### 此插件年代过于久远 blablah 反正要卸载但是不让卸载怎么办？

绿色方法：关游戏，找到本地目录，删除，开游戏
开挂方法：用下面的库，`UnloadErrorFuckOff`，用`/fuckoff` 之后直接点击卸载
https://raw.githubusercontent.com/Eternita-S/MyDalamudPlugins/main/pluginmaster.json

### json 文件怎么打开阿？

json 文件，和 txt 文件一样，都是文本文档，最简单的方法用**记事本**就能打开。

### 他们视频里打本地上有范围，怎么弄

`NyaDraw`或`Splatoon`，被 ban 的话自己找 unban，我不开，不打高难，不知道。

### 侧边雷达小窗的范围提示/自动躲黄圈跑机制/Fate 跑机制/灿烂神域半自动

侧边雷达小窗的范围提示是`Boss Mod`或者由`Boss Mod Reborn`。自带这两家作者/团队之间有矛盾，功能互有高低，建议是都装上试试。

基本的黄圈不需要适配也可以躲，部分特殊机制需要特殊的适配，不一定有。部分没适配的副本开启了 AI 功能会跳崖，慎用。

灿烂神域老一老二的击退无法处理会死。道中需要自己跑。

### 他们让我改 Api 版本，怎么改阿？/远古挂爆炸了但是听说改 api 版本能用怎么办啊？

首先找到你卫月本地位置，蓝月亮（红月亮结构差不多自己找找）的话，在”`Dalamud\XIVLauncherCN\Roaming\installedPlugins`“下，有你用正常方法安装的插件本体。如果是本地就 `devplugins`。打开你需要修改的文件夹，内部找到“插件名.json”并打开（不会打开前面找找如何打开 json），找到
"`DalamudApiLevel`": ，将后面的数字+1。通常情况下是+1，但是有跨越版本的千年老挂的情况，那样就自己改成对应版本（比如现在游戏 6.3 对应 api8）。最后，挪到 `devplugin`（无论以前在哪），并走一遍加载本地插件的流程。

### 我要上月球

Cammy

### 我用了国际服的库，这个版本没问题，但是……

只要游戏没更新，现在的挂还能用，就别更新别更新别更新，尤其是国际服进新版本了的时候。不能用怪自己。

### 我找了这个挂只有国际服版本，咋下旧版

pu 门等，库非公开，导致无法浏览 history 的不适合此方法。

直接用浏览器访问国际服的库，找到 DownloadLinkInstall

比如我找到了如下这个链接（https://github.com/daemitus/MyDalamudPlugins/raw/master/plugins/SomethingNeedDoing/latest.zip），但是先不要下载，把这个链接修饰一下，raw改成tree，然后找history，找到国际服更新日期之前的最后一个版本，小概率能用，大概率爆炸，爆炸了就没有然后了。

### xx 什么时候更新啊

不知道，问作者，问到他觉得你是冷漠贪婪的用户为止。

### 蓝月亮和红月亮

- 蓝月亮是啥？
  盛趣游戏登陆器（扫码一次免密一周）、游戏更新器、卫月注入器、同时拉起其他外挂器的高级玩意
- 红月亮是啥？
  俗称拉屎器，原地拉屎，原地更新，直接注入的粗暴玩意

### 我想改用蓝/红月亮，我怎么把我现在的配置带过去阿？

找到 Dalamud\XIVLauncherCN\Roaming （或者长差不多的）文件夹，把 `dalamudUI.ini`，`dalamudConfig.json` `pluginConfigs` `installedPlugins （devPlugins）`等所有长得像配置的都带走谢谢喵。（没有就无视）

或者用胖鸟的 ACT 配置迁移（软连接）助手。https://github.com/MapleRecall/ACT.Dalamud.Updater/releases

### 我用自动注入，FF 启动就黑屏怎么办？

蓝月亮设置延迟注入 5000ms，红月亮延迟 5s 可解决。

### 有些 Penumbra 加载的 mod（例如目标圈）无效怎么办？

Penumbra 设置还是卫月设置忘了，有一个等插件加载完毕后再启动游戏。

### 我想要那个自动那啥，在哪？

这四个聚集了很多底线爆炸挂，还是没有就去看小小梦魇

如果我说了 puni.sh 就是这个（俗称 pu 门）

`https://love.puni.sh/ment.json`

pu 门其他分支

veyn（vnavmesh 原版）

`https://puni.sh/api/repository/veyn`

veyn 自己的

`https://github.com/awgil/ffxiv_plugin_distribution/raw/master/pluginmaster.json`

如果我说了 niguang （逆光）就是这个

`https://raw.githubusercontent.com/NiGuangOwO/DalamudPlugins/main/pluginmaster.json`

如果我说了初春就是这个

`https://raw.githubusercontent.com/uiharuayako/DalamudPlugins/main/pluginmaster.json`

如果我说了 gamous 就是这个

`https://raw.githubusercontent.com/gamous/DalamudPluginsCN-Dev/main/MordionGaol.json`

moewcorp

`https://raw.githubusercontent.com/moewcorp/DalamudPlugins/main/pluginmaster.json`

獭三方，包括但不限于 Penumbra Glamourer Mare

`https://dalamud_cn_3rd.otters.cloud/plugins/Mare`

`https://dalamud_cn_3rd.otters.cloud/plugins/Penumbra`

`https://dalamud_cn_3rd.otters.cloud/plugins/Glamourer`

`https://dalamud_cn_3rd.otters.cloud/plugins/all`

Reborn 团队
`https://raw.githubusercontent.com/FFXIV-CombatReborn/CombatRebornRepo/main/pluginmaster.json`
忘了，见过，但是忘了

```
https://raw.githubusercontent.com/NightmareXIV/MyDalamudPlugins/main/cn.json
https://raw.githubusercontent.com/LeonBlade/DalamudPlugins/main/repo.json
https://raw.githubusercontent.com/grammernatzi/MyDalamudPlugins/master/pluginmaster.json
https://raw.githubusercontent.com/UnknownX7/DalamudPluginRepo/master/pluginmaster.json
https://raw.githubusercontent.com/Nik-Potokar/MyDalamudPlugins/main/pluginmaster.json
https://github.com/NightmareXIV/MyDalamudPlugins/raw/main/pluginmaster_experimental.json

```

那个 Material UI 的

`https://raw.githubusercontent.com/Sevii77/ffxiv_materialui_accent/master/repo.json`

某个梦魇

`https://raw.githubusercontent.com/LittleNightmare/MyDalamudPlugins/main/repo.json`

哈哈牙刷

`https://raw.githubusercontent.com/tssailzz8/MyPlugins/master/pluginmaster.json`

daemitus

`https://raw.githubusercontet.com/daemitus/MyDalamudPlugins/CN/pluginmaster.json`

Karlin K 佬！

`https://raw.githubusercontent.com/Karlin-Z/DalamudPlugins/Api4/pluginmaster.json`

dr，atmosphere 门(还有一个国外用的来着)

`https://gh.atmoomen.top/DalamudPlugins/main/pluginmaster-cn.json`

4679

`https://raw.githubusercontent.com/4679/DalamudPlugins/main/repo.json`

Errer！

`https://gitea.com/Errer/NekohackAuth/raw/branch/main/pluginmaster.json`

Yarukon
`https://github.com/Yarukon/Ktisis/raw/main/repo.json`

### 我是笨蛋怎么办？

我希望大家永远不要嘲笑谦虚的笨蛋，但是作为一个笨蛋，学会从别人的角度思考自己的问题是否具体，是否清晰，是否得体，会让你的问题解决得更快，也让人更想要去帮你解决问题。

~~加薪小指南~~关联阅读：[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)
