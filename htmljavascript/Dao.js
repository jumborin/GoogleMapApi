"use strict";

/**
 * Dao.js
 * 変数にデータをセットする処理を記述するファイル
 */

/**
 * 初期表示時の中心座標情報をセットする。
 *
 */
function findCenterPosition(){
	centerLng = 136.896734;
	centerLat = 35.1750;
};

/**
 * マーカー情報を検索し、マーカー情報をセットする。
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
 * ポリゴン情報を検索し、ポリゴン情報をセットする。
 *
 */
function findPolygonPosition(){
	polygonArrayArray = [[[
		new google.maps.LatLng(35.175065, 136.896734), 
		new google.maps.LatLng(35.175065, 136.891383), 
		new google.maps.LatLng(35.17, 136.891383), 
		new google.maps.LatLng(35.17, 136.896734), 
		new google.maps.LatLng(35.175065, 136.896734)
	],"001"],[[
		new google.maps.LatLng(35.175065, 136.891383), 
		new google.maps.LatLng(35.175065, 136.886032), 
		new google.maps.LatLng(35.17, 136.886032), 
		new google.maps.LatLng(35.17, 136.891383), 
		new google.maps.LatLng(35.175065, 136.891383)
	],"002"]];
};
