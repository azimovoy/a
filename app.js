var age = +prompt('Введите свой возраст');
var child = ('Вы еще ребенок идите учиться');
var adult = ('Вы уже взрослый, идите работать');
var elder = ('Вы уже старый, пора на пенсию');
var dead = ('Вы мертвец');
var error = ('Что то не так');


if(age > 0 && age <= 18) {
    alert(child);
}
else if (age >= 18  && age < 65) {
    alert(adult);
}
else if (age  >= 65 && age < 100) {
    alert(elder);
}
else if (age >= 100 && age < 150 ) {
    alert(dead);
}
else  {
    alert(error);
}

var hour = +prompt('Введите время');

switch(hour) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    alert(hour + ' Часа  ночи');
    break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    alert(hour + ' Часа  утра');
    break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    alert(hour + ' Часа дня');
    break;
    case 19:
    case 20:
    case 21:
    alert(hour + ' Часа вечера ');
    break;
    case 22:
    case 23:
    case 24:
    alert(hour + ' Часа ночи ');
    break;
    default:
    alert('такого часа нет');
    break;
}

var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третье число');


if ( x > z && x < y || x < z && x > y ) {
    alert(x + ' Среднее число');
}else if( y > z && y < x || y < z && y > x ){
    alert(y + ' Среднее число');
}else if( z > x && z < y || z < x && z > y ){
    alert(z + ' Среднее число');
}else {
    alert('ошибка')
}






