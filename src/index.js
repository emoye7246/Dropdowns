import "/Users/elijahmoye/Desktop/dropdown/Dropdowns/src/css/styles.css";
import _ from 'lodash'
import { createImage } from "./java/carosel";
import iced_Latte from '/Users/elijahmoye/Desktop/dropdown/Dropdowns/src/images/iced_Latte.jpg'
import Mocha from '/Users/elijahmoye/Desktop/dropdown/Dropdowns/src/images/Mocha.jpg'
import blackCoffee from '/Users/elijahmoye/Desktop/dropdown/Dropdowns/src/images/blackCoffee.jpeg'
import Matcha from '/Users/elijahmoye/Desktop/dropdown/Dropdowns/src/images/Matcha.jpeg'


let icedLatte = new createImage(
    iced_Latte, 

    'Name: Iced Latte', 

    'Prices: Ranges from $3 to $10', 

    'All you will need to make your own Iced Latte is Espresso,  Milk,  ice and sometimes simple syrup or vanilla', 

    'Starbucks', 

    'Made in 2009')
icedLatte.createDisplay()

let icedMocha = new createImage(

    Mocha, 
    'Iced Mocha', 

    'Prices: Ranges from $3 to $12', 

    'All you will need to make your own Iced Latte is Coffee, milk, Ice Cubes, chocolate syrup, and Sugar', 

    'Starbucks', 

    'According to Google this drink has been a flavorful expeirence since 1920')
icedMocha.createDisplay()

let blackCoffees = new createImage(
    blackCoffee, 

    'Black Cofffee', 

    'Prices: Ranges from $1 to $5', 

    '1 tableSpoon', 

    'Starbucks', 

    'Made in 2012')
blackCoffees.createDisplay()

let Matchas = new createImage(
    Matcha, 

    'Iced Matcha',

    'Prices: Ranges from $3 to $10', 

    '1 tableSpoon', 

    'Starbucks', 
    
    'Made in 2010')
Matchas.createDisplay()


let icedMe = new createImage()
icedMe.displayArray()




