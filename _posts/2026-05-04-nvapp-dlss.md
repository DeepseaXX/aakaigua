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

这篇文章介绍的方法，相比使用 DLSS Mod 也就是是省事了一点，少了一点兼容性问题例如不能与卫月交互。但其实我最近用 DLSS Mod 已经很久没遇到过无法交互卫月的问题了，所以请自己判断选择。

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

以下几种方案，分别是让把国际服的识别特种搬家到国服客户端、修改配置 json，还有外挂黑科技……

### Daily Routines 插件功能

Daily Routines 中搜索 `DLSS` 并开启

![](assets/images/2026-05-04-nvapp-dlss_2026-05-06-19-14-26.png)

（特别鸣谢猫耳娘）

### boot 内文件拷贝方法

NVIDIA APP 的检测 FF14 国际服的原理，是识别 FF14 目录下 boot 文件夹 （目录示例 `最终幻想 XIV\boot` ）是否包含 `ffxivboot.exe` 和 `ffxivupdater64.exe` 文件。

所以如果你恰好有国际服客户端，把这两个文件拷贝过来就可以。

（特别鸣谢猫耳娘）

### 手动修改 json 步骤

1. 进入路径 `%LocalAppData%\NVIDIA Corporation\NVIDIA App\NvBackend`
2. 在文件夹中找到 `ApplicationStorage.json`，建议先备份一份，然后使用记事本或代码编辑器打开。
3. 搜索目标字段在文件中搜索关键词 `final fantasy`，或 `ffxiv` 。（此时你可以看到，搜索定位附近有 `"DisplayName": "Final Fantasy XIV - DX9"`,         `"ShortName": "final_fantasy_xiv_kr"`的关键字，还有路径中有国服特色 `上海 XX 科技有限公司`字样）~~（别问为什么是 DX9，为什么是 kr，我也不知道）~~
4. 找到该项目后，将其下方的以下几项全部改为 false：

* "Disable_FG_Override": false
* "Disable_RR_Override": false
* "Disable_SR_Override": false
* "Disable_RR_Model_Override": false
* "Disable_SR_Model_Override": false

（我在重启之后有几个项被重置成了 true，但是对修改模型没影响）

5. 保存并关闭文件。随后重启电脑。

6. 然后就可以在 NVidia APP 的 `图形-程序设置-驱动程序设置`中，`DLSS 优设 - 模型预设`修改模型，`DLSS 优设 - 超分辨率模式`修改模式。

### 自动备份并修改 json 脚本

有点计算机基础懒得当织布工人的，可以在理解了的基础上直接去看自动化脚本流程，如果看不太懂那个脚本在干嘛可以自己手动执行一遍理解流程。自动化只是省去了自己动手的过程，操作是一样的。

以下为流程自动化脚本，复制粘贴为 `任意名。ps1` 并保存为 UTF-8 with BOM 后运行生效。（具体怎么运行还有那些权限问题自己百度，实在不行带着这个去问 AI）

```powershell
<#
.DESCRIPTION
    FFXIV NVIDIA App 配置修正工具

    【脚本行为】
    1. 自动定位 NVIDIA App 的 ApplicationStorage.json。
    2. 备份原文件为 ApplicationStorage.json_bak（位于同目录下）。
    3. 解析 JSON，将 final_fantasy_xiv 对应的五项禁用开关设为 false。
    4. 强制以 UTF-8 （无 BOM) 格式保存，解决中文路径或字符乱码问题。

    【手动修复/回滚步骤】
    5. 关闭所有 NVIDIA 相关程序（包括任务栏图标）。
    6. 进入文件夹：%LOCALAPPDATA%\NVIDIA Corporation\NVIDIA App\NvBackend
    7. 如果文件损坏：删除 ApplicationStorage.json。
    8. 恢复备份：将 ApplicationStorage.json_bak 重命名为 ApplicationStorage.json。
    9. 如果遇到无法运行脚本，请右键此脚本选择 "使用 PowerShell 运行"。
#>

# 强制设置控制台编码为 UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# 1. 路径定义
$targetDir = "$env:LOCALAPPDATA\NVIDIA Corporation\NVIDIA App\NvBackend"
$filePath = Join-Path $targetDir "ApplicationStorage.json"
$backupPath = $filePath + "_bak"

Write-Host "----------------------------------------------------" -ForegroundColor Gray
Write-Host "[1/3] 检查配置文件。.." -ForegroundColor Cyan

if (-not (Test-Path $filePath)) {
    Write-Host "[错误] 找不到文件，请确保已安装 NVIDIA App。 " -ForegroundColor Red
    pause; exit
}

try {
    # 2. 备份文件
    Write-Host "[2/3] 创建备份：$backupPath" -ForegroundColor Cyan
    Copy-Item -Path $filePath -Destination $backupPath -Force

    # 3. 解析与修改
    Write-Host "[3/3] 正在处理 JSON 数据。.." -ForegroundColor Cyan

    # 使用 .NET 方式读取，确保编码不出错
    $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
    $rawText = [System.IO.File]::ReadAllText($filePath, $utf8NoBOM)
    $jsonContent = $rawText | ConvertFrom-Json

    $found = $false
    foreach ($item in $jsonContent.Applications) {
        if ($item.Application.ShortName -eq "final_fantasy_xiv_kr") {
            # 修改参数
            $item.Application.Disable_FG_Override = $false
            $item.Application.Disable_RR_Override = $false
            $item.Application.Disable_SR_Override = $false
            $item.Application.Disable_RR_Model_Override = $false
            $item.Application.Disable_SR_Model_Override = $false
            $found = $true
            break
        }
    }

    if ($found) {
        # 转换为压缩后的 JSON （无空格换行，匹配原版格式）
        $newJson = $jsonContent | ConvertTo-Json -Compress -Depth 100

        # 强制以 UTF-8 无 BOM 格式写回
        [System.IO.File]::WriteAllText($filePath, $newJson, $utf8NoBOM)

        Write-Host "`n[√] 修改成功！已解锁 FFXIV 功能限制。 " -ForegroundColor Green
    }
    else {
        Write-Host "`n[!] 未找到 FFXIV 配置块，请确认游戏已被 NVIDIA App 识别。 " -ForegroundColor Yellow
    }

}
catch {
    Write-Host "`n[×] 发生错误：$($_.Exception.Message)" -ForegroundColor Red
    Write-Host "请确保以管理员身份运行，并彻底退出 NVIDIA App。 " -ForegroundColor Gray
}

Write-Host "`n 操作完成，按任意键退出。.." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

```

## 判断正在使用的模型方法

贴出这篇帖子（[\[幻想科技、] \[2/4 更新正式版、] 来试试最新最潮的 DLSS4 Mod 吧！效果真不错！ 178](https://nga.178.com/read.php?tid=43115798)）里的方法

> 验证方法：修改注册表项开启左下角 DLSS 信息显示 `\HKEY_LOCAL_MACHINE\SOFTWARE\NVIDIA Corporation\Global\NGXCore` ，
> 右侧新建 DWORD 值命名为 `ShowDlssIndicator` ，数值设置为十进制 1024（或者 16 进制 0x400) 保存，
> 验证完了没问题把这个删掉就可以还原。
