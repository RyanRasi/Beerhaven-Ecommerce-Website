# BeerHaven
<br>
This project will be converted to a V2 soon. It should have more up to date technologies and a specific front-end/back-end structure.
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

<br>

### Firebase.js file is required to be amended before initial run

The firebase.js file should have this block of code where the // defines it.
Inside the quotes is where the config keys should be pasted in which you can retrieve from the Firebase website upon creating a database. Once these are pasted in, the app should work, however you may want to input data through the Firebase website or through the admin page.

```javascript
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
```

#### Inputing data through the Firebase website 
Data is entered through creating two collections within the database tab. One called products to store the product information and one called profiles to store the users address, name and phone number. Additionally in the storage tab it is recommended to create a folder titled "products" where the product pictures will be stored.

<br><br>
#### Donate
Buy me a coffee to donate if you like
<br>
https://www.buymeacoffee.com/uiSK0Ex

<a href="https://www.buymeacoffee.com/uiSK0Ex"><img src="https://static-2.gumroad.com/res/gumroad/9026696959709/asset_previews/09c9bf14407c2a76d088f22121d0b0a9/retina/Screen_20Shot_202017-10-20_20at_2010.09.59.jpg" alt="alt text" width="251.25" height="183.75"></a>

