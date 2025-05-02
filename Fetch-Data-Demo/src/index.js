const greet = (name) => `Hello, ${name}!`

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return greet(this.name);
  }
}

const person = {
  name: 'Ayrton',
  address: {
    city: 'Sao Paulo'
  }
}

const city = person.address?.city ?? 'Unknown City'
console.log(`City: ${city}`)

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    
    const data = await response.json()
    
    document.getElementById('data-output').innerText = JSON.stringify(data, null, 2)
  } catch (error) {
    document.getElementById('data-output').innerText = 'Error fetching data'
  }
}

document.getElementById('fetch-data').addEventListener('click', fetchData)

const ayrton = new Person('Ayrton')
console.log(ayrton.greet())
