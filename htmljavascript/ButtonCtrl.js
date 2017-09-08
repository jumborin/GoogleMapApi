//GoogleMap表示ボタンクリック時の処理
function googlemapbutton(){
	console.log("googlemapbutton");
	$('.googlemap').show();
	$('.streetview').hide();
};

//2画面表示ボタンクリック時の処理
function normalbutton(){
	console.log("normalbutton");
	$('.googlemap').show();
	$('.streetview').show();
};

//StreetView表示ボタンクリック時の処理
function streetviewbutton(){
	console.log("streetviewbutton");
	$('.googlemap').hide();
	$('.streetview').show();
};