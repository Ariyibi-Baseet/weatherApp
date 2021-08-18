// reference to some elements
const gBtn = document.querySelector('.g-btn');
const landingContainer = document.querySelector('.w-landing');
const inputContainer = document.querySelector('.w-input');
const descriptionContainer = document.querySelector('.w-description');

// function to display input container
gBtn.onclick = function showNextContainer()
{
    landingContainer.style.display = 'none';
    inputContainer.style.display = 'block';
}


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Abeokuta&appid=fb76d87eef777c3d39c1628ad382c9b2", function(data){
    console.log(data);
}
);