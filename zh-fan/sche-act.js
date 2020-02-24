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
var ft = document.getElementById ( "foot" ) ;

function translate_fan () 
{
	tt.innerHTML = "ACT - 日程"
	hi.innerHTML = "<a href = 'main.html'> <img src = '../repository/title.jpg' > </a>"
	nsc.innerHTML = "搜尋" ;
	np.innerHTML = "練習" ;
	ne.innerHTML = "試驗" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "關於" ;

	titd.innerHTML = "<div class = 'chn' > 下一場ACT考試: </div>" ;
	mmd.innerHTML = "<div class = 'chn' > 月 </div>" ;
	dayd.innerHTML = "<div class = 'chn' > 天 </div>" ;
	hd.innerHTML = "<div class = 'chn' > 時 </div>" ;
	mind.innerHTML = "<div class = 'chn' > 分 </div>" ;
	sd.innerHTML = "<div class = 'chn' > 秒 </div>" ;

	ft.innerHTML = "語言：" ;

	act_status_fan () ;
	
	document.cookie = "lang = zh-fan; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}