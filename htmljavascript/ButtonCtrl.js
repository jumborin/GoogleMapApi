"use strict";
//GoogleMap表示ボタンクリック時の処理
function googleMapButton(){
	console.log("googlemapbutton");
	$(".googlemap").show();
	$(".streetview").hide();
};

//2画面表示ボタンクリック時の処理
function normalButton(){
	console.log("normalbutton");
	$(".googlemap").show();
	$(".streetview").show();
};

//StreetView表示ボタンクリック時の処理
function streetviewButton(){
	console.log("streetviewbutton");
	$(".googlemap").hide();
	$(".streetview").show();
};


//マーカー非表示ボタンクリック時の処理
function clearAllMarkerButton(){
	clearAllMarker();
};

//マーカー表示ボタンクリック時の処理
function dispAllMarkerButton(){
	dispAllMarker();
};

//ポリゴン非表示ボタンクリック時の処理
function clearAllPolygonButton(){
	clearAllPolygon();
};

//ポリゴン表示ボタンクリック時の処理
function dispAllPolygonButton(){
	dispAllPolygon();
};