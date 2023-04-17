let _result_output = document.getElementById("result-txt");
let _header_output = document.getElementById("space-output")

let _my_array = [];

let _funny_counter = 0;
let _funny_words = [
    'Вы ничего не ввели',
    'Хм... Я думаю надо что нибудь написать',
    'На клавиатуре есть буквы цифры нажми на них и будет магия',
    'Наверное весело нажимать на кнопку которая предназначено для другого',
    '...',
    'Мда... У меня нет слов',
    'Хочешь выведу страшный экран',
    'src/img/scary_picture.png',
    'Все у меня кончилась фантазия'
]

function output_simple_text() {
    let message = document.getElementById("message").value;
    if (message == ""){
        funny();
        _funny_counter++;
    }
    else{
        _result_output.innerHTML = message;
        _funny_counter = 0;
    };
}
function simple_calculate(){
    let _input_one = document.getElementById("number-one").value;
    let _input_two = document.getElementById("number-two").value;
    _result_output.innerHTML = parseInt(_input_one, 10) + parseInt(_input_two, 10);
}

function alert_output(){
    let _input_alert_text = document.getElementById("alert_text").value;

    alert(_input_alert_text);
}

function change_color_text(_color_choose){
    switch(_color_choose) {
        case 1:
            _result_output.style.color = 'rgb(0, 255, 255)';
            break;
        case 2:
            _result_output.style.color = 'rgb(0, 255, 55)';
            break;
        case 3:
            _result_output.style.color = 'rgb(255, 217, 0)';
            break;
        case 4:
            _result_output.style.color = 'rgb(208, 255, 0)';
            break;
        case 5:
            _result_output.style.color = 'rgb(255, 0, 0)';
            break;
        case 6:
            _result_output.style.color = 'rgb(162, 0, 255)';
            break;
        default:
            _result_output.style.color = '#fff';
    }
    
}
function change_color_background(_color_choose){
    switch(_color_choose) {
        case 1:
            _header_output.style.backgroundColor = '#313131';
            break;
        case 2:
            _header_output.style.backgroundColor = 'rgb(0, 255, 55)';
            break;
        case 3:
            _header_output.style.backgroundColor = 'rgb(255, 217, 0)';
            break;
        case 4:
            _header_output.style.backgroundColor = 'rgb(208, 255, 0)';
            break;
        case 5:
            _header_output.style.backgroundColor = 'rgb(255, 0, 0)';
            break;
        case 6:
            _header_output.style.backgroundColor = 'rgb(162, 0, 255)';
            break;
        default:
            _header_output.style.backgroundColor = '#313131';
    }
}

function funny(){
    // Функция при пустых вводах
    switch(_funny_counter) {
        case (_funny_counter = 0):
            alert(_funny_words[_funny_counter]);
            break;
        case (_funny_counter = 1):
            alert(_funny_words[_funny_counter]);
            break;
        case (_funny_counter = 2):
            alert(_funny_words[_funny_counter]);
            break;
        case (_funny_counter = 3):
            alert(_funny_words[_funny_counter]);
            break;
        case (_funny_counter = 4):
            alert(_funny_words[_funny_counter]);
            break;
        case (_funny_counter = 5):
            alert(_funny_words[_funny_counter]);
            break;
        case (_funny_counter = 6):
            alert(_funny_words[_funny_counter]);
            break;
        case (_funny_counter = 7):
            alert(_funny_words[_funny_counter]);
            break;
        case (_funny_counter = 8):
            alert(_funny_words[_funny_counter]);
            break;
        default:
            alert("Введите текс или число");
            break;
    }
}


function json_mappings(){
    let _data_users= {
        "name": "Kiril",
        "age" : 20
    };

    console.log(_data_users.name, _data_users.age);
}

function json_processing(){
    let _data_users_two= [{
        "name": "Kiril",
        "age" : 20
    }];

    console.log(_data_users_two[0].name,_data_users_two[0].age);
}



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

console.log(task_one(20,10));
console.log(task_two("Дима", "Костров", 20))
console.log(task_three('m'));
console.log(task_four(5));
console.log(task_five("Какой прекрасный день. Сегодня вечером можно выйти на прогулку. Но у меня дела."));
