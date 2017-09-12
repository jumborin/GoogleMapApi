"use strict";
//GoogleMap表示ボタンクリック時の処理
function googleMapButton(){
	console.log("googlemapbutton");
	$(".googlemap").show();
	$(".streetview").hide();
	$("#clear_all_marker_button").prop("disabled",false);
	$("#disp_all_marker_button").prop("disabled",false);
	$("#clear_all_polygon_button").prop("disabled",false);
	$("#disp_all_polygon_button").prop("disabled",false);
	$("#print_button").prop("disabled",true);
	resizeCommonProcess();
};

//2画面表示ボタンクリック時の処理
function normalButton(){
	console.log("normalbutton");
	$(".googlemap").show();
	$(".streetview").show();
	$("#clear_all_marker_button").prop("disabled",false);
	$("#disp_all_marker_button").prop("disabled",false);
	$("#clear_all_polygon_button").prop("disabled",false);
	$("#disp_all_polygon_button").prop("disabled",false);
	$("#print_button").prop("disabled",true);
	resizeCommonProcess();
};

//StreetView表示ボタンクリック時の処理
function streetviewButton(){
	console.log("streetviewbutton");
	$(".googlemap").hide();
	$(".streetview").show();
	$("#clear_all_marker_button").prop("disabled",true);
	$("#disp_all_marker_button").prop("disabled",true);
	$("#clear_all_polygon_button").prop("disabled",true);
	$("#disp_all_polygon_button").prop("disabled",true);
	$("#print_button").prop("disabled",false);
	resizeCommonProcess();
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