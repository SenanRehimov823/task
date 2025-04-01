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



// 3cu task //Verilmiş obyekt: {ad: 'Ali', yaş: 25, şəhər: 'Bakı'} – bu obyektin bütün açarlarını konsola yazdırın.

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




// let gun=1
// switch (gun) {
//   case 1:console.log("1ci gun");
//     break;
//     case 2:console.log("2ci gun");
//     break;
//     case 3:console.log("3ci gun");
//     break;
//     case 4:console.log("4ci gun");
//     break;
//     case 5:console.log("5ci gun");
//     break;
//     case 6:console.log("6ci gun");
//     break;
//     case 5:console.log("7ci gun");
//     break;
//   default:console.log("bele gun yoxdu");

// }
// let day = 3; 

// if (day === 1) {
//   console.log("Bazar ertəsi");
// } else if (day === 2) {
//   console.log("Çərşənbə axşamı");
// } else if (day === 3) {
//   console.log("Çərşənbə");
// } else if (day === 4) {
//   console.log("Cümə axşamı");
// } else if (day === 5) {
//   console.log("Cümə");
// } else if (day === 6) {
//   console.log("Şənbə");
// } else if (day === 7) {
//   console.log("Bazar");
// } else {
//   console.log("Yanlış gün daxil etdiniz");
// }



// let bal = 50;

// switch (true) {
//   case (bal > 90):
//     console.log("A");
//     break;
//   case (bal > 80):
//     console.log("B");
//     break;
//   case (bal > 70):
//     console.log("C");
//     break;
//   case (bal > 60):
//     console.log("D");
//     break;
//   case (bal > 50):
//     console.log("E");
//     break;
//   default:
//     console.log("kesildiniz");
// }


// let bal = 85; // Misal üçün bal 85-dir

// if (bal > 90) {
//   console.log("A");
// } else if (bal > 80) {
//   console.log("B");
// } else if (bal > 70) {
//   console.log("C");
// } else if (bal > 60) {
//   console.log("D");
// } else if (bal > 50) {
//   console.log("E");
// } else {
//   console.log("Kesildiniz");
// }


// let giris = true;  
// let rol = "admin";     
// if (giris===false) {
//   console.log("Giriş edilmədi");
// }
//  else {
//   if (rol === "admin") {
//     console.log("Sistemə icazəsi var."); 
//   } 

//   else if (rol === "editor") {
//     console.log("Məzmun redakte elemeye icazə var.");
//   }
//   else {
//     console.log("Naməlum rol daxil edilib.");
//   }

// }



// let yas = 17

// let age = yas >= 18 ? "Səs verə bilərsiniz" : "Səs verə bilməzsiniz.";
// console.log(age);



//Parolun uzunluğuna görə güclü və zəif yoxlaması
// Tapşırıq: Əgər parolun uzunluğu 8 və ya daha çoxdursa, "Güclü parol", əks halda "Zəif parol" yaz.

// let parol= "abcdefg90"
// parol.length>8 ? console.log("guclu kod") :console.log("zeif kod");


// İki rəqəmin hansının böyük olduğunu tap
// Tapşırıq: İki ədəd verilib. Hansı böyükdürsə onu yazdır, bərabərdirsə "Bərabərdir".
 
// let a=11
// let b=12
// a>b ? console.log("a boyukdu") : (a<b)?  console.log("b boyukdu"):console.log("a=b");

    


// let parol="abcd"
// let confirmparol="abcd"
//  (parol===confirmparol) ?console.log("Sifre yenilendi"):console.log("uygun deyil sifreler")


// let like =29
// like===0 ? console.log("0 beyeni" + like):(like===1)? console.log("1 beyeni" + like):(like===2)? console.log("2 beyeni" + like):console.log("3 ve daha cox beyendi : "  +  like + " nefer ");

//1
// let arr=[1,2,3,5,8,6,78,89,3,45,3,78]
// arr.unshift(0)
// console.log(arr);
//2

// arr.pop();
// console.log(arr);

//3
// arr.shift();
// console.log(arr);

//4

// arr.sort((a,b)=>a-b)
// console.log(arr);

//5

// arr.reverse()
// console.log(arr);

//6

// let result = arr.includes(3);
// console.log(result);

// let result=arr.join(", ");
// console.log(result);
//7

//  let result=arr.map(num => num * 3); 
//  console.log(result);
 //8


//9
// let result = arr.filter(num => num > 5);
//10
// let result=arr.slice(0, 3);
//11
// console.log(arr.length);

  

let supliers=[
    {
      "id": 4,
      "companyName": "Tokyo Traders",
      "contactName": "Yoshi Nagase",
      "contactTitle": "Marketing Manager",
      "address": {
        "street": "9-8 Sekimai Musashino-shi",
        "city": "Tokyo",
        "region": "NULL",
        "postalCode": 100,
        "country": "Japan",
        "phone": "(03) 3555-5011"
      }
    },
    {
      "id": 5,
      "companyName": "Cooperativa de Quesos 'Las Cabras'",
      "contactName": "Antonio del Valle Saavedra",
      "contactTitle": "Export Administrator",
      "address": {
        "street": "Calle del Rosal 4",
        "city": "Oviedo",
        "region": "Asturias",
        "postalCode": 33007,
        "country": "Spain",
        "phone": "(98) 598 76 54"
      }
    },
    {
      "id": 6,
      "companyName": "Mayumi's",
      "contactName": "Mayumi Ohno",
      "contactTitle": "Marketing Representative",
      "address": {
        "street": "92 Setsuko Chuo-ku",
        "city": "Osaka",
        "region": "NULL",
        "postalCode": 545,
        "country": "Japan",
        "phone": "(06) 431-7877"
      }
    },
    {
      "id": 7,
      "companyName": "Pavlova Ltd.",
      "contactName": "Ian Devling",
      "contactTitle": "Marketing Manager",
      "address": {
        "street": "74 Rose St. Moonie Ponds",
        "city": "Melbourne",
        "region": "Victoria",
        "postalCode": 3058,
        "country": "Australia",
        "phone": "(03) 444-2343"
      }
    },
    {
      "id": 8,
      "companyName": "Specialty Biscuits Ltd.",
      "contactName": "Peter Wilson",
      "contactTitle": "Sales Representative",
      "address": {
        "street": "29 King's Way",
        "city": "Manchester",
        "region": "NULL",
        "postalCode": "M14 GSD",
        "country": "UK",
        "phone": "(161) 555-4448"
      }
    },
    {
      "id": 9,
      "companyName": "PB Knäckebröd AB",
      "contactName": "Lars Peterson",
      "contactTitle": "Sales Agent",
      "address": {
        "street": "Kaloadagatan 13",
        "city": "Göteborg",
        "region": "NULL",
        "postalCode": "S-345 67",
        "country": "Sweden",
        "phone": "031-987 65 43"
      }
    },
    {
      "id": 10,
      "companyName": "Refrescos Americanas LTDA",
      "contactName": "Carlos Diaz",
      "contactTitle": "Marketing Manager",
      "address": {
        "street": "Av. das Americanas 12.890",
        "city": "Sao Paulo",
        "region": "NULL",
        "postalCode": 5442,
        "country": "Brazil",
        "phone": "(11) 555 4640"
      }
    },
    {
      "id": 11,
      "companyName": "Heli Süßwaren GmbH & Co. KG",
      "contactName": "Petra Winkler",
      "contactTitle": "Sales Manager",
      "address": {
        "street": "Tiergartenstraße 5",
        "city": "Berlin",
        "region": "NULL",
        "postalCode": 10785,
        "country": "Germany",
        "phone": "(010) 9984510"
      }
    },
    {
      "id": 2,
      "companyName": "New Orleans Cajun Delights",
      "contactName": "Shelley Burke",
      "contactTitle": "Order Administrator",
      "address": {
        "street": "P.O. Box 78934",
        "city": "New Orleans",
        "region": "LA",
        "postalCode": 70117,
        "country": "USA",
        "phone": "(100) 555-4822"
      }
    },
    {
      "id": 12,
      "companyName": "Plutzer Lebensmittelgroßmärkte AG",
      "contactName": "Martin Bein",
      "contactTitle": "International Marketing Mgr.",
      "address": {
        "street": "Bogenallee 51",
        "city": "Frankfurt",
        "region": "NULL",
        "postalCode": 60439,
        "country": "Germany",
        "phone": "(069) 992755"
      }
    },
    {
      "id": 13,
      "companyName": "Nord-Ost-Fisch Handelsgesellschaft mbH",
      "contactName": "Sven Petersen",
      "contactTitle": "Coordinator Foreign Markets",
      "address": {
        "street": "Frahmredder 112a",
        "city": "Cuxhaven",
        "region": "NULL",
        "postalCode": 27478,
        "country": "Germany",
        "phone": "(04721) 8713"
      }
    },
    {
      "id": 14,
      "companyName": "Formaggi Fortini s.r.l.",
      "contactName": "Elio Rossi",
      "contactTitle": "Sales Representative",
      "address": {
        "street": "Viale Dante 75",
        "city": "Ravenna",
        "region": "NULL",
        "postalCode": 48100,
        "country": "Italy",
        "phone": "(0544) 60323"
      }
    },
    {
      "id": 15,
      "companyName": "Norske Meierier",
      "contactName": "Beate Vileid",
      "contactTitle": "Marketing Manager",
      "address": {
        "street": "Hatlevegen 5",
        "city": "Sandvika",
        "region": "NULL",
        "postalCode": 1320,
        "country": "Norway",
        "phone": "(0)2-953010"
      }
    },
    {
      "id": 1,
      "companyName": "Exotic Liquids",
      "contactName": "Charlotte Cooper",
      "contactTitle": "Purchasing Manager",
      "address": {
        "street": "49 Gilbert St.",
        "city": "London",
        "region": "NULL",
        "postalCode": "EC1 4SD",
        "country": "UK",
        "phone": "(171) 555-2222"
      }
    },
    {
      "id": 3,
      "companyName": "Grandma Kelly's Homestead",
      "contactName": "Regina Murphy",
      "contactTitle": "Sales Representative",
      "address": {
        "street": "707 Oxford Rd.",
        "city": "Ann Arbor",
        "region": "MI",
        "postalCode": 48104,
        "country": "USA",
        "phone": "(313) 555-5735"
      }
    },
    {
      "id": 16,
      "companyName": "Bigfoot Breweries",
      "contactName": "Cheryl Saylor",
      "contactTitle": "Regional Account Rep.",
      "address": {
        "street": "3400 - 8th Avenue Suite 210",
        "city": "Bend",
        "region": "OR",
        "postalCode": 97101,
        "country": "USA",
        "phone": "(503) 555-9931"
      }
    },
    {
      "id": 17,
      "companyName": "Svensk Sjöföda AB",
      "contactName": "Michael Björn",
      "contactTitle": "Sales Representative",
      "address": {
        "street": "Brovallavägen 231",
        "city": "Stockholm",
        "region": "NULL",
        "postalCode": "S-123 45",
        "country": "Sweden",
        "phone": "08-123 45 67"
      }
    },
    {
      "id": 18,
      "companyName": "Aux joyeux ecclésiastiques",
      "contactName": "Guylène Nodier",
      "contactTitle": "Sales Manager",
      "address": {
        "street": "203 Rue des Francs-Bourgeois",
        "city": "Paris",
        "region": "NULL",
        "postalCode": 75004,
        "country": "France",
        "phone": "(1) 03.83.00.68"
      }
    },
    {
      "id": 19,
      "companyName": "New England Seafood Cannery",
      "contactName": "Robb Merchant",
      "contactTitle": "Wholesale Account Agent",
      "address": {
        "street": "Order Processing Dept. 2100 Paul Revere Blvd.",
        "city": "Boston",
        "region": "MA",
        "postalCode": 2134,
        "country": "USA",
        "phone": "(617) 555-3267"
      }
    },
    {
      "id": 20,
      "companyName": "Leka Trading",
      "contactName": "Chandra Leka",
      "contactTitle": "Owner",
      "address": {
        "street": "471 Serangoon Loop Suite #402",
        "city": "Singapore",
        "region": "NULL",
        "postalCode": 512,
        "country": "Singapore",
        "phone": "555-8787"
      }
    },
    {
      "id": 21,
      "companyName": "Lyngbysild",
      "contactName": "Niels Petersen",
      "contactTitle": "Sales Manager",
      "address": {
        "street": "Lyngbysild Fiskebakken 10",
        "city": "Lyngby",
        "region": "NULL",
        "postalCode": 2800,
        "country": "Denmark",
        "phone": 43844108
      }
    },
    {
      "id": 22,
      "companyName": "Zaanse Snoepfabriek",
      "contactName": "Dirk Luchte",
      "contactTitle": "Accounting Manager",
      "address": {
        "street": "Verkoop Rijnweg 22",
        "city": "Zaandam",
        "region": "NULL",
        "postalCode": "9999 ZZ",
        "country": "Netherlands",
        "phone": "(12345) 1212"
      }
    },
    {
      "id": 25,
      "companyName": "Ma Maison",
      "contactName": "Jean-Guy Lauzon",
      "contactTitle": "Marketing Manager",
      "address": {
        "street": "2960 Rue St. Laurent",
        "city": "Montréal",
        "region": "Québec",
        "postalCode": "H1J 1C3",
        "country": "Canada",
        "phone": "(514) 555-9022"
      }
    },
    {
      "id": 27,
      "companyName": "Escargots Nouveaux",
      "contactName": "Marie Delamare",
      "contactTitle": "Sales Manager",
      "address": {
        "street": "22 rue H. Voiron",
        "city": "Montceau",
        "region": "NULL",
        "postalCode": 71300,
        "country": "France",
        "phone": "85.57.00.07"
      }
    },
    {
      "id": 26,
      "companyName": "Pasta Buttini s.r.l.",
      "contactName": "Giovanni Giudici",
      "contactTitle": "Order Administrator",
      "address": {
        "street": "Via dei Gelsomini 153",
        "city": "Salerno",
        "region": "NULL",
        "postalCode": 84100,
        "country": "Italy",
        "phone": "(089) 6547665"
      }
    },
    {
      "id": 28,
      "companyName": "Gai pâturage",
      "contactName": "Eliane Noz",
      "contactTitle": "Sales Representative",
      "address": {
        "street": "Bat. B 3 rue des Alpes",
        "city": "Annecy",
        "region": "NULL",
        "postalCode": 74000,
        "country": "France",
        "phone": "38.76.98.06"
      }
    },
    {
      "id": 23,
      "companyName": "Karkki Oy",
      "contactName": "Anne Heikkonen",
      "contactTitle": "Product Manager",
      "address": {
        "street": "Valtakatu 12",
        "city": "Lappeenranta",
        "region": "NULL",
        "postalCode": 53120,
        "country": "Finland",
        "phone": "(953) 10956"
      }
    },
    {
      "id": 24,
      "companyName": "G'day Mate",
      "contactName": "Wendy Mackenzie",
      "contactTitle": "Sales Representative",
      "address": {
        "street": "170 Prince Edward Parade Hunter's Hill",
        "city": "Sydney",
        "region": "NSW",
        "postalCode": 2042,
        "country": "Australia",
        "phone": "(02) 555-5914"
      }
    },
    {
      "id": 29,
      "companyName": "Forêts d'érables",
      "contactName": "Chantal Goulet",
      "contactTitle": "Accounting Manager",
      "address": {
        "street": "148 rue Chasseur",
        "city": "Ste-Hyacinthe",
        "region": "Québec",
        "postalCode": "J2S 7S8",
        "country": "Canada",
        "phone": "(514) 555-2955"
      }
    }
  
  ]
//  function findById(id){
//     let data=supliers.find(item=>item.id===id)
//     return data.companyName
//  }
//  const findByCountry = (x) => {
//     return supliers.filter(item => item.address?.country === x)
//   }

//   const findByCity = (x) => {
//     return supliers.filter(item => item.address?.city === x)
//   }

//   const result = findByCity("Tokyo");
//   console.log(result);

// let result=findById(3)
// console.log(result);


// function findByCompanyName(x) {
//     let data=x.map(item => item.companyName).sort().join(' | ');
//     return  data
//   }
  

// function findByCountryFrance(supliers) {
//     const franceSupliers = supliers.filter(item => item.address.country === "France");
//     return franceSupliers
// }
// console.log(findByCountryFrance(supliers));