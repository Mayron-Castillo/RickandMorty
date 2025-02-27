const main = document.querySelector(".main");

apiUrl = "https://rickandmortyapi.com/api/character"
async function rickAndMorty(){
    try {
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data.results);
        
        main.textContent = '';
        data.results.forEach(element => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add("character");

            characterDiv.innerHTML = `
            <h2 class="name">${element.name}</h2>
            <p class="status"> <strong>Status:</strong> ${element.status}</p>
            <p class="species"><strong>Species:</strong> ${element.species}</p>
            <p class="gender"><strong>Gender:</strong> ${element.gender}</p>
            <img class="image" src="${element.image}" alt="${element.name}">`;

            main.appendChild(characterDiv);
        });
    } catch (error) {
        console.error(error);
    }
    
}

rickAndMorty();

