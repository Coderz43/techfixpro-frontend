fetch("/api/products")
  .then(res => res.json())
  .then(products => {
    const div = document.getElementById("products");
    products.forEach(p => {
      div.innerHTML += `
        <div class="card">
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
          <button onclick="addToCart(${p.id})" data-i18n="addToCart"></button>
        </div>
      `;
    });
  });

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
