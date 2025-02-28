const cardEl = document.querySelector('.row');
const postsUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/';

console.log(cardEl)

fetch(postsUrlEndpoint)
    .then(response => {
        console.log(response)

        return response.json()
    })
    .then(data => {
        console.log(data);
        const postList = data;
            //ciclo forEach per passare atraverso l'array data
        postList.forEach(data => {
            console.log(data);

            console.log(`Questo e l'url:${data.url}`)
            const markup = `
            <div class="col p-3">
            <div class="p-4 bg-light position-relative shadow">
            <div class="position-absolute top-0 start-50 translate-middle-x  z-1">
            <img src="./assets/img/pin.svg" alt="pin" style="height: 2.3rem; transform: translateY(-20%);"/>
          </div>
          <div class="card border-0">
            <div class="bg_card_top_image">
               <img src="${data.url}" class="card-img-top rounded-0" alt="..."> 
            </div>
            <div class="card-body bg-light p-0">
              <p class="card-text mb-0 mt-3 font_family_date text-body-tertiary">${data.date}</p>
              <h5 class="card-title text-start font_family_title fs-3 fw-bold">${data.title}</h5>
            </div>
          </div>
        </div>
        </div>`
            //inserire in pagine prima della fine del div .row
        cardEl.insertAdjacentHTML('beforeend', markup);

        })

        






    })

     .catch(error => console.error('Error', error))
