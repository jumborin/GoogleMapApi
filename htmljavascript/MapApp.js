"use strict";

/**
 * MapApp.js
 * 地図アプリのメインファイル
 */
 

// 共通変数
var mapObj,												//地図オブジェクト
	streetViewPanorama,									//ストリートビューオブジェクト
	markerList			= new google.maps.MVCArray(),	//マーカーを管理するためのリスト
	polygonList		= new google.maps.MVCArray(),	//ポリゴンを管理するためのリスト
	polygonMarkerList = new google.maps.MVCArray(),	//ポリゴンの中心文字マーカーを管理するためのリスト
	centerLng,											//中心経度
	centerLat,											//中心緯度
	pin_places,											// ピン(マーカー)の場所
	polygonArrayArray;									// ポリゴンの頂点の配列とポリゴンの中心に表示する文字が入った配列


//縮小時のズームレベル
var CONST_MAP_SHRINK_ZOOM_LEVEL = 12;				//12:　13インチ液晶で2km範囲が入るくらい。

//拡大時のズームレベル
var CONST_MAP_EXPANSION_ZOOM_LEVEL = 16;			//16:　13インチ液晶で2km範囲が入るくらい。

/**
 * 
 * 画面表示時の初期化処理
 * 
 */
google.maps.event.addDomListener(window, 'load', function(){

	//データ取得
	//中心座標を検索する。
	Dao.findCenterPosition();
	
	//マーカーを検索する。
	Dao.findMarkerPosition();
	
	//ポリゴン情報を検索する。
	Dao.findPolygonPosition();
	
	//以下GoogleMap描画
	//GoogleMapとストリートビューを描画する。
	ApiCtrl.drawMapAndStreetView('googlemap','streetview');
	
	//GoogleMapApiを使って地図上にマーカーを表示する
	ApiCtrl.standMarker();

	//GoogleMapApiを使って地図上にポリゴンを表示する。
	ApiCtrl.drawPolygon(polygonArrayArray);

});
