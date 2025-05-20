window.onscroll = function () { // jika web di scroll
    const header = document.querySelector('header'); // carikan elemen namanya header
    const fixedNav = header.offsetTop; // variable fixedNav ngambil dari header offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


// Hamburger
const hamburger = document.querySelector('#hamburger'); // carikan elemen yg idnya hamburger
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){ // jika di click
    hamburger.classList.toggle('hamburger-active'); // maka muncul/ditambahkan hamburge-active di click tersebut
    navMenu.classList.toggle('hidden');
});

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-green-500");
          } else {
            console.log(response);
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-red-500");
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


console.log('this is Easter EGG')
