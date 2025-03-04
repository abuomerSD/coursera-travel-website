const divSearchResults = document.getElementById('search-results');

async function find() {
    
    const keyword = document.getElementById('input-search').value;
    const response = await fetch('./travel_recommendation_api.json');
    const data = await response.json();

    const countries = data.countries
    const temples = data.temples
    const beaches = data.beaches

    // window.location = './travel_recommendation.html';
    countries.forEach(element => {
        if (element.name.includes(keyword)) {
            divSearchResults.innerHTML = '';
            element.cities.forEach(city => {
                const divResult = document.createElement('div');
                divResult.setAttribute('class', 'result-card')
                const img = document.createElement('img');
                img.setAttribute('src', city.imageUrl);
                const name = document.createElement('h3');
                name.textContent = city.name;
                const desc = document.createElement('p');
                desc.textContent = city.description;
                const btnVisit = document.createElement('button');
                btnVisit.textContent = 'visit';
                btnVisit.setAttribute('class', 'btn-submit');

                divResult.appendChild(img);
                divResult.appendChild(name);
                divResult.appendChild(desc);
                divResult.appendChild(btnVisit);
                divSearchResults.appendChild(divResult);
            })
        }
    });

    temples.forEach(element => {
        if (element.name.includes(keyword)) {
            divSearchResults.innerHTML = '';
            const divResult = document.createElement('div');
            divResult.setAttribute('class', 'result-card')
            const img = document.createElement('img');
            img.setAttribute('src', element.imageUrl);
            const name = document.createElement('h3');
            name.textContent = element.name;
            const desc = document.createElement('p');
            desc.textContent = element.description;
            const btnVisit = document.createElement('button');
            btnVisit.textContent = 'visit';
            btnVisit.setAttribute('class', 'btn-submit');

            divResult.appendChild(img);
            divResult.appendChild(name);
            divResult.appendChild(desc);
            divResult.appendChild(btnVisit);
            divSearchResults.appendChild(divResult);
        }
    });

    beaches.forEach(element => {
        if (element.name.includes(keyword)) {
            divSearchResults.innerHTML = '';
            const divResult = document.createElement('div');
            divResult.setAttribute('class', 'result-card')
            const img = document.createElement('img');
            img.setAttribute('src', element.imageUrl);
            const name = document.createElement('h3');
            name.textContent = element.name;
            const desc = document.createElement('p');
            desc.textContent = element.description;
            const btnVisit = document.createElement('button');
            btnVisit.textContent = 'visit';
            btnVisit.setAttribute('class', 'btn-submit');

            divResult.appendChild(img);
            divResult.appendChild(name);
            divResult.appendChild(desc);
            divResult.appendChild(btnVisit);
            divSearchResults.appendChild(divResult);
        }
    });
}

document.getElementById('btn-search').addEventListener('click', find);

function reset() {
    document.getElementById('input-search').value = '';
    divSearchResults.innerHTML = '';
}

function addCountryToPage(keyword) {
    
    
    
}