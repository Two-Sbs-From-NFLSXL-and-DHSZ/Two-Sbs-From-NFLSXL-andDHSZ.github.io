var tt = document.getElementById ( "tit" ) ;
var hi = document.getElementById ( "header" ) ;
var nsc = document.getElementById ( "nav-search" ) ;
var np = document.getElementById ( "nav-prac" ) ;
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

function translate_fan () 
{
	tt.innerHTML = "首頁"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title.jpg' > </a>"
	nsc.innerHTML = "搜尋" ;
	np.innerHTML = "練習" ;
	ne.innerHTML = "試驗" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "關於" ;
	pd.innerHTML = "<div class = 'chn' > 有題目不會做？來找下答案! </div>" ;
	et.innerHTML = "<div class = 'chn' > 試驗 </div>" ;
	ed.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; 本網站提供線上實驗室功能，幫助學生足不出戶便可以完成在實驗室才能完成的物理和化學實驗，讓學生能夠順利通過相關的實驗測試。 </div>" ;
	it.innerHTML = "<div class = 'chn' > 信息 </div>" ;
	id.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; 本網站提供關於A-level、AP、SAT和ACT的備考資料，包括考試時間、官方指南、考生須知等，幫助考生在考試前掌握所需的資料並做好充足準備。 </div>" ;
	st.innerHTML = "<div class = 'chn' > 日程 </div>" ;
	sd.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; 本網站提供為考生準備的考試日程表，其中囊括了國際考試註冊截止日期和考試時間，幫助考生合理規劃安排時間，並充分準備考試，避免錯過重要的考試。。 </div>" 
	ft.innerHTML = "語言：" ;


	document.cookie = "lang = zh-fan; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}