const status = turtle.forward();
if (status === true) {
  turtle.dig();
  turtle.dig(turtle.tool.right);
  turtle.dig(turtle.tool.left);
}
turtle.dig(turtle.tool.left);
turtle.refuel();

const detail = turtle.getItemDetail();
detail.concat("|");

paintutils.drawBox(1, 1, 2, 2, colors.cyan);
