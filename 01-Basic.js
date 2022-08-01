const name= 'Mano Caio'
console.log('Name is: '+ name)


let age = 30
console.log('age is: '+ age)

let ageMoreThank18


//conditional

if (age>18) {
    ageMoreThank18=true

}else if(age=18){
    ageMoreThank18=false
}
else{
    ageMoreThank18=false
}

console.log('Age is more tahn 18: ' + ageMoreThank18)

//simple
ageMoreThank18= (age>18)? true:false

//loops
let i=0 

while (i<5) {
    console.log('i is now:' + i)
    i++ 
}

for(i=0; i<5; i++){
    console.log('i is now:' + i)
}

//functions

function product (a,b){
    return a*b
}
console.log('Function')


let result=product(10,5)
console.log(result)


