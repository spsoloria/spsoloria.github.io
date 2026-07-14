const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const successMessage = document.getElementById("successMessage");

        successMessage.textContent =
            "Thank you! Your message has been sent successfully.";

        successMessage.style.color = "green";
        successMessage.style.fontWeight = "bold";
        successMessage.style.marginTop = "20px";

        contactForm.reset();

    });

}

/*Try reserve button */
document.addEventListener("DOMContentLoaded", function () {
    // Select all reserve buttons
    const reserveButtons = document.querySelectorAll(".reserve-btn");

    reserveButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Toggle reserved state
            button.classList.toggle("reserved");
            button.textContent = button.classList.contains("reserved")
                ? "Reserved"
                : "Reserve";
        });
    });
});

/*search button*/
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const products = [

    // =========================
    // BASKETBALL - NIKE
    // =========================
    {
        name: "Nike Kobe 5 Protro Bruce Lee",
        brand: "Nike",
        category: "Basketball",
        price: "₱40,000",
        image: "nikebball.svg",
        page: "bballshoes.html"
    },

    {
        name: "Nike Book 2 Spiridon EP",
        brand: "Nike",
        category: "Basketball",
        price: "₱8,095",
        image: "nikebball2.svg",
        page: "bballshoes.html"
    },

    {
        name: "Nike Ja 3 EP Animal Instinct Tiger",
        brand: "Nike",
        category: "Basketball",
        price: "₱7,595",
        image: "nikebball3.svg",
        page: "bballshoes.html"
    },

    // =========================
    // BASKETBALL - ADIDAS
    // =========================
    {
        name: "Adidas AE 2 Alphadawg",
        brand: "Adidas",
        category: "Basketball",
        price: "₱8,000",
        image: "adidas.svg",
        page: "bballshoes.html"
    },

    {
        name: "Adidas Harden Volume 10",
        brand: "Adidas",
        category: "Basketball",
        price: "₱9,500",
        image: "adidas2.svg",
        page: "bballshoes.html"
    },

    {
        name: "Adidas Harden Volume 9",
        brand: "Adidas",
        category: "Basketball",
        price: "₱5,700",
        image: "adidas3.svg",
        page: "bballshoes.html"
    },

    // =========================
    // BASKETBALL - PUMA
    // =========================
    {
        name: "Puma MB World 01 Black",
        brand: "Puma",
        category: "Basketball",
        price: "₱6,500",
        image: "pumabball.svg",
        page: "bballshoes.html"
    },

    {
        name: "Puma All-Pro NITRO 2 Elite",
        brand: "Puma",
        category: "Basketball",
        price: "₱11,500",
        image: "pumabball2.svg",
        page: "bballshoes.html"
    },

    {
        name: "Puma HALI 1",
        brand: "Puma",
        category: "Basketball",
        price: "₱6,320",
        image: "pumabball3.svg",
        page: "bballshoes.html"
    },

    // =========================
    // LIFESTYLE - NIKE
    // =========================
    {
        name: "Nike Zoom Vomero 5 Iron Grey Chrome",
        brand: "Nike",
        category: "Lifestyle",
        price: "₱8,895",
        image: "nikelife.svg",
        page: "lifestyle.html"
    },

    {
        name: "Nike Air Force 1 07 Sail",
        brand: "Nike",
        category: "Lifestyle",
        price: "₱6,295",
        image: "nikelife2.svg",
        page: "lifestyle.html"
    },

    {
        name: "Nike V5 RNR",
        brand: "Nike",
        category: "Lifestyle",
        price: "₱5,195",
        image: "nikelife3.svg",
        page: "lifestyle.html"
    },

    // =========================
    // LIFESTYLE - NEW BALANCE
    // =========================
    {
        name: "New Balance 740",
        brand: "New Balance",
        category: "Lifestyle",
        price: "₱6,995",
        image: "newbal.svg",
        page: "lifestyle.html"
    },

    {
        name: "New Balance 530",
        brand: "New Balance",
        category: "Lifestyle",
        price: "₱6,795",
        image: "newbal2.svg",
        page: "lifestyle.html"
    },

    {
        name: "New Balance 1906R",
        brand: "New Balance",
        category: "Lifestyle",
        price: "₱9,795",
        image: "newbal3.svg",
        page: "lifestyle.html"
    },

    // =========================
    // LIFESTYLE - PUMA
    // =========================
    {
        name: "Puma Speedcat OG Pink",
        brand: "Puma",
        category: "Lifestyle",
        price: "₱7,100",
        image: "pumalife.svg",
        page: "lifestyle.html"
    },

    {
        name: "Puma Ferrari Speedcat",
        brand: "Puma",
        category: "Lifestyle",
        price: "₱7,000",
        image: "pumalife2.svg",
        page: "lifestyle.html"
    },

    {
        name: "Puma x Monday Sleeping Club Speedcat",
        brand: "Puma",
        category: "Lifestyle",
        price: "₱7,100",
        image: "pumalife3.svg",
        page: "lifestyle.html"
    },

    // =========================
    // CLOGS - CROCS
    // =========================
    {
        name: "Crocs Classic Clog White",
        brand: "Crocs",
        category: "Clogs",
        price: "₱3,495",
        image: "crocs.svg",
        page: "clogs.html"
    },

    {
        name: "Crocs Classic Lightning McQueen Clogs",
        brand: "Crocs",
        category: "Clogs",
        price: "₱6,300",
        image: "crocs2.svg",
        page: "clogs.html"
    },

    {
        name: "Crocs x Salehe Bembury Pollex Sasquatch Clogs",
        brand: "Crocs",
        category: "Clogs",
        price: "₱11,500",
        image: "crocs3.svg",
        page: "clogs.html"
    },

    // =========================
    // CLOGS - BIRKENSTOCK
    // =========================
    {
        name: "Birkenstock Boston Suede Clogs",
        brand: "Birkenstock",
        category: "Clogs",
        price: "₱5,499",
        image: "birken.svg",
        page: "clogs.html"
    },

    {
        name: "Birkenstock Boston Natural Leather Black",
        brand: "Birkenstock",
        category: "Clogs",
        price: "₱6,799",
        image: "birken2.svg",
        page: "clogs.html"
    },

    {
        name: "Birkenstock Boston EVA Light Grey",
        brand: "Birkenstock",
        category: "Clogs",
        price: "₱5,999",
        image: "birken3.svg",
        page: "clogs.html"
    },

    // =========================
    // CLOGS - OUTLAND
    // =========================
    {
        name: "Outland Springfield Clog Navy Blue NB",
        brand: "Outland",
        category: "Clogs",
        price: "₱5,599",
        image: "outland.svg",
        page: "clogs.html"
    },

    {
        name: "Outland Springfield Clog Black",
        brand: "Outland",
        category: "Clogs",
        price: "₱6,299",
        image: "outland2.svg",
        page: "clogs.html"
    },

    {
        name: "Outland Springfield Clog Taupe Suede Brown",
        brand: "Outland",
        category: "Clogs",
        price: "₱5,999",
        image: "outland3.svg",
        page: "clogs.html"
    }

];

function searchProducts() {

    const query = searchInput.value.trim();

    if (query === "") return;

    window.location.href =
        "search.html?search=" + encodeURIComponent(query);

}

if (searchButton && searchInput) {

    searchButton.addEventListener("click", searchProducts);

    searchInput.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {
            searchProducts();
        }

    });

}

const params = new URLSearchParams(window.location.search);

const keyword = params.get("search");

const container = document.getElementById("searchResults");

if (keyword && container) {

    document.getElementById("resultTitle").textContent =
        `Showing results for "${keyword}"`;

    const matches = products.filter(product =>

        product.name.toLowerCase().includes(keyword.toLowerCase()) ||

        product.brand.toLowerCase().includes(keyword.toLowerCase()) ||

        product.category.toLowerCase().includes(keyword.toLowerCase())

    );

    container.innerHTML = "";

    matches.forEach(product => {

        container.innerHTML += `

<a href="${product.page}" class="category-link">

<div class="bproduct-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.brand} • ${product.category}</p>

<div class="price">${product.price}</div>

</div>

</a>

`;

    });

    if (matches.length === 0) {

        container.innerHTML = "<h2>No products found.</h2>";

    }

}