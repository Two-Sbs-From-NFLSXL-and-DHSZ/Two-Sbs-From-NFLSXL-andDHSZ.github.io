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

var size ;

if ( window.screen.width < 500 )
	size = "40pt" ;
else
	size = "15pt" ;

function alevel_status ()
{
	var str = "<tr id = 'first-line'> <th> Organization </th> <th> Start Time </th> <th> End Time </th> </tr>" ;

	for ( var i = 0 ; i < alevel.length ; i++ )
	{
		str += "<tr>" ;

		str += `<th style = 'font-size: ${ size }' > ${ alevel [ i ].org } </th>` ;

		str += `<th style = 'font-size: ${ size }' > ${ parseInt ( alevel [ i ].start / 100 ) }/${ alevel [ i ].start % 100 } </th> ` ;

		str += `<th style = 'font-size: ${ size }' > ${ parseInt ( alevel [ i ].end / 100 ) }/${ alevel [ i ].end % 100 } </th> ` ;
	} 

	id.innerHTML = str ;
}

alevel_status () ;