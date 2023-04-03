// pokemon = []

// function getPikachu()
// axios
//     .get("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((response) => {
//         pokemon = response.data.abilities[0].ability.name
//         console.log(pokemon);
//     });

document.querySelectorAll(".cards__content").forEach((card) => {
    card.addEventListener("click", e => {
        console.log(card.dataset.name);
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${card.dataset.name}`)
            .then((response) => {
                const stats = document.querySelector(".stats")
                stats.innerHTML = ""

                const statsDetails = document.createElement("div")
                statsDetails.classList.add("stats__container")

                const image = document.createElement("img")
                image.classList.add("stats__image")
                image.src = response.data.sprites.other.dream_world.front_default
                statsDetails.append(image)

                const name = document.createElement("p")
                name.innerText = "name: " + response.data.forms[0].name
                statsDetails.append(name)

                const abilities = document.createElement("p")
                const abilitiesList = response.data.abilities.map(ability => ability.ability.name).join(", ")
                abilities.innerText = "abilities: " + abilitiesList
                statsDetails.append(abilities)

                const moves = document.createElement("p")
                const movesType = response.data.moves[0].move.name;
                moves.innerText = "moves: " + movesType
                statsDetails.append(moves)

                const heights = document.createElement("p")
                const height = response.data.height;
                heights.innerText = "height: " + height + " dm"
                statsDetails.append(heights)

                const weights = document.createElement("p")
                const weight = response.data.weight;
                weights.innerText = "weight: " + weight + " g"
                statsDetails.append(weights)

                const types = document.createElement("p")
                const type = response.data.types[0].type.name;
                types.innerText = "type: " + type
                statsDetails.append(types)

                stats.append(statsDetails)
            });
    })
})