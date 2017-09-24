"use strict";

/**
 *
 * Dao.js
 * 変数にデータをセットする処理を記述するファイル
 *
 */
 
//データ取得オブジェクト
var Dao = {
	/**
	 *
	 * マーカー情報を検索し、マーカー情報をセットする。
	 * @param {array} pinPlaces マーカーの座標情報
	 *
	 */
	findMarkerPosition: function(){
		pinPlaces = { 
			list: [ 
{ name: "	test001	", latlng: new google.maps.LatLng(	35.170061	, 	136.90851	), text: "	100001	" }	,
{ name: "	test002	", latlng: new google.maps.LatLng(	35.170071	, 	136.90861	), text: "	100002	" }	,
{ name: "	test003	", latlng: new google.maps.LatLng(	35.170081	, 	136.90871	), text: "	100003	" }	,
{ name: "	test004	", latlng: new google.maps.LatLng(	35.170091	, 	136.90881	), text: "	100004	" }	,
{ name: "	test005	", latlng: new google.maps.LatLng(	35.170101	, 	136.90891	), text: "	100005	" }	,
{ name: "	test006	", latlng: new google.maps.LatLng(	35.170111	, 	136.90901	), text: "	100006	" }	,
{ name: "	test007	", latlng: new google.maps.LatLng(	35.170121	, 	136.90911	), text: "	100007	" }	,
{ name: "	test008	", latlng: new google.maps.LatLng(	35.170131	, 	136.90921	), text: "	100008	" }	,
{ name: "	test009	", latlng: new google.maps.LatLng(	35.170141	, 	136.90931	), text: "	100009	" }	,
{ name: "	test010	", latlng: new google.maps.LatLng(	35.170151	, 	136.90941	), text: "	100010	" }	,
{ name: "	test011	", latlng: new google.maps.LatLng(	35.170161	, 	136.90951	), text: "	100011	" }	,
{ name: "	test012	", latlng: new google.maps.LatLng(	35.170171	, 	136.90961	), text: "	100012	" }	,
{ name: "	test013	", latlng: new google.maps.LatLng(	35.170181	, 	136.90971	), text: "	100013	" }	,
{ name: "	test014	", latlng: new google.maps.LatLng(	35.170191	, 	136.90981	), text: "	100014	" }	,
{ name: "	test015	", latlng: new google.maps.LatLng(	35.170201	, 	136.90991	), text: "	100015	" }	,
{ name: "	test016	", latlng: new google.maps.LatLng(	35.170211	, 	136.91001	), text: "	100016	" }	,
{ name: "	test017	", latlng: new google.maps.LatLng(	35.170221	, 	136.91011	), text: "	100017	" }	,
{ name: "	test018	", latlng: new google.maps.LatLng(	35.170231	, 	136.91021	), text: "	100018	" }	,
{ name: "	test019	", latlng: new google.maps.LatLng(	35.170241	, 	136.91031	), text: "	100019	" }	,
{ name: "	test020	", latlng: new google.maps.LatLng(	35.170251	, 	136.91041	), text: "	100020	" }	,
{ name: "	test021	", latlng: new google.maps.LatLng(	35.170261	, 	136.91051	), text: "	100021	" }	,
{ name: "	test022	", latlng: new google.maps.LatLng(	35.170271	, 	136.91061	), text: "	100022	" }	,
{ name: "	test023	", latlng: new google.maps.LatLng(	35.170281	, 	136.91071	), text: "	100023	" }	,
{ name: "	test024	", latlng: new google.maps.LatLng(	35.170291	, 	136.91081	), text: "	100024	" }	,
{ name: "	test025	", latlng: new google.maps.LatLng(	35.170301	, 	136.91091	), text: "	100025	" }	,
{ name: "	test026	", latlng: new google.maps.LatLng(	35.170311	, 	136.91101	), text: "	100026	" }	,
{ name: "	test027	", latlng: new google.maps.LatLng(	35.170321	, 	136.91111	), text: "	100027	" }	,
{ name: "	test028	", latlng: new google.maps.LatLng(	35.170331	, 	136.91121	), text: "	100028	" }	,
{ name: "	test029	", latlng: new google.maps.LatLng(	35.170341	, 	136.91131	), text: "	100029	" }	,
{ name: "	test030	", latlng: new google.maps.LatLng(	35.170351	, 	136.91141	), text: "	100030	" }	,
{ name: "	test031	", latlng: new google.maps.LatLng(	35.170361	, 	136.91151	), text: "	100031	" }	,
{ name: "	test032	", latlng: new google.maps.LatLng(	35.170371	, 	136.91161	), text: "	100032	" }	,
{ name: "	test033	", latlng: new google.maps.LatLng(	35.170381	, 	136.91171	), text: "	100033	" }	,
{ name: "	test034	", latlng: new google.maps.LatLng(	35.170391	, 	136.91181	), text: "	100034	" }	,
{ name: "	test035	", latlng: new google.maps.LatLng(	35.170401	, 	136.91191	), text: "	100035	" }	,
{ name: "	test036	", latlng: new google.maps.LatLng(	35.170411	, 	136.91201	), text: "	100036	" }	,
{ name: "	test037	", latlng: new google.maps.LatLng(	35.170421	, 	136.91211	), text: "	100037	" }	,
{ name: "	test038	", latlng: new google.maps.LatLng(	35.170431	, 	136.91221	), text: "	100038	" }	,
{ name: "	test039	", latlng: new google.maps.LatLng(	35.170441	, 	136.91231	), text: "	100039	" }	,
{ name: "	test040	", latlng: new google.maps.LatLng(	35.170451	, 	136.91241	), text: "	100040	" }	,
{ name: "	test041	", latlng: new google.maps.LatLng(	35.170461	, 	136.91251	), text: "	100041	" }	,
{ name: "	test042	", latlng: new google.maps.LatLng(	35.170471	, 	136.91261	), text: "	100042	" }	,
{ name: "	test043	", latlng: new google.maps.LatLng(	35.170481	, 	136.91271	), text: "	100043	" }	,
{ name: "	test044	", latlng: new google.maps.LatLng(	35.170491	, 	136.91281	), text: "	100044	" }	,
{ name: "	test045	", latlng: new google.maps.LatLng(	35.170501	, 	136.91291	), text: "	100045	" }	,
{ name: "	test046	", latlng: new google.maps.LatLng(	35.170511	, 	136.91301	), text: "	100046	" }	,
{ name: "	test047	", latlng: new google.maps.LatLng(	35.170521	, 	136.91311	), text: "	100047	" }	,
{ name: "	test048	", latlng: new google.maps.LatLng(	35.170531	, 	136.91321	), text: "	100048	" }	,
{ name: "	test049	", latlng: new google.maps.LatLng(	35.170541	, 	136.91331	), text: "	100049	" }	,
{ name: "	test050	", latlng: new google.maps.LatLng(	35.170551	, 	136.91341	), text: "	100050	" }	,
{ name: "	test051	", latlng: new google.maps.LatLng(	35.170561	, 	136.91351	), text: "	100051	" }	,
{ name: "	test052	", latlng: new google.maps.LatLng(	35.170571	, 	136.91361	), text: "	100052	" }	,
{ name: "	test053	", latlng: new google.maps.LatLng(	35.170581	, 	136.91371	), text: "	100053	" }	,
{ name: "	test054	", latlng: new google.maps.LatLng(	35.170591	, 	136.91381	), text: "	100054	" }	,
{ name: "	test055	", latlng: new google.maps.LatLng(	35.170601	, 	136.91391	), text: "	100055	" }	,
{ name: "	test056	", latlng: new google.maps.LatLng(	35.170611	, 	136.91401	), text: "	100056	" }	,
{ name: "	test057	", latlng: new google.maps.LatLng(	35.170621	, 	136.91411	), text: "	100057	" }	,
{ name: "	test058	", latlng: new google.maps.LatLng(	35.170631	, 	136.91421	), text: "	100058	" }	,
{ name: "	test059	", latlng: new google.maps.LatLng(	35.170641	, 	136.91431	), text: "	100059	" }	,
{ name: "	test060	", latlng: new google.maps.LatLng(	35.170651	, 	136.91441	), text: "	100060	" }	,
{ name: "	test061	", latlng: new google.maps.LatLng(	35.170661	, 	136.91451	), text: "	100061	" }	,
{ name: "	test062	", latlng: new google.maps.LatLng(	35.170671	, 	136.91461	), text: "	100062	" }	,
{ name: "	test063	", latlng: new google.maps.LatLng(	35.170681	, 	136.91471	), text: "	100063	" }	,
{ name: "	test064	", latlng: new google.maps.LatLng(	35.170691	, 	136.91481	), text: "	100064	" }	,
{ name: "	test065	", latlng: new google.maps.LatLng(	35.170701	, 	136.91491	), text: "	100065	" }	,
{ name: "	test066	", latlng: new google.maps.LatLng(	35.170711	, 	136.91501	), text: "	100066	" }	,
{ name: "	test067	", latlng: new google.maps.LatLng(	35.170721	, 	136.91511	), text: "	100067	" }	,
{ name: "	test068	", latlng: new google.maps.LatLng(	35.170731	, 	136.91521	), text: "	100068	" }	,
{ name: "	test069	", latlng: new google.maps.LatLng(	35.170741	, 	136.91531	), text: "	100069	" }	,
{ name: "	test070	", latlng: new google.maps.LatLng(	35.170751	, 	136.91541	), text: "	100070	" }	,
{ name: "	test071	", latlng: new google.maps.LatLng(	35.170761	, 	136.91551	), text: "	100071	" }	,
{ name: "	test072	", latlng: new google.maps.LatLng(	35.170771	, 	136.91561	), text: "	100072	" }	,
{ name: "	test073	", latlng: new google.maps.LatLng(	35.170781	, 	136.91571	), text: "	100073	" }	,
{ name: "	test074	", latlng: new google.maps.LatLng(	35.170791	, 	136.91581	), text: "	100074	" }	,
{ name: "	test075	", latlng: new google.maps.LatLng(	35.170801	, 	136.91591	), text: "	100075	" }	,
{ name: "	test076	", latlng: new google.maps.LatLng(	35.170811	, 	136.91601	), text: "	100076	" }	,
{ name: "	test077	", latlng: new google.maps.LatLng(	35.170821	, 	136.91611	), text: "	100077	" }	,
{ name: "	test078	", latlng: new google.maps.LatLng(	35.170831	, 	136.91621	), text: "	100078	" }	,
{ name: "	test079	", latlng: new google.maps.LatLng(	35.170841	, 	136.91631	), text: "	100079	" }	,
{ name: "	test080	", latlng: new google.maps.LatLng(	35.170851	, 	136.91641	), text: "	100080	" }	,
{ name: "	test081	", latlng: new google.maps.LatLng(	35.170861	, 	136.91651	), text: "	100081	" }	,
{ name: "	test082	", latlng: new google.maps.LatLng(	35.170871	, 	136.91661	), text: "	100082	" }	,
{ name: "	test083	", latlng: new google.maps.LatLng(	35.170881	, 	136.91671	), text: "	100083	" }	,
{ name: "	test084	", latlng: new google.maps.LatLng(	35.170891	, 	136.91681	), text: "	100084	" }	,
{ name: "	test085	", latlng: new google.maps.LatLng(	35.170901	, 	136.91691	), text: "	100085	" }	,
{ name: "	test086	", latlng: new google.maps.LatLng(	35.170911	, 	136.91701	), text: "	100086	" }	,
{ name: "	test087	", latlng: new google.maps.LatLng(	35.170921	, 	136.91711	), text: "	100087	" }	,
{ name: "	test088	", latlng: new google.maps.LatLng(	35.170931	, 	136.91721	), text: "	100088	" }	,
{ name: "	test089	", latlng: new google.maps.LatLng(	35.170941	, 	136.91731	), text: "	100089	" }	,
{ name: "	test090	", latlng: new google.maps.LatLng(	35.170951	, 	136.91741	), text: "	100090	" }	,
{ name: "	test091	", latlng: new google.maps.LatLng(	35.170961	, 	136.91751	), text: "	100091	" }	,
{ name: "	test092	", latlng: new google.maps.LatLng(	35.170971	, 	136.91761	), text: "	100092	" }	,
{ name: "	test093	", latlng: new google.maps.LatLng(	35.170981	, 	136.91771	), text: "	100093	" }	,
{ name: "	test094	", latlng: new google.maps.LatLng(	35.170991	, 	136.91781	), text: "	100094	" }	,
{ name: "	test095	", latlng: new google.maps.LatLng(	35.171001	, 	136.91791	), text: "	100095	" }	,
{ name: "	test096	", latlng: new google.maps.LatLng(	35.171011	, 	136.91801	), text: "	100096	" }	,
{ name: "	test097	", latlng: new google.maps.LatLng(	35.171021	, 	136.91811	), text: "	100097	" }	,
{ name: "	test098	", latlng: new google.maps.LatLng(	35.171031	, 	136.91821	), text: "	100098	" }	,
{ name: "	test099	", latlng: new google.maps.LatLng(	35.171041	, 	136.91831	), text: "	100099	" }	,
{ name: "	test100	", latlng: new google.maps.LatLng(	35.171051	, 	136.91841	), text: "	100100	" }	,
				{ name: "丸の内駅", latlng: new google.maps.LatLng(35.175065, 136.896734), text: "123451" }, 
				{ name: "電気の科学館", latlng: new google.maps.LatLng(35.167770, 136.899347), text: "123452" },
				{ name: "栄駅", latlng: new google.maps.LatLng(35.170058, 136.908420), text: "123453" }
			]
		};
	},
	/**
	 *
	 * ポリゴン情報を検索し、ポリゴン情報をセットする。
	 *
	 */
	findPolygonPosition: function(){
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
	},
	/**
	 *
	 * マーカー情報を検索し、マーカー情報をセットする。
	 * @param {text} searchText マーカーの座標情報
	 *
	 */
	findCenterMarker: function(searchText){
		var temp_obj = $.grep(pinPlaces.list,
			function(elem,index){
				return (elem.text == searchText);
			}
		);
		centerLng = temp_obj[0].latlng.lng();
		centerLat = temp_obj[0].latlng.lat();
	}
};

