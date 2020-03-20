var id = document.getElementById ( "status" ) ;

var sat = [] ;

sat [ 0 ] = { ddl: 214 , time: 314 , post: 404 , sat2: 0 , center: "All" , can: 0 } ;
sat [ 1 ] = { ddl: 403 , time: 502 , post: 515 , sat2: 1 , center: "All" , can: 1 } ;
sat [ 2 ] = { ddl: 508 , time: 606 , post: 615 , sat2: 1 , center: "North America and Europe" , can: 0 } ;
sat [ 3 ] = { ddl: 807 , time: 829 , post: 917 , sat2: 1 , center: "All"  , can: 0 } ;
sat [ 4 ] = { ddl: 920 , time: 1003 , post: 1022 , sat2: 1 , center: "All"  , can: 0 } ;
sat [ 5 ] = { ddl: 1009 , time: 1107 , post: 1126 , sat2: 1 , center: "North America and Europe"  , can: 0 } ;
sat [ 6 ] = { ddl: 1106 , time: 1205 , post: 1217 , sat2: 1 , center: "All"  , can: 0 } ;

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

function sat_status ()
{
	var str = "<tr id = 'first-line'> <th> Test Time </th> <th> Avaliable Test Center </th> <th> SAT II </th> <th> Status </th> </tr>" ;

	for ( var i = 0 ; i < sat.length ; i++ )
	{
		str += "<tr>" ;

		str += `<th> ${ parseInt ( sat [ i ].time / 100 ) }/${ sat [ i ].time % 100 } </th> ` ;

		str += `<th> ${ sat [ i ].center } </th>` ;

		if ( sat [ i ].sat2 )
			str += "<th> Yes </th>" ;
		else
			str += "<th> No </th>" ;

		
		if ( sat [ i ].can )
			str += "<th class = 'cancel' > Cancelled </th>" ;
		else if ( comp ( sat [ i ].ddl ) )
			str += "<th class = 'ava' > Avaliable </th>" ;
		else if ( comp ( sat [ i ].time ) )  
			str += "<th class = 'reg-end' > Registration Ended </th>" ;
		else if ( comp ( sat [ i ].post ) )
			str += "<th class = 'end' > Test Ended </th>" ;
		else
			str += "<th class = 'score' > Score Available </th>" ;

		str += "</tr>" ;
	} 

	id.innerHTML = str ;
}

sat_status () ;