function getCatsImage() {
    function createCatItem(newCat) {

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
    }

    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight
            >= document.documentElement.scrollHeight
        ) {
            // getData();
        }
    }
;
}

export default getCatsImage;

export const getData = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=20&size=thumb');
    const data = await res.json();
    return data;
}
