const button = document.getElementsByClassName('menu')[0];

button.addEventListener('click', function () {

    if (document.getElementsByClassName('menu')[0].dataset.toggle == 'aktif') {
        this.innerText = ">";
        document.getElementsByClassName('menu')[0].dataset.toggle = 'off';
        document.getElementById('navbar').style.left = '-320px';
    } else {
        this.innerText = "<";
        document.getElementsByClassName('menu')[0].dataset.toggle = 'aktif';
        document.getElementById('navbar').style.left = '0';
    }
});