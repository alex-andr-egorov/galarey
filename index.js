


const cars = [
    {
        model: "Honda",
        type: "Civic",
        price: 300,
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Honda_HR-V_Hybrid_IMG_6401.jpg",
        id: 1
    },
    {
        model: "Honda",
        type: "Civic",
        price: 200,
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Honda_HR-V_Hybrid_IMG_6401.jpg",
        id: 2
    },
    {
        model: "Honda",
        type: "Civic",
        price: 100,
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Honda_HR-V_Hybrid_IMG_6401.jpg",
        id: 3
    },
    {
        model: "Honda",
        type: "Civic",
        price: 12000,
    
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Honda_HR-V_Hybrid_IMG_6401.jpg",
        id: 4

    },
    {
        model: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Honda_HR-V_Hybrid_IMG_6401.jpg",
        id: 5
    },
    {
        model: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Honda_HR-V_Hybrid_IMG_6401.jpg",
        id: 6
    },
    {
        model: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Honda_HR-V_Hybrid_IMG_6401.jpg",
        id: 7
    },
    {
        model: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Honda_HR-V_Hybrid_IMG_6401.jpg",
        id: 8
    }
]

const container = document.querySelector('.js-container');
const markup = cars.map(({id = "none", img, model}) => `<li class = "js-target js-card"  data-car-id = "${id}"><img src="${img}" class = 'img js-target' alt="car"><h2 class = "js-target">${model}</h2></li>`
).join('');

container.insertAdjacentHTML('beforeend', markup)
container.addEventListener('click', onClick);

function onClick(e) {
    const {target} = e; 
    if (!target.classList.contains("js-target")) {
return;
    }

    const carId = target.dataset.carId ?? target.closest('.js-card').dataset.carId;

    const correntItem = cars.find(({id}) => id === Number(carId));

    const instance = basicLightbox.create(`
    <div><img src="${correntItem.img}" alt="car" width = '400px'><h2>${correntItem.model}</h2><h3>${correntItem.type}</h3><p>${correntItem.price}</p></div>
    
    `);
    
    console.log(correntItem.model);
    instance.show()
}

