console.log( null || 2 && 3 || 4);
// 3


console.log( console.log(1) && console.log(2) );
// 3,1



console.log( 1 && null && 2 );
// null


console.log( console.log(1) || 2 || console.log(3) );
// 1 2


console.log( null || 2 || undefined );
// 2
