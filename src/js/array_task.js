//--------------------------------------------------------------------------
//  Задачки были взяты отсюда https://daruse.ru/zadaniya-po-js-dlya-prokachki

//--------Массивы------------------------------
function task_one(_input_array){
    //  Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну,
    //  если все элементы четные, если бы хотя бы один элемент не четный, то false.

    for (let _counter = 0; _counter < _input_array.length; _counter++){ // перебираем каждое число
        if (_input_array[_counter]%2 !== 0) return false; // Проверяем на остаток, если результат не равен 0 то - false
    }
    return true;// Если все числа равны 0 то - true
}
function task_two(_input_array){
    //  Сделай функцию, которая принимает массив любых целых чисел,
    // которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.

    //  Первый способ
    // for (let _counter = 0; _counter < _input_array.length; _counter++){ // перебираем каждое число
    //     if (_input_array[_counter]%2 === 0) return true; // Проверяем на остаток, если результат равен 0 то - false
    // }
    // return false;// Если все числа не равны 0 то - true

    // Второй способ
    return !task_one(_input_array)
}

function task_three(_input_array){
    //  Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив,
    // где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

    // Первый способ
    // let _array_output = [];
    // for (let _counter = 0; _counter < _input_array.length; _counter++){
    //     if (_input_array[_counter] % 5 === 0){
    //         _array_output.push(_input_array[_counter]);
    //     }
    // }
    // return _array_output;


    // Второй способ
    return _input_array.filter(_input_array => _input_array % 5 === 0);
}
function task_four(_input_array) {
    //  Написать функцию, которая принимает массив чисел, например [1,2,3,4,5]
    //  и функция возращает среднее арифметическое, (округлить результат до десятых)

    let sum = 0.00;
    for (let _counter = 0; _counter < _input_array.length; _counter++){// перебираем числа
        sum += _input_array[_counter];  // суммируем
    }
    return parseFloat((sum / _input_array.length).toFixed(1)); // Делим и получаем среднее арифметическое

    // return _input_array.reduce((acc, _counter) => acc + _counter, 0) / _input_array.length
}

function task_five(_input_array){
    // Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и переносит первый элемент
    // массива в конец (например можно засунуть первый элемент в конец, затем удалить первый элемент),
    // попробуй несколькими способами сделать, если догадаешься

    // Первый способ
    // return _input_array
    // let _first_line_array = _input_array[0];
    // _input_array.shift();
    // _input_array.push(_first_line_array)
    // return(_input_array)


    _input_array.push(_input_array.shift()); // Второй короткая версия первого способа
    return _input_array;
}
function task_six(_input_array){
    //  Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст
    //  ([{name: 'Иван', age: 23},...]) и возвращает массим, где каждый элемент представляет из себя
    //  строку "Имя: Иван, возвраст: 23".

    for (let _count_user = 0; _count_user < _input_array.length; _count_user++){
        
    }

}

console.log(task_one([2,4,6]));
console.log(task_two([2,4,6]));
console.log(task_three([1,2,5,12,15,21]));
console.log(task_four([1,2.536,3,2.4423]));
console.log(task_five([1,2,3,4,5]));
console.log(task_six([{name: 'Иван', age: 23}, {name: 'Дима', age: 20}, {name: 'Настя', age: 19}, {name: 'Костя', age: 30}]))