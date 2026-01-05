function getItems(){
  return Array.from(document.querySelectorAll('#list li'))
    .map(li => li.innerText);
}

function render(items){
  const list = document.getElementById('list');
  list.innerHTML = '';
  items.forEach(text=>{
    const li = document.createElement('li');
    li.innerText = text;
    list.appendChild(li);
  });
}

function sortAsc(){
  const items = getItems().sort();
  render(items);
}

function sortDesc(){
  const items = getItems().sort().reverse();
  render(items);
}
