

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


// function basic_module(_option_tasks, _input_user_one, _input_user_two, _input_user_three){ // _option_tasks - Выбор задачи если 1 то вызывается task_one(_input_user_one, _input_user_two, _input_user_three);
//     switch (_option_tasks){
//         case "one":
//             console.log(task_one(_input_user_one, _input_user_two))
//             break;
//     }
// }