let newsFromBackendDataStore = [
    {
        id: 1,
        fullName: "John Doe",
        date: "2021-12-01",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus facilis numquam!"
    }, {
        id: 2,
        fullName: "Mary Doe",
        date: "2021-12-02",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus facilis numquam!"
    }, {
        id: 3,
        fullName: "Annete Doe",
        date: "2021-12-22",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus facilis numquam!"
    }];

const newsShowEl = document.getElementById('news-show');
const newsForm = document.getElementById('news-form');

displayAllNews(newsFromBackendDataStore);

// Event Listener
newsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newNews = {
        id: Math.floor(Math.random() * 1000),
        fullName: document.getElementById('news-submitted-by').value,
        date: "2022-01-26",
        content: document.getElementById('news-content').value
    };

    newsFromBackendDataStore = [newNews, ...newsFromBackendDataStore];

    displayAllNews(newsFromBackendDataStore);

});

// -- loop to show all news items
/**
 *
 * @param {array} items
 */
function displayAllNews(items) {
    newsShowEl.innerHTML = "";

    items.map(
        item => addNewCard(item, newsShowEl)
    );
}

function deleteNews(newsId) {

    // console.log(`you clicked news ID: ${newsId}`)

    // console.log(newsFromBackendDataStore)

    const filteredNews = newsFromBackendDataStore.filter(item => item.id !== newsId)

    // store the new filter news.... storeNews(filterNews)
    newsFromBackendDataStore = filteredNews

    displayAllNews(newsFromBackendDataStore)

    console.log(filteredNews)

}

function addNewCard(item, displayEl) {
    const newsCardDiv = document.createElement('div');

    newsCardDiv.innerHTML = `
          <div class="p-3 m-2 bg-gray-200 shadow-sm">
          <span class="mb-2 bg-black text-white w-2 p-2 rounded-full cursor-pointer"
            onclick="deleteNews(${item.id})"
          >
          ⨯
          </span>
           <h3> ID: ${item.id} | ${item.fullName} </h3>
            <h5 class="text-xs text-gray-600"> ${item.date} </h5>
            <p class="text-xs"> ${item.content} </p>
        </div>
    `;

    displayEl.appendChild(newsCardDiv);
}

document
    .getElementById('news-filter');

