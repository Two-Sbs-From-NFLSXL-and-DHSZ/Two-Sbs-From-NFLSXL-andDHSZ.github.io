var gcs = document.getElementById ( "gcs" ) ;
var tt = document.getElementById ( "tit" ) ;
var hi = document.getElementById ( "header" ) ;
var nh = document.getElementById ( "nav-home" ) ;
var nsc = document.getElementById ( "nav-search" ) ;
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

function translate_jyut () 
{
	gcs.innerHTML = "<link rel = 'stylesheet' type = 'text/css' href = 'zh-jyut/information.css' >"
	tt.innerHTML = "信息 - 國際考試助手"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title-fan.jpg' > </a>"
	nh.innerHTML = "主頁" ;
	nsc.innerHTML = "搜尋" ;
	ne.innerHTML = "試驗" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "關於" ;
	ad.innerHTML  = "&nbsp;&nbsp;&nbsp;&nbsp;A-level考試爲Pearson Edexcel舉辦嘅國際考試，在五月，六月以及一月舉辦。作爲\
	GCE(General Certificate of Education)嘅一部分，A-level考試主要針對英國方向嘅學生，並被包括新加坡，烏干達的多個國家認\
	可。A-level考試已經成爲英國大學要求嘅基本申請條件之一。" ;
	apt.innerHTML = "AP 考試" ;
	apd.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;AP考試(美國大學預科考試)係由College Board(美國大學理事會)舉辦的考試，在每\
	年五月舉辦。佢的主要目的係爲高中學生提供大學預備課程，包括微積分，美國歷史，經濟學等多個方面，並且考試成績可以兌換美國大學學分\
	。AP考試在所有國家及地區都有考點，根據所在的學校決定。考試成績按1~5畫分，其中1分爲最低，5分爲最高。部分美國大學要求學生擁有\
	至少三門AP考試在4分及以上。" ;
	st.innerHTML = "SAT 考試" ;
	sd.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;SAT係美國大學入學考試之一，由College Board在每年三、四、五、六、八、十、十二月\
	舉辦(其中四、六、八月只在北美同歐洲舉辦)。佢測試考試閱讀，語法及算數(分爲兩部分，一部分唔可以使用計算器，另一部分可以使用)，\
	另有作文可以選考，並單獨計分。SAT考試總分爲1600，1400分及以上爲較好之分數，部分美國頂尖大學會要求學生擁有1500及以上嘅SAT\
	成績。SAT考試在香港同澳門都有考點，考生可以在任何時間登錄College Board官網報名考試。" ;
	actt.innerHTML = "ACT 考試" ;
	actd.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;ACT係由非營利組織ACT主辦嘅美國大學入學考試，主要考察考生在英語，算數及科學\
	嘅能力，佢嘅分數係由呢四科平均分計算嘅，總分36分，30及以上爲較好之分數。此外，考生亦可以選擇參加作文考試。ACT已經被美國\
	所有嘅四年制大學及文理學院認可。" ;
	lm1.innerHTML = "瞭解更多" ;
	lm2.innerHTML = "瞭解更多" ;
	lm3.innerHTML = "瞭解更多" ;
	lm4.innerHTML = "瞭解更多" ;
	ft.innerHTML = "語言：" ;

	document.cookie = "lang = jyut" ;
}