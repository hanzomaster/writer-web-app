const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const params = new URLSearchParams(window.location.search)

let noteStorage = []

const title = $('.title')

$('textarea').value = 'Hello World'

$('button[name="submit"]').addEventListener('click', () => {
  // check if title is empty
  if (title.value === '') {
    // show a popup to user
    alert('Title is empty')
    return
  }
  console.log(title.value)
  console.log(tinymce.activeEditor.getContent())

  // window.history.back()
})
