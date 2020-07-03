
// const body = document.querySelector('body');

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const ul = document.querySelector('#gallery');

// const list = images.map((image) => {
//  return `<li><img src=${image.url} alt=${image.alt}></li>`;
// }).join('')

// ul.insertAdjacentHTML('afterbegin', list);

// // =====================================================
// const fragment = document.createDocumentFragment();

// for (let i = 0; i < images.length; i += 1) {
//   const imagesItem = document.createElement('li');
//   const imgGallery = document.createElement('img');
  
//   imgGallery.setAttribute('src', images[i].url);
//   imgGallery.setAttribute('alt', images[i].alt);
  
//   imagesItem.appendChild(imgGallery);
//   fragment.appendChild(imagesItem);

// }
// ul.appendChild(fragment);
