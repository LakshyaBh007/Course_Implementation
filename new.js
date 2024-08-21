class Cloth {
  constructor(color, type) {
    this.type = type;
    this.color = color;
  }
}
class Tshirt extends Cloth {
  constructor(size, length, color) {
    super(color, "Tshirt");
    this.size = size;
    this.length = length;
  }
}
class Pant extends Cloth {
  constructor(size, length, color) {
    super(color, "pant");
    this.length = length;
    this.size = size;
  }
}
const arr = [
  new Tshirt("S", "M", "Blue"),
  new Pant("M", "S", "Green"),
  new Pant("S", "L", "Blue"),
  new Tshirt("L", "M", "Red"),
];

console.log(arr);

const typesCount = arr.reduce(
  (acc, cuu) => ({
    [cuu.type]: acc[cuu.type] ? ++acc[cuu.type] : 1,
    [cuu.color]: acc[cuu.color] ? ++acc[cuu.color] : 1,
    ...acc,
  }),
  {}
);

console.log(typesCount);

const colorCount = arr.reduce(
  (acc, cuu) => ({
    ...acc,
    [cuu.color]: acc[cuu.color] ? ++acc[cuu.color] : 1,
  }),
  {}
);
console.log(colorCount);

let sizeCount = {};
arr.forEach((item) => {
  sizeCount[item.size] = sizeCount[item.size] + 1 || 1;
});
console.log(sizeCount);
let lengthCount = {};
arr.map((item) => {
  lengthCount[item.length] = lengthCount[item.length] + 1 || 1;
});
console.log(lengthCount);

let ArrayByFeatures = (a) => {
  return {
    ByType: {
      Pant: a.filter((r) => r.type === "Pant").length,
      Tshirt: a.filter((r) => r.type === "Tshirt").length,
    },
    ByColor: {
      Pink: a.filter((r) => r.color === "Pink").length,
      Black: a.filter((r) => r.color === "Black").length,
      Green: a.filter((r) => r.color === "Green").length,
      Red: a.filter((r) => r.color === "Red").length,
      White: a.filter((r) => r.color === "White").length,
    },
    BySize: {
      XL: a.filter((r) => r.size === "XL").length,
      XXL: a.filter((r) => r.size === "XXL").length,
      XXXL: a.filter((r) => r.size === "XXXL").length,
      L: a.filter((r) => r.size === "L").length,
    },
  };
};
console.log(ArrayByFeatures(arr));

























