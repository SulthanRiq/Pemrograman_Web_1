let tampilan = document.getElementById('display');

function input(nilai) {
    tampilan.value += nilai;
}

function clearAll() {
    tampilan.value = '';
}

function hitung() {
    try {
        tampilan.value = eval(tampilan.value);
    } catch (e) {
        tampilan.value = 'Error';
    }
}
