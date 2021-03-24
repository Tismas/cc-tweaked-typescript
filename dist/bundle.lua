
local ____modules = {}
local ____moduleCache = {}
local ____originalRequire = require
local function require(file)
    if ____moduleCache[file] then
        return ____moduleCache[file]
    end
    if ____modules[file] then
        ____moduleCache[file] = ____modules[file]()
        return ____moduleCache[file]
    else
        if ____originalRequire then
            return ____originalRequire(file)
        else
            error("module '" .. file .. "' not found")
        end
    end
end
____modules = {
[".src.utils"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local Direction = Direction or ({})
Direction.positiveX = 0
Direction[Direction.positiveX] = "positiveX"
Direction.positiveZ = 1
Direction[Direction.positiveZ] = "positiveZ"
Direction.negativeX = 2
Direction[Direction.negativeX] = "negativeX"
Direction.negativeZ = 3
Direction[Direction.negativeZ] = "negativeZ"
local faceDirection = Direction.positiveX
local function rotateTowards(dir)
    while faceDirection ~= dir do
        turtle.turnRight()
        faceDirection = (faceDirection + 1) % 4
    end
end
function ____exports.goTo(position)
    local currentPos = vector.new(
        gps.locate()
    )
    local posDiff = position:sub(currentPos)
    while posDiff:length() > 1 do
        currentPos = vector.new(
            gps.locate()
        )
        posDiff = position:sub(currentPos)
        if math.abs(posDiff.z) >= 1 then
            if posDiff.z > 0 then
                turtle.up()
            else
                turtle.down()
            end
        elseif math.abs(posDiff.y) >= 1 then
            if posDiff.y > 0 then
                rotateTowards(Direction.positiveZ)
                turtle.forward()
            else
                rotateTowards(Direction.negativeZ)
                turtle.forward()
            end
        elseif math.abs(posDiff.x) >= 1 then
            local canMove
            if posDiff.x > 0 then
                rotateTowards(Direction.positiveX)
                canMove = turtle.forward()
            else
                rotateTowards(Direction.negativeX)
                canMove = turtle.forward()
            end
            if (not canMove) and (math.abs(posDiff.x) == 1) then
                break
            end
        end
    end
    local solidBlockInFront, blockInfo = turtle.inspect()
    return ((solidBlockInFront and blockInfo) and blockInfo.tags) and blockInfo.tags["minecraft:logs"]
end
return ____exports
end,
[".src.cut_simple_tree"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____utils = require(".src.utils")
local goTo = ____utils.goTo
local chestLocation = vector.new(144, 70, -276)
local treeLocations = {
    vector.new(142, -274, 71),
    vector.new(142, -279, 71),
    vector.new(147, -279, 71),
    vector.new(147, -274, 71)
}
local function cutTree()
    turtle.dig()
    turtle.forward()
    local height = 0
    while ({
        turtle.inspectUp()
    })[1] do
        turtle.digUp()
        turtle.up()
        height = height + 1
    end
end
for ____, treeLocation in ipairs(treeLocations) do
    if goTo(treeLocation) then
        cutTree()
        goTo(treeLocation)
    end
end
return ____exports
end,
[".src.example"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____utils = require(".src.utils")
local goTo = ____utils.goTo
goTo(
    vector.new(139, -277, 71)
)
return ____exports
end,
}
return require(".src.cut_simple_tree")
