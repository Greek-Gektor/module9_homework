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
const list = []

/*console.log(data.list[0].name)*/

data.list.forEach(person => {
    const name = person.name;
    const age = person.age;
    const prof = person.prof;
    list.push({
        name: name,
        age: age,
        prof: prof
    })
})

const result = {list: list}

console.log(result)


