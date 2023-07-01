// alert("Hello!");

// let paragraph = document.querySelector("p");
// let classes = paragraph.className;
// console.log(classes);
// classes = "para1";
// console.log(classes);
// paragraph.className = "para2";
// console.log(classes);

// let classes = paragraph.classList;
// console.log(classes);

// for (const elem of classes) {
//     console.log(elem);
// }

// paragraph.classList.add("paragraph1");
// paragraph.classList.remove("p1");

// paragraph.classList.toggle("paragraph1");

// paragraph.classList.contains("p1");
// console.log(paragraph.classList.contains("p2"));

// let div = document.createElement("div");
// div.classList.add("block1");
// div.innerText = "Hello!";

// // document.body.append(div);
// // document.body.prepend(div);

// let list = document.querySelector("ul");
// list.before(div);
// list.after(div);
// list.append(div);
// list.prepend(div);

// let div = document.querySelector(".block1");
// div.remove();

// let link = document.createElement("a");
// link.innerText = "Google";
// link.setAttribute("href", "https://www.google.com/");
// document.body.append(link);

// let ul = document.createElement("ul");
// document.body.append(ul);

// for (let i = 0; i < 10; i++) {
// let data=prompt("!!!!!!!!!!!!!!!");

// let li = document.createElement("li");
// li.innerText = data;
// ul.append(li);
// }

// function clear(elem) {
//     let elements = document.querySelectorAll(elem);
//     for (const list of elements) {
//         list.remove();

//     }
// }

// // clear("li");

// function First() {
//     console.log(1);
// }
// function Second() {
//     console.log(2);
// }

// First();
// Second();

function myFunc(callback) {
    let a = [4, 5, 6];
    let elem = document.querySelector(".l1");
    callback(elem, a);
}

function out(elem, arr){
    elem.innerText = arr.join(",");
}

myFunc(out);
