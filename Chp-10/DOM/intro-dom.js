//! DOM
console.log('====DOM====')

//! First Example 
//! Get DOM with id
console.log("====Get Element by Id====")
const el = document.getElementsByTagName('heading')
console.log(el)

//! Get Element by ClassName
console.log("====Get Element by ClassName====")
const classname = document.getElementsByClassName('test')
console.log(classname)

//! Get Element by TagName
console.log("====Get Element by TagName====")
const tagName = document.getElementsByTagName('h2')
console.log(tagName)

//! Get Element by QureySelector by ClassName
console.log("====Get Element by QureySelector by ClassName====")
const QureySelector =  document.querySelectorAll('.test')
console.log(QureySelector)

//! Get Element by QureySelector by TagName
console.log("====Get Element by QureySelector by TagName====")
const querySelectorAllbyTagName = document.querySelectorAll('h2')
console.log(querySelectorAllbyTagName)

//! Get Element by QureySelector by Id
console.log("====Get Element by QureySelector by Id====")
const querySelectorbyID = document.querySelector("#heading")
console.log(querySelectorbyID)