import "/Users/elijahmoye/Desktop/dropdown/Dropdowns/src/css/styles.css";
import _ from 'lodash'
import { createImage } from "./java/carosel";
import iced_Latte from '/Users/elijahmoye/Desktop/dropdown/Dropdowns/src/images/iced_Latte.jpg'


let icedLatte = new createImage(iced_Latte, 'Iced Latte', 'Starbucks Drinks')
icedLatte.createDisplay()

let icedLattes = new createImage(iced_Latte, 'Iced Lattes', 'Starbucks')
icedLattes.createDisplay()

let icedLattess = new createImage(iced_Latte, 'Iced Lattes', 'Starbcks')
icedLattess.createDisplay()
