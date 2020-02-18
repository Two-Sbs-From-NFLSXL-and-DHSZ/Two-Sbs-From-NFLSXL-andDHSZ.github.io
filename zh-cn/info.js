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

function translate_zh () 
{
	tt.innerHTML = "信息"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title.jpg' > </a>"
	nsc.innerHTML = "搜索" ;
	np.innerHTML = "练习" ;
	ne.innerHTML = "实验" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "关于" ;
	at.innerHTML = "<div class = 'chn' > A-level </div>" ;
	ad.innerHTML  = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; A-level考试是由AQA、OCR和Edexcel举办的分学科考试。作为GCE的一部分，A-level考试在英国被视为高中毕业考试及大学入学考试。学生大多在2年内完成A-level的考试，其中每年完成3~4门科目的考试。与其它考试不同的是，A-level考试没有指定科目，所以考生可以选择自己喜爱的科目完成考试。除英国外，新加坡、乌干达、肯尼亚等国家也都设立了自己的A-level考试系统。 </div>" ;
	apt.innerHTML = "<div class = 'chn' > AP 考试 </div>" ;
	apd.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp;AP(美国大学预科课程)是College Board(美国大学理事会)设立的项目。AP主要为学有余力的高中学生提供大学课程及考试，并且考试成绩可以兑换美国大学学分。AP考试在五月第一个星期一开始并持续两个星期，其间30多门AP考试将会举办。AP考试的分数为1~5之间，其中1为最低，5为最高。AP考试成绩在七月公布，之后考生可以决定是否取消本次考试成绩。 </div>" ;
	st.innerHTML = "<div class = 'chn' > SAT 考试 </div>" ;
	sd.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; SAT考试是College Board举办的标准化考试，作为两种美国大学入学考试之一，SAT考试测试学生是否具备申请美国大学的能力。SAT考试分为阅读、语法和数学三部分，另有可以选考的写作。SAT通常在三、四、五、六、八、十、十二月举行，其中三、五、十、十二月在亚太地区设有考点。但是由于中国大陆没有SAT考点，所以学生需要到港澳台进行考试。SAT考试需要3个小时完成，作文另有50分钟。考生通常可以在考试结束之后3个星期内得到分数。 </div>" ;
	actt.innerHTML = "<div class = 'chn' > ACT 考试 </div>" ;
	actd.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; ACT考试是由非营利组织ACT举办的标准化考试。它主要测试学生在英语、数学、阅读和科学的能力，每项单独计分，总分为36分。ACT考试在二、四、六、七、九、十、十二月设有考试，但是中国大陆不设有考点。ACT考试时间为3个小时，但是题量较SAT多，所以考生需要掌握在短时间内完成阅读和答题的能力。 </div>" ;
	lm1.innerHTML = "<div class = 'chn' > 了解更多 </div>" ;
	lm2.innerHTML = "<div class = 'chn' > 了解更多 </div>" ;
	lm3.innerHTML = "<div class = 'chn' > 了解更多 </div>" ;
	lm4.innerHTML = "<div class = 'chn' > 了解更多 </div>" ;
	ft.innerHTML = "语言：" ;

	document.cookie = "lang = zh; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}