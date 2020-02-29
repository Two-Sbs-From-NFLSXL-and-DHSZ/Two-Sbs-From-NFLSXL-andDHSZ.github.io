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

function translate_fan () 
{
	tt.innerHTML = "AP - 日程"
	hi.innerHTML = "<a href = '../main.html'> <img src = '../repository/title.jpg' > </a>"
	nsc.innerHTML = "搜尋" ;
	np.innerHTML = "練習" ;
	ne.innerHTML = "試驗" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "關於" ;

	titd.innerHTML = "距離2020 AP考試:>" ;
	mmd.innerHTML = "月>" ;
	dayd.innerHTML = "天>" ;
	hd.innerHTML = "時>" ;
	mind.innerHTML = "分>" ;
	sd.innerHTML = "秒>" ;

	fir.innerHTML = "<th class = 'chn' > 考試科目 </th> <th class = 'chn' > 考試時間 </th> <th class = 'chn' > 距考試開始時間 </th>" ;

	ft.innerHTML = "語言：" ;
	
	document.cookie = "lang = zh-fan; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}