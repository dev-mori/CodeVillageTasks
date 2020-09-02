function scoring(score) {
  if (score >= 70) {
    return "秀";
  } else if (score >= 30) {
    return "良";
  } else {
    return "不可";
  }
}

// 動作確認
console.log(scoring(100)); //=> 秀
console.log(scoring(60)); //=> 良
console.log(scoring(13)); //=> 不可
console.log(scoring(70));
console.log(scoring(69));
console.log(scoring(30));
console.log(scoring(29));
console.log(scoring(0));
