var id = document.getElementById ( "status" ) ;

var sat = [] ;

sat [ 0 ] = { ddl: 214 , time: 314 , post: 404 , sat2: 0 , center: "All" , can: 0 } ;
sat [ 1 ] = { ddl: 403 , time: 502 , post: 515 , sat2: 1 , center: "All" , can: 1 } ;
sat [ 2 ] = { ddl: 508 , time: 606 , post: 615 , sat2: 1 , center: "North America and Europe" , can: 1 } ;
sat [ 3 ] = { ddl: 807 , time: 829 , post: 917 , sat2: 1 , center: "All"  , can: -1 } ;
sat [ 4 ] = { ddl: 920 , time: 1003 , post: 1022 , sat2: 1 , center: "All"  , can: -1 } ;
sat [ 4 ] = { ddl: 920 , time: 1003 , post: 1022 , sat2: 1 , center: "All"  , can: -1 } ;
sat [ 5 ] = { ddl: 1009 , time: 1107 , post: 1126 , sat2: 1 , center: "North America and Europe"  , can: -1 } ;
sat [ 6 ] = { ddl: 1106 , time: 1205 , post: 1217 , sat2: 1 , center: "All"  , can: -1 } ;

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

function sat_status ()
{
	var str = "<tr id = 'first-line'> <th> Test Time </th> <th> Avaliable Test Center </th> <th> SAT II </th> <th> Status </th> </tr>" ;

	for ( var i = 0 ; i < sat.length ; i++ )
	{
		str += "<tr>" ;

		str += `<th style = 'font-size: ${ size }' > ${ parseInt ( sat [ i ].time / 100 ) }/${ sat [ i ].time % 100 } </th> ` ;

		str += `<th style = 'font-size: ${ size }'> ${ sat [ i ].center } </th>` ;

		if ( sat [ i ].sat2 )
			str += `<th style = 'font-size: ${ size }' > Yes </th>` ;
		else
			str += `<th style = 'font-size: ${ size }' > No </th>` ;

		
		if ( sat [ i ].can == 1 )
			str += `<th class = 'cancel' style = 'font-size: ${ size }' > Cancelled </th>` ;
		else if ( sat [ i ].can == -1 )
			str += `<th class = 'cancel' style = 'font-size: ${ size }' > Uncertain </th>` ;
		else if ( comp ( sat [ i ].ddl ) )
			str += `<th class = 'ava' style = 'font-size: ${ size }' > Avaliable </th>` ;
		else if ( comp ( sat [ i ].time ) )  
			str += `<th class = 'reg-end' style = 'font-size: ${ size }' > Registration Ended </th>` ;
		else if ( comp ( sat [ i ].post ) )
			str += `<th class = 'end' style = 'font-size: ${ size }' > Test Ended </th>` ;
		else
			str += `<th class = 'score' style = 'font-size: ${ size }' > Score Available </th>` ;

		str += "</tr>" ;
	} 

	id.innerHTML = str ;
}

sat_status () ;