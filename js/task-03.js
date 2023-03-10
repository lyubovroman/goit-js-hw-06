const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listOfImages = document.querySelector('#gallery');



listOfImages.style.display = 'flex';
listOfImages.style.justifyContent = 'center';
listOfImages.style.alignItems = 'center';
listOfImages.style.backgroundColor = 'pink';

const imagesItem = ({ url, alt }) => {
  return `<li class = "images_item">
  <img src="${url}" alt ="${alt}" width =270></li>`
};


const newListOfImages = images.map(imagesItem).join(" ");
console.log(newListOfImages);


listOfImages.insertAdjacentHTML("afterbegin", newListOfImages);
