//指定したマップの指定した場所にピンを立てる。
function standPin(pin_places){
	// マーカーを作成
	jQuery.each(pin_places.list, function(i, pin_place) { 
		var marker = new google.maps.Marker({ 
			clickable: true,										//マーカーのクリック許可有無
			//icon: ".unvisible.png",									//マーカーとして使用する画像をURLで指定
			position: pin_place.latlng, 							//マーカー表示位置
			label: {
				color: "#FF0000",									//ラベルの文字色
				fontSize: "3px",									//ラベルの文字サイズ
				text: pin_place.text										//ラベルとして表示する文字
			},
			map: mapObj, 
			title: pin_place.name
		});
		marker_list.push(marker);

		//マーカーをクリックした際のイベント定義
		google.maps.event.addListener(marker, 'click', (function(){
			
			//対象のマーカーを中心表示にする。
			marker.getMap().setCenter(marker.getPosition());
			
			//対象のマーカーに吹き出し表示する。
			//var infowindow = new google.maps.InfoWindow({
				//	content: "このマーカーのIDは" + marker.getTitle() + marker.getLabel().text
			//});
			//infowindow.open(mapObj, marker);
		}));
	});
};

//指定したマップの指定した場所に文字を表示する。
function dispCharacter(str_place){
	// マーカーを作成 
	var marker = new google.maps.Marker({ 
		icon: ".unvisible.png",									//マーカーとして使用する画像をURLで指定
		position: str_place.latlng, 							//マーカー表示位置
		label: {
			color: "#FF0000",									//ラベルの文字色
			fontSize: "14px",									//ラベルの文字サイズ
			text: str_place.text								//ラベルとして表示する文字
		},
		map: mapObj
	});
	polygon_marker_list.push(marker);
};

// 指定したマップに対し、指定した座標を頂点に持つ4角形ポリゴンを描画する。
function drawPolygon(point_array,str_text){
	
	// ポリゴンのオプションを設定 
	var polygonOptions = { 
		fillColor: "#008000",								//背景色
		fillOpacity: 0.1,									//背景色の透明度
		map: mapObj,										//ポリゴンを描画するマップオブジェクト
		path: point_array,									//作成するポリゴンの頂点座標の配列
		strokeColor: "#0000ff", 							//境界線の色
		strokeOpacity: 0.5, 								//境界線の透明度
		strokeWeight: 3										//境界線の太さ
	}; 
	
	// ポリゴンを設定 
	var polygon = new google.maps.Polygon(polygonOptions);
	
	//文字表示
	var latlng = calcCenterPoint(point_array);
	var str_place = {latlng: latlng, text: str_text};
	dispCharacter(str_place);
	polygon_list.push(polygon);
	
	//ポリゴンをクリックした際のイベント定義
	google.maps.event.addListener(polygon, 'click', (function(){
		//縮尺変更して、ポリゴンの中心を中心表示とする。
		console.log("緯度：" + latlng.lng() + "経度：" + latlng.lat() + " へ移動");
		polygon.getMap().setCenter(latlng);
		polygon.getMap().setZoom(16);
	}));
};

// ポリゴンの中心座標を返却する。
function calcCenterPoint(point_array){
	var zure = 0.0005;
	var lat = 0.0;
	var lng = 0.0;
	point_array.pop();
	jQuery.each(point_array, function(i, point) {
		lat = lat + point.lat();
		lng = lng + point.lng();
	});
	return new google.maps.LatLng(lat/point_array.length - zure, lng/point_array.length);
};

//マーカーを全て非表示にする。
function clearAllMarker(){
	marker_list.forEach(function(marker, idx) {
		marker.setMap(null);
	});
};

//マーカを全て再表示する。
function dispAllMarker(){
	marker_list.forEach(function(marker, idx) {
		marker.setMap(mapObj);
	});
};

//ポリゴンを全て非表示にする。
function clearAllPolygon(){
	polygon_list.forEach(function(polygon, idx) {
		polygon.setMap(null);
	});
	polygon_marker_list.forEach(function(marker, idx) {
		marker.setMap(null);
	});
};

//ポリゴンを全て再表示する。
function dispAllPolygon(){
	polygon_list.forEach(function(polygon, idx) {
		polygon.setMap(mapObj);
	});
	polygon_marker_list.forEach(function(marker, idx) {
		marker.setMap(mapObj);
	});
};