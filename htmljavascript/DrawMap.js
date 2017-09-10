//
//DrawMap.js
//画面描画時に実行する処理を記述するファイル
//
google.maps.event.addDomListener(window, 'load', function(){

	//地図生成用のオプション
	var mapOptions = { 
		center: new google.maps.LatLng(center_lat, center_lng), 
		clickableIcons: false,
		mapTypeControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP, 
		scaleControl: true,
		streetView: new google.maps.StreetViewPanorama(
			document.getElementById('streetview'), {
				addressControl: false,							//アドレス表示
				enableCloseButton: false,						//閉じるボタン表示
				fullscreenControl: true,						//右上の最大化ボタン表示
				imageDateControl: true,							//画像の撮影日表示
				position: {lat: center_lat, lng: center_lng},	//初期表示位置
				pov: {
					heading: 34,
					pitch: 10
				},
				panControl: true,								//方位表示
				rotateControl: false,
				showRoadLabels: false,							//道路名表示
				disableDoubleClickZoom: true
			}
		),
		streetViewControl: true,								//ペグマン表示
		zoom: zoom_level,										//初期表示時の地図の縮尺
	}; 

	//地図を描画する。
	var mapObj = new google.maps.Map(document.getElementById('googlemap'), mapOptions); 

	//マーカー作成
	standPin(mapObj,pin_places);

	//ポリゴン作成
	drawPolygon(mapObj,point_array);
	drawPolygon(mapObj,point_array2);

});