document.write("hello world"+"<br/>");
//alert("do you want to continue");


function sayHello(name, age) {
    document.write( name + " is " + age + " years old.");
}

sayHello("John", 20)

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
   // document.write("k"+"<br/>");
    //creating a new paragraph
    var p = document.createElement("p");
    var node = document.createTextNode("Some new text");
    //adding the text to the paragraph
    p.appendChild(node);

    var div = document.getElementById("demo");
    //adding the paragraph to the div
    div.appendChild(p);
};


//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var pos = 0; 
   //our box element
   var box = document.getElementById('box');
   var t = setInterval(move, 10);
 
   function move() {
       if(pos >= 150) {
           clearInterval(t);
       }
       else {
           pos += 1;
           box.style.left = pos+'px';
       }
   }
};



var images = [
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}


function validate() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    if(n1.value != '' && n2.value != '') {
        if(n1.value == n2.value) {
            return true;
        }
    }
    console.log("The values should be equal and not blank");
    return false;
}


console.log("Hello world!")



//this Shit right here is for ES6 Promises
function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
      if (work === "")
        reject(Error("Nothing"));
      setTimeout(function() {
        resolve(work);
      }, 1000);
    });
  }
  
  asyncFunc("Work 1") // Task 1
  .then(function(result) {
    console.log(result);
    return asyncFunc("Work 2"); // Task 2
  }, function(error) {
    console.log(error);
  })
  .then(function(result) {
    console.log(result);
  }, function(error) {
    console.log(error);
  });
  console.log("End");