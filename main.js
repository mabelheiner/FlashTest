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
        `<p>Term: ${item.term}</p>
        <p>Definition: ${item.definition}</p>`
    })
  }}
  catch (error) {
    document.querySelector('#app').innerHTML = 
    `<div>${error.message}</div>`
  }
}

getTerms()
