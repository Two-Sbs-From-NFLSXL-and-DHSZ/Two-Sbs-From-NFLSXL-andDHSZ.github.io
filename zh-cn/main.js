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

function translate_zh () 
{
	tt.innerHTML = "首页"
	hi.innerHTML = "<a href = 'main.html'> <img src = 'repository/title.jpg' > </a>"
	nsc.innerHTML = "搜索" ;
	np.innerHTML = "练习" ;
	ne.innerHTML = "实验" ;
	ni.innerHTML = "信息" ;
	ns.innerHTML = "日程" ;
	na.innerHTML = "关于" ;
	pd.innerHTML = "<div class = 'chn' > 有题目不会做？来找下答案！ </div>" ;
	pb.innerHTML = "<div class = 'chn' > 拍照 </div>" ;
	et.innerHTML = "<div class = 'chn' > 实验 </div>" ;
	ed.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; 本网站提供线上实验室功能，帮助学生足不出户便可以完成在实验室才能完成的物理和化学实验，让学生能够顺利通过有关的实验考试。 </div>" ;
	it.innerHTML = "<div class = 'chn' > 信息 </div>" ;
	id.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; 本网站提供关于A-level、AP、SAT和ACT的备考资料，包括考试时间、官方指南、考生须知等，帮助考生在考试前掌握所需的资料并做好准备。 </div>" ;
	st.innerHTML = "<div class = 'chn' > 日程 </div>" ;
	sd.innerHTML = "<div class = 'chn' > &nbsp;&nbsp;&nbsp;&nbsp; 本网站提供为考生准备的考试日程表，其中囊括了国际考试注册截止日期和考试时间，帮助考生合理计划时间并充分准备考试，避免错过重要的考试。 </div>" 
	ft.innerHTML = "语言：" ;


	document.cookie = "lang = zh; expires=Fri, 31 Dec 9999 23:59:59 GMT" ;
}