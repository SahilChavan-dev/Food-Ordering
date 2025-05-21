document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Cart Toggle
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    
    cartIcon.addEventListener('click', function() {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeCart.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    cartOverlay.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Login Modal Toggle
    const loginBtn = document.querySelector('.login-btn');
    const loginModal = document.querySelector('.login-modal');
    const closeModal = document.querySelector('.close-modal');
    
    loginBtn.addEventListener('click', function() {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', function() {
        loginModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    loginModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Dish Data
    const dishes = [
        {
            id: 1,
            name: "Margherita Pizza",
            description: "Classic pizza with tomato sauce, mozzarella, and basil",
            price: 12.99,
            category: "pizza",
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
            badge: "Popular"
        },
        {
            id: 2,
            name: "Pepperoni Pizza",
            description: "Classic pizza with tomato sauce, mozzarella, and pepperoni",
            price: 14.99,
            category: "pizza",
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 3,
            name: "BBQ Chicken Pizza",
            description: "BBQ sauce, chicken, red onions, and mozzarella",
            price: 16.99,
            category: "pizza",
            image: "https://images.unsplash.com/photo-1620374645498-af6bd681a0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 4,
            name: "Classic Burger",
            description: "Beef patty, lettuce, tomato, onion, and special sauce",
            price: 9.99,
            category: "burger",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80",
            badge: "Chef's Choice"
        },
        {
            id: 5,
            name: "Bacon Cheeseburger",
            description: "Beef patty, bacon, cheddar cheese, and all the fixings",
            price: 11.99,
            category: "burger",
            image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1062&q=80"
        },
        {
            id: 6,
            name: "Veggie Burger",
            description: "Plant-based patty with avocado, lettuce, and tomato",
            price: 10.99,
            category: "burger",
            image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 7,
            name: "Spaghetti Carbonara",
            description: "Classic pasta with eggs, cheese, pancetta, and black pepper",
            price: 13.99,
            category: "pasta",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejoAT8SMJYU1zkLxBZNn8gJukhSWl9fHDUA&s"
        },
        {
            id: 8,
            name: "Fettuccine Alfredo",
            description: "Creamy pasta with parmesan cheese and butter",
            price: 12.99,
            category: "pasta",
            image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 9,
            name: "Penne Arrabbiata",
            description: "Spicy tomato sauce with garlic and chili peppers",
            price: 11.99,
            category: "pasta",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDL_0gv3Z2KYKL9Wzv_Cb2SzxIUe3ZQnTG6Q&s"
        },
        {
            id: 10,
            name: "Caesar Salad",
            description: "Romaine lettuce, croutons, parmesan, and Caesar dressing",
            price: 8.99,
            category: "salad",
            image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 11,
            name: "Greek Salad",
            description: "Cucumbers, tomatoes, olives, feta cheese, and olive oil",
            price: 9.99,
            category: "salad",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
        },
        {
            id: 12,
            name: "Tiramisu",
            description: "Classic Italian dessert with coffee-soaked ladyfingers",
            price: 6.99,
            category: "dessert",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
            badge: "New"
        },
        {
            id: 13,
            name: "Chocolate Lava Cake",
            description: "Warm chocolate cake with a molten center, served with ice cream",
            price: 7.99,
            category: "dessert",
            image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80"
        },
        {
            id: 14,
            name: "Cheesecake",
            description: "Creamy New York-style cheesecake with berry compote",
            price: 6.99,
            category: "dessert",
            image: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
    ];

    // Cart functionality
    let cart = [];
    const dishesContainer = document.querySelector('.dishes-container');
    const cartCount = document.querySelector('.cart-count');
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');
    const emptyCartElement = document.querySelector('.empty-cart');

    // Filter dishes by category
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.dataset.category;
            displayDishes(category);
        });
    });

    // Display dishes based on category
    function displayDishes(category = 'all') {
        dishesContainer.innerHTML = '';
        
        const filteredDishes = category === 'all' 
            ? dishes 
            : dishes.filter(dish => dish.category === category);
        
        filteredDishes.forEach(dish => {
            const dishCard = document.createElement('div');
            dishCard.className = 'dish-card';
            dishCard.innerHTML = `
                ${dish.badge ? `<span class="dish-badge">${dish.badge}</span>` : ''}
                <div class="dish-image">
                    <img src="${dish.image}" alt="${dish.name}">
                </div>
                <div class="dish-info">
                    <h3>${dish.name}</h3>
                    <p>${dish.description}</p>
                    <div class="dish-price">
                        <span class="price">$${dish.price.toFixed(2)}</span>
                        <div class="add-to-cart" data-id="${dish.id}">
                            <i class="fas fa-plus"></i>
                        </div>
                    </div>
                </div>
            `;
            
            dishesContainer.appendChild(dishCard);
        });
        
        // Add event listeners to add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                addToCart(id);
            });
        });
    }

    // Add to cart function
    function addToCart(id) {
        const dish = dishes.find(item => item.id === id);
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...dish,
                quantity: 1
            });
        }
        
        updateCart();
        
        // Show cart sidebar if it's hidden
        if (!cartSidebar.classList.contains('active')) {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Show success message
        showNotification(`${dish.name} added to cart`);
    }

    // Update cart UI
    function updateCart() {
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Update cart items
        if (cart.length === 0) {
            emptyCartElement.style.display = 'flex';
            cartItemsContainer.innerHTML = '';
        } else {
            emptyCartElement.style.display = 'none';
            
            cartItemsContainer.innerHTML = '';
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="cart-item-quantity">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <div class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </div>
                `;
                
                cartItemsContainer.appendChild(cartItem);
            });
            
            // Add event listeners to quantity buttons
            document.querySelectorAll('.quantity-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    const isPlus = this.classList.contains('plus');
                    const isMinus = this.classList.contains('minus');
                    
                    if (isPlus) {
                        updateQuantity(id, 1);
                    } else if (isMinus) {
                        updateQuantity(id, -1);
                    }
                });
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    removeFromCart(id);
                });
            });
        }
        
        // Update total price
        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Update item quantity
    function updateQuantity(id, change) {
        const item = cart.find(item => item.id === id);
        
        if (item) {
            item.quantity += change;
            
            if (item.quantity <= 0) {
                cart = cart.filter(item => item.id !== id);
            }
            
            updateCart();
        }
    }

    // Remove item from cart
    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCart();
        
        // Show removed message
        const dish = dishes.find(item => item.id === id);
        showNotification(`${dish.name} removed from cart`);
    }

    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Browse menu button in empty cart
    document.querySelector('.browse-menu').addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Proceed to checkout button
    document.querySelector('.checkout-btn').addEventListener('click', function() {
        if (cart.length > 0) {
            alert('Checkout functionality would be implemented here!');
            // In a real app, you would redirect to checkout page
        } else {
            alert('Your cart is empty. Please add some items first.');
        }
    });

    // Order now button in hero section
    document.querySelector('.order-now').addEventListener('click', function() {
        // Scroll to menu section
        document.querySelector('#menu').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Initialize the page
    displayDishes();
});

// Add notification styles to the head
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #2ed573;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .notification.show {
        opacity: 1;
    }
`;
document.head.appendChild(style);