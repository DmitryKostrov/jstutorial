//--------------------------------------------------------------------------
//  Задачки были взяты отсюда https://daruse.ru/zadaniya-po-js-dlya-prokachki

//--------Basic------------------------------
function task_one(_number_one, _number_two) {
    // Написать функцию, которая принимает два числа и возращает результат их умножения
    return ("Result: " + parseInt(_number_one) * parseInt(_number_two))
}

function task_two(_name_user, _surname_user, _age_user) {
    //  Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку
    // "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)
    return (`Привет ${_name_user} ${_surname_user} с возрастом ${_age_user} лет`);
}

function task_three(_gender_user){
    //Написать функцию, которая принимает пол человека ('M','F') в виде строки,
    //результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"
    switch (_gender_user){
        case "M":
        case "m":
            return ("Ваш пол мужской");
            break;
        case "F":
        case "f":
            return ("Ваш пол женский");
            break;
        default:
            return ("Ваш пол не опеределен");
            break;
    }

    // Второй способ
    // if (_gender_user === 'M' || _gender_user === 'm'){
    //     console.log("Ваш пол мужской")
    // }
    // else if (_gender_user === 'F' || _gender_user === 'f'){
    //     console.log("Ваш пол женский")
    // }
    // else {
    //     console.log("Ваш пол не опеределен")
    // }
}
function task_four(_day_week){
    // Сделайте функцию, которая принимает параметром число
    // от 1 до 7, а возвращает день недели на русском языке.

    let _week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье", "Введите число от 1 до 7"];

    switch (parseInt(_day_week)){
        case 1:
            return(_week[0]);
        case 2:
            return(_week[1]);
        case 3:
            return(_week[2]);
        case 4:
            return(_week[3]);
        case 5:
            return(_week[4]);
        case 6:
            return(_week[5]);
        case 7:
            return(_week[6]);
        default:
            return(_week[7]);

    }
}

function task_five(_sentence){
    //  Написать функцию, которая принимает строку (в этом тексте 3-5 предложений),
    //  верните каждое первое слово в каждом предложении, через запятую.
    // let _words = "";
    // let _first_words = "";
    // let _symbol = false;

    // return _sentence.match(/(?<=(^|\.)\s*)\S+(?=[^.]*(?:\.|$))/sg).join(", ")

    // ------------------------------------------------------------------------------------------------------------
    // Недостаток - Если предложенни есть хоть один пробел после точки то она не работает, из-за этого требуется
    // тексте убрать все пробелы после точки. Данный метод не потходит, так как она будет потреблять большое количество
    // ресурсов, и такая система сложная в понимании.
    // for (let _counter = 0; _counter < _sentence.length; _counter++){
    //     // console.log(_sentence[_counter]);
    //     if (_sentence[_counter] === " "){
    //         if (_symbol === false){
    //             _first_words = _first_words + _words + ", ";
    //             _symbol = true;
    //         }
    //     }
    //     else if (_sentence[_counter] === "."){
    //         _words = "";
    //         _symbol = false
    //     }
    //     else {
    //         _words = _words + _sentence[_counter];
    //     }
    // }
    // return _first_words
    let _data_one = "Hello, it's me. Dima."
    return _sentence
        .split(".")
        .map(v => v.trim().split(" ")[0])
        .join(", ");
}

function task_six(_name_user){
    //  Написать функцию, которой передаем имя, и она возраващает
    //  приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

    let _date_user = new Date().getHours();

    if (_date_user >= 0 && _date_user < 5) {
        return "Доброй ночи " + _name_user;
    } else if (_date_user >= 5 && _date_user < 12) {
        return "Доброе утро " + _name_user;
    } else if (_date_user >= 13 && _date_user < 18) {
        return "Добрый день " + _name_user;
    } else if (_date_user >= 19 && _date_user < 24) {
        return "Добрый вечер " + _name_user;
    }
}
function task_seven(_input_age){
    //Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста
    // (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый

    //  Первый вариант
    if (_input_age >= 1 && _input_age <= 17) { // Если возраст меньше 18 лет то возвращаем возраст и надпись ребенок
        return (_input_age + " - ребонок")
    }
    else if (_input_age >= 18 && _input_age <=30) {
        return (_input_age + " - молодой")
    }
    else if (_input_age >= 31 && _input_age <=55) {
        return (_input_age + " - зрелый")
    }
    else if (_input_age >= 56) {
        return (_input_age + " - старый")
    }

}

function task_eight(_name_input_user, _age_input_user){
    //  Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение
    // (Иван имеет возраст 44 и он зрелый). А также вызови внутри своей функции, функцию из прошлого задания

    return (_name_input_user + " имеет возраст " + _age_input_user + " и он " + task_seven(_age_input_user))

}

console.log(task_one(20,10));
console.log(task_two("Дима", "Костров", 20));
console.log(task_three('m'));
console.log(task_four(5));
console.log(task_five("Какой прекрасный день. Сегодня вечером можно выйти на прогулку. Но у меня дела."));
console.log(task_six("Дима"));
console.log(task_seven("11"));
console.log(task_eight("Иван", 44))

