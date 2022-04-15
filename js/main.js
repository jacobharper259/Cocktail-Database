//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

//What to add: Ingredients search that is easier to access


document.querySelector(".get").addEventListener('click',getDrink)
let allIngredients = []

fetch("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list")
    .then(res => res.json())
    .then(data => {
        let ingred = data.drinks
        for(let c=0; c<ingred.length;c++){
        allIngredients.push(ingred[c].strIngredient1.toLowerCase())
        }
        
    }
        )

function getDrink(){
    document.querySelector('.carousel').classList.add('hidden')
    document.querySelector('.buttons').classList.add('hidden')
    drink = document.querySelector('input').value
    let query = 's'
    let action = 'search'

    fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/${action}.php?${query}=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        setTimeout(()=>{
            if(data.drinks.length>1){
                document.querySelector('.buttons').classList.remove('hidden')
            }
            document.querySelector('.carousel').classList.remove('hidden')
            
        },1000)
        console.log(data)
        let hasRun=false;
        
        let i = 0
        let iTwo = 1
        let iAfterTwo = 2
        let iThree = data.drinks.length -1
        let iBeforeThree = data.drinks.length -2
        let last = data.drinks.length -1
        
        
        document.querySelector(".next").addEventListener('click',change)
        document.querySelector(".last").addEventListener('click',back)
        document.querySelector("#overlayR").addEventListener('click',change)
        document.querySelector("#overlay").addEventListener('click',back) 
        function carousel(){
            
            
            if(data.drinks.length===1){
                document.querySelector('.left').style.opacity = '0';
                document.querySelector('.right').style.opacity = '0';
                document.querySelector("#overlayR").removeEventListener('click',change)
                document.querySelector("#overlay").removeEventListener('click',back) 
                document.querySelector('.nameOne').innerText = data.drinks[i].strDrink
                document.querySelector('.imgOne').src = data.drinks[i].strDrinkThumb
                let adjustForNull = []
                let ingredientsList = [data.drinks[i].strIngredient1 , data.drinks[i].strIngredient2 , data.drinks[i].strIngredient3 , data.drinks[i].strIngredient4 , data.drinks[i].strIngredient5 , data.drinks[i].strIngredient6 , data.drinks[i].strIngredient7 , data.drinks[i].strIngredient8 , data.drinks[i].strIngredient9 , data.drinks[i].strIngredient10 , data.drinks[i].strIngredient11 , data.drinks[i].strIngredient12 , data.drinks[i].strIngredient13 , data.drinks[i].strIngredient14 , data.drinks[i].strIngredient15]
                let measureList = [data.drinks[i].strMeasure1 , data.drinks[i].strMeasure2 , data.drinks[i].strMeasure3 , data.drinks[i].strMeasure4 , data.drinks[i].strMeasure5 , data.drinks[i].strMeasure6 , data.drinks[i].strMeasure7 , data.drinks[i].strMeasure8 , data.drinks[i].strMeasure9 , data.drinks[i].strMeasure10 , data.drinks[i].strMeasure11 , data.drinks[i].strMeasure12 , data.drinks[i].strMeasure13 , data.drinks[i].strMeasure14 , data.drinks[i].strMeasure15]
                
                for(m=0;m<measureList.length;m++){
                    if(measureList[m] !== null){
                        adjustForNull.push(measureList[m])
                    }else
                    if(measureList[m]== null){
                        adjustForNull.push('')
                    }
                }
                for(m=0;m<ingredientsList.length;m++){
                    if(ingredientsList[m]!==null && ingredientsList[m] !== ""){
                        
                    let newLi = document.querySelector(`.a${m}`)
                    newLi.innerText= `${adjustForNull[m]} ${ingredientsList[m]}`
                    newLi.classList.remove('hidden')
                    }else
                    if(ingredientsList[m]===null || ingredientsList[m] === ""){
                        let newLi = document.querySelector(`.a${m}`)
                        newLi.classList.add('hidden')
                        
                        }
                }
            }
            if(data.drinks.length===2){
                
                document.querySelector('.left').style.opacity = '1';
                document.querySelector('.right').style.opacity = '1';
                
                document.querySelector('.nameOne').innerText = data.drinks[i].strDrink
                document.querySelector('.imgOne').src = data.drinks[i].strDrinkThumb
                let adjustForNull = []
                let ingredientsList = [data.drinks[i].strIngredient1 , data.drinks[i].strIngredient2 , data.drinks[i].strIngredient3 , data.drinks[i].strIngredient4 , data.drinks[i].strIngredient5 , data.drinks[i].strIngredient6 , data.drinks[i].strIngredient7 , data.drinks[i].strIngredient8 , data.drinks[i].strIngredient9 , data.drinks[i].strIngredient10 , data.drinks[i].strIngredient11 , data.drinks[i].strIngredient12 , data.drinks[i].strIngredient13 , data.drinks[i].strIngredient14 , data.drinks[i].strIngredient15]
                let measureList = [data.drinks[i].strMeasure1 , data.drinks[i].strMeasure2 , data.drinks[i].strMeasure3 , data.drinks[i].strMeasure4 , data.drinks[i].strMeasure5 , data.drinks[i].strMeasure6 , data.drinks[i].strMeasure7 , data.drinks[i].strMeasure8 , data.drinks[i].strMeasure9 , data.drinks[i].strMeasure10 , data.drinks[i].strMeasure11 , data.drinks[i].strMeasure12 , data.drinks[i].strMeasure13 , data.drinks[i].strMeasure14 , data.drinks[i].strMeasure15]
                
                for(m=0;m<measureList.length;m++){
                    if(measureList[m] !== null){
                        adjustForNull.push(measureList[m])
                    }else
                    if(measureList[m]== null){
                        adjustForNull.push('')
                    }
                }
                for(m=0;m<ingredientsList.length;m++){
                    if(ingredientsList[m]!==null && ingredientsList[m] !== ""){
                        
                    let newLi = document.querySelector(`.a${m}`)
                    newLi.innerText= `${adjustForNull[m]} ${ingredientsList[m]}`
                    newLi.classList.remove('hidden')
                    }else
                    if(ingredientsList[m]===null || ingredientsList[m] === ""){
                        let newLi = document.querySelector(`.a${m}`)
                        newLi.classList.add('hidden')
                        
                        }
                    
                }
                document.querySelector('.nameTwo').innerText = data.drinks[iTwo].strDrink
                document.querySelector('.imgTwo').src = data.drinks[iTwo].strDrinkThumb

                document.querySelector('.nameThree').innerText = data.drinks[i].strDrink
                document.querySelector('.imgThree').src = data.drinks[i].strDrinkThumb

                document.querySelector('.nameLast').innerText = data.drinks[iThree].strDrink
                document.querySelector('.imgLast').src = data.drinks[iThree].strDrinkThumb

                document.querySelector('.nameBeforeLast').innerText = data.drinks[iBeforeThree].strDrink
                document.querySelector('.imgBeforeLast').src = data.drinks[iBeforeThree].strDrinkThumb
            }
            if(data.drinks.length>=3){
                document.querySelector("#overlayR").addEventListener('click',change)
                document.querySelector("#overlay").addEventListener('click',back) 
                document.querySelector('.left').style.opacity = '1';
                document.querySelector('.right').style.opacity = '1';
                document.querySelector('.nameOne').innerText = data.drinks[i].strDrink
                document.querySelector('.imgOne').src = data.drinks[i].strDrinkThumb
                let adjustForNull = []
                let ingredientsList = [data.drinks[i].strIngredient1 , data.drinks[i].strIngredient2 , data.drinks[i].strIngredient3 , data.drinks[i].strIngredient4 , data.drinks[i].strIngredient5 , data.drinks[i].strIngredient6 , data.drinks[i].strIngredient7 , data.drinks[i].strIngredient8 , data.drinks[i].strIngredient9 , data.drinks[i].strIngredient10 , data.drinks[i].strIngredient11 , data.drinks[i].strIngredient12 , data.drinks[i].strIngredient13 , data.drinks[i].strIngredient14 , data.drinks[i].strIngredient15]
                let measureList = [data.drinks[i].strMeasure1 , data.drinks[i].strMeasure2 , data.drinks[i].strMeasure3 , data.drinks[i].strMeasure4 , data.drinks[i].strMeasure5 , data.drinks[i].strMeasure6 , data.drinks[i].strMeasure7 , data.drinks[i].strMeasure8 , data.drinks[i].strMeasure9 , data.drinks[i].strMeasure10 , data.drinks[i].strMeasure11 , data.drinks[i].strMeasure12 , data.drinks[i].strMeasure13 , data.drinks[i].strMeasure14 , data.drinks[i].strMeasure15]
                
                for(m=0;m<measureList.length;m++){
                    if(measureList[m] !== null){
                        adjustForNull.push(measureList[m])
                    }else
                    if(measureList[m]== null){
                        adjustForNull.push('')
                    }
                }
                
                
                
                for(m=0;m<ingredientsList.length;m++){
                    if(ingredientsList[m]!==null && ingredientsList[m] !== ""){
                        
                    let newLi = document.querySelector(`.a${m}`)
                    newLi.innerText= `${adjustForNull[m]} ${ingredientsList[m]}`
                    newLi.classList.remove('hidden')
                    }else
                    if(ingredientsList[m]===null || ingredientsList[m] === ""){
                        let newLi = document.querySelector(`.a${m}`)
                        newLi.classList.add('hidden')
                        
                        }
                }

            if(data.drinks[iTwo] !== undefined){
                document.querySelector('.nameTwo').innerText = data.drinks[iTwo].strDrink
                document.querySelector('.imgTwo').src = data.drinks[iTwo].strDrinkThumb

                document.querySelector('.nameThree').innerText = data.drinks[iAfterTwo].strDrink
                document.querySelector('.imgThree').src = data.drinks[iAfterTwo].strDrinkThumb

                document.querySelector('.nameLast').innerText = data.drinks[iThree].strDrink
                document.querySelector('.imgLast').src = data.drinks[iThree].strDrinkThumb

                document.querySelector('.nameBeforeLast').innerText = data.drinks[iBeforeThree].strDrink
                document.querySelector('.imgBeforeLast').src = data.drinks[iBeforeThree].strDrinkThumb
            }
            if(data.drinks[iTwo] === undefined){
                document.querySelector('.buttons').classList.add('hidden')
            }
            
           
           
        document.querySelector('.instructionsOne').innerText= data.drinks[i].strInstructions
            }
        }
        carousel()
        
        



        

        function change(){ //scroll right
            
            document.querySelector(".next").removeEventListener('click',change)
            document.querySelector(".last").removeEventListener('click',back)
            document.querySelector("#overlayR").removeEventListener('click',change)
            document.querySelector("#overlay").removeEventListener('click',back) 
            
            document.querySelector('.info').classList.add('collapse')
            setTimeout(()=>{
            document.querySelector('.carousel').classList.add('animate')
            document.querySelector('.info').classList.add('whileAnimate')
            
            if(i>last-1){
                i=0
            }else{
                i+=1
            }
            if(iTwo>last-1){ 
                iTwo=0
            }else{
                iTwo+=1
            }
            if(iAfterTwo>last-1){
                iAfterTwo=0
            }else{
                iAfterTwo+=1
            }
            if(iThree>last-1){
                iThree=0
            }else{
                iThree+=1
            }
            if(iBeforeThree>last-1){
                iBeforeThree=0
            }else{
                iBeforeThree+=1
            }
            
            setTimeout(()=>{
            document.querySelector('.carousel').classList.remove('animate')
            document.querySelector('.info').classList.remove('collapse')
            document.querySelector('.info').classList.add('uncollapse')
            document.querySelector(".next").addEventListener('click',change)
            document.querySelector(".last").addEventListener('click',back)
            document.querySelector("#overlayR").addEventListener('click',change)
            document.querySelector("#overlay").addEventListener('click',back) 
            document.querySelector('.info').classList.remove('whileAnimate')
            setTimeout(()=>{
            
            document.querySelector('.info').classList.remove('uncollapse')
            },300)
            carousel(i)
            }, 500)
            },300)
        }
        function back(){
            document.querySelector(".next").removeEventListener('click',change)
            document.querySelector(".last").removeEventListener('click',back)
            document.querySelector("#overlayR").removeEventListener('click',change)
            document.querySelector("#overlay").removeEventListener('click',back) 
            document.querySelector('.info').classList.add('collapse')
            setTimeout(()=>{
            document.querySelector('.carousel').classList.add('animateBack')
            document.querySelector('.info').classList.add('whileAnimate')
            if(i<1){
                i=last
            }else{
                i-=1
            }
            if(iTwo<1){
                iTwo=last
            }else{
                iTwo-=1
            }
            if(iAfterTwo<1){ //After the Second Image
                iAfterTwo=last
            }else{
                iAfterTwo-=1
            }
            if(iThree<1){
                iThree=last
            }else{
                iThree-=1
            }
            if(iBeforeThree<1){
                iBeforeThree=last
            }else{
                iBeforeThree-=1
            }
            
            setTimeout(()=>{
                document.querySelector('.carousel').classList.remove('animateBack')
                document.querySelector('.info').classList.remove('collapse')
                document.querySelector('.info').classList.add('uncollapse')
                document.querySelector(".next").addEventListener('click',change)
                document.querySelector(".last").addEventListener('click',back)
                document.querySelector("#overlayR").addEventListener('click',change)
                document.querySelector("#overlay").addEventListener('click',back) 
                document.querySelector('.info').classList.remove('whileAnimate')
                setTimeout(()=>{
            
                    document.querySelector('.info').classList.remove('uncollapse')
                    },300)
                carousel(i)
                }, 500)
            },300)
        }
        
        
        
        
    })
    
    .catch(err => {
        console.log(`error ${err}`)
    });
}

