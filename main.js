import './style.css'

async function getTerms() {
  try{
  const response = await fetch('https:flashcards-w643.onrender.com/flashcards')
  if (response.ok){
    const data = await response.json()
    
    if (Array.isArray(data)){
      data.forEach((item) => {
        document.querySelector('#app').innerHTML +=
        `<li>${item.term} - ${item.definition}</li>`
      })
    } else {
      document.querySelector('#app').innerHTML += 
        `<p>Data returned not an array</p>`
    }
    
  }}
  catch (error) {
    document.querySelector('#app').innerHTML = 
    `<div>${error.message}</div>`
  }
}

getTerms()
