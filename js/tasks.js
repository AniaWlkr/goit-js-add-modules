import gallery from "./gallery.js"
// console.table(gallery);

const ref = {
  body: document.querySelector('body'),
}
const listRef = document.createElement('ul');
ref.body.append(listRef);

/*
gallery.forEach(({ src }) => {
  const str = `<li><img src=${src}/></li>`;
  listRef.insertAdjacentHTML('beforeend', str);
  const liRef = listRef.lastElementChild;
  const pictRef = liRef.querySelector('img');
  pictRef.setAttribute('width', '100');

});

setTimeout(()=> { 
  listRef.innerHTML = '';
}, 3000); */


const galleryStr = gallery.reduce((acc, { src }) => {
  const str = `<li><img src=${src}/></li>`;
  acc += str;
  return acc;
}, '');

listRef.innerHTML = galleryStr;


