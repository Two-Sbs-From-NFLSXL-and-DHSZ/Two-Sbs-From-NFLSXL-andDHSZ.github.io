var id = document.getElementById ( "status" ) ;

var act = [] ;

act [ 0 ] = { ddl: 110 , time: 208 , post: 304 , center: "North America and Europe" } ;
act [ 1 ] = { ddl: 208 , time: 404 , post: 428 , center: "All" } ;
act [ 2 ] = { ddl: 508 , time: 613 , post: 607 , center: "All" } ;
act [ 3 ] = { ddl: 619 , time: 718 , post: 811 , center: "All except NY" } ;
act [ 4 ] = { ddl: 807 , time: 912 , post: 1006 , center: "All" } ;
act [ 5 ] = { ddl: 920 , time: 1024 , post: 1117 , center: "All" } ;
act [ 6 ] = { ddl: 1106 , time: 1212 , post: 1305 , center: "All" } ;

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

function act_status ()
{
	var str = "<tr id = 'first-line'> <th> Test Time </th> <th> Avaliable Test Center </th> <th> Status </th> </tr>" ;

	for ( var i = 0 ; i < act.length ; i++ )
	{
		str += "<tr>" ;

		str += `<th style = 'font-size: ${ size }' > ${ parseInt ( act [ i ].time / 100 ) }/${ act [ i ].time % 100 } </th> ` ;

		str += `<th style = 'font-size: ${ size }' > ${ act [ i ].center } </th>` ;

		if ( comp ( act [ i ].ddl ) )available
			str += `<th class = 'ava' style = 'font-size: ${ size }' > Available </th>` ;
		else if ( comp ( act [ i ].time ) )  
			str += `<th class = 'reg-end' style = 'font-size: ${ size }' > Registration Ended </th>` ;
		else if ( comp ( act [ i ].post ) )
			str += `<th class = 'end' style = 'font-size: ${ size }' > Test Ended </th>` ;
		else
			str += `<th class = 'score' style = 'font-size: ${ size }' > Score Available </th>` ;

		str += "</tr>" ;
	} 

	id.innerHTML = str ;
}

act_status () ;