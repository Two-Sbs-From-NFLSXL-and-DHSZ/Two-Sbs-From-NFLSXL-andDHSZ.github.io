var place = 0 ;

if ( window.screen.width < 500 )
{
	var new_a = document.createElement ( "a" ) ;

	new_a.innerHTML = "<img src = '../repository/menu.png' style = 'height: 50px ; width: 50px'>" ;
	new_a.style = "position: fixed; left: 10px ; top: 0px ; z-index: 10" ;
	new_a.href = "javascript:visible ();" ;

	var header = document.getElementById ( "header" ) ;

	header.style.textAlign = "center" ;
	header.style.display = "grid" ;

	var pic = document.getElementById ( "tit-pic" ) ;

	pic.style.textAlign = "center" ;
	pic.style.margin = "0 10%" ;

	header.appendChild ( new_a ) ;

	var navi_class = document.querySelector ( ".Navigation" ) ;
	var navi_a = navi_class.getElementsByTagName ( "a" ) ;

	navi_class.style = "position: fixed; left: -60%; z-index: 10; padding: 20px; border: 1px solid #000; top: 0px; transition: all .25s; height: 100%; width: 50%" ;

	for ( var i = 0 ; i < navi_a.length ; i++ ) 
		navi_a [ i ].style = "font-size: 40pt; margin: 100px 0; display: table; position: relative" ;

	navi_a [ 0 ].innerHTML = "\
	<svg width = '100' height = '75' style = 'display: table-cell' >\
		<circle fill = 'none' stroke = '#00DFB9' stroke-width = '5' cx = '30' cy = '30' r = '20' />\
		<polyline points = '44.142,44.142 65,65' fill = '#00DFB9' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round'/>\
	</svg>\
	<span style = 'display: table-cell; position: relative; top: -17.5px' > Search </span>\
	"

	navi_a [ 1 ].innerHTML = "\
	<svg width = '100' height = '75' style = 'display: table-cell' >\
		<polyline points = '11,63 18,42 32,57 11,63' fill = 'none' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' stroke-linejoin = 'round' /> \
		<polyline points = '18,42 50,10 65,25 32,57' fill = 'none' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' stroke-linejoin = 'round' /> \
	</svg>\
	<span style = 'display: table-cell; position: relative; top: -17.5px' > Practice </span>\
	"

	navi_a [ 2 ].innerHTML = "\
	<svg width = '100' height = '75' style = 'display: table-cell' >\
		<line x1 = '32' y1 = '13' x2 = '43' y2 = '13' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' ; />\
		<polyline points = '32,13 32,30 20,60 55,60 43,30 43,13' fill = 'none' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' stroke-linejoin = 'round' />\
		<polygon points = '20,60 55,60 47,40 28,40' fill = '#00DFB9' stroke = '#00DFB9' stroke-width = '5'/>\
	</svg>\
	<span style = 'display: table-cell; position: relative; top: -17.5px' > Experiment </span>\
	"

	navi_a [ 3 ].innerHTML = "\
	<svg width = '100' height = '75' style = 'display: table-cell' >\
		<polyline points = '20,10 55,10 55,60 20,60 20,10' fill = 'none' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' stroke-linejoin = 'round' />\
		<line x1 = '30' y1 = '30' x2 = '45' y2 = '30' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' ; />\
		<line x1 = '30' y1 = '40' x2 = '45' y2 = '40' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' ; />\
		<line x1 = '30' y1 = '50' x2 = '45' y2 = '50' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' ; />\
	</svg>\
	<span style = 'display: table-cell; position: relative; top: -17.5px' > Information </span>\
	"

	navi_a [ 4 ].innerHTML = "\
	<svg width = '100' height = '75' style = 'display: table-cell' >\
		<polyline points = '6,73 6,8 70,8 70,73 6,73' fill = 'none' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' stroke-linejoin = 'round' />\
		<polyline points = '21,0 21,16' fill = 'none' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' stroke-linejoin = 'round' />\
		<polyline points = '53,0 53,16' fill = 'none' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' stroke-linejoin = 'round' />\
		<polyline points = '6,30 70,30' fill = 'none' stroke = '#00DFB9' stroke-width = '5' stroke-linecap = 'round' stroke-linejoin = 'round' />\
	</svg>\
	<span style = 'display: table-cell; position: relative; top: -17.5px' > Schedule </span>\
	"

	navi_a [ 5 ].innerHTML = "\
	<svg width = '100' height = '75' style = 'display: table-cell; position: relative' >\
		<circle cx = '37.5' cy = '37.5' r = '30' fill = 'none' stroke = '#00DFB9' stroke-width = '5' />\
	</svg>\
	<span style = 'color: #00DFB9; position: absolute; top: 2px; left: 40px'> ? </span>\
	<span style = 'display: table-cell; position: relative; top: -17.5px' > About </span>\
	"

	var sep = document.getElementsByClassName ( "sep" ) ;

	for ( var i = 0 ; i < sep.length ; i++ )
		sep [ i ].style = "opacity: 0" ;

	var ftnav_class = document.querySelector ( ".foot-nav" ) ;
	var ftnav_div = ftnav_class.getElementsByTagName ( "div" ) ;

	ftnav_class.style = "padding: 20px ";

	for ( var i = 0 ; i < ftnav_div.length ; i++ )
		ftnav_div [ i ].style = "display: grid; margin: 0 10px; font-size: 30pt" ;

	var lang = document.getElementById ( "foot" ) ;

	lang.style = "font-size: 30pt" ;

	var select = document.getElementsByTagName ( "select" ) ;

	select [ 0 ].style = "font-size: 25pt; height: 100px" ;
}

function visible ()
{
	if ( place == 0 )
	{
		document.querySelector ( ".Navigation" ).style.left = 0 ;
		place = -1 ; 
	}
	else
	{
		document.querySelector ( ".Navigation" ).style.left = "-60%" ;
		place = 0 ;
	}
}

document.addEventListener ( "click" , function ( e ) 
{
	if ( place == -1 && e.clientX >= 500 )
	{
		document.querySelector ( ".Navigation" ).style.left = "-60%" ;
		place = 0 ;
	}
} )

var startx , starty ;

document.addEventListener ( "touchstart" , function ( e )
{
    startx = e.touches [ 0 ].pageX ;
    starty = e.touches [ 0 ].pageY ;
}, false);

document.addEventListener ( "touchend" ,  function ( e )
{
	var endx = e.changedTouches [ 0 ].pageX ;
	var endy = e.changedTouches [ 0 ].pageY ;

	if ( endx - startx > 100 && Math.abs ( starty - endy ) < 200 && place == 0 )
	{
		document.querySelector ( ".Navigation" ).style.left = 0 ;
		place = -1 ; 
		startx = endx ;
	}

	if ( startx - endx > 100 && Math.abs ( starty - endy ) < 200 && place == -1 )
	{
		document.querySelector ( ".Navigation" ).style.left = "-60%" ;
		place = 0 ; 
		startx = endx ;
	}
} , false )
