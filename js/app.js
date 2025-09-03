var categorySwiper = new Swiper('.category_swiper', {
  slidesPerView: 'auto',
  spaceBetween: 12,
});

const gridBtn = document.getElementById("grid_view");
const listBtn = document.getElementById("list_view");
const container = document.getElementById("menu_container");
const searchInput = document.getElementById("search_input");
const categoryBtns = document.querySelectorAll(".category_btn");

const productsMap = [
  // Wraps
  { name: "Chicken Shawarma Wrap", price: "10.75", category: "wraps", vegetarian: false, img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&h=300&fit=crop" },
  { name: "Beef Shawarma Wrap", price: "10.75", category: "wraps", vegetarian: false, img: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=400&h=300&fit=crop" },
  { name: "Falafel Wrap", price: "10.75", category: "wraps", vegetarian: true, img: "https://www.mindful.sodexo.com/wp-content/uploads/2024/08/Mindful-Fall-Recipes_0007_MDF_FallHarvestFalafelWrap.jpg" },
  { name: "Grape Leaves Wrap", price: "10.75", category: "wraps", vegetarian: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop" },
  { name: "Hummus Wrap", price: "10.75", category: "wraps", vegetarian: true, img: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=400&h=300&fit=crop" },

  // Special trays
  { name: "Grilled Kefta Tray", price: "14.00", category: "special", vegetarian: false, img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop" },
  { name: "Chicken Shawarma Tray", price: "14.00", category: "special", vegetarian: false, img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop" },
  { name: "Chicken Kabob Tray", price: "14.00", category: "special", vegetarian: false, img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop" },
  { name: "Vegetarian Plate", price: "14.00", category: "special", vegetarian: true, img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400&h=300&fit=crop" },

  // Power bowls
  { name: "Chicken Shawarma Bowl", price: "18.00", category: "bowls", vegetarian: false, img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop" },
  { name: "Falafel Bowl", price: "18.00", category: "bowls", vegetarian: true, img: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=400&h=300&fit=crop" },
  { name: "Grilled Kefta Bowl", price: "18.00", category: "bowls", vegetarian: false, img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop" },
  { name: "Vegan Bowl", price: "18.00", category: "bowls", vegetarian: true, img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop" },

  // Salads
  { name: "Argana Green Salad", price: "4.50", category: "salads", vegetarian: true, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
  { name: "Mediterranean Garbanzo Salad", price: "4.75", category: "salads", vegetarian: true, img: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&h=300&fit=crop" },
  { name: "Moroccan Beet Salad", price: "5.00", category: "salads", vegetarian: true, img: "https://images.themodernproper.com/production/posts/2019/Moroccan-Beet-Salad-7.jpg?w=800&q=82&auto=format&fit=crop&dm=1599769045&s=76172ecaa16c861c4e823076b31db30f" },

  // Entrees
  { name: "Moroccan Meatballs", price: "17.00", category: "entrees", vegetarian: false, img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop" },
  { name: "Chicken Artichoke", price: "17.00", category: "entrees", vegetarian: false, img: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&h=300&fit=crop" },
  { name: "Moroccan Pot Roast", price: "18.00", category: "entrees", vegetarian: false, img: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400&h=300&fit=crop" },
  { name: "Chicken Charmoula", price: "17.00", category: "entrees", vegetarian: false, img: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?w=400&h=300&fit=crop" },
  { name: "Lamb Shank", price: "18.00", category: "entrees", vegetarian: false, img: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=400&h=300&fit=crop" },
  { name: "Salmon Tagine", price: "19.00", category: "entrees", vegetarian: false, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop" },
  { name: "Moroccan Chicken Couscous", price: "17.00", category: "entrees", vegetarian: false, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop" },
  { name: "Moroccan Beef Stew", price: "18.00", category: "entrees", vegetarian: false, img: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400&h=300&fit=crop" },

  // Drinks
  { name: "Water", price: "2.50", category: "drinks", vegetarian: true, img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop" },
  { name: "Soda", price: "3.00", category: "drinks", vegetarian: true, img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop" },
  { name: "Juices", price: "4.00", category: "drinks", vegetarian: true, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop" },
  { name: "Tea on the Go (10-12pp)", price: "27.00", category: "drinks", vegetarian: true, img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop" },
  { name: "Coffee Joe to Go (10-12pp)", price: "27.00", category: "drinks", vegetarian: true, img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop" },
  { name: "Large Cambro Coffee (50-60pp)", price: "100.00", category: "drinks", vegetarian: true, img: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=300&fit=crop" },
  { name: "Moroccan Lemonade", price: "5.00", category: "drinks", vegetarian: true, img: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=400&h=300&fit=crop" },

  // Desserts
  { name: "Baklava Fingers", price: "5.25", category: "desserts", vegetarian: true, img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop" },
  { name: "Namoura", price: "5.25", category: "desserts", vegetarian: true, img: "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=400&h=300&fit=crop" },
  { name: "Traditional Baklava", price: "5.00", category: "desserts", vegetarian: true, img: "https://www.lemonblossoms.com/wp-content/uploads/2022/08/Baklaka-Recipe-S1.jpg" },
  { name: "Fresh Baked Cookies", price: "3.75", category: "desserts", vegetarian: true, img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop" },
  { name: "Fresh Baked Brownies", price: "5.50", category: "desserts", vegetarian: true, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop" }
];

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
}

renderProducts();

// Category filter
categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".category_btn.active").classList.remove("active");
    btn.classList.add("active");
    renderProducts(btn.dataset.filter, searchInput.value);
  });
});

// Search filter
searchInput.addEventListener("input", () => {
  const activeCategory = document.querySelector(".category_btn.active").dataset.filter;
  renderProducts(activeCategory, searchInput.value);
});

// View toggle
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
