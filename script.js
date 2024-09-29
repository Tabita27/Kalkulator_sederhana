let input1 = document.getElementById("angka1");
let input2 = document.getElementById("angka2");
let tomboljumlah = document.getElementById("penjumlahan");
let tombolkurang = document.getElementById("pengurangan");
let tombolkali = document.getElementById("perkalian");
let tombolbagi = document.getElementById("pembagian");
let result = document.getElementById("hasil");

function jumlah(){
    let hasiljumlah = parseFloat (input1.value) + parseFloat (input2.value);
    result.innerHTML = "Hasil  : " + hasiljumlah;
}

function kurang(){
    let hasilkurang = parseFloat (input1.value) - parseFloat (input2.value);
    result.innerHTML = "Hasil  : " + hasilkurang;
}

function kali(){
    let hasilkali = parseFloat (input1.value) * parseFloat (input2.value);
    result.innerHTML = "Hasil  : " + hasilkali;
}

function bagi(){
    let hasilbagi = parseFloat (input1.value) / parseFloat (input2.value);
    result.innerHTML = "Hasil  : " + hasilbagi;
}


tomboljumlah.addEventListener("click", jumlah);
tombolkurang.addEventListener("click", kurang);
tombolkali.addEventListener("click", kali);
tombolbagi.addEventListener("click", bagi);

