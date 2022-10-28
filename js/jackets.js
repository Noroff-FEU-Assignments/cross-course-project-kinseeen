const resultsContainer = document.querySelector(".jacketContainer");

async function fetchInformation() {
  try {
    const response = await fetch(
      "https://rainydays.kinejakobsen.tech/wp-json/wc/v3/products?consumer_key=ck_3c0d30cdff7e3750655598c1be8392865f8bf3f8&consumer_secret=cs_8aac1bee83badcf77a5c6b8cf5ef1b5914ab92ad"
    );
    console.log("The response is",response);
    const reposonseAsJson = await response.json();
    
    console.log('The  as json is',reposonseAsJson.value);
    resultsContainer.innerHTML = "";
    for (let i = 0; i < reposonseAsJson.length; i++) {
      console.log('The response as json is',reposonseAsJson[i]);
      //createHtml(reposonseAsJson[i]);
    }
    var name = "";

    for (let i = 0; i < reposonseAsJson.length; i++) {
      name = reposonseAsJson[i].name;
      price = reposonseAsJson[i].price;
      id = reposonseAsJson[i].id;
      image = reposonseAsJson[i].images[0].src;
      resultsContainer.innerHTML += `<a href="jacketDetails.html?id=${id}">
      <div class=jacketInformationBox>
      <div class="jacketInformation"> ${name} </div>
<div class="jacketInformation"> Price: ${price} </div>
<div class="jacketInformation"><img class=productImage src="${image}"</img> </class> </div>
</div>`;
    }
    const loading = document.querySelector(".loader");

    setTimeout(function () {
      loading.classList.remove("loader-circle");
    }, 2000);
    
    
  } catch (error) {
    resultsContainer.innerHTML = "An error has occured";
  }
}

fetchInformation();
