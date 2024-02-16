# Shopping-cart-VanillaJS

Vanilla JavaScript shopping cart 

Design 
Initially, I decided to implement a simple design for my project. The navigation bar has a dark grey background colour and is placed at the top of the webpage. The logo, which is just text formatted neatly, was positioned in the left corner of the navigation bar, and the cart icon is positioned in the right corner of the navigation bar. Below the navigation bar are all the products in the inventory, along with the individual product name, description, quantity and price.  

Functionality 
I used JavaScript to create the functionality within the webpage. To display the products, I used an ES6 javaScript function called ‘forEach’ to iterate an array that contains many objects and each individual object includes the name, description, quantity and price of one product. After dynamically displaying the products, I started developing the interactivity of the webpage by allowing the customer to add and deduct the quantity of each product. I created a function that takes in as a parameter the ID (Identification of the product element) and the customer’s selected action, which is either to add or subtract. The function itself calculates and modifies the quantity by replacing the current quantity by either adding or subtracting the amount the customer has chosen. Meanwhile, I am storing all the items the customer selects into a basket and using the ‘localStorage’ method to save their chosen items so that whenever they close the browser, their shopping basket is saved. Finally, I created a simple function that calculates the total price of all the items that the customer added to their basket.  

Programming languages
I used these languages to create this project: HTML,CSS and JavaScript. 
