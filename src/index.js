document.querySelector("form").addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault()
  const input = document.getElementById('new-task-description').value
  console.log(input)
  const list = document.querySelector('ul')
  const item = document.createElement('li')
  item.textContent = input
  list.append(item)
}