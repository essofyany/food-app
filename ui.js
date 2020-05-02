const data = [
    {
        image: '9.jpeg'
    },
    {
        image: '1.jpeg'
    },
    {
        image: '6.jpeg'
    },
    {
        image: '3.jpeg'
    },
    {
        image: 'd1.jpeg'
    },
    {
        image: 'd9.jpeg'
    },
    {
        image: 'd7.jpeg'
    }
];

data.sort( ()=> Math.random() - 0.5);

const images = document.querySelectorAll('.image')
const imageList = Array.from(images);
imageList.forEach((image, index)=> {
    image.setAttribute('src',`${data[index].image}`) ;
});

// food & drink underline
const foodDrink = document.querySelector('.food-drink');
const foods = document.querySelector('.foods');
const drinks = document.querySelector('.drinks');
const underlineDisplay = 'text-decoration: underline green;';
foodDrink.addEventListener('click', (e)=> {
    if(e.target.textContent === foods.textContent) {
        e.target.setAttribute('style', `${underlineDisplay}`);
        drinks.setAttribute('style', 'none');
    } else if(e.target.textContent === drinks.textContent) {
        e.target.setAttribute('style', `${underlineDisplay}`);
        foods.setAttribute('style', 'none');
    }
});

// country choosen 
const country = document.querySelectorAll('.country');
const countryList = Array.from(country);
countryList.forEach((country)=> {
    country.addEventListener('click', (e)=> {
        if(e.target.textContent === 'Other') {
            document.querySelector('.recently-added').textContent = 'Recently Added';
        } else {
            document.querySelector('.recently-added').textContent = e.target.textContent;
        }
    })
});

// logo clicked
document.querySelector('.brand-logo').addEventListener('click', ()=> {
    location.reload();
});
