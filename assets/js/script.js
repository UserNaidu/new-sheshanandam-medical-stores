document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  if (productList) {
    fetch("assets/data/products.json")
      .then(response => response.json())
      .then(products => {
        // Take first 5 products
        productList.innerHTML = products.slice(0, 5).map(product => `
          <div class="product-card">
            
            <h3>${product.name}</h3>
          </div>
        `).join("");
      })
      .catch(err => {
        productList.innerHTML = "<p>⚠️ Unable to load products.</p>";
        console.error(err);
      });
  }
});
