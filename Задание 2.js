const jsonString = `{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}`
const data = JSON.parse(jsonString);
// Всё сделано верно, но реализация может быть гораздо проще :) JSON.parse сразу преобразует JSON-строку в валидный JS-объект.

// const list = []

/*console.log(data.list[0].name)*/

// data.list.forEach(person => {
//     const name = person.name;
//     const age = person.age;
//     const prof = person.prof;
//     list.push({
//         name: name,
//         age: age,
//         prof: prof
//     })
// })

// const result = {list: list}

console.log(data)


