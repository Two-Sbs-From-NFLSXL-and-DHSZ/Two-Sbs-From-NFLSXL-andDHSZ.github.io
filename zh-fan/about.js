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

function translate_zh_fan () 
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
	ad.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; 這個網站是由Martin Zhou和David Fu擁有並設計的。本網站基於GitHub Pages開發。\
	我們設計這個網站的主要目的是為了幫助國際高中學生在如A-level、AP和SAT等的國際考試中取得理想的成績。本網站主要提供在線搜題的\
	功能，此功能可以幫助學生解決在複習考試過程中遇到的難題。此外，我們也提供線上練習和線上試驗的功能來幫助學生取得更好的成績。希\
	望您能夠享受瀏覽此網站。" ;
	adt.innerHTML = "關於開發者" ;
	add.innerHTML = "暫無內容" ;
	ct.innerHTML = "聯繫我們" ;
	cd.innerHTML = "暫無內容" ;
	ft.innerHTML = "語言：" ;

	document.cookie = "lang = zh-fan; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}