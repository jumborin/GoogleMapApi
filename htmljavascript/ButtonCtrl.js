"use strict";

/**
 * ButtonCtrl.js
 * ボタンクリック時の操作を記述するファイル
 */
var ButtonCtrl = new Object();

/**
 * 
 * GoogleMap表示ボタンクリック時の処理。
 *
 */
ButtonCtrl.googleMapButton = function(){
	console.log("googlemapbutton");
	$(".googlemap").show();
	$(".streetview").hide();
	$("#clear_all_marker_button").prop("disabled",false);
	$("#disp_all_marker_button").prop("disabled",false);
	$("#clear_all_polygon_button").prop("disabled",false);
	$("#disp_all_polygon_button").prop("disabled",false);
	$("#print_button").prop("disabled",true);
	ApiCtrl.resizeCommonProcess();
};

/**
 * 
 * 2画面表示ボタンクリック時の処理。
 *
 */
ButtonCtrl.normalButton = function(){
	console.log("normalbutton");
	$(".googlemap").show();
	$(".streetview").show();
	$("#clear_all_marker_button").prop("disabled",false);
	$("#disp_all_marker_button").prop("disabled",false);
	$("#clear_all_polygon_button").prop("disabled",false);
	$("#disp_all_polygon_button").prop("disabled",false);
	$("#print_button").prop("disabled",true);
	ApiCtrl.resizeCommonProcess();
};

/**
 * 
 * StreetView表示ボタンクリック時の処理。
 *
 */
ButtonCtrl.streetviewButton = function(){
	console.log("streetviewbutton");
	$(".googlemap").hide();
	$(".streetview").show();
	$("#clear_all_marker_button").prop("disabled",true);
	$("#disp_all_marker_button").prop("disabled",true);
	$("#clear_all_polygon_button").prop("disabled",true);
	$("#disp_all_polygon_button").prop("disabled",true);
	$("#print_button").prop("disabled",false);
	ApiCtrl.resizeCommonProcess();
};


/**
 * 
 * マーカー非表示ボタンクリック時の処理。
 *
 */
ButtonCtrl.clearAllMarkerButton = function(){
	ApiCtrl.clearAllMarker();
};

/**
 * 
 * マーカー表示ボタンクリック時の処理。
 *
 */
ButtonCtrl.dispAllMarkerButton =function(){
	ApiCtrl.dispAllMarker();
};

/**
 * 
 * ポリゴン非表示ボタンクリック時の処理。
 *
 */
ButtonCtrl.clearAllPolygonButton = function(){
	ApiCtrl.clearAllPolygon();
};

/**
 * 
 * ポリゴン表示ボタンクリック時の処理。
 *
 */
ButtonCtrl.dispAllPolygonButton = function(){
	ApiCtrl.dispAllPolygon();
};