"use strict";

/**
 * Initialize.js
 * 画面描画時に実行する処理を記述するファイル
 */
google.maps.event.addDomListener(window, 'load', function(){

	//データ取得
	//中心座標を検索する。
	findCenterPosition();
	
	//マーカーを検索する。
	findMarkerPosition();
	
	//ポリゴン情報を検索する。
	findPolygonPosition();
	
	//以下GoogleMap描画
	//GoogleMapとストリートビューを描画する。
	drawMapAndStreetView('googlemap','streetview');
	
	//GoogleMapApiを使って地図上にマーカーを表示する
	standMarker();

	//GoogleMapApiを使って地図上にポリゴンを表示する。
	drawPolygon(point_array,"001");
	drawPolygon(point_array2,"002");

});
