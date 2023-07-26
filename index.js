const Api_key = "api key";
//=============//
const inputtext = document.querySelector('#inputbox')
const message = document.querySelector('#output_message')
const side_bar = document.querySelector('#side_bar')
const side_bar_div = document.querySelector('#side_bar_div')
const loading = document.querySelector('.Loading')

//=============//
const submitbutton = document.querySelector('#button')
submitbutton.addEventListener('click', () => {
    console.log('check 1');
    if (inputtext.value == '') {
        alert('Please provide some text')
    } else {
        FetchdataApi(inputtext.value);
        createNewElement();
        inputtext.value = ''
    }

}
)
//=============//
async function FetchdataApi(data) {
    message.textContent = ''

    loading.textContent = 'Loading....'
    console.log('check 2', data)
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${Api_key}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{ "role": "user", "content": `${data}` }]
        })
    })
    const d = await response.json()
    message.textContent = d.choices[0].message.content
    loading.textContent = ''
    console.log('OpenAI API', d.choices[0].message.content)
}
//===========================
function createNewElement() {
    // Create a new element
    var newElement = document.createElement("p");

    // Set some properties for the new element
    newElement.textContent = inputtext.value + '?';
    newElement.style.color = "white";
    newElement.style.border = 'solid';
    newElement.style.borderWidth = '1px';
    newElement.style.borderColor = "white";
    newElement.style.backgroundColor = ' rgb(64, 61, 61)'

    // Get the container element where you want to add the new element
    var container = document.getElementById("side_bar");

    // Append the new element to the container
    container.appendChild(newElement);

}
//=================//
//=================//
function CreateNewdiv() {
    inputtext.textContent = ''
    message.textContent = ''
    inputtext.value = ''
}
//=============//
side_bar_div.addEventListener('click', () => CreateNewdiv())