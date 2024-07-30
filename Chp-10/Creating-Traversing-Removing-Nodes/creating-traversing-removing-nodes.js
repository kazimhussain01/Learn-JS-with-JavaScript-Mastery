//! Creating-Traversing-Removing-Nodes
console.log("====Creating-Traversing-Removing-Nodes====")

//! Creating Element
document.createElement('h1')

//! Another way
const heading = document.createElement('h1')
console.log(heading)

//! innerText
heading.innerText = 'Hello, world!'
 
//! Get All Subject 
const subject = subject.querySelector('.subject')
console.log(subject)

//! Get First Element
subject.firstElementChild

//! Get Last Element
subject.lastElementChild

//! Get Parent Element Child
subject.parentElement

//! Get previousElementSibling
subject.previousElementSibling

//! Get nextElementSibling
subject.nextElementSibling

//! Remove Subject
subject.remove()