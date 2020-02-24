var id = document.getElementById ( "status" ) ;

var act = [] ;

act [ 0 ] = { ddl: 110 , time: 208 , post: 304 , center: "北美及歐洲" } ;
act [ 1 ] = { ddl: 208 , time: 404 , post: 428 , center: "全部" } ;
act [ 2 ] = { ddl: 508 , time: 613 , post: 607 , center: "全部" } ;
act [ 3 ] = { ddl: 619 , time: 718 , post: 811 , center: "全部" } ;
act [ 4 ] = { ddl: 807 , time: 912 , post: 1006 , center: "全部" } ;
act [ 5 ] = { ddl: 920 , time: 1024 , post: 1117 , center: "全部" } ;
act [ 6 ] = { ddl: 1106 , time: 1212 , post: 1305 , center: "全部" } ;

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

function act_status_fan ()
{
	var str = "<tr id = 'first-line' class = 'chn' > <th> 考試時間 </th> <th> 考點 </th> <th> 狀態 </th> </tr>" ;

	for ( var i = 0 ; i < act.length ; i++ )
	{
		str += "<tr>" ;

		str += `<th> ${ parseInt ( act [ i ].time / 100 ) }/${ act [ i ].time % 100 } </th> ` ;

		str += `<th> ${ act [ i ].center } </th>` ;

		if ( comp ( act [ i ].ddl ) )
			str += "<th class = 'ava chn' > 報名中 </th>" ;
		else if ( comp ( act [ i ].time ) )  
			str += "<th class = 'reg-end chn' > 報名結束 </th>" ;
		else if ( comp ( act [ i ].post ) )
			str += "<th class = 'end chn' > 考試結束 </th>" ;
		else
			str += "<th class = 'score chn' > 分數可用 </th>" ;

		str += "</tr>" ;
	} 

	id.innerHTML = str ;
}