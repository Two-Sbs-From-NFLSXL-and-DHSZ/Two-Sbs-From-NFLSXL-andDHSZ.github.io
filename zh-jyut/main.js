var gcs = document.getElementById ( "gcs" ) ;
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
	gcs.innerHTML = "<link rel = 'stylesheet' type = 'text/css' href = 'zh-jyut/home.css' >"
	tt.innerHTML = "主頁"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title.jpg' > </a>"
	nsc.innerHTML = "搜尋" ;
	np.innerHTML = "練習" ;
	ne.innerHTML = "試驗" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "關於" ;
	pd.innerHTML = "唔會呢條題？嚟搵下題目嘅答案!" ;
	pb.innerHTML = "影像" ;
	et.innerHTML = "試驗" ;
	ed.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; 呢度提供嘅線上實驗室幫助學生喺冇辦法做線下試驗時亦可以在網上完成各種各樣啲物理\
	同埋化學嘅試驗，幫助佢哋順利通過有關啲試驗測試。" ;
	it.innerHTML = "信息" ;
	id.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; 呢個網站提供關於A-level，AP，SAT同ACT嘅備考資料，包括考試時間表，官方指南，\
	考試須知，同考試變化，幫助考生喺考試前掌握所需啲資料並做好準備。" ;
	st.innerHTML = "日程" ;
	sd.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; 呢度仲有精心爲考生準備嘅考試日程表，包括註冊考試截止日期同埋考試時間，幫助佢哋\
	計畫日程並合理安排時間準備考試。" 
	ft.innerHTML = "語言：" ;


	document.cookie = "lang = jyut; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}