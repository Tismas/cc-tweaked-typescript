--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
-- Lua Library inline imports
function __TS__StringIncludes(self, searchString, position)
    if not position then
        position = 1
    else
        position = position + 1
    end
    local index = string.find(self, searchString, position, true)
    return index ~= nil
end

Direction = Direction or ({})
Direction.positiveX = 0
Direction[Direction.positiveX] = "positiveX"
Direction.positiveZ = 1
Direction[Direction.positiveZ] = "positiveZ"
Direction.negativeX = 2
Direction[Direction.negativeX] = "negativeX"
Direction.negativeZ = 3
Direction[Direction.negativeZ] = "negativeZ"
faceDirection = Direction.positiveX
rotateTowards = function(dir)
    while faceDirection ~= dir do
        turtle.turnRight()
        faceDirection = (faceDirection + 1) % 4
    end
end
function goTo(position)
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
                rotateTowards(Direction.negativeZ)
                turtle.forward()
            else
                rotateTowards(Direction.positiveZ)
                turtle.forward()
            end
        elseif math.abs(posDiff.x) >= 1 then
            if posDiff.x > 0 then
                rotateTowards(Direction.negativeX)
                turtle.forward()
            else
                rotateTowards(Direction.positiveX)
                turtle.forward()
            end
        end
    end
    local solidBlockInFront, blockInfo = unpack(
        turtle.inspect()
    )
    return solidBlockInFront and __TS__StringIncludes(blockInfo, "logs")
end
