var tt = document.getElementById ( "tit" ) ;
var hi = document.getElementById ( "header" ) ;
var nh = document.getElementById ( "nav-home" ) ;
var nsc = document.getElementById ( "nav-search" ) ;
var ne = document.getElementById ( "nav-exp" ) ;
var ni = document.getElementById ( "nav-info" ) ;
var ns = document.getElementById ( "nav-sche" ) ;
var na = document.getElementById ( "nav-about" ) ;
var ft = document.getElementById ( "foot" ) ;

function translate_jyut () 
{
	tt.innerHTML = "日程 - 國際考試助手"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title-fan.jpg' > </a>"
	nh.innerHTML = "主頁" ;
	nsc.innerHTML = "搜尋" ;
	ne.innerHTML = "試驗" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "關於" ;
	ft.innerHTML = "語言：" ;

	
	document.cookie = "lang = jyut" ;
}