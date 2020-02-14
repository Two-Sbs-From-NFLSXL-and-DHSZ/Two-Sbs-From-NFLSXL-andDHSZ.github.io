var tt = document.getElementById ( "tit" ) ;
var hi = document.getElementById ( "header" ) ;
var nh = document.getElementById ( "nav-home" ) ;
var nsc = document.getElementById ( "nav-search" ) ;
var ne = document.getElementById ( "nav-exp" ) ;
var ni = document.getElementById ( "nav-info" ) ;
var ns = document.getElementById ( "nav-sche" ) ;
var na = document.getElementById ( "nav-about" ) ;
var pd = document.getElementById ( "photo-desp" ) ;
var pb = document.getElementById ( "photo-button" ) ;
var et = document.getElementById ( "exp-title" ) ;
var ed = document.getElementById ( "exp-desp" ) ;
var it = document.getElementById ( "info-title" ) ;
var id = document.getElementById ( "info-desp" ) ;
var st = document.getElementById ( "sche-title" ) ;
var sd = document.getElementById ( "sche-desp" ) ;
var ft = document.getElementById ( "foot" ) ;

function translate_jyut () 
{
	tt.innerHTML = "主頁 - 國際考試助手"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title-fan.jpg' > </a>"
	nh.innerHTML = "主頁" ;
	nsc.innerHTML = "搜尋" ;
	ne.innerHTML = "試驗" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "關於" ;
	pd.innerHTML = "唔會呢條題？嚟搵下題目嘅答案!" ;
	pb.innerHTML = "影像" ;
	et.innerHTML = "試驗" ;
	ed.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; 搵唔到地方做試驗，定係攞唔到需要啲嘢？冇關係！喺呢度做線上試驗！呢個網站提供物理同埋化學嘅線上試驗畀你，仲有多種多樣嘅試驗考試模擬，幫助你輕鬆應付試驗考試！" ;
	it.innerHTML = "信息" ;
	id.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; 搵唔到及時同準確嘅考試信息？嚟呢度！我哋提供A-level, AP, SAT, ACT準確有效嘅信息，包括考試時間，官方指南，以及考試變化。嚟睇下！" ;
	st.innerHTML = "日程" ;
	sd.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; 想要一張考試日程表卻冇時間計劃？我哋爲你準備咗喇！嚟睇下考試時間並做好準備！" 
	ft.innerHTML = "語言：" ;


	document.cookie = "lang = jyut" ;
}