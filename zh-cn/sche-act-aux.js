var id = document.getElementById ( "status" ) ;

var act_zh = [] ;

act_zh [ 0 ] = { ddl: 110 , time: 208 , post: 304 , center: "北美及欧洲" } ;
act_zh [ 1 ] = { ddl: 208 , time: 404 , post: 428 , center: "全部" } ;
act_zh [ 2 ] = { ddl: 508 , time: 613 , post: 607 , center: "全部" } ;
act_zh [ 3 ] = { ddl: 619 , time: 718 , post: 811 , center: "全部" } ;
act_zh [ 4 ] = { ddl: 807 , time: 912 , post: 1006 , center: "全部" } ;
act_zh [ 5 ] = { ddl: 920 , time: 1024 , post: 1117 , center: "全部" } ;
act_zh [ 6 ] = { ddl: 1106 , time: 1212 , post: 1305 , center: "全部" } ;

function comp ( date ) 
{
	var d = new Date () ;
	var cmm = d.getMonth () ;
	var cdd = d.getDate () ;
	
	var mm = parseInt ( date / 100 ) - 1 ;
	var dd = date % 100 ;

	if ( mm < cmm || ( mm == cmm  && dd < cdd ) ) return 0 ;
	else return 1 ;
}

function act_status_zh ()
{
	var str = "<tr id = 'first-line' class = 'chn' > <th> 考试时间 </th> <th> 考点 </th> <th> 状态 </th> </tr>" ;

	for ( var i = 0 ; i < act_zh.length ; i++ )
	{
		str += "<tr>" ;

		str += `<th> ${ parseInt ( act_zh [ i ].time / 100 ) }/${ act_zh [ i ].time % 100 } </th> ` ;

		str += `<th> ${ act_zh [ i ].center } </th>` ;

		if ( comp ( act_zh [ i ].ddl ) )
			str += "<th class = 'ava chn' > 报名中 </th>" ;
		else if ( comp ( act_zh [ i ].time ) )  
			str += "<th class = 'reg-end chn' > 报名结束 </th>" ;
		else if ( comp ( act_zh [ i ].post ) )
			str += "<th class = 'end chn' > 考试结束 </th>" ;
		else
			str += "<th class = 'score chn' > 已出分 </th>" ;

		str += "</tr>" ;
	} 

	id.innerHTML = str ;
}