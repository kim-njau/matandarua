function showInquiryForm(productName) {
    // Retrieve the price of the product based on its name
    let price;
    switch (productName) {
        case 'Product 1':
            price = 'KES 1000'; // Example price for Product 1
            break;
        case 'Product 2':
            price = 'KES 1500'; // Example price for Product 2
            break;
        // Add cases for other products with their respective prices
        default:
            price = 'Price not available';
    }

    // Set the product name and price in the hidden input fields of the form
    document.getElementById('product').value = productName;
    document.getElementById('price').value = price;

    // Display the inquiry modal
    document.getElementById('inquiryModal').style.display = 'block';
}

// Function to close the inquiry form modal
function closeInquiryForm() {
    document.getElementById('inquiryModal').style.display = 'none';
}

// Function to submit the inquiry form
function submitquery() {
    // Here you can add the logic to handle form submission, such as sending data to a server
    // For demonstration purposes, you can just log the form data to the console
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const product = document.getElementById('product').value;
    const price = document.getElementById('price').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Product:', product);
    console.log('Price:', price);

    // Clear the form fields after submission (optional)
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Close the inquiry form modal
    closeInquiryForm();
}