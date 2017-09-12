"use strict";
//
//DrawMap.js
//画面描画時に実行する処理を記述するファイル
//
google.maps.event.addDomListener(window, 'load', function(){

	//中心座標を検索する。
	findCenterPosition();
	
	//マーカーを検索する。
	findMarkerPosition();
	
	//ポリゴン情報を検索する。
	findPolygonPosition();
	
	//地図生成用のオプション
	streetViewPanorama = new google.maps.StreetViewPanorama(
			document.getElementById('streetview'), {
				addressControl: false,							//アドレス表示
				enableCloseButton: false,						//閉じるボタン表示
				fullscreenControl: true,						//右上の最大化ボタン表示
				imageDateControl: true,							//画像の撮影日表示
				position: {lat: centerLat, lng: centerLng},	//初期表示位置
				pov: {
					heading: 34,
					pitch: 10
				},
				panControl: true,								//方位表示
				rotateControl: false,
				showRoadLabels: false,							//道路名表示
				disableDoubleClickZoom: true
			}
		);
	var mapOptions = { 
		center: new google.maps.LatLng(centerLat, centerLng), 
		clickableIcons: false,
		mapTypeControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP, 
		scaleControl: true,
		streetView: streetViewPanorama,
		streetViewControl: true,								//ペグマン表示
		zoom: CONST_MAP_SHRINK_ZOOM_LEVEL,						//初期表示時の地図の縮尺
	}; 

	//地図を描画する。
	mapObj = new google.maps.Map(document.getElementById('googlemap'), mapOptions); 
	
	//GoogleMapApiを使って地図上にマーカーを表示する
	standPin();

	//GoogleMapApiを使って地図上にポリゴンを表示する。
	drawPolygon(point_array,"001");
	drawPolygon(point_array2,"002");

});
