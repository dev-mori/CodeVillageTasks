const items = [
  // 日  月  火  水  木  金  土
  [14, 93, 89, 51, 85, 59, 33],
  [69, 27, 40, 76, 25, 21, 55],
  [55, 60, 3, 28, 49, 5, 91],
  [19, 56, 92, 66, 53, 80, 13],
];

const sums = items.map((item) => {
  let sum = 0;
  // for (let i = 0; i < item.length; i++) {
  //   sum += item[i];
  // }

  item.forEach((chara) => {
    sum += chara;
  });
  return sum;
});

console.log(sums); //=> [424, 313, 291, 379]
