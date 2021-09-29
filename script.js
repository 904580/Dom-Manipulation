//alert("Hello")
// var result = confirm("Please agree")
// if (result) {
//     console.log("Ok was pressed")
// } else {
//     console.log("cancel was pressed")
// }

//document object
//console.log(document.body)
//console.log(document.getElementById("list"))

var result = document.getElementsByClassName("myList")
for (var i = 0; i < result.length; i++) {
    console.log(result[i].innerHTML)
}

result = document.getElementsByName("para")
console.log(result)

console.clear()
result = document.getElementsByTagName("li")
console.log(result)
console.clear()
result = document.getElementById("div1").getElementsByClassName("myList")
console.log(result)


//Traversing the elements
console.clear()
var para = document.getElementById("para1").nodeType
console.log(para.previousElementSibling)

//Node type for element ---1
//Node Type for attributes  ---2
//Node type for text node --- 3
//Node type for comment node -- 8

//CreateElement

var div = document.createElement('div')
div.id = "div2"
div.className = "myList"
var textNode = document.createTextNode("Example of text node")

div.appendChild(textNode)
    //document.body.appendChild(div)

//insertBefore
var div1 = document.getElementById("div1")
document.body.insertBefore(div, div1)

//New Li Item
var ul = document.getElementById("ul1")
var li = document.createElement('li')
li.textContent = "About Us"

//ul.insertBefore(li, ul.firstElementChild)

// //No direct insertafter
// //console.log(ul.firstElementChild.nextElementSibling)
// ul.insertBefore(li, ul.firstElementChild.nextElementSibling.nextElementSibling)

// //Create a new ul and add Lis
// var newUL = document.createElement('ul')
// newUL.id = "ul2"

// var li = document.createElement('li')
// li.textContent = "Banana"
// newUL.appendChild(li)

// li = document.createElement('li')
// li.textContent = "Orange"
// newUL.appendChild(li)

// document.body.insertBefore(newUL, ul)

// //append
// //It  can append String
// //It can append several nodes and strings together

// var newDiv = document.createElement("div")
// var para = document.createElement("p")

// para.innerHTML = "<span>Hello</span>"

// para.textContent = "Remove span!!"

// div1.append("New Para", para)
// document.body.appendChild(newDiv)
// console.log(newDiv.textContent)

// var script = document.createElement('script')
// script.src = ""
// document.body.appendChild(script)

// //textContent vs innerText vs innerHTML
// console.clear()
// console.log(div1.textContent)

// document.getElementById('para1').innerHTML += "Not so lovely weather"

// //outerhtml

// //document fragement

// var frag = new DocumentFragment()
// frag.appendChild(document.createElement('div'))
// frag.appendChild(document.createTextNode("Hello"))

// console.clear()
// console.log(frag.childNodes)
// document.body.appendChild(frag)
// console.log(frag.childNodes)

// ul.insertAdjacentHTML("afterbegin", "<li></li>")

var exLi = document.getElementById("ul1")
    //ul.replaceChild(li, exLi)

//clonenode

var newLi = exLi.cloneNode(true)
newLi.id = "ul3"
console.log(newLi)
document.body.appendChild(newLi)

ul.removeChild(li)