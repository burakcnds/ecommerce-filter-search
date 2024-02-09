// ! AŞAMA 3 START
let tumu = document.getElementById('tum');
let urunler = document.getElementById('products');
let erkek = document.getElementById('erkek');

function renderProducts(category = '') {
    fetch('https://fakestoreapi.com/products?limit=20')
        .then(res => res.json())
        .then(products => {
            const filteredProducts = category ? products.filter(product => product.category === category) : products;
            urunler.innerHTML = ''; // Önceki ürünleri temizle
            filteredProducts.forEach(element => {
                const card = document.createElement('div');
                card.classList.add('card');
                const kisaAciklama = element.description.substring(0, 100);
                card.innerHTML = `
                    <img src="${element.image}" class="card-img-top" alt="#">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${kisaAciklama}</p>
                        <a href="#" class="btn btn-primary">Satın Al</a>
                    </div>
                `;
                urunler.appendChild(card);
            });
        });
}

renderProducts();

tumu.addEventListener('click', () => {
    urunler.innerHTML = '';
    renderProducts();
});

erkek.addEventListener('click', () => {
    urunler.innerHTML = '';
    renderProducts("men's clothing");
});

let kadin = document.getElementById('kadin').addEventListener('click', () => {
    urunler.innerHTML = '';
    renderProducts("women's clothing");
});

let tekno = document.getElementById('tekno').addEventListener('click', () => {
    urunler.innerHTML = '';
    renderProducts("electronics");
});

let taki = document.getElementById('taki').addEventListener('click', () => {
    urunler.innerHTML = '';
    renderProducts("jewelery");
});

// ! AŞAMA 3 END
let ara = document.getElementById('ara')
let araBtn =document.getElementById('araBtn')
araBtn.addEventListener('click', () => {
    
    const arananKelime = document.getElementById('ara').value.toLowerCase();
    searchProducts(arananKelime); // Arama işlemini gerçekleştir
    console.log("Aranan kelime: ", arananKelime);
});

function searchProducts(arananKelime) {
    fetch('https://fakestoreapi.com/products?limit=20')
        .then(res => res.json())
        .then(products => {
            const filteredProducts = products.filter(product => {
                return product.title.toLowerCase().includes(arananKelime) || product.description.toLowerCase().includes(arananKelime);
            });
            renderFilteredProducts(filteredProducts); // Filtrelenmiş ürünleri render et
        });
}

function renderFilteredProducts(products) {
    urunler.innerHTML = ''; // Ürünleri temizle
    products.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        const kisaAciklama = element.description.substring(0, 100);
        card.innerHTML = `
            <img src="${element.image}" class="card-img-top" alt="#">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${kisaAciklama}</p>
                <a href="#" class="btn btn-primary">Satın Al</a>
            </div>
        `;
        urunler.appendChild(card);
    });
}
