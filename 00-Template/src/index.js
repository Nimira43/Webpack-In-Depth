import _ from 'lodash'

function buttonClicked() {
  const el = document.getElementById('header')
  el.innerHTML = 'Code has been updated'

  const listItems = ['apples', 'bread', 'coffee']
  const ul = document.getElementById('shoppingList')

  _.forEach(listItems, function(item) {
    const tempEl = document.createElement('li')
    tempEl.innerHTML = item
    ul.appendChild(tempEl)
  })
}