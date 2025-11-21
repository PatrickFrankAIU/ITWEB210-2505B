
// let shampooButton = document.getElementById('shampoo-button')
// let shampooPrice = document.getElementById('shampoo-price')
// let shampooValue = document.getElementById('shampoo-total-price')
// let shampooTotal = document.getElementById('shampoo-total')
// let shampooSlider = document.getElementById('Shampoo')


// shampooSlider.addEventListener('input', function() {
//     let totalPrice = parseFloat(shampooPrice.textContent.replace('$', ''));
//     shampooTotal.textContent = this.value;
//     shampooValue.textContent = `$${(this.value * totalPrice).toFixed(2)}`;
// })

document.getElementById('table-body').addEventListener('input', function(event) {
    if (event.target.matches('.value-slider')) {
        const sliderID = event.target.id;
        const sliderValue = event.target.value;
        let displayTotal;
        let displayPrice;
        let displayTotalPrice;

        // Derive element IDs programmatically using a naming convention
        const baseID = sliderID.toLowerCase().replace(/-/g, '-');
        displayTotal = `${baseID}-total`;
        displayPrice = `${baseID}-price`;
        displayTotalPrice = `${baseID}-total-price`;

        if (displayTotal) {
            let totalPrice = document.getElementById(displayPrice).textContent.replace('$', '');
            let total = sliderValue
            document.getElementById(displayTotal).textContent = sliderValue
            let showTotal = (total * totalPrice).toFixed(2)
            let commaTotal = showTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById(displayTotalPrice).textContent = `$${commaTotal}`;
        }
    }
})


// const formattedDefault = number.toLocaleString();
