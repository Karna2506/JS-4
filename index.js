                    // Task-1
 
 colors = ['red', 'green', 'blue', 'yellow', 'orange','white'];
for (var index in colors) {
    console.log( index + " ", colors[index]);
}

                    // Task-2

animals= ['cat', 'dog', 'rabbit', 'elephant', 'lion'];
for(var animal of animals){
console.log( animal);
}

                   // Task-3

num = [1,2,3,4,5];
var i = num.length -1;
do{
        console.log(num[i]);
        i--;
}  
while(i>=0);

                // Task-4

num = [2,4,6,8,10];
var i=0;
var sum=0;
while(i<num.length){
    sum=sum + num[i];
    i++
}
console.log(sum)

            // Task-5
 
num=[3,6,9,12,15,18];
var sum=0;
var i =num.length-1;
do{
    if (num[i] % 2 === 0) { 
        sum += num[i];
    }
    i--;
}while(i>=0)
    console.log(sum);















