//HTML код

/*<input type="text" class="input area">

    <button class="btn j-btn-request">Запрашиваем данные</button>

<div class="result j-result">Здесь будет результат запроса</div>*/

//CSS код

/*.result {
    display: flex;
    flex-wrap: wrap;
    width: 500px;
}

.card {
    width: 200px;
    margin: 20px;
}

.card-image {
    display: block;
    width: 200px;
    height: 150px;
}

.btn {
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    box-shadow: none;
    cursor: pointer;

    margin: 5px 10px;
    padding: 10px 15px;
    border-radius: 1px;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: white;
    background: #315efb;
    transition: 0.3s;
}

.btn:hover {
    box-shadow: 0px 2px 8px 2px rgba(141,150,178,.3);
    transform: scale(1.05);
}*/

/**
 * Функция-обертка над XMLHttpRequest, осуществляющая запрос
 * url - урл, по которому будет осуществляться запрос
 * callback - функция, которая вызовется при успешном выполнении
 * и первым параметром получит объект-результат запроса
 */
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

// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');

/**
 * Функция обработки полученного результата
 * apiData - объект с результатом запроса
 */
function displayResult(apiData, number) {
    number = document.querySelector('input').value;
    const cardBlock = `
      <div class="card">
        <img
          src="${apiData[number - 1].download_url}"
          class="card-image"
        />
        <p>${apiData[number - 1].author}</p>
      </div>
    `;
    resultNode.innerHTML = cardBlock;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
    const value = document.querySelector('input').value;
    if (value > 10 || value < 0) {
        console.log('Число вне диапазона от 1 до 10')
    } else {
        useRequest(`https://picsum.photos/v2/list/?limit=${value}`, displayResult)
    }
})
