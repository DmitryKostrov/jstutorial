let _result_output = document.getElementById("result-txt");



function output_simple_text() {
    let message = document.getElementById("message").value;
    _result_output.innerHTML = message;
}



function simple_calculate(){
    let input_one = document.getElementById("number-one").value;
    let input_two = document.getElementById("number-two").value;

    _result_output.innerHTML = parseInt(input_one, 10) + parseInt(input_two, 10);
}


