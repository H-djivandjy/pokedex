// Insert your code here

let compteur = 16
    //----------------------| MAIN LOOP |------------------
    for (let pokemonId =1; pokemonId <= compteur; pokemonId++){     
        //------------------------------------Fetch Data 
        fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonId)
        .then(res => res.json())
        .then(data =>{      

            //************************ */
            const pokemonName = data.forms[0].name;
            const pokemonImg = data.sprites.front_default;
            const pokemonType = data.types[0].type.name;
            //************************ */
                                            
            //____________________ Injection HTML
            document.querySelector("#pokemonContainer").innerHTML += `
            <div class="pokemon ${pokemonType}">
                <div class="imgContainer">
                    <img src="${pokemonImg}" alt="${pokemonType}" />
                </div>
                <div class="info">
                    <h3 class="name">${pokemonName}</h3>
                    <span class="${pokemonType}">Type: <span>${pokemonType}</span></span>
                </div>
            </div>    
            `//__________________ Injection HTML End

            //____________________________________________________ Updating +15
            if (pokemonId <= 15){
                pokemonId = pokemonId+15
                const btn = document.querySelector("#next")
                btn.addEventListener('click', function(){
    
                //____________________ Injection HTML
                document.querySelector("#pokemonContainer").innerHTML += `
                <div class="pokemon ${pokemonType}">
                    <div class="imgContainer">
                        <img src="${pokemonImg}" alt="${pokemonType}" />
                    </div>
                    <div class="info">
                        <h3 class="name">${pokemonName}</h3>
                        <span class="${pokemonType}">Type: <span>${pokemonType}</span></span>
                    </div>
                </div>    
                `//_______________ Injection HTML End
    
                });//_______________________________ Button End
            }//_____________________________________________________ Updating End
                 
            return data
        })//----------------------------------------------------------------Fetch End    
    }//---------------------------------------------------------------------Main Loop End