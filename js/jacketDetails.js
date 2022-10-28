const querystring= document.location.search;
const params = new URLSearchParams(querystring);

const id = params.get("id");


console.log(id);

const titleContainer = document.querySelector(".nameContainer");
const detailsContainer = document.querySelector(".jacketDetails");

async function jacketInformation (test) {
    try {
        const response = await fetch (`https://rainydays.kinejakobsen.tech/wp-json/wc/v3/products/${test}?consumer_key=ck_3c0d30cdff7e3750655598c1be8392865f8bf3f8&consumer_secret=cs_8aac1bee83badcf77a5c6b8cf5ef1b5914ab92ad`)
        const reposonseAsJson = await response.json();
        console.log(reposonseAsJson);
        createHTML(reposonseAsJson)
        
    } catch (error) {
        detailsContainer.innerHTML = "an error has occured";
    }
}

function createHTML (jacket) {
    detailsContainer.innerHTML = `<h2> ${jacket.name} </h2>
    <div class="jacketInformation"> Price: ${jacket.price} </div>
    <div class="jacketInformation"><img class=productImage src="${jacket.image}"</img> </class> </div>`
}


jacketInformation (id);