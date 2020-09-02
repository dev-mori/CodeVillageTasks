function cointoss() {
  const num = Math.random(); // numは0.0〜1.0のランダムな数値
  let result;
  if (num >= 0.5) {
    result = "表";
  } else {
    result = "裏";
  }
  console.log(result);
}

for (i = 0; i <= 9; i++) {
  cointoss();
}
