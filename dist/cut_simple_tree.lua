--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
chestLocation = vector.new(144, 70, -276)
treeLocations = {
    vector.new(142, -274, 71),
    vector.new(142, -279, 71),
    vector.new(147, -274, 71),
    vector.new(147, -279, 71)
}
cutTree = function(position)
end
for ____, treeLocation in ipairs(treeLocations) do
    if goTo(treeLocation) then
        cutTree(treeLocation)
    end
end
