localStorage.setItem('name', 'ramprasad')
localStorage.setItem('age', '20')


localStorage.removeItem('name')

let arr = ['hello', 'world', 'how are you']
localStorage.setItem('array', JSON.stringify(arr));
let test = localStorage.getItem('array')
console.log(JSON.parse(test))
console.log(typeof test)
console.log(test)
console.log(name);