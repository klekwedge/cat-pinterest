function getCatsImage() {
    function createCatItem(newCat) {
        const catList = document.querySelector('.cats__list');

        const catItem = document.createElement('li');
        catItem.classList.add('cats__item');
        catItem.setAttribute('id', newCat.id);

        const catImage = document.createElement('img');
        catImage.classList.add('cats__image');
        catImage.src = newCat.url;
        catImage.alt = 'Cat image';

        const catLikeIcon = document.createElement('img');
        catLikeIcon.classList.add('cats__like');
        catLikeIcon.src = 'cat-pinterest/../assets/png/hollow-heart.png';
        catLikeIcon.alt = 'Heart icon';

        catLikeIcon.addEventListener('mouseover', () => {
            catLikeIcon.src = 'cat-pinterest/../assets/png/filled-heart.png';
        });

        function deleteHoverEffect() {
            catLikeIcon.src = 'cat-pinterest/../assets/png/hollow-heart.png';
        }

        catLikeIcon.addEventListener('mouseout', deleteHoverEffect);

        catLikeIcon.addEventListener('click', () => {
            let favouriteCatsArr;

            if (JSON.parse(localStorage.getItem('favouriteCats'))) {
                favouriteCatsArr = JSON.parse(localStorage.getItem('favouriteCats'));
            } else {
                favouriteCatsArr = [];
            }

            if (catItem.classList.contains('favourite')) {
                catLikeIcon.src = 'cat-pinterest/../assets/png/hollow-heart.png';
                catLikeIcon.addEventListener('mouseout', deleteHoverEffect);

                favouriteCatsArr = favouriteCatsArr.filter((cat) => cat.id !== newCat.id);
                localStorage.setItem('favouriteCats', JSON.stringify(favouriteCatsArr));

                catItem.classList.remove('favourite');
            } else {
                catLikeIcon.src = 'cat-pinterest/../assets/png/filled-heart.png';
                catLikeIcon.removeEventListener('mouseout', deleteHoverEffect);

                favouriteCatsArr.push(newCat);
                localStorage.setItem('favouriteCats', JSON.stringify(favouriteCatsArr));

                catItem.classList.add('favourite');
            }
        });

        catItem.append(catImage);
        catItem.append(catLikeIcon);
        catList.append(catItem);
    }

    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight
            >= document.documentElement.scrollHeight
        ) {
            getData();
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default getCatsImage;

export const getData = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=20&size=thumb');
    const data = await res.json();
    return data;
}
