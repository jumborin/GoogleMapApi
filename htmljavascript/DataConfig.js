"use strict";
//
//DataConfig.js
//共通で使用する定数を入れておくファイル。
//

//地図オブジェクト
var mapObj;

//ストリートビューオブジェクト
var streetViewPanorama;

//マーカーを管理するためのリスト
var marker_list = new google.maps.MVCArray();

//ポリゴンを管理するためのリスト
var polygon_list = new google.maps.MVCArray();

//ポリゴンの中心文字マーカーを管理するためのリスト
var polygon_marker_list = new google.maps.MVCArray();

//中心経度
var centerLng;

//中心緯度
var centerLat;

//初期表示冶のズームレベル
var zoom_level = 12;		//16:　13インチ液晶で2km範囲が入るくらい。

// ピン(マーカー)の場所
var pin_places;

// ポリゴンの頂点
var point_array = [
	new google.maps.LatLng(35.175065, 136.896734), 
	new google.maps.LatLng(35.175065, 136.891383), 
	new google.maps.LatLng(35.17, 136.891383), 
	new google.maps.LatLng(35.17, 136.896734), 
	new google.maps.LatLng(35.175065, 136.896734)
];
var point_array2 = [
	new google.maps.LatLng(35.175065, 136.891383), 
	new google.maps.LatLng(35.175065, 136.886032), 
	new google.maps.LatLng(35.17, 136.886032), 
	new google.maps.LatLng(35.17, 136.891383), 
	new google.maps.LatLng(35.175065, 136.891383)
];