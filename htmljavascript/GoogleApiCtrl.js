//指定したマップの指定した場所にピンを立てる。
function standPin(mapObj,pin_places){
	// マーカーを作成 
	jQuery.each(pin_places.list, function(i, pin_place) { 
		var marker = new google.maps.Marker({ 
			clickable: true,										//マーカーのクリック許可有無
			//icon: "http://www",									//マーカーとして使用する画像をURLで指定
			position: pin_place.latlng, 							//マーカー表示位置
			label: {
				color: "#FF0000",									//ラベルの文字色
				fontSize: "3px",									//ラベルの文字サイズ
				text: "123456"										//ラベルとして表示する文字
			},
			map: mapObj, 
			title: pin_place.name
	});

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

// 指定したマップに対し、指定した座標を頂点に持つ4角形ポリゴンを描画する。
function drawPolygon(mapObj,point_array){
	
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
	
	//ポリゴンをクリックした際のイベント定義
	google.maps.event.addListener(polygon, 'click', (function(){
		//縮尺変更して、ポリゴンの1個目のポイントを中心表示とする。
		var temp_array = polygon.getPath().getArray();
		console.log("緯度：" + temp_array[0].lng() + "経度：" + temp_array[0].lat() + " へ移動");
		polygon.getMap().setCenter(temp_array[0]);
		polygon.getMap().setZoom(16);
	}));
};