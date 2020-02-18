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

function translate_jyut () 
{
	tt.innerHTML = "主頁"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title.jpg' > </a>"
	nsc.innerHTML = "搜尋" ;
	np.innerHTML = "練習" ;
	ne.innerHTML = "試驗" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "關於" ;
	pd.innerHTML = "<div class = 'chn' > 唔會呢條題？嚟搵下題目嘅答案! </div>" ;
	pb.innerHTML = "<div class = 'chn' > 影像 </div>" ;
	et.innerHTML = "<div class = 'chn' > 試驗 </div>" ;
	ed.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; 呢度提供嘅線上實驗室幫助學生喺冇辦法做線下試驗時亦可以喺網上完成各種各樣啲物理同埋化學嘅試驗，幫助佢哋順利通過有關啲試驗測試。 </div>" ;
	it.innerHTML = "<div class = 'chn' > 信息 </div>" ;
	id.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; 呢個網站提供關於A-level，AP，SAT同ACT嘅備考資料，包括考試時間表，官方指南，考試須知，同考試變化，幫助考生喺考試前掌握所需啲資料並做好準備。 </div>" ;
	st.innerHTML = "<div class = 'chn' > 日程 </div>" ;
	sd.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; 呢度仲有精心爲考生準備嘅考試日程表，包括註冊考試截止日同埋考試時間，幫助佢哋計畫日程並合理安排時間準備考試。 </div>" 
	ft.innerHTML = "語言：" ;


	document.cookie = "lang = jyut; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}