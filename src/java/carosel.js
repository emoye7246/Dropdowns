

let images = []
let slides = 0

export class createImage {

    constructor(image, name, description, ingredientsinfo, orderInfo, historyInfo){

        this.image = image, 
        this.name = name, 
        this.description = description, 
        this.ingredientsinfo = ingredientsinfo,
        this.orderInfo = orderInfo, 
        this.historyInfo = historyInfo

    }

    createDisplay(){

        let pushMe = {

            image: this.image,

            name: this.name,

            description: this.description, 

            info: this.ingredientsinfo, 

            order: this.orderInfo, 

            history: this.historyInfo

        }

        images.push(pushMe)
                
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

            let countHolder = document.getElementById('countHolder')
            

            let count = document.createElement('div')
            count.id = 'count'

            

    
            store.append(myImage, myName, myDescription)
            corasel.append(store)
            countHolder.append(count)
         

            store.addEventListener('click', () => {

                this.displayDrink(element.image, element.name, element.description, element)
            })


        })

        this.scrollCommands()


    }

    scrollCommands(){


        let corasel = document.getElementById('corasel')
        corasel.style.scrollBehavior = 'smooth'

        let countHolder = document.getElementById('countHolder')
        countHolder.querySelectorAll('div')[slides].style.backgroundColor = 'red'




        let test = function(){

            countHolder.querySelectorAll('div')[slides].style.backgroundColor = 'white'


            if(slides < images.length - 1){

            slides++
            corasel.scrollLeft += 200
            countHolder.querySelectorAll('div')[slides].style.backgroundColor = 'red'

            }
            else if(slides == images.length - 1){

                slides = 0
                countHolder.querySelectorAll('div')[slides].style.backgroundColor = 'red'

                corasel.scrollTo(0, 0)
            }
            
        }

        setInterval(test, 5000)


        let next = document.getElementById('next')
        next.addEventListener('click', () => {
            
            corasel.scrollLeft += 200
            test()
            
        })

        let previous = document.getElementById('previous')
        previous.addEventListener('click', () => {

            if(slides == 0){

            countHolder.querySelectorAll('div')[slides].style.backgroundColor = 'red'

            }
            else if(slides != 0){
            countHolder.querySelectorAll('div')[slides].style.backgroundColor = 'white'
            slides -= 1
            corasel.scrollLeft -= 200
            countHolder.querySelectorAll('div')[slides].style.backgroundColor = 'red'
            }

        })

    }

    displayDrink(photo, title, info, element){

        let change = document.getElementById('change')
        change.innerHTML = ' '
        change.style.display = 'flex'

        let countHolder = document.getElementById('countHolder')
        countHolder.style.display = 'none'

      let components = document.getElementById('components')
      components.style.display = 'none'


        let storeContent = document.createElement('div')
        storeContent.id = 'storeContent'

        let backButton = document.createElement('button')
        backButton.id = 'backButton'
        backButton.innerHTML = 'back'



        let drinkPhoto = document.createElement('img')
        drinkPhoto.src = `${photo}`
        drinkPhoto.style.height = '200px'
        drinkPhoto.style.width = '200px'

        let wordContent = document.createElement('div')
        wordContent.id = 'wordContent'


        let drinkTitle = document.createElement('div')
        drinkTitle.innerHTML = `${title}`

        let drinkDescription = document.createElement('div')
        drinkDescription.id = 'info'
        drinkDescription.innerHTML = `${info}`

        let myDropdown = document.createElement('div')
        myDropdown.id = 'drop'



        let learnMore = document.createElement('button')
        learnMore.innerHTML = 'Learn More'

        let dropdown = document.createElement('div')
        dropdown.id = 'dropdown'
        

        let dropMe = false
        let Drops = function(){
            if(dropMe == false){

                dropMe = true
                dropdown.style.display = 'flex'
            }
            else if(dropMe == true){

                dropMe = false
                dropdown.style.display = 'none'
            }
        }


        learnMore.addEventListener('click', () => {

            Drops()
         })


        let moreInfo = document.createElement('div')
        moreInfo.id = 'moreInfo'



        let ingredients = document.createElement('div')
        ingredients.innerHTML = 'Ingredients'

        let order = document.createElement('div')
        order.innerHTML = 'Order'

        let history = document.createElement('div')
        history.innerHTML = 'History'


        
        dropdown.append(ingredients, order, history)
        myDropdown.append(learnMore, dropdown)
        wordContent.append(drinkTitle, drinkDescription, myDropdown)
        storeContent.append(backButton, drinkPhoto, wordContent)
        change.append(storeContent, moreInfo)

        ingredients.addEventListener('click', () => {

            Drops()

            moreInfo.innerHTML = ' '

            let myIngredients = document.createElement('div')
            myIngredients.innerHTML = `${element.info}`

            moreInfo.appendChild(myIngredients)
        })



        order.addEventListener('click', () => {

            Drops()


            moreInfo.innerHTML = ' '

            let myOrder = document.createElement('div')
            myOrder.innerHTML = `${element.order}`

            dropdown.style.display = 'none'

            moreInfo.append(myOrder)
        })

        history.addEventListener('click', () => {
            Drops()


            moreInfo.innerHTML = ' '

            let myHistory = document.createElement('div')
            myHistory.innerHTML = `${element.history}`

            moreInfo.append(myHistory)
        })



        backButton.addEventListener('click', () => {

            change.style.display = 'none'
           components.style.display = 'flex'
           countHolder.style.display = 'flex'
        })
        
        
    }

}
