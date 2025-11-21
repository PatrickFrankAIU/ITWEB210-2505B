
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

        if (sliderID === 'Shampoo') {
            displayTotal = 'shampoo-total'
            displayPrice = 'shampoo-price'
            displayTotalPrice = 'shampoo-total-price'
        } else if (sliderID === 'Fries') {
            displayTotal = 'fries-total'
            displayPrice = 'fries-price'
            displayTotalPrice = 'fries-total-price'
        } else if (sliderID === 'Cat') {
            displayTotal = 'cat-total'
            displayPrice = 'cat-price'
            displayTotalPrice = 'cat-total-price'
        } else if (sliderID === 'Hot-Wheels') {
            displayTotal = 'hot-wheels-total'
            displayPrice = 'hot-wheels-price'
            displayTotalPrice = 'hot-wheels-total-price'
        } else if (sliderID === 'Clowns') {
            displayTotal = 'clowns-total'
            displayPrice = 'clowns-price'
            displayTotalPrice = 'clowns-total-price'
        } else if (sliderID === 'Water') {
            displayTotal = 'water-total'
            displayPrice = 'water-price'
            displayTotalPrice = 'water-total-price'
        }

        if (displayTotal) {
            let totalPrice = document.getElementById(displayPrice).textContent.replace('$', '');
            let total = document.getElementById(displayTotal).textContent
            total = sliderValue
            document.getElementById(displayTotal).textContent = sliderValue
            let showTotal = (total * totalPrice).toFixed(2)
            let commaTotal = showTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById(displayTotalPrice).textContent = `$${commaTotal}`;
        }
    }
})


// const formattedDefault = number.toLocaleString();
