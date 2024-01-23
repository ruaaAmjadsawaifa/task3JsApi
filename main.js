async function getProduct() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const product = data.products;
  console.log(product);

  const result = product
    .map(function (ele) {
      return ` 
        <img src= ${ele.images[0]} /> 
        <h2>${ele.title}</h2>
        <span>${ele.brand}</span>
        <span>${ele.price} $ </span>`;
    })
    .join("");

  document.querySelector(".product").innerHTML = result;
}
getProduct();
