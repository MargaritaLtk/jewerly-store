const items = [
   {
      title: 'Кольцо «Триплет» с лабрадоритом',
      description: 'Несмыкаемое кольцо с лабрадоритом и тремя белыми цирконами',
      price: 7150,
      img: './img/1.jpeg'
   },
   {
      title: 'Кольцо «Триплет» с белым агатом',
      description: 'Несмыкаемое кольцо с белым агатом и тремя белыми цирконами',
      price: 7200,
      img: './img/2.jpeg'
   },
   {
      title: 'Кольцо «Дуо» с розовым кварцем и белым топазом',
      description: 'Несмыкаемое кольцо с розовым кварцем и белым топазом',
      price: 8850,
      img: './img/3.jpeg',
   },
   {
      title: 'Кольцо «Триплет» с черным агатом',
      description: 'Несмыкаемое кольцо с черным агатом и тремя белыми цирконами',
      price: 6500,
      img: './img/4.jpeg',
   },
   {
      title: 'Кольцо «Дуо» с дымчатым кварцем и белым топазом',
      description: 'Несмыкаемое кольцо с дымчатым кварцем и белым топазом',
      price: 4100,
      img: './img/5.jpeg',
   },
   {
      title: 'Кольцо «Дуо» с лабрадоритом и белым топазом',
      description: 'Несмыкаемое кольцо с лабрадоритом и белым топазом',
      price: 8300,
      img: './img/6.jpeg',
   },
   {
      title: 'Кольцо «Дуо» с лунным камнем и белым топазом',
      description: 'Несмыкаемое кольцо с радужным лунным камнем и белым топазом',
      price: 8300,
      img: './img/7.jpeg',
   },
   {
      title: 'Кольцо «Дуо» с черным агатом и белым топазом',
      description: 'Несмыкаемое кольцо с черным агатом и белым топазом',
      price: 7500,
      img: './img/8.jpeg',
   },
   {
      title: 'Браслет «Хамса» с белым цирконом',
      description: 'Браслет с кулоном хамса (ладонь) и с подвижным кулоном из камня',
      price: 4100,
      img: './img/9.jpeg',
   },
   {
      title: 'Браслет «Хамса» с голубым топазом',
      description: 'Браслет с кулоном хамса (ладонь) и с подвижным кулоном из камня',
      price: 3900,
      img: './img/10.jpeg',
   },
   {
      title: 'Браслет «Хамса» с розовым цирконом',
      description: 'Браслет с кулоном хамса (ладонь) и с подвижным кулоном из камня',
      price: 4500,
      img: './img/11.jpeg',
   },
   {
      title: 'Браслет «Лотос» с белым цирконом',
      description: 'Браслет с кулоном Лотос и вставкой из камня',
      price: '4700',
      img: './img/12.jpeg',
   },
   {
      title: 'Колье «Лотос» с розовым цирконом',
      description: 'Колье с кулоном лотос и вставкой из камня на уровне ключиц',
      price: 5100,
      img: './img/13.jpeg',
   },
   {
      title: 'Колье «Бабочка» с черным ониксом',
      description: 'Колье бабочка с двумя половинами и вставкой из черного оникса',
      price: 6200,
      img: './img/14.jpeg',
   },
   {
      title: 'Колье «Мрамор»',
      description: 'Колье с розовым Кварцем в форме сердца, длина регулируется',
      price: 7400,
      img: './img/15.jpeg',
   },
   {
      title: 'Колье «Гармония»',
      description: 'Колье с гладким и мятым (чеканным) дисками и двумя белыми цирконами',
      price: 6900,
      img: './img/16.jpeg',
   }
]

const itemsContainer = document.querySelector('#items-container');
const nothingFound = document.querySelector('#nothing-found');
const itemTemplate = document.querySelector('#item-template');

let currentState = [...items];

function prepareItem(shopItem) {
   const { title, description, price, img } = shopItem;

   const item = itemTemplate.content.cloneNode(true);

   item.querySelector('h1').textContent = title;
   item.querySelector('p').textContent = description;
   item.querySelector('.price').textContent = `${price} руб`;
   item.querySelector('img').src = img;

   return item;
}

function renderItems(arr) {
// добавляла и удаляла класс, потому что не было времени вспомнить как симпатично расположить параграф
// с помощью сss, тупое решение,но я обязательно вспомню как правильно это делать в css)))
   nothingFound.textContent = '';
   nothingFound.classList.remove('nothing-found');
   itemsContainer.innerHTML = '';

   arr.forEach((item) => {
      itemsContainer.append(prepareItem(item));
   }
   )

   if (!arr.length) {
      nothingFound.textContent = 'По вашему запросу ничего не найдено';
      nothingFound.classList.add('nothing-found');
   }
}


function sortByAlphabet(a, b) {
   if (a.title > b.title) {
      return 1;
   }
   if (a.title < b.title) {
      return -1;
   }
   if (a.title = b.title) {
      return 0;
   }
}


renderItems(items.sort((a, b) => sortByAlphabet(a, b)));

const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn')

function findItem() {
   const searchString = searchInput.value.trim().toLowerCase();


   currentState = items.filter((element) =>
      element.title.toLowerCase().includes(searchString)
   )
   currentState.sort((a, b) => sortByAlphabet(a, b));
   renderItems(currentState);
   sortControl.selectedIndex = 0;
   
}

searchButton.addEventListener('click', findItem);
searchInput.addEventListener('search', findItem);



const sortControl = document.querySelector("#sort");
sortControl.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
 
  switch (selectedOption) {
    case "expensive": {
      currentState.sort((a, b) => b.price - a.price);
      break;
    }
    case "cheap": {
      currentState.sort((a, b) => a.price - b.price);
      break;
    }
    case "alphabet": {
      currentState.sort((a, b) => sortByAlphabet(a, b));
      break;
    }
  }

  renderItems(currentState);
});



