

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function () {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');


function displayResult(apiData) {
    resultNode.innerHTML = '';
    apiData.forEach(item => {
        resultNode.innerHTML += `
        <div class="card">
            <img
            src="${item.download_url}"
            class="card-image"
            />
            <p>${item.author}</p>
        </div>`;
    })
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
    const value = document.querySelector('input').value;
    if (value > 10 || value < 0) {
        alert('Число вне диапазона от 1 до 10')
        console.log('Число вне диапазона от 1 до 10')
    } else {
        useRequest(`https://picsum.photos/v2/list/?limit=${value}`, displayResult)
    }
})

// Не совсем верно реализована поставленная задача. Согласно условию нужно вывести на экран все картинки, не только одну последнюю. Выше исправила