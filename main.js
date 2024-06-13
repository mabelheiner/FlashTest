import './style.css'

async function getTerms() {
  try{
  const response = await fetch('https://flashcards-w643.onrender.com/flashcards/')
  console.log("hello")
  if (response.ok){
    const data = await response.json()
    const terms = JSON.stringify(data)
    const list = JSON.parse(terms)
    console.log('List', list)
    console.log('Item', list[0])
    list.map((item) =>{
      document.querySelector('#app').innerHTML +=
        `<li>${item.term}</li>
        <li>${item.definition}</li>`
    })
  }}
  catch (error) {
    document.querySelector('#app').innerHTML = 
    `<div>${error.message}</div>`
  }
}

getTerms()
