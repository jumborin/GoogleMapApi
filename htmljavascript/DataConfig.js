//
//DataConfig.js
//共通で使用する定数を入れておくファイル。
//

//中心経度
var center_lng = 136.896734;

//中心緯度
var center_lat = 35.1750;

//初期表示冶のズームレベル
var zoom_level = 12;		//16:　13インチ液晶で2km範囲が入るくらい。

// ピン(マーカー)の場所
var pin_places = { 
	list: [ 
		{ name: "丸の内駅", latlng: new google.maps.LatLng(35.175065, 136.896734) }, 
		{ name: "電気の科学館", latlng: new google.maps.LatLng(35.167770, 136.899347) },
		{ name: "栄駅", latlng: new google.maps.LatLng(35.170058, 136.908420) }
	]
};

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