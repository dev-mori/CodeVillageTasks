const string = "hello"; //"文字列プリミティブ";
const string1 = new String("world"); //"文字列オブジェクト"
console.log(string.charAt(1));
console.log(string1[2]);
if (string < string1) {
  // true
  console.log(string + " は " + string1 + " より小さい");
} else if (string > string1) {
  console.log(string + " は " + string1 + " より大きい");
} else {
  console.log(string + " と " + string1 + " は等しい");
}

let s1 = "2 + 2"; // 文字列プリミティブを生成
var s2 = new String("2 + 2"); // String オブジェクトを生成
console.log(eval(s1)); // 数値の 4 を返す
console.log(eval(s2)); // 文字列の "2 + 2" を返す

a = string.toUpperCase();
console.log(a);
b = a.toLowerCase();
console.log(b);
c = b.repeat(5);
console.log(c);
