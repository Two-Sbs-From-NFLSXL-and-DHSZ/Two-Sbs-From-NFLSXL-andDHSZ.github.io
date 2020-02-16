var gcs = document.getElementById ( "gcs" ) ;
var tt = document.getElementById ( "tit" ) ;
var hi = document.getElementById ( "header" ) ;
var nsc = document.getElementById ( "nav-search" ) ;
var np = document.getElementById ( "nav-prac" ) ;
var ne = document.getElementById ( "nav-exp" ) ;
var ni = document.getElementById ( "nav-info" ) ;
var ns = document.getElementById ( "nav-sche" ) ;
var na = document.getElementById ( "nav-about" ) ;
var at = document.getElementById ( "about-title" ) ;
var ad = document.getElementById ( "about-desp" ) ;
var adt = document.getElementById ( "about-dev-title" ) ;
var add = document.getElementById ( "about-dev-desp" ) ;
var ct = document.getElementById ( "contact-title" ) ;
var cd = document.getElementById ( "contact-desp" ) ;
var ft = document.getElementById ( "foot" ) ;

function translate_jyut () 
{
	gcs.innerHTML = "<link rel = 'stylesheet' type = 'text/css' href = 'zh-jyut/about.css' >"
	tt.innerHTML = "關於"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title.jpg' > </a>"
	nsc.innerHTML = "搜尋" ;
	np.innerHTML = "練習" ;
	ne.innerHTML = "試驗" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "關於" ;
	at.innerHTML = "關於網站" ;
	ad.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; 呢個網站喺由Martin Zhou同David Fu擁有同埋設計，並基於GitHub Pages開放嘅。佢嘅\
	主要目的係幫助希望進入美國同英國大學啲高中學生喺如A-level，SAT同AP考試中得到理想嘅分數。呢個網站提供搜尋題目、線上練習同試驗\
	等畀學生，幫助佢哋解決問題並提高考試成績。我哋希望您可以享受喺呢度嘅體驗。" ;
	adt.innerHTML = "關於開發者" ;
	add.innerHTML = "暫無內容" ;
	ct.innerHTML = "聯繫我哋" ;
	cd.innerHTML = "暫無內容" ;
	ft.innerHTML = "語言：" ;

	document.cookie = "lang = jyut; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}