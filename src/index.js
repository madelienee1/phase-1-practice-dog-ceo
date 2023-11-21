// console.log('%c HI', 'color: firebrick')

//Challenge 1

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";


fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => {
        const images = data.message;
        const container = document.querySelector('#dog-image-container');

        images.forEach(imgUrl => {
            const img = document.createElement('img');
            img.src = imgUrl;
            container.appendChild(img);
        });
    })
    .catch(error => console.error('Error', error));


// Challenge 2

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        const breeds = data.message;
        const listOfBreeds = document.querySelector('#dog-breeds');

        for (const breed in breeds) {
            if (breeds.hasOwnProperty(breed)) {
                const li = document.createElement('li');
                li.textContent = breed;
                listOfBreeds.appendChild(li);
            }
        }
    })
    .catch(error => console.error('Error', error));


// Challenge 3

//Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, 
//the font color of that < li > changes.This can be a color of your choosing.


//select all li elements
document.addEventListener('DOMContentLoaded', function () {
    const listIt = document.getElementsByTagName('li');


    //function to change colour on click
    function changeColorOnClick(event) {
        event.target.style.color = 'pink';
    }
    //add event listener to each li element
    for (let li of listIt) {
        li.addEventListener('click', changeColorOnClick);
    }
});


//Challenge 4

//add event listener to the breed dropdown

document.querySelector('#breed-dropdown').addEventListener('change', function (event) {
    //get selected letter
    const selectedLetter = event.target.value;

    //select all breed list items
    const breeds = document.querySelectorAll('#dog-breeds li');

    breeds.forEach(breed => {
        if (breed.textContent.startsWith(selectedLetter)) {
            breed.style.display = '';
        } else {
            breed.style.display = 'none';
        }
    });
});