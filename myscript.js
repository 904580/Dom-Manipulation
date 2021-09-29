//1- getelementByiD
//const heading = document.getElementById('heading');
//console.log(heading);



//2-Document.getelementsbyTagName

//const heading = document.getElementsByTagName('h1');
//console.log(heading[0]);


//3- document.getelementsbyclassname

//const heading = document.getElementsByClassName('heading');
//console.log(heading[1]);

//4- querySelector

//const heading = document.querySelector('.heading');
//console.log(heading);


//const heading = document.querySelector('#heading');
//console.log(heading);

//5- queryselectorall

//const heading = document.querySelectorAll('heading');
//console.log(heading);


//traverse element
/// 1-parent NOde

//const heading  = document.querySelector('.heading');
//const parent = heading.parentNode;
//console.log(parent);

//2-childsnode
 
//const parent = document.querySelector('.parent');
//console.log (parent.childNodes);

 //3-next elementsiblings

//const heading = document.querySelector('.heading');
//console.log(heading.nextElementSibling);

//4- previouselementsibling

//const subHeading = document.querySelector('h3');
//console.log(subHeading.previousElementSibling);
    
//3- manipulating

//const heading = document.querySelector('.heading');
//heading.innerHTML = 'web dev is osmm'; // insert the element in the tag
//heading.style.color = 'green';// change the color
//heading.style.fontSize = '100px';// change the font style
//heading.classList.add('title');// add the any text in heading tag
//heading.classList.remove('heading');// remove the text 

// 1- createElement

//const heading = document.createElement('h2');// create tyhe node (h2) tag
//heading.innerHTML = 'js is a oops!';//pass the text in the h2 tag
//const parent = document.querySelector('.parent');//get the parent class
//parent.appendChild(heading);//apend the class in the div ..mtlb hmne jo h2 tag cretae kiya hm usko div tag ke ander le aaye..
//console.log(heading);//show the heading data

//2- insertAdjacentElement
//types- 1-beforebegin
//2-afterbegin
//3- beforeend
//4-afterend

//const subHeading = document.createElement('h2');
//subHeading.innerHTML = 'Java script is a general purpose language';
//subHeading.insertAdjacentElement('beforebegin', subHeading);
//console.log(subHeading);






//4- DOM event

   
//const button = document.querySelector('#btn');
//const heading = document.querySelector('#heading');
////button.addEventListener('click',function(event){
    ////heading.style.color = 'red';
    ////heading.style.fontSize = '100px';
    ////console.log('button clicked','event');

////});

//project based on DOM manipulation

//const bulb = document.querySelector('#bulb');
//const bulbswitch = document.querySelector('#bulbswitch');
//bulbswitch.addEventListener('click', function(){
    //console.log(bulb.src);
    //if(bulb.src.match('off')){
        //bulb.src ='./bulbon.png';
        //bulbswitch.innerHTML='Turn off';
    //}else {
       // bulb.src ='./bulboff.png';
        //bulbswitch.innerHTML='Turn on';
   // }
    
//});

//2nd project based on DOM manipulation
const root = document.querySelector('#root');
const button = document.querySelector('button');

function createItem(item) {
    // Card
    const card = document.createElement('div');
    card.classList.add('card');

    // Photo
    const photo = document.createElement('img');
    photo.src = item.thumbnailUrl;

    // title
    const title = document.createElement('h4');
    title.innerHTML = item.title;
    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);
}

function displayImages(items) {
    items.forEach(function (item) {
        createItem(item);
    });
}

button.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((res) => res.json())
        .then((items) => {
            displayImages(items);
        });
});


