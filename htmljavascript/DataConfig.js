"use strict";

/**
 * DataConfig.js
 * 共通で使用する定数を入れておくファイル。
 */

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


// ピン(マーカー)の場所
var pin_places;

// ポリゴンの頂点の配列とポリゴンの中心に表示する文字が入った配列
var polygonArrayArray;


//縮小時のズームレベル
var CONST_MAP_SHRINK_ZOOM_LEVEL = 12;				//12:　13インチ液晶で2km範囲が入るくらい。

//拡大時のズームレベル
var CONST_MAP_EXPANSION_ZOOM_LEVEL = 16;			//16:　13インチ液晶で2km範囲が入るくらい。