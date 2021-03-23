import { goTo } from "./utils";

const chestLocation = vector.new(144, 70, -276);
const treeLocations = [
  vector.new(142, -274, 71),
  vector.new(142, -279, 71),
  vector.new(147, -274, 71),
  vector.new(147, -279, 71),
];

const cutTree = (position: Vector) => {};

for (const treeLocation of treeLocations) {
  if (goTo(treeLocation)) {
    cutTree(treeLocation);
  }
}

export {};
