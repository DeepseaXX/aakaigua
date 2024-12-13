---
title: 多变迷宫下上盾自奶上Dot的土制触发器 Something Need Doing
author: AA
key: 2024-11-02-varient_content_action.md
tags: Gua Dalamud SomethingNeedDoing Varient
---

## 写在前面

因为某挂在 7.0 更新后移除了相关支持，所以用 SomethingNeedDoing 手搓了一个。

粗制滥造！主打一个能用就行！别喷！

原理是每 n 秒（默认 2 秒）检测一次自己的血量，自己身上有无盾，和敌人有无 dot，然后判断条件使用技能。

已知问题：在开启脚本的时候与任务目标比如绳索、传唤铃互动会爆炸！！！！！！！！！！！！！！！！！！！需要在互动其他目标时手动关闭。

~~感谢 Autoduty~~

Autoduty 中六根山的 12 号路线 估计需要 rsr 才能精准控制点灯。

7 和 12 号路线的跳跳乐需要手动接管。

4 号路线中输出工具不带打断的话也会失败。


## 使用方法

- 把下面代码粘贴进 SomethingNeedDoing
- 开启 Lua 模式！！！！
- 开启 Lua 模式！！！！
- 开启 Lua 模式！！！！
- 根据自己的多变技能槽位设置开头的参数 游戏界面上左边是 2 右边是 1
- 根据需求修改其他参数
- 点播放键开始检测，期间会一直检测
- 点上部 Macro Queue 右侧的方块键停止

```lua
--[[
开LUA模式再开启！
开LUA模式再开启！
开LUA模式再开启！
开LUA模式再开启！
开LUA模式再开启！
--]]
-- 你的多变技能槽位，0时不执行
-- 游戏界面上左边是2 右边是1
VarientShield = 0
VarientDot = 2
VarientHeal = 1
-- 低于血量百分比时治疗
VarientHealBelow=70
-- 检测的时间间隔
VarientCheck=2


function UseVarientHeal()
    for i = 1, 10 do
        yield("/共通技能 任务指令" .. VarientHeal .. " <1> <wait.0.2>")
    end
    -- yield("/e UseVarientHeal end")
end

function CheckMyHP()
    remain = GetHP() * 100 / GetMaxHP()
    if remain <= VarientHealBelow then
        UseVarientHeal()
    end
end

function UseVarientDot()
    for i = 1, 10 do
        yield("/共通技能 任务指令" .. VarientDot .. " <wait.0.2>")
    end
    -- yield("/e UseVarientDot end")
end

function CheckTargetDot()
    -- 目标的dot
    -- 目标类型为2，BattleNpc时检测，防炸
    if GetTargetObjectKind() == 2 then
        -- 目标的dot状态检测
        if not TargetHasStatus(3359) then
            UseVarientDot()
        end
    end
end

function UseVarientShield()
    for i = 1, 10 do
        yield("/共通技能 任务指令" .. VarientShield .. " <wait.0.2>")
    end
    -- yield("/e UseVarientShield end")
end

function CheckMyShield()
    -- 8秒盾，不需要就把if删掉注释掉
    if not HasStatusId(3405) then
        UseVarientShield()
    end
    -- 60秒盾，不需要就把if删掉
    if not HasStatusId(3360) then
        UseVarientShield()
    end
end

while true do
    if VarientShield == 1 or VarientShield == 2 then
        CheckMyShield()
    end
    if VarientDot == 1 or VarientDot == 2 then
        CheckTargetDot()
    end
    if VarientHeal == 1 or VarientHeal == 2 then
        CheckMyHP()
    end
    -- 执行间隔
    yield("/wait "..VarientCheck)
end
```
