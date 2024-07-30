//!Properties & Method 
console.log("====Properties & Method====")

//! Get ClassList 
const el = document.querySelector('#heading')
console.log(el)

//! Get classList By classList Function
console.log("====Get classList By classList Function====")
el.classList

//! Get className by className Function
console.log("====Get className by className Function====")
el.className

//! Get id By Id Function
console.log("====Get id By Id Function====")
el.id

//! Get innerHTML by innerHTML Function
console.log("====Get innerHTML by innerHTML Function====")
el.innerHTML

//! Add EvenLlister Method
console.log("====Add EvenLister Method====")
const button = document.querySelector('button')
console.log(button)

//! EventLister Method
button.addEventListener('click', () => {
    alert("you are clicked on button")
})

//! HasAttribute Type
console.log("====HasAttribute Type====")
button.hasAttribute('type')
