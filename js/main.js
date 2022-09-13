const products = [
    {id: 1, img: 'img/notebook.jpg', title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, img: 'img/gamepad.jpg', title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
/**
const renderProduct = (img = '/img/placeholder.png', title, price) => {
    return `<div class="product-item">
                <img src="${img}" alt="${title}">
                <h3>${title}</h3>
                <p>$${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(
        item.img, item.title, item.price
    ));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};
 */

const renderProduct = (item) => {
    if(!item.img) {
        item.img = 'img/placeholder.png';
    }

    return `<div class="product-item">
                <img src="${item.img}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>$${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
    /**
     * Запятые появляются, потому что выводится массив. Метод join объединяет
     * массив в строку, разделенную аргументом, указанным в скобках
     */
};

renderPage(products);