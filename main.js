//Task 1: Setup Basic HTML Structure for Product Page
//Done in HTML file



//Task 2: Fetch Products from the API Using Fetch and Promises

const productList = document.getElementById('productStore');

// Fetch data from the supplier's product API
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the response as JSON
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.fields.company} - $${product.fields.price} - ${product.fields.name} - ${product.fields.image}`;
            productList.appendChild(listItem);
        });
    })



//Task 3: Display Product Details Dynamically
//Was not able to get the images to show properly



//Task 4: Handle Errors Gracefully

    //Using Catch to handle errors
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    //When there is an error it succesfully says the error message. I have since fixed the error though, so it no longer says it