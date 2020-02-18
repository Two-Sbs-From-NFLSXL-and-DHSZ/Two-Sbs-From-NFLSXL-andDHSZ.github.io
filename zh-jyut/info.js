var tt = document.getElementById ( "tit" ) ;
var hi = document.getElementById ( "header" ) ;
var nsc = document.getElementById ( "nav-search" ) ;
var np = document.getElementById ( "nav-prac" ) ;
var ne = document.getElementById ( "nav-exp" ) ;
var ni = document.getElementById ( "nav-info" ) ;
var ns = document.getElementById ( "nav-sche" ) ;
var na = document.getElementById ( "nav-about" ) ;
var at = document.getElementById ( "alevel-title" ) ;
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

function translate_jyut () 
{
	tt.innerHTML = "信息"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title.jpg' > </a>"
	nsc.innerHTML = "搜尋" ;
	np.innerHTML = "練習" ;
	ne.innerHTML = "試驗" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "關於" ;
	at.innerHTML = "<div class = 'chn' > A-level </div>" ;
	ad.innerHTML  = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp;A-level(Advanced Level)考試係由AQA，OCR同Edexcel等多家考試局舉辦嘅分學科考試。作爲普通教育證書(GCE)嘅一部分，A-level考試被視爲英國高中畢業考試同大學入學考試。學生可以喺兩年中完成考試，其中每年完成3~4門科目啲考試。同其它大學入學考試唔同，A-level冇科目要求，因此考生選擇佢哋鍾意啲科目完成考試。除卻英國，其它國家，如新加坡、烏干達等亦都擁有A-level考試，同英國嘅只有小小區別。 </div>" ;
	apt.innerHTML = "<div class = 'chn' > AP 考試 </div>" ;
	apd.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp;美國大學預科(Advanced Level)係由美國大學理事會(College Board)組織並舉辦嘅，佢爲中學學生提供大學課程同考試，包括微積分、美國歷史、經濟學等。學生喺AP考試中攞到啲分數可以喺美國大學充當學分。AP考試喺每年五月嘅第一個禮拜一開始，並持續兩個禮拜。期間會有多過30場考試舉行。AP考試嘅分數畫分爲1~5分，其中1分爲最低，5分爲最高，表示學生對科目有非常之良好嘅瞭解。AP考試啲成績喺七月公開，考生可以喺考試成績公開後決定是否取消成績。 </div>" ;
	st.innerHTML = "<div class = 'chn' > SAT 考試 </div>" ;
	sd.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; SAT喺美國大學理事會舉辦嘅標準化考試。作爲美國大學入學考試之一，SAT主要檢測學生是否申請大學啲基本條件。佢主要分爲三部分：閱讀、文法、數學，同埋可選考嘅作文。SAT考試喺三、四、五、六、八、十同十二月舉行(其中三、五、十、十二月喺香港同澳門有考點)。SAT考試時長爲大約3個鐘頭，作文另有50分鐘。考試分數介於400同1600之間，考生喺考試後三個禮拜可以得到分數。 </div>" ;
	actt.innerHTML = "<div class = 'chn' > ACT 考試 </div>" ;
	actd.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; ACT考試喺由非營利組織ACT舉辦嘅標準化美國大學入學考試。佢考察學生喺英文、數學、閱讀同埋科學嘅能力。考察啲各部分係單獨計分，分數介於1同36之間。ACT喺二、四、六、七、九、十同十二月有考試，考試時間大致爲3個鐘頭，但佢啲題目數量遠遠多過SAT嘅，因此考生要掌握喺短時間做題嘅能力。 </div>" ;
	lm1.innerHTML = "<div class = 'chn' > 瞭解更多 </div>" ;
	lm2.innerHTML = "<div class = 'chn' > 瞭解更多 </div>" ;
	lm3.innerHTML = "<div class = 'chn' > 瞭解更多 </div>" ;
	lm4.innerHTML = "<div class = 'chn' > 瞭解更多 </div>" ;
	ft.innerHTML = "語言：" ;

	document.cookie = "lang = jyut; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}