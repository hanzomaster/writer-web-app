const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const params = new URLSearchParams(window.location.search)

let noteStorage = JSON.parse(sessionStorage.getItem('notes')) || []
const title = $('.title')
const isEdit = params.get('edit')
console.log(isEdit)

if (isEdit === 'true') {
  const noteEdit = noteStorage.find(item => item.id === params.get('id'))
  title.value = noteEdit.title
  $('textarea').value = noteEdit.content
  $('button[name="submit"]').textContent = 'Update'
}

$('button[name="submit"]').addEventListener('click', () => {
  if (title.value === '') {
    alert('Please enter a title')
    return
  }
  let note
  if (isEdit === 'true') {
    noteStorage.forEach(item => {
      if (item.id === params.get('id')) {
        item.title = title.value
        item.content = tinymce.activeEditor.getContent()
        item.lastUpdate = new Date()
      }
      note = { ...item }
    })
  } else {
    const d = new Date()
    note = {
      id: (Math.random() + 1).toString(36).substring(7), // Generate a random string id
      title: title.value,
      content: tinymce.activeEditor.getContent(),
      lastUpdate: d,
      bookmark: false,
    }
    noteStorage.push(note)
  }

  sessionStorage.setItem('notes', JSON.stringify(noteStorage))
  window.history.back()
})
