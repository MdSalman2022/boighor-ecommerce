let container = document.querySelector('.grid-container');
let books = [
    {
        "bookName": "বিজনেস ব্লুপ্রিন্ট (হার্ডকভার)",
        "writer": "মুহাম্মদ ইলিয়াস কাঞ্চন (কোচ কাঞ্চন)",
        "price": "TK. 464",
        "url": "https://www.rokomari.com/book/235280/business-blueprint",
        "src": "./assets/books/Business_Blueprint_-Coch_Kanchan-c95f1-235280.jpg",
        "reviews": 50
    },
    {
        "bookName": "বাইশের বন্যা (হার্ডকভার)",
        "writer": "তাসরিফ খান",
        "price": "TK. 400",
        "url": "https://www.rokomari.com/book/274727/baisher-bonna",
        "src": "./assets/books/Baisher_Bonna-Tasrif_Khan-2c6fc-274727.jpg",
        "reviews": 60
    },
    {
        "bookName": "বৈশাখী মেঘের কান্না (হার্ডকভার)",
        "writer": "মুনিয়া মাহমুদ",
        "price": "TK. 400",
        "url": "https://www.rokomari.com/book/182884/boishakhi-megher-kanna?ref=sp_in_3_p_182884",
        "src": "./assets/books/boishakhi.jpg",
        "reviews": 20
    },
    {
        "bookName": "শঙ্খচূড় (হার্ডকভার)",
        "writer": "সাদাত হোসাইন",
        "price": "TK. 700",
        "url": "https://www.rokomari.com/book/277162/shongkhochur",
        "src": "./assets/books/Shongkhochur-Sadat_Hossain_-8d34c-277162.jpg",
        "reviews": 30
    },
    {
        "bookName": "কাপুরুষ (হার্ডকভার)",
        "writer": "মোবারক হোসেন",
        "price": "TK. 125",
        "url": "https://www.rokomari.com/book/201864/kapurush?ref=sp_in_1_p_201864",
        "src": "./assets/books/kapurush.jpg",
        "reviews": 153
    },
    {
        "bookName": "মায়ামৃগ (হার্ডকভার)",
        "writer": "ইলমা বেহরোজ",
        "price": "TK. 660",
        "url": "https://www.rokomari.com/book/282751/mayamrig",
        "src": "./assets/books/Mayamrig-Elma_Behrouz-de47e-282751.jpg",
        "reviews": 80
    },
    {
        "bookName": "বিন্দু বৃত্তান্তে (হার্ডকভার)",
        "writer": "রেশমী রফিক",
        "price": "TK. 640",
        "url": "https://www.rokomari.com/book/209394/bindu-brittante?ref=sp_in_1_p_209394",
        "src": "./assets/books/bindu.jpg",
        "reviews": 100
    },
    {
        "bookName": "সত্যটা মিথ্যা (হার্ডকভার)",
        "writer": "সাদাত হোসাইন",
        "price": "TK. 400",
        "url": "https://www.rokomari.com/book/261129/sottota-mithya",
        "src": "./assets/books/Sottota_Mithya-Sadat_Hossain_-7703d-261129.jpg",
        "reviews": 325
    },
    {
        "bookName": "রবীন্দ্রনাথ এখানে কখনও আসেননি - ২ (হার্ডকভার)",
        "writer": "মোহাম্মদ নাজিম উদ্দিন",
        "price": "TK. 550",
        "url": "https://www.rokomari.com/book/176874/rabindronath-ekhane-kokhono-asenni?ref=sp_in_3_p_176874",
        "src": "./assets/books/robindronath.jpg",
        "reviews": 186
    },
    {
        "bookName": "প্রতিবাস্তব (পেপারব্যাক) কমিকস সংকলন ২০২২",
        "writer": "ঢাকা কমিক্স",
        "price": "TK. 750",
        "url": "https://www.rokomari.com/book/263873/protibastob",
        "src": "./assets/books/Protibastob-Dhaka_Comics-74d5a-263873.jpg",
        "reviews": 120
    }
];
for (let i = 0; i < books.length; i++) {
    let item = books[i];

    let bookDiv = document.createElement('div');
    bookDiv.classList.add('flex-col');

    let bookLink = document.createElement('a');
    bookLink.href = '/bookDetails.html?id=' + i;

    let bookContainerDiv = document.createElement('div');
    bookContainerDiv.classList.add('book-container');

    let bookImg = document.createElement('img');
    bookImg.src = item.src;
    bookImg.alt = 'Book Image';
    bookImg.classList.add('book-img');

    bookContainerDiv.appendChild(bookImg);

    bookLink.appendChild(bookContainerDiv);

    let bookNameH6 = document.createElement('h6');
    bookNameH6.textContent = item.bookName;
    bookNameH6.addEventListener('click', function () {
        window.location.href = bookLink.href;
    });

    let authorP = document.createElement('p');
    authorP.textContent = item.writer;
    authorP.addEventListener('click', function () {
        window.location.href = bookLink.href;
    });

    let reviewsSmall = document.createElement('small');
    reviewsSmall.textContent = item.reviews + ' reviews';
    reviewsSmall.addEventListener('click', function () {
        window.location.href = bookLink.href;
    });

    let addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-button');
    addToCartButton.addEventListener('click', function () {
        indexNumber = i;
    });
    addToCartButton.textContent = 'Add to Cart';

    addToCartButton.addEventListener("click", function () {
        const url = `/orderPage.html?id=${indexNumber}`;

        window.location.href = url;
    });

    let favoriteIcon = document.createElement('i');
    favoriteIcon.classList.add('fas', 'fa-heart');


    bookDiv.appendChild(bookLink);
    bookContainerDiv.appendChild(favoriteIcon);
    bookDiv.appendChild(bookNameH6);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(reviewsSmall);
    bookDiv.appendChild(addToCartButton);

    container.appendChild(bookDiv);
}
