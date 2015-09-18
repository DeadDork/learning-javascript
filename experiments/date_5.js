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
    return new Date( date.getFullYear(), date.getMonth(), date.getDate() + 1 );
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
