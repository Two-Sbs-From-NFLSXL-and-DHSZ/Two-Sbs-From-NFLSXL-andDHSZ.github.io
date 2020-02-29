var tt = document.getElementById ( "tit" ) ;
var hi = document.getElementById ( "header" ) ;
var nsc = document.getElementById ( "nav-search" ) ;
var np = document.getElementById ( "nav-prac" ) ;
var ne = document.getElementById ( "nav-exp" ) ;
var ni = document.getElementById ( "nav-info" ) ;
var ns = document.getElementById ( "nav-sche" ) ;
var na = document.getElementById ( "nav-about" ) ;
var titd = document.getElementById ( "title-desp" ) ;
var mmd = document.getElementById ( "month-desp" ) ;
var dayd = document.getElementById ( "day-desp" ) ;
var hd = document.getElementById ( "hour-desp" ) ;
var mind = document.getElementById ( "minute-desp" ) ;
var sd = document.getElementById ( "second-desp" ) ;
var fir = document.getElementById ( "first-line" ) ;
var ft = document.getElementById ( "foot" ) ;

function translate_zh () 
{
	tt.innerHTML = "AP - 日程"
	hi.innerHTML = "<a href = '../main.html'> <img src = '../repository/title.jpg' > </a>"
	nsc.innerHTML = "搜索" ;
	np.innerHTML = "练习" ;
	ne.innerHTML = "实验" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "关于" ;
	
	titd.innerHTML = "距离2020 AP考试:" ;
	mmd.innerHTML = "月" ;
	dayd.innerHTML = "天" ;
	hd.innerHTML = "小时" ;
	mind.innerHTML = "分钟" ;
	sd.innerHTML = "秒" ;

	fir.innerHTML = "<th> 考试科目 </th> <th> 考试时间 </th> <th> 距离考试开始时间 </th>" ;

	ft.innerHTML = "语言：" ;
	
	document.cookie = "lang = zh; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}