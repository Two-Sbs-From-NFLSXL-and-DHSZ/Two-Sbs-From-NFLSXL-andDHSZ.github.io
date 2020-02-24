var id = document.getElementById ( "status" ) ;

var alevel = [] ;

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

function alevel_status_fan ()
{
	var str = "<tr id = 'first-line' class = 'chn' > <th> 举办机构 </th> <th> 开始时间 </th> <th> 结束时间 </th> </tr>" ;

	for ( var i = 0 ; i < alevel.length ; i++ )
	{
		str += "<tr>" ;

		str += `<th> ${ alevel [ i ].org } </th>` ;

		str += `<th> ${ parseInt ( alevel [ i ].start / 100 ) }/${ alevel [ i ].start % 100 } </th> ` ;

		str += `<th> ${ parseInt ( alevel [ i ].end / 100 ) }/${ alevel [ i ].end % 100 } </th> ` ;
	} 

	id.innerHTML = str ;
}