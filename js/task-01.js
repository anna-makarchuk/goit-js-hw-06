const list = document.querySelector('#categories');
const listArray = [...list.children]
console.log(`Number of categories:${listArray.length}`);

listArray.forEach(elem=> {
    console.dir(`Category:${elem.firstElementChild.textContent}`);
    console.dir(`Elements:${elem.lastElementChild.children.length}`);
});








