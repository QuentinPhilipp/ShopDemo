
# MyShop

This project is the Front End Assignment for SportCompass.

Hosted by Firebase at : https://angular-shop-demo-6f28b.firebaseapp.com/products

## Development server

Run `ng serve` in the folder for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Responsive Layout

I used Bootstrap 4 for the layout. Everything is adapted to be seen on a mobile phone or computer

## Product images

Each product can have 1 or more product. If there is more than one image, they are all visible in a carousel when displaying product details. On the main page, only one image is used as a preview.

## Cart

By clicking on the Shopping Cart tab, you can view your shopping cart. It is possible to add more items, remove items or change the quantities of an item.
The payment is not implemented since it's only a demo, when you press checkout the cart is just emptied and you go back to the main page.

## Angular

I used Angular to build this project.


## Broken Images

If the link to an image doesn't work. The site automatically displays a default image. You can see this in the Backpack item. The third picture has the link img/backpack3.jpg but this picture does not exist in the files. The image is therefore automatically replaced by an error image.

## Unit Test

I've been trying to implement unit tests. There are some for services and for some components but not all of them.

## Data persistence

The cart is automaticly saved without the need of a profile. I used localStorage to store the cart each time it is modified. On the loading of the website the localStorage is used to set the cart.


## Components

Here is the list of components :

 - **Cart** : The component that manages the entire display of the shopping cart.
 - **FOF-page** : 404 Page
 - **Home** : The component that manages the home page.
 - **ItemCart** : The component that determines the behavior of an item when it is in the shopping cart.
 - **Items** : The component that determines the behavior of an item when it is in the home menu.
 - **SingleProduct** : The component that generates a product page for each product
