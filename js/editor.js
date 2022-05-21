const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const params = new URLSearchParams(window.location.search)
console.log(params.get('edit'))
let noteStorage = []

const title = $('.title')

$('button[name="submit"]').addEventListener('click', () => {
  if (title.value === '') {
    alert('Please enter a title')
    return
  }

  const d = new Date()
  const date = `${d.toLocaleDateString('vi-VI')} ${d.toLocaleTimeString(
    'vi-VI'
  )}`

  const note = {
    id: (Math.random() + 1).toString(36).substring(7), // Generate a random string id
    title: title.value,
    content: tinymce.activeEditor.getContent(),
    lastUpdate: date,
    bookmark: false,
  }

  const data = JSON.parse(sessionStorage.getItem('note')) || []

  data.push(note)
  sessionStorage.setItem('note', JSON.stringify(data))
  window.history.back()
})
