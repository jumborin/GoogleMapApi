"use strict";

/**
 * Dao.js
 * 変数にデータをセットする処理を記述するファイル
 */

/**
 * 初期表示時の中心座標を設定する
 *
 */
function findCenterPosition(){
	centerLng = 136.896734;
	centerLat = 35.1750;
};

/**
 * マーカーを検索する
 *
 */
function findMarkerPosition(){
	pin_places = { 
		list: [ 
			{ name: "丸の内駅", latlng: new google.maps.LatLng(35.175065, 136.896734), text: "123451" }, 
			{ name: "電気の科学館", latlng: new google.maps.LatLng(35.167770, 136.899347), text: "123452" },
			{ name: "栄駅", latlng: new google.maps.LatLng(35.170058, 136.908420), text: "123453" }
		]
	};
};

/**
 * データを取得し、マーカー情報をセットする。
 *
 */
function setMarkerInfo(){
	pin_places = pin_places;
};





