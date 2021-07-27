// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');
// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');

btnNode.addEventListener('click', () => {
    const firstValue = document.getElementById("inp1").value
    const secondValue = document.getElementById("inp2").value
    if (firstValue >= 100 && firstValue <= 300 && secondValue >= 100 &&
        secondValue <= 300 && !isNaN(firstValue) && !isNaN(secondValue)) {
        fetch(`https://picsum.photos/${firstValue}/${secondValue}`)
            .then((response) => {
                console.log('response', response)
                resultNode.innerHTML = `
      <div class="card">
        <img 
          src=${response.url}
          class="card-image"
        />
      </div>
    `;
            })
            .catch(() => {
                console.log('error')
            });
    } else {
        alert("Одно из чисел вне диапазона от 100 до 300")
        console.log("Одно из чисел вне диапазона от 100 до 300")
    }
})


