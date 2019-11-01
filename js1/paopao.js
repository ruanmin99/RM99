var array=[26,41,27,99,7];

for (var i=0;i<array.length-1;i++){
    for (var j=0;j<array.length-1-i;j++){
        if(array[j]>array[j+1]){
            var result=array[j];
            array[j]=array[j+1];
            array[j+1]=result;
        }
    }
}
console.log(array);