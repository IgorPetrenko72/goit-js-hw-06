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

const galleryEl = document.querySelector(".gallery");

const makeImageMarckup = ({url, alt}) => {
  return `
  <li>
  <img class="imageTask03" src= ${url} alt= ${alt}/>
  </li>`;   
};

const imagesCollection = images
  .map(makeImageMarckup)
  .join('');

galleryEl.insertAdjacentHTML('beforeend', imagesCollection);  
// 
// 
// 
// 
// const makeImageEl = ({ url, alt }) => {
//   const itemEl = document.createElement("li");
//   const imageEl = document.createElement("img");
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 450;

//   itemEl.appendChild(imageEl);
//   return itemEl;
// }
// console.log(makeImageEl(images[0]));

// const itemsEl = images.map(makeImageEl);
// console.log(itemsEl);
// galleryEl.append(...itemsEl);