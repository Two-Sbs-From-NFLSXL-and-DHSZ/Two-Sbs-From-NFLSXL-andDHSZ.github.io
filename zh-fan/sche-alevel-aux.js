var id = document.getElementById ( "status" ) ;

var alevel = [] ;

alevel [ 0 ] = { org: "Edexcel" , start: 511 , end: 624 } ;
alevel [ 1 ] = { org: "OCR" , start: 511 , end: 623 } ;
alevel [ 2 ] = { org: "AQA" , start: 511 , end: 623 } ;
alevel [ 3 ] = { org: "WJEC" , start: 511 , end: 617 } ;
alevel [ 4 ] = { org: "CCEA" , start: 511 , end: 623 } ;

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
	var str = "<tr id = 'first-line' class = 'chn' > <th> 組織 </th> <th> 開始時間 </th> <th> 結束時間 </th> </tr>" ;

	for ( var i = 0 ; i < alevel.length ; i++ )
	{
		str += "<tr>" ;

		str += `<th> ${ alevel [ i ].org } </th>` ;

		str += `<th> ${ parseInt ( alevel [ i ].start / 100 ) }/${ alevel [ i ].start % 100 } </th> ` ;

		str += `<th> ${ parseInt ( alevel [ i ].end / 100 ) }/${ alevel [ i ].end % 100 } </th> ` ;
	} 

	id.innerHTML = str ;
}