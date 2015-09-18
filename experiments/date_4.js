main();

////////////////////////////////////////////////////////////////////////////////
function main() {
  var date = uniqueDateParse( '05-10-1983' );
  var nD = nextDay( date );

  print( date );
  print( nD );
}

function uniqueDateParse( string ) {
  var stringArray = string.split( '-', 3 );
  var month = stringArray[ 0 ],
      day   = stringArray[ 1 ],
      year  = stringArray[ 2 ];
  return new Date( year, month, day );
}

function nextDay( date ) {
  if ( typeCheck( date, new Date() ) ) {
    var millisecPerDay = 24 * 60 * 60 * 1000;
    var noon = date.setHours( 12 );
    var nextDay = new Date( date.getTime() + millisecPerDay );
    nextDay.setHours( 0 );
    nextDay.setMinutes( 0 );
    nextDay.setSeconds( 0 );
    nextDay.setMilliseconds( 0 );

    return nextDay;
  }
}

function typeCheck( value, type ) {
  var toString = Object.prototype.toString;
  if ( toString.call( value ) != toString.call( type ) ) {
    return false;
  }
  return true;
}

function print( object ) {
  console.log( object );
}
