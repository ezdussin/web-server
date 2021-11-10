const form = document.querySelector('form')
const search = document.querySelector('input')
const author = document.querySelector('#author')
const releaseYear = document.querySelector('#releaseYear')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    author.textContent = 'Loading...'
    releaseYear.textContent = ''

    fetch('/api/albuns').then((res) => {
        res.json().then((data) => {
            if(!data.albuns[search.value]){
                author.textContent = 'Album not found'
                releaseYear.textContent = ''
            } else{
                author.textContent = data.albuns[search.value].author
                releaseYear.textContent = data.albuns[search.value].releaseYear
            }
        })
    })
})
