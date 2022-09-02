const txtElement = ['Mahasiswa', 'Programmer', 'Web Developer'];
let count = 0;
let txtIndex = 0;
let curretTxt = '';
let words = '';

(function ngetik(){
    
    if(count == txtElement.length){
        count = 0;
    }

    curretTxt = txtElement[count];

    words = curretTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == curretTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);

})();