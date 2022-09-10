# HTML,CSS,JavaScriptを使ったハンバーガーメニュー

[今回作成したサイトはこちら](https://taku-web3.com/project/hamburger-menu/index.html)

## ■新しく学んだこと
- navメニューはposition:fixedで固定して、左側に移動させておく。
- JavaScriptで操作
- maskを作るときには、display:block, width, heightが必要




### transitionについて

```css
nav {
  transition: all 0.5s 0.2s ease-in-out;
}
```
transitionプロパティは、「transition: 変化の対象 変化の時間 変化の遅延 変化の仕方 (順不同)」を指定する。変化の終わりの状態となる「:hover」などの擬似クラスと組み合わせて利用するとアニメーションが発生する。

「transition-property」では、変化対象のCSSプロパティを指定できる。
transtion-property:background-colorのように指定すればtransitionによるアニメの対象は「background-color」のみになる。

```css
nav .inner ul li a {
  transition-duration: 0.3s;
}
```
変化が終了するまでの時間を遅らせることができる。

___


### :nth-child()について
```css
.toggle-btn span:nth-child(1) {
  top: 4px;
}

.toggle-btn span:nth-child(2) {
  top: 14px;
}

.toggle-btn span:nth-child(3) {
  top: 24px;
}
```
nth-childはセレクタに追加して条件を指定する擬似クラスのひとつで、子要素のn番目(nth)にスタイルを適用させることができる。
多数の項目がある表で、交互に背景色を設定し見やすくしたい時などに役立つ。

値には数字、2n+1などの式の他にeven(偶数)、odd（奇数）などを設定することができます。

n番目から後すべてに適用する場合はn+4とすると、4番目以降の全ての項目にスタイルが適用される。


___

### transformについて

要素に動きをつけることができる。
用意されている効果には、移動、回転、伸縮、傾斜の4つがあり、2次元的な動きだけでなく、3次元的動きも可能にしていることが特徴。

```css
.test {
  transform: translate(10px, 10px) rotate(20deg) scale(1.5) skew(20deg, 20deg);
}
```

___


### toggleについて

```JavaScript
btn.onclick = () => {
  nav.classList.toggle("open");
};
```

