var md = [ 31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31 ] ;

var tit = document.getElementById ( "number" ) ;
var mm = document.getElementById ( "month" ) ;
var dd = document.getElementById ( "day" ) ;
var h = document.getElementById ( "hour" ) ;
var m = document.getElementById ( "minute" ) ;
var s = document.getElementById ( "second" ) ;

function smaller ( month , date , hour , minute , second )
{
	var t = new Date () ;

	var cmm = t.getMonth () ;
	var cdd = t.getDate () ;
	var ch = t.getHours () ;
	var cm = t.getMinutes () ;
	var cs = t.getSeconds () ;

	if ( month - 1 < cmm ) 
		return 0 ;
	else if ( month - 1 == cmm )
		if ( date < cdd )
			return 0 ;
		else if ( date == cdd ) 
			if ( hour < ch ) 
				return 0 ;
			else if ( hour == ch )
				if ( minute < cm )
					return 0 ;
				else if ( minute == cm )
					if ( second < cs ) 
						return 0 ;

	return 1 ;
}

function countdownact ()
{
	var t = new Date () ;

	var cmm = t.getMonth () ;
	var cdd = t.getDate () ;
	var ch = t.getHours () ;
	var cm = t.getMinutes () ;
	var cs = t.getSeconds () ;
	
	var act = [ 208 , 404 , 613 , 718 , 912 , 1024 , 1212 ] ;
	
	if ( t.getFullYear () % 4 == 0 && t.getFullYear () % 100 != 0 || t.getFullYear () % 400 == 0) 
	{
		md [ 1 ] = 29 ;
	}

	var i = 0 ;

	while ( ! smaller ( parseInt ( act [ i ] / 100 ) , act [ i ] % 100 , 8 , 30 , 0 ) )
		i++ ;

	if ( i >= act.length ) 
		i-- ;

	tit.innerHTML = `${ parseInt ( act [ i ] / 100 ) }/${ act [ i ] % 100 } ` ;

	var tmm = parseInt ( act [ i ] / 100 ) - 1 ;
	var tdd = act [ i ] % 100 ;
	var th = 8 ;
	var tm = 30 ;
	var ts = 0 ;

	var minus = 0 ;
	var imm , idd , ih , im , is ;

	if ( ts < cs )
	{
		is = ts - cs + 60 ;
		minus = 1 ;
	}
	else
		is = ts - cs ;

	if ( tm - minus < cm )
	{
		im = tm - minus - cm + 60 ;
		minus = 1 ;
	}
	else
	{
		im = tm - minus - cm ; 
		minus = 0 ;
	}

	if ( th - minus < ch ) 
	{
		ih = th - minus - ch + 24 ;
		minus = 1 ;
	}
	else
	{
		ih = th - minus - ch ;
		minus = 0 ;
	}

	if ( tdd - minus < cdd ) 
	{
		idd = tdd - minus - cdd + md [ tmm - 1 ] ;
		minus = 1 ;
	}
	else
	{
		idd = tdd - minus - cdd ;
		minus = 0 ;
	}

	imm = tmm - minus - cmm ;

	if ( imm < 0 )
	{
		imm = 0 ;
		idd = 0 ;
		ih = 0 ;
		im = 0 ;
		is = 0 ;
	}

	mm.innerHTML = imm ;
	
	if ( idd < 10 ) dd.innerHTML = '0' + idd ;
	else dd.innerHTML = idd ;
	
	if ( ih < 10 ) h.innerHTML = '0' + ih ;
	else h.innerHTML = ih ;
	
	if ( im < 10 ) m.innerHTML = '0' + im ;
	else m.innerHTML = im ;
	
	if ( is < 10 ) s.innerHTML = '0' + is ;
	else s.innerHTML = is ;
}

function countdownap ()
{
	var t = new Date () ;

	var cmm = t.getMonth () ;
	var cdd = t.getDate () ;
	var ch = t.getHours () ;
	var cm = t.getMinutes () ;
	var cs = t.getSeconds () ;

	if ( t.getFullYear () % 4 == 0 && t.getFullYear () % 100 != 0 || t.getFullYear () % 400 == 0) 
	{
		md [ 1 ] = 29 ;
	}

	var tmm = 4 ;
	var tdd = 4 ;
	var th = 8 ;
	var tm = 0 ;
	var ts = 0 ;

	var minus = 0 ;
	var imm , idd , ih , im , is ;

	if ( ts < cs )
	{
		is = ts - cs + 60 ;
		minus = 1 ;
	}
	else
		is = ts - cs ;

	if ( tm - minus < cm )
	{
		im = tm - minus - cm + 60 ;
		minus = 1 ;
	}
	else
	{
		im = tm - minus - cm ; 
		minus = 0 ;
	}

	if ( th - minus < ch ) 
	{
		ih = th - minus - ch + 24 ;
		minus = 1 ;
	}
	else
	{
		ih = th - minus - ch ;
		minus = 0 ;
	}

	if ( tdd - minus < cdd ) 
	{
		idd = tdd - minus - cdd + md [ tmm - 1 ] ;
		minus = 1 ;
	}
	else
	{
		idd = tdd - minus - cdd ;
		minus = 0 ;
	}

	imm = tmm - minus - cmm ;
	
	if ( imm < 0 )
	{
		imm = 0 ;
		idd = 0 ;
		ih = 0 ;
		im = 0 ;
		is = 0 ;
	}
	
	mm.innerHTML = imm ;
	
	if ( idd < 10 ) dd.innerHTML = '0' + idd ;
	else dd.innerHTML = idd ;
	
	if ( ih < 10 ) h.innerHTML = '0' + ih ;
	else h.innerHTML = ih ;
	
	if ( im < 10 ) m.innerHTML = '0' + im ;
	else m.innerHTML = im ;
	
	if ( is < 10 ) s.innerHTML = '0' + is ;
	else s.innerHTML = is ;
}

function countdownalevel ()
{
	var t = new Date () ;

	var cmm = t.getMonth () ;
	var cdd = t.getDate () ;
	var ch = t.getHours () ;
	var cm = t.getMinutes () ;
	var cs = t.getSeconds () ;

	if ( t.getFullYear () % 4 == 0 && t.getFullYear () % 100 != 0 || t.getFullYear () % 400 == 0) 
	{
		md [ 1 ] = 29 ;
	}

	var tmm = 4 ;
	var tdd = 11 ;
	var th = 9 ;
	var tm = 0 ;
	var ts = 0 ;

	var minus = 0 ;
	var imm , idd , ih , im , is ;

	if ( ts < cs )
	{
		is = ts - cs + 60 ;
		minus = 1 ;
	}
	else
		is = ts - cs ;

	if ( tm - minus < cm )
	{
		im = tm - minus - cm + 60 ;
		minus = 1 ;
	}
	else
	{
		im = tm - minus - cm ; 
		minus = 0 ;
	}

	if ( th - minus < ch ) 
	{
		ih = th - minus - ch + 24 ;
		minus = 1 ;
	}
	else
	{
		ih = th - minus - ch ;
		minus = 0 ;
	}

	if ( tdd - minus < cdd ) 
	{
		idd = tdd - minus - cdd + md [ tmm - 1 ] ;
		minus = 1 ;
	}
	else
	{
		idd = tdd - minus - cdd ;
		minus = 0 ;
	}

	imm = tmm - minus - cmm ;
	
	if ( imm < 0 )
	{
		imm = 0 ;
		idd = 0 ;
		ih = 0 ;
		im = 0 ;
		is = 0 ;
	}
	
	mm.innerHTML = imm ;
	
	if ( idd < 10 ) dd.innerHTML = '0' + idd ;
	else dd.innerHTML = idd ;
	
	if ( ih < 10 ) h.innerHTML = '0' + ih ;
	else h.innerHTML = ih ;
	
	if ( im < 10 ) m.innerHTML = '0' + im ;
	else m.innerHTML = im ;
	
	if ( is < 10 ) s.innerHTML = '0' + is ;
	else s.innerHTML = is ;
}

function countdownsat ()
{
	var sat = [ 314 , 502 , 606 , 829 , 1003 , 1107 , 1205 ] ;

	var t = new Date () ;

	var cmm = t.getMonth () ;
	var cdd = t.getDate () ;
	var ch = t.getHours () ;
	var cm = t.getMinutes () ;
	var cs = t.getSeconds () ;

	if ( t.getFullYear () % 4 == 0 && t.getFullYear () % 100 != 0 || t.getFullYear () % 400 == 0) 
	{
		md [ 1 ] = 29 ;
	}

	var i = 0 ;

	while ( ! smaller ( parseInt ( sat [ i ] / 100 ) , sat [ i ] % 100 , 8 , 30 , 0 ) )
		i++ ;

	if ( i >= sat.length ) 
		i-- ;

	tit.innerHTML = `${ parseInt ( sat [ i ] / 100 ) }/${ sat [ i ] % 100 } ` ;

	var tmm = parseInt ( sat [ i ] / 100 ) - 1 ;
	var tdd = sat [ i ] % 100 ;
	var th = 8 ;
	var tm = 0 ;
	var ts = 0 ;

	var minus = 0 ;
	var imm , idd , ih , im , is ;

	if ( ts < cs )
	{
		is = ts - cs + 60 ;
		minus = 1 ;
	}
	else
		is = ts - cs ;

	if ( tm - minus < cm )
	{
		im = tm - minus - cm + 60 ;
		minus = 1 ;
	}
	else
	{
		im = tm - minus - cm ; 
		minus = 0 ;
	}

	if ( th - minus < ch ) 
	{
		ih = th - minus - ch + 24 ;
		minus = 1 ;
	}
	else
	{
		ih = th - minus - ch ;
		minus = 0 ;
	}

	if ( tdd - minus < cdd ) 
	{
		idd = tdd - minus - cdd + md [ tmm - 1 ] ;
		minus = 1 ;
	}
	else
	{
		idd = tdd - minus - cdd ;
		minus = 0 ;
	}

	imm = tmm - minus - cmm ;

	if ( imm < 0 )
	{
		imm = 0 ;
		idd = 0 ;
		ih = 0 ;
		im = 0 ;
		is = 0 ;
	}

	mm.innerHTML = imm ;
	
	if ( idd < 10 ) dd.innerHTML = '0' + idd ;
	else dd.innerHTML = idd ;
	
	if ( ih < 10 ) h.innerHTML = '0' + ih ;
	else h.innerHTML = ih ;
	
	if ( im < 10 ) m.innerHTML = '0' + im ;
	else m.innerHTML = im ;
	
	if ( is < 10 ) s.innerHTML = '0' + is ;
	else s.innerHTML = is ;
}