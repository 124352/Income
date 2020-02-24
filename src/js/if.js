let num = 50;

if (num < 49) {
    console.log("не верно!");
} else if (num > 100) {
    console.log("не верно!!!");
} else {
    console.log("Ok!");
}

(num == 50) ? console.log("Ok!") : console.log("не верно!");

switch (num) {
    case num < 49:
        console.log("Не верно!");
        break;
    case num > 100: 
        console.log("Много!");
        break;
    case num > 80: 
        console.log("Все еще много!"); 
        break;
    case 50:
        console.log("Верно!"); 
        break;
    default:
        console.log('Что пошло не так!');
        break;
}