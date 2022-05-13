let input = document.querySelector('.input');
let checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('click', function(e) {
    if(e.target.checked) {
        input.type = 'text';
    }
    else {
        input.type = 'password';
    }
});