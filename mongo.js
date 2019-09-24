// 必要なモジュールをインポート
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// dbのurlを変数に格納(詳細は授業にて)
const url = 'mongodb://localhost:27017/'
let db

// connectメソッドを用いてdbに接続
MongoClient.connect(url, function(err, mongodb) {
    assert.equal(null, err);
    console.log("はじめてのAPIサーバーが起動しました！おめでとう！")

    // 明示的にdbの名前を引数に与える(前回mongoシェルのuseコマンドで作成したdbの名前です。)
    db = mongodb.db('test');
});

var collection = function(name) {
    return db.collection(name);
}

// collection関数をexport
module.exports = collection;