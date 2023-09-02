
const form = document.querySelector(".js-search-form")




// fetch(url, options)
// .then(response=>response.json())
// .then(console.log())



function getArticles(query){
    const url =`https://newsapi.org/v2/everything?q=${query}`
const options = {
    headers:{
        'X-Api-Key': '95c32c40fc4841839d7f78e8fd498720'
    }
}

    return fetch(url, options)
    .then(response => response.json())
    
}

getArticles(url).then(res => console.log(res))

form.addEventListener('submit', onSearchQuery)

function onSearchQuery(event){
  event.preventDefault()

  const query = event.currentTarget.elements.query.input
  getArticles(query).then(articles =>{
   return  articles.articles
  }).then(article => {
    console.log(articles[0].source.name)
  })
}




