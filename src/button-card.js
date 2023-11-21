function increment() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
    validateInput();
}

function decrement() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
    validateInput();
}

function validateInput() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);

    // Garante que o valor seja no mínimo 1
    if (currentValue < 1 || isNaN(currentValue)) {
        quantityInput.value = 1;
    }
}