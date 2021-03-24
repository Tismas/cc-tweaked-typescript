import { goTo } from "./utils";

const chestLocation = vector.new(144, 70, -276);
const treeLocations = [
  vector.new(142, -274, 71),
  vector.new(142, -279, 71),
  vector.new(147, -279, 71),
  vector.new(147, -274, 71),
];

const cutTree = () => {
  turtle.dig();
  turtle.forward();
  let height = 0;
  while (turtle.inspectUp()[0]) {
    turtle.digUp();
    turtle.up();
    height += 1;
  }
};

for (const treeLocation of treeLocations) {
  if (goTo(treeLocation)) {
    cutTree();
    goTo(treeLocation);
  }
}

export {};
