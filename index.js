//   1ci task// 1-dən 100-ə qədər olan ədədlərin cəmini tapın.
// let sum=0
// for(let i=0;i<=100;i++){
//     sum+=i
// }
// console.log(sum);
  

//  2ci task// Verilmiş array: [1, 2, 3, 4, 5] – bu array-dəki bütün ədədləri konsola yazdırın.for in

// const array = [1, 2, 3, 4, 5];
// let text=""
// for (let x in array) {
//  text+=array[x]
// }
// console.log(text);



//3cu task //Verilmiş obyekt: {ad: 'Ali', yaş: 25, şəhər: 'Bakı'} – bu obyektin bütün açarlarını konsola yazdırın.

//  const arr={ad: 'Ali', yaş: 25, şəhər: 'Bakı'}
//  let text= ""
//  for ( let x in arr) {
//     text += arr[x] + " "
//  }
//  console.log(text);
 
// 4cu //Verilmiş obyekt: {kitab: '1984', müəllif: 'George Orwell'} – açar və dəyərləri konsola yazdırın.for of

// const arr={kitab: '1984', müəllif: 'George Orwell'}
// let text=""
// for(let x in arr){
//     text+=arr[x] + " "
// }
// console.log(text);
  //5ci // Verilmiş array: ['alma', 'armud', 'banan'] – bütün meyvələri konsola yazdırın.

//  const arr= ['alma', 'armud', 'banan'] 
//  let text=""
// for(let i=0; i<arr.length;i++){
//     text+=arr[i] + " "
// }
// console.log(text);


//6ci //  Verilmiş string: 'Salam' – hər bir hərfi konsola yazdırın.while
// let str = 'Salam'
// let i = 0
// while (i < str.length) {
//     console.log(str[i]);  
//     i++;  
// }


//7ci 1-dən 10-a qədər olan ədədləri konsola yazdırın.
//1ci usul
// for(i=1;i<10;i++){
//     console.log(i);
    
// }
// 2ci usul
// let i=1
// while(i<10){
//     console.log(i);
//     i++
    
// }

//8ci //· Verilmiş array: [5, 10, 15, 20] – array boşalana qədər elementləri konsola yazdırın.do while

// const arr=[5, 10, 15, 20] 
// let i=0
// do {
//     console.log(arr[i]); 
//     i++;  
// } while (i < arr.length); 


//9cu  1-dən 5-ə qədər ədədləri do while ilə konsola yazdırın.

// let i=1
// do{
//     console.log(i);
//     i++
    
// }
// while(i<5)

//10cu //Verilmiş şərt: istifadəçi ədəd daxil edir və ədəd 50-dən kiçikdirsə döngü davam edir.

// let a= 50
// if(a<=50){
//     for(i=0; i<=50;i++)
//         console.log(i);
        
// }else{
//     console.log("eded 50den kicikdi");
    
// }