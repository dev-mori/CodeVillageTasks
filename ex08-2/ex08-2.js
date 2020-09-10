const h1 = document.createElement("h1");
h1.textContent = "DOM";
document.body.appendChild(h1);

const p = document.createElement("p");
p.textContent = "JavaScriptからHTMLを扱うための仕組み";
document.body.appendChild(p);

const h2 = document.createElement("h2");
h2.textContent = "印象に残っているトピック";
document.body.appendChild(h2);

const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
li1.textContent = "documentオブジェクト";
document.body.lastElementChild.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "getElementById";
document.body.lastElementChild.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "イベントリスナ";
document.body.lastElementChild.appendChild(li3);
