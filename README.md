# Getting Started  

To start using the web application, just follow the link: [http://maksymopanasenko.github.io/sichexpress](http://maksymopanasenko.github.io/sichexpress)
The application is hosted on GitHub and is available to users via GitHub Pages.  
  
## Backend  
The assortment of each of the stores is loaded from the backend part written in Node.js. This is the most primitive server that contains a JSON file as a database. This server is hosted by render.org, which provides free hosting for Node.js projects.  

## Shops tab  
The user can select the desired store on the "Shops" tab and add its products to the basket. The user has to wait for the products to load - the process can take about a minute, depending on the server response. As long as you have products from one store in your shopping cart, you will not be able to select another store.  

## Shopping cart tab  
In the Shopping cart tab, you can view the already selected products. You can edit your shopping cart or confirm your order by selecting a payment method in advance.
After clicking on the "Make an order" button, you should be redirected to the payment page or confirmation of the delivery address, but the further process is not executed and remains in development.