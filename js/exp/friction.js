var canvas = document.getElementById ( "game" ) ;
var context = canvas.getContext ( "2d" ) ;
var table = document.getElementById ( "result" ) ;
var count = 0 ; //Times the experiment has been conducted
var select = 0 ; //The current choosing block
var height = 0 ; //The height of the releasing block
var int ; //SetInveval
var flag = true ; 
var time = 0 ; //The time of motion

const base = 625 ; //The y-axis of the table
const cof = 0.5 ; //Coefficient of table
const sqr = Math.sqrt ( 2 ) ; //The sqrt of 2 

//Canvas initialization
canvas.height = 600 ;
canvas.width = document.body.clientWidth - 100 ;

//Adding background picture to canvas
var background = new Image () ;

background.src = "../../repository/exp/friction/background.png" ;

background.onload = function () 
{			
	context.drawImage ( background , 50 , 200 , 617 , 200 ) ; 
}

//Adding blocks to canvas
var block1 = new Image () ;
var block2 = new Image () ;
var block3 = new Image () ;

block1.src = "../../repository/exp/friction/block-0.1kg.png" ;
block2.src = "../../repository/exp/friction/block-0.5kg.png" ;
block3.src = "../../repository/exp/friction/block-1kg.png" ;

var onload = [ false , false , false ] ; //Whether blocks have been onloaded

block1.onload = function ()
{
	onload [ 0 ] = true ;
}

block2.onload = function ()
{
	onload [ 1 ] = true ;
}

block3.onload = function ()
{
	onload [ 2 ] = true ;
}

//Methods
function add_row ( mass ) //Adding a new row to the table of experiment result
{
	count++ ;

	table.innerHTML += `\
	<tr id = "${ 'result' + count }" >\
		<th> ${ count } </th> \
		<th> ${ mass.toFixed ( 2 ) } </th> \
		<th> ${ ( height / 10 ).toFixed ( 2 ) } </th> \
		<th> ${ ( 0.5 * 9.8 * mass * height / 10 ).toFixed ( 2 ) } </th> \
		<th> ${ ( dist () / 10 ).toFixed ( 2 ) } </th> \
	</tr>` ;

	canvas.height = Math.max ( 600 , document.getElementById ( "result" + count ).offsetTop + document.getElementById ( "result" + count ).offsetHeight * 2 ) ;
}

function animation ( x ) //The animation for the motion
{
	flag = false ; 
	time = 0 ;

	document.getElementById ( "button-1" ).style = "opacity: 0 ;" ;
	document.getElementById ( "button-2" ).style = "opacity: 0 ;" ;
	document.getElementById ( "button-3" ).style = "opacity: 0 ;" ;

	if ( select == 1 )
	{
		int = setInterval ( function ()
		{
			if ( y_axis ( x ) < 380 && onload [ select - 1 ] )
			{
				canvas.height = canvas.height ;
				context.drawImage ( background , 50 , 200 , 617 , 200 ) ; 

				context.rotate ( Math.PI / 4 ) ;
				context.drawImage ( block1 , rotate_x ( x , y_axis ( x ) - 43.4 )  , rotate_y ( x , y_axis ( x ) - 43.4 ) , 70.3 , 33.4 ) ;

				x += velocity ( 0 ) ;

				time++ ;
			}

			if ( y_axis ( x ) >= 380 ) 
			{
				canvas.height = canvas.height ;
				context.drawImage ( background , 50 , 200 , 617 , 200 ) ; 

				context.drawImage ( block1 , x  , 390 - 33.4 , 70.3 , 33.4 ) ;

				x += velocity ( 1 ) ;

				time++ ;
			}

			if ( velocity ( 1 ) == 0 ) 
			{
				document.getElementById ( "record" ).style = "opacity: 1" ;
			}
		} , 50 ) ;
	}
	else if ( select == 2 )
	{
		int = setInterval ( function ()
		{
			if ( y_axis ( x ) < 380 && onload [ select - 1 ] )
			{
				canvas.height = canvas.height ;
				context.drawImage ( background , 50 , 200 , 617 , 200 ) ; 

				context.rotate ( Math.PI / 4 ) ;
				context.drawImage ( block2 , rotate_x ( x , y_axis ( x ) - 68 )  , rotate_y ( x , y_axis ( x ) - 68 ) , 94.7 , 48 ) ;

				x += velocity ( 0 ) ;

				time++ ;
			}

			if ( y_axis ( x ) >= 380 ) 
			{
				canvas.height = canvas.height ;
				context.drawImage ( background , 50 , 200 , 617 , 200 ) ; 

				context.drawImage ( block2 , x  , 390 - 48 , 94.7 , 48 ) ;

				x += velocity ( 1 ) ;

				time++ ;
			}

			if ( velocity ( 1 ) == 0 ) 
			{
				document.getElementById ( "record" ).style = "opacity: 1" ;
			}
		} , 50 ) ;
	}
	else if ( select == 3 )
	{
		int = setInterval ( function ()
		{
			if ( y_axis ( x ) < 380 && onload [ select - 1 ] )
			{
				canvas.height = canvas.height ;
				context.drawImage ( background , 50 , 200 , 617 , 200 ) ; 

				context.rotate ( Math.PI / 4 ) ;
				context.drawImage ( block3 , rotate_x ( x , y_axis ( x ) - 75.6 )  , rotate_y ( x , y_axis ( x ) - 75.6 ) , 107.7 , 55.6 ) ;

				x += velocity ( 0 ) ;

				time++ ;
			}

			if ( y_axis ( x ) >= 380 ) 
			{
				canvas.height = canvas.height ;
				context.drawImage ( background , 50 , 200 , 617 , 200 ) ; 

				context.drawImage ( block3 , x  , 390 - 55.6 , 107.7 , 55.6 ) ;

				x += velocity ( 1 ) ;

				time++ ;
			}

			if ( velocity ( 1 ) == 0 ) 
			{
				document.getElementById ( "record" ).style = "opacity: 1" ;
			}
		} , 50 ) ;
	}
}

function dist () //The distance the block moves on the table
{
	return ( height / cof - height ) + 230 ;
}

function reset () //Reset the background and settings
{
	context.drawImage ( background , 50 , 200 , 617 , 200 ) ; 

	for ( var i = 1 ; i <= 3 ; i++ )
		document.getElementById ( "button-" + i ).style = "background-color: #FFF " ;

	document.getElementById ( "record" ).style = "opacity: 0" ;

	select = 0 ;
	flag = true ;
}

function rotate_x ( x , y ) //Transform the x-axis to the new one on rotated canvas
{
	var nx = sqr / 2 * ( x + y );

	return nx ;
}

function rotate_y ( x , y ) //Transfor the y-axis to the new on on rotated canvas
{
	var ny = sqr / 2 * ( -1 ) * ( x - y ) ;

	return ny ;
}

function selector () //Return the mass of the selected block basing on the index
{
	if ( select == 1 )
		return .1 ;
	else if ( select == 2 ) 
		return .5 ;
	else if ( select == 3 )
		return 1 ;
	else
		return 0 ;
}

function set_selector ( n )
{
	for ( var i = 1 ; i <= 3 ; i++ )
		document.getElementById ( "button-" + i ).style = "background-color: #FFF " ;

	if ( select == n )
	{
		select = 0 ;
	}
	else
	{
		select = n ;

		document.getElementById ( "button-" + n ).style = "background-color: #f00 " ;
	}
}

function velocity ( flag ) //Return the velocity
{
	if ( flag == 0 )
	{
		return sqr / 2 * 9.8 * ( 1 - cof ) * time ; 
	}
	else
	{
		var v = Math.sqrt ( 2 * 9.8 * height * ( 1 - cof ) ) - cof * 9.8 * ( time - 2 * Math.sqrt ( height / 9.8 / ( 1 - cof ) ) ) ;
		if ( v < 0 ) return 0 ;
		return v ;
	}
}

function y_axis ( x ) //Find the y-axis on the sloping table basing on x-axis
{
	var y = x - 55 + 200 ;

	return y ;
}

//Control
canvas.addEventListener ( "click" , function ( e ) //Mouse-click event
{
	var x = e.clientX ; 
	var y = e.clientY - document.querySelector ( ".gameboard" ).offsetTop ;

	if ( select > 0 && ( x >= 55 && x <= 240 && Math.abs ( y - y_axis ( x ) ) <= 50 ) ) 
	{
		height = ( y_axis ( 240 ) - y_axis ( x ) ) ; //Height of release
		
		animation ( x ) ;
	}
} )

canvas.onmousemove = function ( e )
{
	var x = e.clientX ;
	var y = e.clientY - document.querySelector ( ".gameboard" ).offsetTop ;

	if ( select > 0 && flag && ( x >= 55 && x <= 240 && Math.abs ( y - y_axis ( x ) ) <= 50 ) )
	{
		canvas.height = canvas.height ; //Clear canvas

		context.drawImage ( background , 50 , 200 , 617 , 200 ) ; 
		
		context.arc ( x , y_axis ( x ) , 5 , 0 , 2 * Math.PI ) ; //Draw a circle

		context.fillStyle = "#FFF" ; 

		context.fill () ;
	}
}

function button_click ()
{
	clearInterval ( int ) ; 
	add_row ( selector () ) ; 
	reset () 
}