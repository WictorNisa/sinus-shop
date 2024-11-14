// Code here!

// Global variables
const articleOne = document.querySelector(".art-1");
const articleTwo = document.querySelector(".art-2");
const articleThree = document.querySelector(".art-3");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
const allPTags = document.querySelectorAll("p");
const allButtons = document.querySelectorAll("button");
const header = document.querySelector("header");
const main = document.querySelector("main");

const ashText = articleOne.children[2];
const homeText = nav.children[0];
const navContent = ` <a href="#">Start</a>
<a href="#">Products</a>
<a href="#">Mail us</a>
<img src="img/icon-bag.svg" alt="cart">
`;

const adressContent = `
<h3>Find us here</h3>
<p>Street Streetsson<br>
Streetway 8 <br>
22219, streetland</p>
`;
nav.innerHTML = navContent;
articleTwo.children[3].innerHTML = `<p>This is a hoodie that is red and is very fire yes</p>`;
const articleOneButton = articleOne.children[4];
articleOneButton.style.backgroundColor = "black";
articleOneButton.style.color = "green";

ashText.innerText = "Potato";
articleThree.children[0].style.backgroundColor = "green";
footer.children[0].children[1].innerHTML = adressContent;

allPTags.forEach((p) => {
  p.style.color = "blue";
});

allButtons.forEach((btn) => {
  btn.innerText = "Add to cart";
});

nav.firstElementChild.classList.add("active");
header.firstElementChild.classList.remove("logo");

const newMenuTag = `  <a href="/newtag">New tag</a>`;
const newProduct = `
<article class="art-4">
            <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
            <h2>Sinus Hoodie</h2>
            <h3>Forrest</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
            <button>Add to cart</button>
        </article>
`;

nav.insertAdjacentHTML("afterbegin", newMenuTag);
main.insertAdjacentHTML("beforeend", newProduct);

header.firstElementChild.addEventListener("click", () => {
  console.log("Found you!");
});

for (const article of main.children) {
  const h3 = article.querySelector("h3");

  
  article.addEventListener("click", (e) => {
    console.log(`Hi, Im article ${h3.textContent}`);
  });
}
