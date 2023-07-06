document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });

  function addToCart(event) {
    const product = event.target.parentNode;
    const productName = product.querySelector('h2').textContent;

    const cartItem = document.createElement('li');
    cartItem.textContent = productName;

    const cartItems = document.getElementById('cart-items');
    cartItems.appendChild(cartItem);
  }
});
