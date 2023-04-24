const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if (!isMobileMenuClosed){
         mobileMenu.classList.add('inactive');
    }else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1649361530216-82XYXK0EY7301TMSEAS5/Sklar+Bikes+Super+Something+Steel+Gravel+Bike780.jpg?format=1000w"
})
productList.push({
    name: "Monitor",
    price: 320,
    image: "https://www.lg.com/pl/images/monitory/md07532181/gallery/mnt-34wp65c-gallery-mobilezoom-02.jpg"
})
productList.push({
    name: "Laptop",
    price: 780,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwfpGfS0knB3d9BikykO7ucGbFFZkQ1GG8g&usqp=CAU"
})
productList.push({
    name: "Computadora",
    price: 1120,
    image: "https://point.com.ec/wp-content/uploads/2023/01/PC00043.png"
})

function renderProducts(arr){
    for (product of arr){
        // product = {name:'', price:'', image:''}
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productContainerDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productContainerDiv.appendChild(productPrice);
        productContainerDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCar = document.createElement('img');
        productImgCar.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCar);
    
        productInfo.appendChild(productContainerDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
    
}

renderProducts(productList);

