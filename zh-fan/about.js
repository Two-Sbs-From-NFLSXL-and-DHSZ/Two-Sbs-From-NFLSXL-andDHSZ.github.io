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

function translate_zh () 
{
	gcs.innerHTML = "<link rel = 'stylesheet' type = 'text/css' href = 'zh-cn/about.css' >"
	tt.innerHTML = "关于"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title.jpg' > </a>"
	nsc.innerHTML = "搜索" ;
	np.innerHTML = "练习" ;
	ne.innerHTML = "实验" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "关于" ;
	at.innerHTML = "关于网站" ;
	ad.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; 此网站是由苏州德威的zym和南外仙林的fjh拥有并设计的，本网站是基于GitHub Pages开\
	发的。我们开发网站的主要目的是帮助国际高中学生在国际考试，如A-level，SAT和AP中能够取得理想的成绩。本网站的主要功能是线上搜题\
	，我们可以帮助学生解决他们在国际考试的复习过程中所遇到的难题。我们也提供线上练习和线上实验功能来帮助他们取得更好的成绩。希望您\
	能够享受浏览本网站。" ;
	adt.innerHTML = "关于开发者" ;
	add.innerHTML = "暂无内容" ;
	ct.innerHTML = "联系我们" ;
	cd.innerHTML = "暂无内容" ;
	ft.innerHTML = "语言：" ;

	document.cookie = "lang = zh; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}