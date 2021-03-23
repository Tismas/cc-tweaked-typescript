enum Direction {
  positiveX,
  positiveZ,
  negativeX,
  negativeZ,
}

let faceDirection: Direction = Direction.positiveX;

// ide po piwo i popcorn bo sie bardzo dobrze zapowiada :)
// chyba ze konczymy za 30 minut
// to nie ide
// X idź
// [] nie idź

// co się bardzo dobrze zapowiada?
// naiwny sposób na obracanie się? 😂
// to jest popierdolone, w mc są chyba dobrze kierunki, to tu chyba zjebali
// trzeba im PR zajebać

// odcinek będzie w ciągu 10 minut
// to wtedy zniknę na jakieś 20 minut
// problem trochę jest z budowaniem tego gówna
// trzeba obadać jak działa ta opcja z bundlaowaniem do 1 pliku
// i czy da się jakoś pozbyć tych __TS__New, żeby to inlinowo ogarnęło
//  -- próbowałeś do innego targetu jak np. lua 5.2 (bo chyba CC jest komaptybilne)?
//  -- _TS__New w czymś przeszkadza?
//  -- moliwe, ze /** @customConstructor vector */ pomoze (za https://typescripttolua.github.io/docs/advanced/compiler-annotations)
// ale chodzenie już chyba powinno działać
// (jak się dobrze zbuduje)

// update: są jakieś importy w bundlu które się wywalają na turtlu :<
// powinienem być spowrotem około 22:30

const rotateTowards = (dir: Direction): void => {
  while (faceDirection !== dir) {
    turtle.turnRight();
    faceDirection = (faceDirection + 1) % 4;
  }
};

export function goTo(position: Vector): boolean {
  let currentPos = vector.new(...gps.locate());
  let posDiff = position.sub(currentPos);

  while (posDiff.length() > 1) {
    currentPos = vector.new(...gps.locate());
    posDiff = position.sub(currentPos);

    // up/down
    if (Math.abs(posDiff.z) >= 1) {
      if (posDiff.z > 0) {
        turtle.up();
      } else {
        turtle.down();
      }
    }
    // y (z)
    else if (Math.abs(posDiff.y) >= 1) {
      if (posDiff.y > 0) {
        rotateTowards(Direction.positiveZ);
        turtle.forward();
      } else {
        rotateTowards(Direction.negativeZ);
        turtle.forward();
      }
    }
    // x
    else if (Math.abs(posDiff.x) >= 1) {
      if (posDiff.x > 0) {
        rotateTowards(Direction.positiveX);
        turtle.forward();
      } else {
        rotateTowards(Direction.negativeX);
        turtle.forward();
      }
    }
  }

  const [solidBlockInFront, blockInfo] = turtle.inspect();
  return solidBlockInFront && blockInfo.includes("logs");
}
