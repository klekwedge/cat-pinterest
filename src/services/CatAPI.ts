function getCatsImage() {
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



const getData = async (page: number) => {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&size=thumb`);
    const data = await res.json();
    return data;
}

export default getData;