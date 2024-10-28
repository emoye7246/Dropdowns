

let images = []
let slides = 0

export class createImage {

    constructor(image, name, description){

        this.image = image, 
        this.name = name, 
        this.description = description

    }

    createDisplay(){

        let pushMe = {

            image: this.image,

            name: this.name,

            description: this.description
        }

        images.push(pushMe)
                

        this.displayArray()

    }

    displayArray(){

        images.forEach((element) => {

            let corasel = document.getElementById('corasel')
    
            let store = document.createElement('div')
            store.id = 'drinks'
    
            let myImage = document.createElement('img')
            myImage.src = `${element.image}`
            myImage.style.height = '200px'
            myImage.style.width = '200px'
            myImage.style.border = '1px solid black'

    
            let myName = document.createElement('div')
            myName.innerHTML = `${element.name}`
    
            let myDescription = document.createElement('div')
            myDescription.innerHTML = `${element.description}`
    
            store.append(myImage, myName, myDescription)
            corasel.append(store)

        })


    }


}
