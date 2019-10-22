function prime(limit){

document.write("1 2 ");
var i=0 ,j=0;
for(i=3;i<limit; i++){
  for(j = 2; j<i; j++){
    if(i%j == 0){
      break;
    }}
    if(i == j){
      document.write(i + " ");
    }
}
}

//
// prime(50)
