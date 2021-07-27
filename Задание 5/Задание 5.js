
const btnNode = document.querySelector('.j-btn-request');
const resultNode = document.querySelector('.j-result');

btnNode.addEventListener('click', () => {
    const firstValue = document.getElementById("inp1").value
    const secondValue = document.getElementById("inp2").value
    if ((firstValue > 10 || firstValue < 1 || isNaN(firstValue)) &&
        (secondValue < 1 || secondValue > 10 || isNaN(secondValue))) {
        resultNode.innerHTML = `
      <div>Номер страницы и лимит вне диапазона от 1 до 10</div>
    `;
    } else if (firstValue > 10 || firstValue < 1 || isNaN(firstValue)) {
        resultNode.innerHTML = `
      <div>Номер страницы вне диапазона от 1 до 10</div>
    `;
    } else if (secondValue > 10 || secondValue < 1 || isNaN(secondValue)) {
        resultNode.innerHTML = `
      <div>Лимит вне диапазона от 1 до 10</div>
    `;
    } else {
        fetch(` https://picsum.photos/v2/list?page=${firstValue}&limit=${secondValue}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                localStorage.setItem('items', JSON.stringify(data))
                let cards = '';
                data.forEach(item => {
                    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
      </div>
    `;
                    cards = cards + cardBlock;
                });
                resultNode.innerHTML = cards;
            })
            .catch(() => {
                console.log('error')
            });
    }
})

const state = localStorage.getItem('items')
const myState = JSON.parse(state)

window.onload = function () {
if(state) {
    let cards = '';
    myState.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
      </div>
    `;
        cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards;
}
}








