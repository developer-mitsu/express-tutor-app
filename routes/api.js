const express = require( 'express' );
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
// MongoDB用ファイルを指定
const collection = require( '../mongo' );
const collectionName = 'api';

// (授業にて解説します。)
router.all( '/*', function ( req, res, next ) {
    res.contentType( 'json' );
    res.header( 'Access-Control-Allow-Origin', '*' );
    next();
} );

// GET find
router.get( '/', function ( req, res ) {
    collection(collectionName).find().toArray(function(err, docs){
        res.send(docs);
    })
} );

// localhost:3000/api/(object id)にアクセスした際の処理を記述します。
router.get( '/:id', function ( req, res ) {
    collection(collectionName).findOne( { _id: new ObjectID( req.params.id ) }, {}, function(err, r){
        res.send( r );
    } );
} );

// postメソッドを使用します。postとは一体何でしょうか、添付のurlを参考に調べてみましょう。
router.post( '/', function ( req, res ) {
    collection(collectionName).insertOne( req.body ).then(function(r) {
        res.send( r );
    });
} );

// putメソッドを使用します。putとは一体何でしょうか、添付のurlを参考に調べてみましょう。
router.put( '/:id', function ( req, res ) {
    collection(collectionName).findOneAndUpdate( { _id: new ObjectID( req.params.id ) }, req.body, {}, function(err, r){
        res.send( r );
    } );
} );

// deleteメソッドを使用します。deleteとは一体何でしょうか、添付のurlを参考に調べてみましょう。
router.delete( '/:id', function ( req, res ) {
    collection(collectionName).findOneAndDelete( { _id: new ObjectID( req.params.id ) }, {}, function(err, r){
        res.send( r );
    } );
} );

module.exports = router;