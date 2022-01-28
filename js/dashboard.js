let allNews = [{
    fullName: "John Doe",
    date: "2021-12-01",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus facilis numquam!"
}, {
    fullName: "Mary Doe",
    date: "2021-12-02",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus facilis numquam!"
}, {
    fullName: "Annete Doe",
    date: "2021-12-22",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus facilis numquam!"
}
];
const newsShowEl = document.getElementById('news-show');
const newsForm = document.getElementById('news-form');

displayAllNews(allNews);


// event listener
newsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // news-submitted-by
    console.log(document.getElementById('news-submitted-by').value);
    console.log(document.getElementById('news-content').value);

    const newNews = {
        fullName: document.getElementById('news-submitted-by').value,
        date: "2022-01-26",
        content: document.getElementById('news-content').value
    };

    allNews = [...allNews, newNews]; //spread

    displayAllNews(allNews);

});

// -- loop to show all news items

function displayAllNews(items) {
    newsShowEl.innerHTML = "";

    items.forEach(
        item => addNewCard(item, newsShowEl) //anonymous functions
    );
}

function addNewCard(item, displayEl) {
    const newsCardDiv = document.createElement('div');

    newsCardDiv.innerHTML = `
          <div class="pb-3 border-b-2 border-gray-500 ">
           <h3> ${item.fullName} </h3>
            <h5 class="text-xs text-gray-600"> ${item.date} </h5>
            <p class="text-xs"> ${item.content} </p>
        </div>
    `;

    displayEl.appendChild(newsCardDiv);
}