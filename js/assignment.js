const addproductname = (name) => {
  let productList = document.getElementById("productol");
  let list = document.createElement("li");
  list.innerHTML = `${name}`;
  productList.appendChild(list);
};

// document.getElementById('enable-done').addEventListener('keyup',function(event){
//     const text = event.target.value;
//     console.log(text)

//     if(text === 'SELL200'){
//         const text = text-(text/100)*20;
//         document.getElementById('tPrice').innerText = text
//     }
//     else{

//     }

// })
let candis = true;
const coupon = () => {
  let text = document.getElementById("enable-done").value;
  if (text === "SELL200" && candis === true) {
    let price = document.getElementById("tprice").innerText;
    const distext = price - (price / 100) * 20;
    document.getElementById("discountt").innerHTML = (price - distext).toFixed(2);
    document.getElementById("totalt").innerText = (distext).toFixed(2);
    candis = false;
  }
};

const btnEnable = (val) => {
  if (val > 0) {
    document.getElementById("makepur").removeAttribute("disabled");
  } else {
    document.getElementById("makepur").setAttribute("disabled", true);
  }

  if (val >= 200) {
    document.getElementById("btn-enable").removeAttribute("disabled");
  } else {
    document.getElementById("btn-enable").setAttribute("disabled", true);
  }
};

const purchase = () => {
    console.log("hi")
}
document.getElementById("prod1-click").addEventListener("click", () => {
  addproductname("K. Accessories");
  let total = document.getElementById("tprice").innerText;
  let tprice = (39 + +total).toFixed(2);
  console.log(tprice);
  btnEnable(tprice);
  document.getElementById("tprice").innerHTML = tprice;
});
document.getElementById("prod2-click").addEventListener("click", () => {
  addproductname("K. Accessories");
  let total = document.getElementById("tprice").innerText;
  let tprice = (25 + +total).toFixed(2);
  console.log(tprice);
  btnEnable(tprice);
  document.getElementById("tprice").innerHTML = tprice;
});
document.getElementById("prod3-click").addEventListener("click", () => {
  addproductname("Home cooker");
  let total = document.getElementById("tprice").innerText;
  let tprice = (39 + +total).toFixed(2);
  console.log(tprice);
  btnEnable(tprice);
  document.getElementById("tprice").innerHTML = tprice;
});
document.getElementById("prod4-click").addEventListener("click", () => {
  addproductname("Sports back cap");
  let total = document.getElementById("tprice").innerText;
  let tprice = (49 + +total).toFixed(2);
  console.log(tprice);
  btnEnable(tprice);
  document.getElementById("tprice").innerHTML = tprice;
});
document.getElementById("prod5-click").addEventListener("click", () => {
  addproductname("Full Jersey Set");
  let total = document.getElementById("tprice").innerText;
  let tprice = (69 + +total).toFixed(2);
  console.log(tprice);
  btnEnable(tprice);
  document.getElementById("tprice").innerHTML = tprice;
});
document.getElementById("prod6-click").addEventListener("click", () => {
  addproductname("Sports cates");
  let total = document.getElementById("tprice").innerText;
  let tprice = (159 + +total).toFixed(2);
  console.log(tprice);
  btnEnable(tprice);
  document.getElementById("tprice").innerHTML = tprice;
});
