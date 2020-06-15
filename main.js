window.onload = function() {
    getMultiple();
}
// grabbing persons information from api, returning data 
let arrayOfPersons = [];
const getPerson = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => user.results.map(person => {
        arrayOfPersons.push(person)
        console.log(person)
        const list = document.getElementById("allUsers")
        // creating li with persons image, first/last name
        const pic = document.createElement("img")
        pic.setAttribute('src', `${person.picture.thumbnail}`)
        const li = document.createElement("li")
        const text = document.createTextNode(`${person.name.first}`)
        const button = document.createElement('button')
        // buttonInfo ADDING ${person.}
        // adding phone email dob and line break
        const Infobutton = document.createTextNode('More Info') 
        const liInfo = document.createElement('li')
        const textInfo = document.createTextNode(`${person.phone}, ${person.email}, ${person.dob}`)
        const lineBreak = document.createElement('br')
        li.appendChild(pic)
        li.appendChild(text)
        list.appendChild(li)
        list.appendChild(button)
        button.appendChild(Infobutton)
        liInfo.appendChild(textInfo)
        button.addEventListener("click", function(){
            const textInfo = document.createTextNode(`${person.phone}, ${person.email}, ${person.dob.date}, ${person.dob.age}`)
            li.appendChild(lineBreak)
            li.appendChild(textInfo)})
    }));
}



const getMultiple = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(user => user.results.map(person => {
        arrayOfPersons.push(person)
        console.log(person)
        const list = document.getElementById("allUsers")
        const pic = document.createElement("img")
        pic.setAttribute('src', `${person.picture.thumbnail}`)
        const li = document.createElement("li")
        const text = document.createTextNode(`${person.name.first}`)
        const button = document.createElement('button')
        const Infobutton = document.createTextNode('More Info')
        const liInfo = document.createElement('li')
        const textInfo = document.createTextNode(`${person.phone}, ${person.email}, ${person.dob}`)
        const lineBreak = document.createElement('br')
        li.appendChild(pic)
        li.appendChild(lineBreak)
        li.appendChild(text)
        list.appendChild(li)
        list.appendChild(button)
        button.appendChild(Infobutton)
        liInfo.appendChild(textInfo)
        button.addEventListener("click", function(){
           
            const textInfo = document.createTextNode(`${person.phone}, ${person.email}, ${person.dob.date}, ${person.dob.age}`)

            li.appendChild(lineBreak)
            li.appendChild(textInfo)})
    }));  

}

