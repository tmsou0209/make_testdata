// パッケージの定義
const fs = require("fs"); //ファイルの読み書きを行う標準パッケージ
const stringifySync = require("csv-stringify/sync");  //csv形式のデータをStringに変換するパッケージ

// csv形式のデータを格納する配列
const recode = []

// 999999個の行が必要なのでその分だけ繰り返す
for(let i=1; i<1000000; i++){
    //データを配列に格納する
    recode.push({
        id: `A${String(i).padStart(6, '0')}`, // Aと0埋め6桁数字を生成する
        num: (i-1)%3+1,                       // 1~3の数字を周期的に生成する 剰余をとり1足すことで0-2ではなく1-3を実現
        str: "ABCDEFGHIJKLMNOPQRST"           // 固定の文字列
    })
}
// csv形式のデータをStringに変換 ヘッダー情報はファイルにいらないので、header:falseで書き出さないようにする
const csvString = stringifySync.stringify(recode, {
    header: false
});

// testdata.csvという名前でcsvStringを書き出し
fs.writeFileSync('testdata.csv', csvString);
