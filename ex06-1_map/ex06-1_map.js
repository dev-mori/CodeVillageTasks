const items = [
  // 日  月  火  水  木  金  土
  [14, 93, 89, 51, 85, 59, 33],
  [69, 27, 40, 76, 25, 21, 55],
  [55, 60, 3, 28, 49, 5, 91],
  [19, 56, 92, 66, 53, 80, 13],
];

const sums = items.map((item) => {
  //mapメソッドにより各週に対して行う処理の開始位置

  //各週の合計点(sum)の定義と初期化
  let sum = 0;

  //以下各週の合計点(sum)の算出法

  // for文を使う方法
  for (let i = 0; i < item.length; i++) {
    sum += item[i];
  }

  //forEach文を使う方法;
  item.forEach((item) => {
    sum += item;
  });

  //各週の合計点(su,)をmapメソッドにより戻り値として配列(sums)にして返す
  return sum;

  //mapメソッドにより各週に対して行う処理の終了位置
});

//mapメソッドにより作られた新しい配列(sums)の出力
console.log(sums); //=> [424, 313, 291, 379]
