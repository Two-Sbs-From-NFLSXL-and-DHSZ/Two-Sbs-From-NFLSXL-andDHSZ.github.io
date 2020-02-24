var id = document.getElementById ( "status" ) ;

var sat_zh = [] ;

sat_zh [ 0 ] = { ddl: 214 , time: 314 , post: 304 , sat2: 0 , center: "全部" } ;
sat_zh [ 1 ] = { ddl: 403 , time: 502 , post: 515 , sat2: 1 , center: "全部" } ;
sat_zh [ 2 ] = { ddl: 508 , time: 606 , post: 615 , sat2: 1 , center: "北美及欧洲" } ;
sat_zh [ 3 ] = { ddl: 807 , time: 829 , post: 917 , sat2: 1 , center: "全部" } ;
sat_zh [ 4 ] = { ddl: 920 , time: 1003 , post: 1022 , sat2: 1 , center: "全部" } ;
sat_zh [ 5 ] = { ddl: 1009 , time: 1107 , post: 1126 , sat2: 1 , center: "北美及欧洲" } ;
sat_zh [ 6 ] = { ddl: 1106 , time: 1205 , post: 1217 , sat2: 1 , center: "全部" } ;

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

function sat_status_zh ()
{
	var str = "<tr id = 'first-line' class = 'chn' > <th> 考试时间 </th> <th> 考点 </th> <th> SAT II </th> <th> 状态 </th> </tr>" ;

	for ( var i = 0 ; i < sat_zh.length ; i++ )
	{
		str += "<tr>" ;

		str += `<th> ${ parseInt ( sat_zh [ i ].time / 100 ) }/${ sat_zh [ i ].time % 100 } </th> ` ;

		str += `<th> ${ sat_zh [ i ].center } </th>` ;

		if ( sat_zh [ i ].sat2 )
			str += "<th> 有 </th>" ;
		else
			str += "<th> 无 </th>" ;

		if ( comp ( sat_zh [ i ].ddl ) )
			str += "<th class = 'ava chn' > 报名中 </th>" ;
		else if ( comp ( sat_zh [ i ].time ) )  
			str += "<th class = 'reg-end chn' > 报名结束 </th>" ;
		else if ( comp ( sat_zh [ i ].post ) )
			str += "<th class = 'end chn' > 考试结束 </th>" ;
		else
			str += "<th class = 'score chn' > 已出分 </th>" ;

		str += "</tr>" ;
	} 

	id.innerHTML = str ;
}