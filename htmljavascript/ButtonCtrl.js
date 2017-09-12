"use strict";
//GoogleMap表示ボタンクリック時の処理
function googleMapButton(){
	console.log("googlemapbutton");
	$(".googlemap").show();
	$(".streetview").hide();
	var center = mapObj.getCenter();
	google.maps.event.trigger(mapObj, "resize");
	google.maps.event.trigger(streetViewPanorama, 'resize');
	mapObj.setCenter(center);
	$("#clear_all_marker_button").prop("disabled",false);
	$("#disp_all_marker_button").prop("disabled",false);
	$("#clear_all_polygon_button").prop("disabled",false);
	$("#disp_all_polygon_button").prop("disabled",false);
	$("#print_button").prop("disabled",true);
};

//2画面表示ボタンクリック時の処理
function normalButton(){
	console.log("normalbutton");
	$(".googlemap").show();
	$(".streetview").show();
	var center = mapObj.getCenter();
	google.maps.event.trigger(mapObj, "resize");
	google.maps.event.trigger(streetViewPanorama, 'resize');
	mapObj.setCenter(center);
	$("#clear_all_marker_button").prop("disabled",false);
	$("#disp_all_marker_button").prop("disabled",false);
	$("#clear_all_polygon_button").prop("disabled",false);
	$("#disp_all_polygon_button").prop("disabled",false);
	$("#print_button").prop("disabled",true);
};

//StreetView表示ボタンクリック時の処理
function streetviewButton(){
	console.log("streetviewbutton");
	$(".googlemap").hide();
	$(".streetview").show();
	var center = mapObj.getCenter();
	google.maps.event.trigger(mapObj, "resize");
	google.maps.event.trigger(streetViewPanorama, 'resize');
	mapObj.setCenter(center);
	$("#clear_all_marker_button").prop("disabled",true);
	$("#disp_all_marker_button").prop("disabled",true);
	$("#clear_all_polygon_button").prop("disabled",true);
	$("#disp_all_polygon_button").prop("disabled",true);
	$("#print_button").prop("disabled",false);
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