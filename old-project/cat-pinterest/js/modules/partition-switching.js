function partitionSwitching() {
  const menuButtons = document.querySelectorAll('.menu__button');
  menuButtons.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
      menuButtons.forEach((buttonMenu) => {
        buttonMenu.classList.remove('_active');
      });

      menuButton.classList.add('_active');

      const catsListFavourite = document.querySelector('.cats__list_favourite');

      if (menuButton.hasAttribute('data-favourite')) {
        catsListFavourite.innerHTML = '';
        document.querySelector('.cats__list').style.display = 'none';
        catsListFavourite.style.display = 'flex';

        let favouriteCatsArr = JSON.parse(localStorage.getItem('favouriteCats'));
        favouriteCatsArr.forEach((favouriteCat) => {
          const catItem = document.createElement('li');
          catItem.classList.add('cats__item');

          const catImage = document.createElement('img');
          catImage.classList.add('cats__image');
          catImage.src = favouriteCat.url;
          catImage.alt = 'Cat image';

          const catLikeIcon = document.createElement('div');

          catLikeIcon.classList.add('cats__like');
          catLikeIcon.innerHTML = '<svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z" fill="#F24E1E"/></svg>';

          catLikeIcon.addEventListener('click', () => {
            favouriteCatsArr = favouriteCatsArr.filter((cat) => cat.id !== favouriteCat.id);
            localStorage.setItem('favouriteCats', JSON.stringify(favouriteCatsArr));
            catsListFavourite.removeChild(catItem);
          });

          catItem.append(catImage);
          catItem.append(catLikeIcon);
          catsListFavourite.append(catItem);
        });
      } else {
        document.querySelector('.cats__list').style.display = 'flex';
        catsListFavourite.style.display = 'none';
      }
    });
  });
}

export default partitionSwitching;
