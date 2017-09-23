"use strict";

/**
 *
 * Dao.js
 * 変数にデータをセットする処理を記述するファイル
 *
 */
 
//データ取得オブジェクト
var Dao = new Object();

/**
 *
 * 初期表示時の中心座標情報をセットする。
 *
 */
Dao.findCenterPosition = function (){
	centerLng = 136.896734;
	centerLat = 35.1750;
};

/**
 *
 * マーカー情報を検索し、マーカー情報をセットする。
 * @param {array} pin_places マーカーの座標情報
 *
 */
Dao.findMarkerPosition = function(){
	pin_places = { 
		list: [ 
			{ name: "丸の内駅", latlng: new google.maps.LatLng(35.175065, 136.896734), text: "123451" }, 
			{ name: "電気の科学館", latlng: new google.maps.LatLng(35.167770, 136.899347), text: "123452" },
			{ name: "栄駅", latlng: new google.maps.LatLng(35.170058, 136.908420), text: "123453" }
		]
	};
	return pin_places;
};

/**
 *
 * ポリゴン情報を検索し、ポリゴン情報をセットする。
 *
 */
Dao.findPolygonPosition = function (){
	polygonArrayArray = [
		[[new google.maps.LatLng(35.175065, 136.896734), new google.maps.LatLng(35.175065,136.891383), new google.maps.LatLng(35.17,136.891383), new google.maps.LatLng(35.17, 136.896734), new google.maps.LatLng(35.175065, 136.896734)],"100"],
		[[new google.maps.LatLng(35.175065, 136.891383), new google.maps.LatLng(35.175065,136.886032), new google.maps.LatLng(35.17,136.886032), new google.maps.LatLng(35.17,136.891383), new google.maps.LatLng(35.175065, 136.891383)],"101"],
		[[new google.maps.LatLng(35.175065, 136.886032), new google.maps.LatLng(35.175065,136.880681), new google.maps.LatLng(35.17,136.880681), new google.maps.LatLng(35.17,136.886032), new google.maps.LatLng(35.175065, 136.886032)],"102"],
		[[new google.maps.LatLng(35.175065, 136.880681), new google.maps.LatLng(35.175065,136.87533), new google.maps.LatLng(35.17,136.87533), new google.maps.LatLng(35.17,136.880681), new google.maps.LatLng(35.175065, 136.880681)],"103"],
		[[new google.maps.LatLng(35.175065, 136.87533), new google.maps.LatLng(35.175065,136.869979), new google.maps.LatLng(35.17,136.869979), new google.maps.LatLng(35.17,136.87533), new google.maps.LatLng(35.175065, 136.87533)],"104"],
		[[new google.maps.LatLng(35.175065, 136.869979), new google.maps.LatLng(35.175065,136.864628), new google.maps.LatLng(35.17,136.864628), new google.maps.LatLng(35.17,136.869979), new google.maps.LatLng(35.175065, 136.869979)],"105"],
		[[new google.maps.LatLng(35.175065, 136.864628), new google.maps.LatLng(35.175065,136.859277), new google.maps.LatLng(35.17,136.859277), new google.maps.LatLng(35.17,136.864628), new google.maps.LatLng(35.175065, 136.864628)],"106"],
		[[new google.maps.LatLng(35.175065, 136.859277), new google.maps.LatLng(35.175065,136.853926), new google.maps.LatLng(35.17,136.853926), new google.maps.LatLng(35.17,136.859277), new google.maps.LatLng(35.175065, 136.859277)],"107"],
		[[new google.maps.LatLng(35.175065, 136.853926), new google.maps.LatLng(35.175065,136.848575), new google.maps.LatLng(35.17,136.848575), new google.maps.LatLng(35.17,136.853926), new google.maps.LatLng(35.175065, 136.853926)],"108"],
		[[new google.maps.LatLng(35.175065, 136.848575), new google.maps.LatLng(35.175065,136.843224), new google.maps.LatLng(35.17,136.843224), new google.maps.LatLng(35.17,136.848575), new google.maps.LatLng(35.175065, 136.848575)],"109"],
		[[new google.maps.LatLng(35.175065, 136.843224), new google.maps.LatLng(35.175065,136.837873), new google.maps.LatLng(35.17,136.837873), new google.maps.LatLng(35.17,136.843224), new google.maps.LatLng(35.175065, 136.843224)],"110"],
		[[new google.maps.LatLng(35.175065, 136.837873), new google.maps.LatLng(35.175065,136.832522), new google.maps.LatLng(35.17,136.832522), new google.maps.LatLng(35.17,136.837873), new google.maps.LatLng(35.175065, 136.837873)],"111"],
		[[new google.maps.LatLng(35.175065, 136.832522), new google.maps.LatLng(35.175065,136.827171), new google.maps.LatLng(35.17,136.827171), new google.maps.LatLng(35.17,136.832522), new google.maps.LatLng(35.175065, 136.832522)],"112"],
		[[new google.maps.LatLng(35.175065, 136.827171), new google.maps.LatLng(35.175065,136.82182), new google.maps.LatLng(35.17,136.82182), new google.maps.LatLng(35.17,136.827171), new google.maps.LatLng(35.175065, 136.827171)],"113"],
		[[new google.maps.LatLng(35.175065, 136.82182), new google.maps.LatLng(35.175065,136.816469), new google.maps.LatLng(35.17,136.816469), new google.maps.LatLng(35.17,136.82182), new google.maps.LatLng(35.175065, 136.82182)],"114"],
		[[new google.maps.LatLng(35.175065, 136.816469), new google.maps.LatLng(35.175065,136.811118), new google.maps.LatLng(35.17,136.811118), new google.maps.LatLng(35.17,136.816469), new google.maps.LatLng(35.175065, 136.816469)],"115"],
		[[new google.maps.LatLng(35.175065, 136.811118), new google.maps.LatLng(35.175065,136.805767), new google.maps.LatLng(35.17,136.805767), new google.maps.LatLng(35.17,136.811118), new google.maps.LatLng(35.175065, 136.811118)],"116"],
		[[new google.maps.LatLng(35.175065, 136.805767), new google.maps.LatLng(35.175065,136.800416), new google.maps.LatLng(35.17,136.800416), new google.maps.LatLng(35.17,136.805767), new google.maps.LatLng(35.175065, 136.805767)],"117"],
		[[new google.maps.LatLng(35.175065, 136.800416), new google.maps.LatLng(35.175065,136.795065), new google.maps.LatLng(35.17,136.795065), new google.maps.LatLng(35.17,136.800416), new google.maps.LatLng(35.175065, 136.800416)],"118"],
		[[new google.maps.LatLng(35.175065, 136.795065), new google.maps.LatLng(35.175065,136.789714), new google.maps.LatLng(35.17,136.789714), new google.maps.LatLng(35.17,136.795065), new google.maps.LatLng(35.175065, 136.795065)],"119"],
		[[new google.maps.LatLng(35.175065, 136.789714), new google.maps.LatLng(35.175065,136.784363), new google.maps.LatLng(35.17,136.784363), new google.maps.LatLng(35.17,136.789714), new google.maps.LatLng(35.175065, 136.789714)],"120"],
		[[new google.maps.LatLng(35.175065, 136.784363), new google.maps.LatLng(35.175065,136.779012), new google.maps.LatLng(35.17,136.779012), new google.maps.LatLng(35.17,136.784363), new google.maps.LatLng(35.175065, 136.784363)],"121"],
		[[new google.maps.LatLng(35.175065, 136.779012), new google.maps.LatLng(35.175065,136.773661), new google.maps.LatLng(35.17,136.773661), new google.maps.LatLng(35.17,136.779012), new google.maps.LatLng(35.175065, 136.779012)],"122"],
		[[new google.maps.LatLng(35.175065, 136.773661), new google.maps.LatLng(35.175065,136.76831), new google.maps.LatLng(35.17,136.76831), new google.maps.LatLng(35.17,136.773661), new google.maps.LatLng(35.175065, 136.773661)],"123"],
		[[new google.maps.LatLng(35.175065, 136.76831), new google.maps.LatLng(35.175065,136.762959), new google.maps.LatLng(35.17,136.762959), new google.maps.LatLng(35.17,136.76831), new google.maps.LatLng(35.175065, 136.76831)],"124"],
		[[new google.maps.LatLng(35.175065, 136.762959), new google.maps.LatLng(35.175065,136.757608), new google.maps.LatLng(35.17,136.757608), new google.maps.LatLng(35.17,136.762959), new google.maps.LatLng(35.175065, 136.762959)],"125"],
		[[new google.maps.LatLng(35.175065, 136.757608), new google.maps.LatLng(35.175065,136.752257), new google.maps.LatLng(35.17,136.752257), new google.maps.LatLng(35.17,136.757608), new google.maps.LatLng(35.175065, 136.757608)],"126"],
		[[new google.maps.LatLng(35.175065, 136.752256999999), new google.maps.LatLng(35.175065,136.746906), new google.maps.LatLng(35.17,136.746906), new google.maps.LatLng(35.17,136.752257), new google.maps.LatLng(35.175065, 136.752257)],"127"],
		[[new google.maps.LatLng(35.175065, 136.746905999999), new google.maps.LatLng(35.175065,136.741555), new google.maps.LatLng(35.17,136.741555), new google.maps.LatLng(35.17,136.746906), new google.maps.LatLng(35.175065, 136.746906)],"128"],
		[[new google.maps.LatLng(35.175065, 136.741554999999), new google.maps.LatLng(35.175065,136.736204), new google.maps.LatLng(35.17,136.736204), new google.maps.LatLng(35.17,136.741555), new google.maps.LatLng(35.175065, 136.741555)],"129"],
		[[new google.maps.LatLng(35.175065, 136.736203999999), new google.maps.LatLng(35.175065,136.730853), new google.maps.LatLng(35.17,136.730853), new google.maps.LatLng(35.17,136.736204), new google.maps.LatLng(35.175065, 136.736204)],"130"],
		[[new google.maps.LatLng(35.169714, 136.896734), new google.maps.LatLng(35.169714,136.891383), new google.maps.LatLng(35.164649,136.891383), new google.maps.LatLng(35.164649,136.896734), new google.maps.LatLng(35.169714, 136.896734)],"200"],
		[[new google.maps.LatLng(35.169714, 136.891383), new google.maps.LatLng(35.169714,136.886032), new google.maps.LatLng(35.164649,136.886032), new google.maps.LatLng(35.164649,136.891383), new google.maps.LatLng(35.169714, 136.891383)],"201"],
		[[new google.maps.LatLng(35.169714, 136.886032), new google.maps.LatLng(35.169714,136.880681), new google.maps.LatLng(35.164649,136.880681), new google.maps.LatLng(35.164649,136.886032), new google.maps.LatLng(35.169714, 136.886032)],"202"],
		[[new google.maps.LatLng(35.169714, 136.880681), new google.maps.LatLng(35.169714,136.87533), new google.maps.LatLng(35.164649,136.87533), new google.maps.LatLng(35.164649,136.880681), new google.maps.LatLng(35.169714, 136.880681)],"203"],
		[[new google.maps.LatLng(35.169714, 136.87533), new google.maps.LatLng(35.169714,136.869979), new google.maps.LatLng(35.164649,136.869979), new google.maps.LatLng(35.164649,136.87533), new google.maps.LatLng(35.169714, 136.87533)],"204"],
		[[new google.maps.LatLng(35.169714, 136.869979), new google.maps.LatLng(35.169714,136.864628), new google.maps.LatLng(35.164649,136.864628), new google.maps.LatLng(35.164649,136.869979), new google.maps.LatLng(35.169714, 136.869979)],"205"],
		[[new google.maps.LatLng(35.169714, 136.864628), new google.maps.LatLng(35.169714,136.859277), new google.maps.LatLng(35.164649,136.859277), new google.maps.LatLng(35.164649,136.864628), new google.maps.LatLng(35.169714, 136.864628)],"206"],
		[[new google.maps.LatLng(35.169714, 136.859277), new google.maps.LatLng(35.169714,136.853926), new google.maps.LatLng(35.164649,136.853926), new google.maps.LatLng(35.164649,136.859277), new google.maps.LatLng(35.169714, 136.859277)],"207"],
		[[new google.maps.LatLng(35.169714, 136.853926), new google.maps.LatLng(35.169714,136.848575), new google.maps.LatLng(35.164649,136.848575), new google.maps.LatLng(35.164649,136.853926), new google.maps.LatLng(35.169714, 136.853926)],"208"],
		[[new google.maps.LatLng(35.169714, 136.848575), new google.maps.LatLng(35.169714,136.843224), new google.maps.LatLng(35.164649,136.843224), new google.maps.LatLng(35.164649,136.848575), new google.maps.LatLng(35.169714, 136.848575)],"209"],
		[[new google.maps.LatLng(35.169714, 136.843224), new google.maps.LatLng(35.169714,136.837873), new google.maps.LatLng(35.164649,136.837873), new google.maps.LatLng(35.164649,136.843224), new google.maps.LatLng(35.169714, 136.843224)],"210"],
		[[new google.maps.LatLng(35.169714, 136.837873), new google.maps.LatLng(35.169714,136.832522), new google.maps.LatLng(35.164649,136.832522), new google.maps.LatLng(35.164649,136.837873), new google.maps.LatLng(35.169714, 136.837873)],"211"],
		[[new google.maps.LatLng(35.169714, 136.832522), new google.maps.LatLng(35.169714,136.827171), new google.maps.LatLng(35.164649,136.827171), new google.maps.LatLng(35.164649,136.832522), new google.maps.LatLng(35.169714, 136.832522)],"212"],
		[[new google.maps.LatLng(35.169714, 136.827171), new google.maps.LatLng(35.169714,136.82182), new google.maps.LatLng(35.164649,136.82182), new google.maps.LatLng(35.164649,136.827171), new google.maps.LatLng(35.169714, 136.827171)],"213"],
		[[new google.maps.LatLng(35.169714, 136.82182), new google.maps.LatLng(35.169714,136.816469), new google.maps.LatLng(35.164649,136.816469), new google.maps.LatLng(35.164649,136.82182), new google.maps.LatLng(35.169714, 136.82182)],"214"],
		[[new google.maps.LatLng(35.169714, 136.816469), new google.maps.LatLng(35.169714,136.811118), new google.maps.LatLng(35.164649,136.811118), new google.maps.LatLng(35.164649,136.816469), new google.maps.LatLng(35.169714, 136.816469)],"215"],
		[[new google.maps.LatLng(35.169714, 136.811118), new google.maps.LatLng(35.169714,136.805767), new google.maps.LatLng(35.164649,136.805767), new google.maps.LatLng(35.164649,136.811118), new google.maps.LatLng(35.169714, 136.811118)],"216"],
		[[new google.maps.LatLng(35.169714, 136.805767), new google.maps.LatLng(35.169714,136.800416), new google.maps.LatLng(35.164649,136.800416), new google.maps.LatLng(35.164649,136.805767), new google.maps.LatLng(35.169714, 136.805767)],"217"],
		[[new google.maps.LatLng(35.169714, 136.800416), new google.maps.LatLng(35.169714,136.795065), new google.maps.LatLng(35.164649,136.795065), new google.maps.LatLng(35.164649,136.800416), new google.maps.LatLng(35.169714, 136.800416)],"218"],
		[[new google.maps.LatLng(35.169714, 136.795065), new google.maps.LatLng(35.169714,136.789714), new google.maps.LatLng(35.164649,136.789714), new google.maps.LatLng(35.164649,136.795065), new google.maps.LatLng(35.169714, 136.795065)],"219"],
		[[new google.maps.LatLng(35.169714, 136.789714), new google.maps.LatLng(35.169714,136.784363), new google.maps.LatLng(35.164649,136.784363), new google.maps.LatLng(35.164649,136.789714), new google.maps.LatLng(35.169714, 136.789714)],"220"],
		[[new google.maps.LatLng(35.169714, 136.784363), new google.maps.LatLng(35.169714,136.779012), new google.maps.LatLng(35.164649,136.779012), new google.maps.LatLng(35.164649,136.784363), new google.maps.LatLng(35.169714, 136.784363)],"221"],
		[[new google.maps.LatLng(35.169714, 136.779012), new google.maps.LatLng(35.169714,136.773661), new google.maps.LatLng(35.164649,136.773661), new google.maps.LatLng(35.164649,136.779012), new google.maps.LatLng(35.169714, 136.779012)],"222"],
		[[new google.maps.LatLng(35.169714, 136.773661), new google.maps.LatLng(35.169714,136.76831), new google.maps.LatLng(35.164649,136.76831), new google.maps.LatLng(35.164649,136.773661), new google.maps.LatLng(35.169714, 136.773661)],"223"],
		[[new google.maps.LatLng(35.169714, 136.76831), new google.maps.LatLng(35.169714,136.762959), new google.maps.LatLng(35.164649,136.762959), new google.maps.LatLng(35.164649,136.76831), new google.maps.LatLng(35.169714, 136.76831)],"224"],
		[[new google.maps.LatLng(35.169714, 136.762959), new google.maps.LatLng(35.169714,136.757608), new google.maps.LatLng(35.164649,136.757608), new google.maps.LatLng(35.164649,136.762959), new google.maps.LatLng(35.169714, 136.762959)],"225"],
		[[new google.maps.LatLng(35.169714, 136.757608), new google.maps.LatLng(35.169714,136.752257), new google.maps.LatLng(35.164649,136.752257), new google.maps.LatLng(35.164649,136.757608), new google.maps.LatLng(35.169714, 136.757608)],"226"],
		[[new google.maps.LatLng(35.169714, 136.752256999999), new google.maps.LatLng(35.169714,136.746906), new google.maps.LatLng(35.164649,136.746906), new google.maps.LatLng(35.164649,136.752257), new google.maps.LatLng(35.169714, 136.752257)],"227"],
		[[new google.maps.LatLng(35.169714, 136.746905999999), new google.maps.LatLng(35.169714,136.741555), new google.maps.LatLng(35.164649,136.741555), new google.maps.LatLng(35.164649,136.746906), new google.maps.LatLng(35.169714, 136.746906)],"228"],
		[[new google.maps.LatLng(35.169714, 136.741554999999), new google.maps.LatLng(35.169714,136.736204), new google.maps.LatLng(35.164649,136.736204), new google.maps.LatLng(35.164649,136.741555), new google.maps.LatLng(35.169714, 136.741555)],"229"],
		[[new google.maps.LatLng(35.169714, 136.736203999999), new google.maps.LatLng(35.169714,136.730853), new google.maps.LatLng(35.164649,136.730853), new google.maps.LatLng(35.164649,136.736204), new google.maps.LatLng(35.169714, 136.736204)],"230"]
	];
};
