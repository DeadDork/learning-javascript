main();

//////////////////////////////////////////////////
function main() {
  var date = uniqueDateParse( '05-10-1983' );
  var newDate = nextDay( date );

  print( date );
  print( newDate );
}

function uniqueDateParse( string ) {
  var stringArray = string.split( '-', 3 );
  var month = stringArray[ 0 ],
      day   = stringArray[ 1 ],
      year  = stringArray[ 2 ];
  // Per ISO 8601[1], using Pacific Daylight Time[2].
  var dateString = year + '-' + month + '-' + day + 'T00:00:00-07:00';
  return new Date( dateString );
} 

// The right way
function nextDay( date ) {
  return new Date( date.getFullYear()
                 , date.getMonth()
                 , date.getDate() + 1 );
}

/*
// The wrong way, though it will work, too.
function nextDay( date ) {
  var millisecPerDay = 24 * 60 * 60 * 1000;
  var nextD = new Date( date.getTime() );

  nextD.setHours( 12 );
  nextD.setTime( nextD.getTime() + millisecPerDay );
  nextD.setHours( 0 );

  return nextD;
}
*/

function print( object ) {
  console.log( object );
}

//////////////////////////////////////////////////
// Links
//
// [1] http://www.w3.org/TR/NOTE-datetime
// [2] http://www.timeanddate.com/time/zones/pdt
