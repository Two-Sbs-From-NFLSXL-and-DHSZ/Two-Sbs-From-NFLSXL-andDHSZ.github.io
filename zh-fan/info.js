var gcs = document.getElementById ( "gcs" ) ;
var tt = document.getElementById ( "tit" ) ;
var hi = document.getElementById ( "header" ) ;
var nsc = document.getElementById ( "nav-search" ) ;
var np = document.getElementById ( "nav-prac" ) ;
var ne = document.getElementById ( "nav-exp" ) ;
var ni = document.getElementById ( "nav-info" ) ;
var ns = document.getElementById ( "nav-sche" ) ;
var na = document.getElementById ( "nav-about" ) ;
var ad = document.getElementById ( "alevel-desp" ) ;
var apt = document.getElementById ( "ap-title" ) ;
var apd = document.getElementById ( "ap-desp" ) ;
var st = document.getElementById ( "sat-title" ) ;
var sd = document.getElementById ( "sat-desp" ) ;
var actt = document.getElementById ( "act-title" ) ;
var actd = document.getElementById ( "act-desp" ) ;
var lm1 = document.getElementById ( "learn-more-1" ) ;
var lm2 = document.getElementById ( "learn-more-2" ) ;
var lm3 = document.getElementById ( "learn-more-3" ) ;
var lm4 = document.getElementById ( "learn-more-4" ) ;
var ft = document.getElementById ( "foot" ) ;

function translate_fan () 
{
	gcs.innerHTML = "<link rel = 'stylesheet' type = 'text/css' href = 'zh-fan/information.css' >"
	tt.innerHTML = "信息"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title.jpg' > </a>"
	nsc.innerHTML = "搜尋" ;
	np.innerHTML = "練習" ;
	ne.innerHTML = "試驗" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "關於" ;
	ad.innerHTML  = "&nbsp;&nbsp;&nbsp;&nbsp;A-level考試是由AQA、OCR、Edexcel等考試局舉辦的分學科考試。作為GCE的一部分，A-\
	level考試在英國被視為高中畢業考試以及大學入學考試。學生大多能在2年之內完成A-level科目的考試，其中每年完成3~4門科目考試。與\
	其它考試不同，A-level沒有指定考試學科，所以學生可以自由選擇自己喜愛的科目考試。除英國外，新加坡、烏干達、肯尼亞也都有自己的\
	A-level考試系統。" ;
	apt.innerHTML = "AP 考試" ;
	apd.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;AP(美國大學預科課程)是College Board(美國大學理事會)設立的項目。AP主要為學有\
	餘力的高中學生提供大學課程和考試，且考試成績可以兌換美國大學學分。AP考試在五月第一個星期一開始並持續兩個星期，其間30多門AP\
	科目的考試將舉行。AP考試的分數在1~5之間，其中1為最低分，5為最高分。考生可以在七月得到AP考試分數，之後學生可以選擇取消自己不\
	滿意的學科考試分數。" ;
	st.innerHTML = "SAT 考試" ;
	sd.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;SAT考試是College Board舉辦的標準化考試。作為美國大學入學考試之一，SAT主要測試\
	學生是否具備申請美國大學的能力。SAT考試主要分為閱讀、文法和數學，另有可以選考的作文。SAT通常在三、四、五、六、八、十、十二月進行\
	，其中三、五、十、十二月在亞太地區設有考點。SAT考試需要3個小時完成，作文另有50分鐘。考生通常可以在考試結束後3個星期得到考試成績。" ;
	actt.innerHTML = "ACT 考試" ;
	actd.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;ACT考試是由非營利組織ACT舉辦的標準化考試。它主要測試學生在英語、數學、閱讀和科\
	學方面的能力，每項單獨計分，總分36分。ACT考試在二、四、六、七、九、十、十二月設有考試。ACT考試時間為3個小時，但是其題量較SAT多\
	，因此考生需要掌握在短時間內閱讀並答題的能力。" ;
	lm1.innerHTML = "瞭解更多" ;
	lm2.innerHTML = "瞭解更多" ;
	lm3.innerHTML = "瞭解更多" ;
	lm4.innerHTML = "瞭解更多" ;
	ft.innerHTML = "語言：" ;

	document.cookie = "lang = zh-fan; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}