var categorySwiper = new Swiper('.category_swiper', {
  slidesPerView: 'auto',
  spaceBetween: 12,
});

const gridBtn = document.getElementById("grid_view");
const listBtn = document.getElementById("list_view");
const container = document.getElementById("menu_container");
const searchInput = document.getElementById("search_input");
const categoryBtns = document.querySelectorAll(".category_btn");
const categoryText = document.getElementById("category_text");

const productsMap = [
  // Wraps
  { name: "Chicken Shawarma Wrap", price: "10.75", category: "wraps", vegetarian: false, img: "/images/product.jpg" },
  { name: "Beef Shawarma Wrap", price: "10.75", category: "wraps", vegetarian: false, img: "/images/product.jpg" },
  { name: "Falafel Wrap", price: "10.75", category: "wraps", vegetarian: true, img: "/images/product.jpg" },
  { name: "Grape Leaves Wrap", price: "10.75", category: "wraps", vegetarian: true, img: "/images/product.jpg" },
  { name: "Hummus Wrap", price: "10.75", category: "wraps", vegetarian: true, img: "/images/product.jpg" },

  // Special trays
  { name: "Grilled Kefta Tray", price: "14.00", category: "special", vegetarian: false, img: "/images/product.jpg" },
  { name: "Chicken Shawarma Tray", price: "14.00", category: "special", vegetarian: false, img: "/images/product.jpg" },
  { name: "Chicken Kabob Tray", price: "14.00", category: "special", vegetarian: false, img: "/images/product.jpg" },
  { name: "Vegetarian Plate", price: "14.00", category: "special", vegetarian: true, img: "/images/product.jpg" },

  // Power bowls
  { name: "Chicken Shawarma Bowl", price: "18.00", category: "bowls", vegetarian: false, img: "/images/product.jpg" },
  { name: "Falafel Bowl", price: "18.00", category: "bowls", vegetarian: true, img: "/images/product.jpg" },
  { name: "Grilled Kefta Bowl", price: "18.00", category: "bowls", vegetarian: false, img: "/images/product.jpg" },
  { name: "Vegan Bowl", price: "18.00", category: "bowls", vegetarian: true, img: "/images/product.jpg" },

  // Salads
  { name: "Argana Green Salad", price: "4.50", category: "salads", vegetarian: true, img: "/images/product.jpg" },
  { name: "Mediterranean Garbanzo Salad", price: "4.75", category: "salads", vegetarian: true, img: "/images/product.jpg" },
  { name: "Moroccan Beet Salad", price: "5.00", category: "salads", vegetarian: true, img: "/images/product.jpg" },

  // Entrees
  { name: "Moroccan Meatballs", price: "17.00", category: "entrees", vegetarian: false, img: "/images/product.jpg" },
  { name: "Chicken Artichoke", price: "17.00", category: "entrees", vegetarian: false, img: "/images/product.jpg" },
  { name: "Moroccan Pot Roast", price: "18.00", category: "entrees", vegetarian: false, img: "/images/product.jpg" },
  { name: "Chicken Charmoula", price: "17.00", category: "entrees", vegetarian: false, img: "/images/product.jpg" },
  { name: "Lamb Shank", price: "18.00", category: "entrees", vegetarian: false, img: "/images/product.jpg" },
  { name: "Salmon Tagine", price: "19.00", category: "entrees", vegetarian: false, img: "/images/product.jpg" },
  { name: "Moroccan Chicken Couscous", price: "17.00", category: "entrees", vegetarian: false, img: "/images/product.jpg" },
  { name: "Moroccan Beef Stew", price: "18.00", category: "entrees", vegetarian: false, img: "/images/product.jpg" },

  // Drinks
  { name: "Water", price: "2.50", category: "drinks", vegetarian: true, img: "/images/product.jpg" },
  { name: "Soda", price: "3.00", category: "drinks", vegetarian: true, img: "/images/product.jpg" },
  { name: "Juices", price: "4.00", category: "drinks", vegetarian: true, img: "/images/product.jpg" },
  { name: "Tea on the Go (10-12pp)", price: "27.00", category: "drinks", vegetarian: true, img: "/images/product.jpg" },
  { name: "Coffee Joe to Go (10-12pp)", price: "27.00", category: "drinks", vegetarian: true, img: "/images/product.jpg" },
  { name: "Large Cambro Coffee (50-60pp)", price: "100.00", category: "drinks", vegetarian: true, img: "/images/product.jpg" },
  { name: "Moroccan Lemonade", price: "5.00", category: "drinks", vegetarian: true, img: "/images/product.jpg" },

  // Desserts
  { name: "Baklava Fingers", price: "5.25", category: "desserts", vegetarian: true, img: "/images/product.jpg" },
  { name: "Namoura", price: "5.25", category: "desserts", vegetarian: true, img: "/images/product.jpg" },
  { name: "Traditional Baklava", price: "5.00", category: "desserts", vegetarian: true, img: "/images/product.jpg" },
  { name: "Fresh Baked Cookies", price: "3.75", category: "desserts", vegetarian: true, img: "/images/product.jpg" },
  { name: "Fresh Baked Brownies", price: "5.50", category: "desserts", vegetarian: true, img: "/images/product.jpg" }
];

const categoryDescriptions = {
  wraps: "All served with lettuce, tomato, pickles, and tahini sauce",
  special: "All served with rice, salad, and tahini sauce",
  bowls: "All served with garbanzo beans, lettuce, hummus, pickles, tabouleh, and tzatziki dressing",
  salads: "Served with oil vinaigrette or lemon dressing, depending on the salad",
  entrees: "Daily Moroccan hot entrees served with rice, couscous, or salad",
  drinks: "Refreshing Moroccan drinks and hot beverages",
  desserts: "Sweet traditional Moroccan desserts",
  all: ""
};

// Render products
function renderProducts(filter = "all", search = "") {
  container.innerHTML = "";
  let filtered = productsMap.filter(p =>
    (filter === "all" || p.category === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "col-lg-3 col-6 p-2 grid_item";
    card.innerHTML = `
      <div class="menu_item">
        <div class="menu_item_img">
          <img src="${p.img}" alt="${p.name}">
          ${p.vegetarian ? `<span class="vegiterian"><img src="/images/vegiterian.svg" alt="Vegetarian"> Vegetarian</span>` : ""}
        </div>
        <div class="menu_item_info">
          <h3>${p.name}</h3>
          <div class="price_btn">
            <span>$${p.price}</span>
            <button data-bs-toggle="modal" data-bs-target="#cartModal">
              <i class="fa-regular fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  categoryText.textContent = categoryDescriptions[filter] || "";
}

renderProducts();

categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".category_btn.active").classList.remove("active");
    btn.classList.add("active");
    renderProducts(btn.dataset.filter, searchInput.value);
  });
});

searchInput.addEventListener("input", () => {
  const activeCategory = document.querySelector(".category_btn.active").dataset.filter;
  renderProducts(activeCategory, searchInput.value);
});

listBtn.addEventListener("click", () => {
  gridBtn.classList.remove("active");
  listBtn.classList.add("active");
  container.classList.add("list-view");
  container.classList.remove("grid-view");
});

gridBtn.addEventListener("click", () => {
  listBtn.classList.remove("active");
  gridBtn.classList.add("active");
  container.classList.add("grid-view");
  container.classList.remove("list-view");
});
