# BeerHaven
<br>
This project is an eccomerce website built with Vue.js as my first use of modern languages and frameworks to create a modern ecommerce website. Previously I created one with PHP, HTML, CSS and Javascript, however I wanted to create a project that uses technologies that most modern businesses use.
<br>
<br>
This project uses a Firebase database in two ways. One is to authenicate a user through a login system to enter the admin page where they can alter exisiting products and add new ones as well as delete products. and the second is to store images for the products themselves where they appear in the product pages next to the item's descriptions.
<br>
<br>
This project also uses GSAP animations to make the front-end more appealing to the end user as well as to appear modern.
<br>
<br>
VueX is also used to store the state of the cart from the local storage so that the user can access their items that are in the cart when they come to check out where tax is worked out automatically as well as the sub and full totals of the shopping basket. VueX also calculates duplicate items for quantity and merges these items with the quantitiy specified going up by one.
<br>
<br>
To use this project you will have to create a firebase account and link your credentials in the Firebase.js file this is due to the possibility of a user going into my account and altering product records if I leave my Firebase.js file intact with the credentials.
<br>
<br>

## Checklist

- [X] Authenitcates Login
- [X] Animated front page
- [X] Uses Firebase Database to store products in an API
- [X] Uses Firebase storage to store product pictures
- [X] Asynchronous (Live) Reload of new products being uploaded
- [X] Products list appears as cards and looks appealing
- [X] Prices all automatically update in cart
- [X] Duplicate products instead add to the quantity
- [ ] Multipack purchases
- [ ] About page
- [ ] More animations
- [ ] Fix the login form refresh
- [ ] Make product page more appealing
- [ ] Add dashboard for admin

Live link - in progress

### Install Dependencies with
```
npm install
```

### Run development server with
```
npm run serve
```
Server usually appears on localhost:8080

### Run for production with
```
npm run build
```

