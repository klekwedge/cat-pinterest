function partitionSwitching() {
  const menuButtons = document.querySelectorAll('.menu__button');
  menuButtons.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
      menuButtons.forEach((buttonMenu) => {
        buttonMenu.classList.remove('_active');
      });

      menuButton.classList.add('_active');

      const catFavouriteList = document.querySelector('.cats__list_favourite');

      if (menuButton.hasAttribute('data-favourite')) {
        catFavouriteList.innerHTML = '';
        document.querySelector('.cats__list').style.display = 'none';
        catFavouriteList.style.display = 'flex';

        let favouriteCatsArr = JSON.parse(localStorage.getItem('favouriteCats'));

        if (favouriteCatsArr) {
          favouriteCatsArr.forEach((favouriteCat) => {
            const catItem = document.createElement('li');
            catItem.classList.add('cats__item');
            catItem.setAttribute('id', favouriteCat.id);

            const catImage = document.createElement('img');
            catImage.classList.add('cats__image');
            catImage.src = favouriteCat.url;
            catImage.alt = 'Cat image';

            const catLikeIcon = document.createElement('img');
            catLikeIcon.src = 'cat-pinterest/../assets/png/filled-heart.png';
            catLikeIcon.alt = 'Heart icon';
            catLikeIcon.classList.add('cats__like');

            catLikeIcon.addEventListener('click', () => {
              const featuredItemsHomepage = document.querySelectorAll('.favourite');

              featuredItemsHomepage.forEach((featuredItemHomepage) => {
                const mainPageImage = featuredItemHomepage.lastChild;

                if (featuredItemHomepage.getAttribute('id') === favouriteCat.id) {
                  featuredItemHomepage.classList.remove('favourite');
                  mainPageImage.src = 'cat-pinterest/../assets/png/hollow-heart.png';
                }
              });

              favouriteCatsArr = favouriteCatsArr.filter((cat) => cat.id !== favouriteCat.id);

              localStorage.setItem('favouriteCats', JSON.stringify(favouriteCatsArr));
              catFavouriteList.removeChild(catItem);
            });

            catItem.append(catImage);
            catItem.append(catLikeIcon);
            catFavouriteList.append(catItem);
          });
        }
      } else {
        document.querySelector('.cats__list').style.display = 'flex';
        catFavouriteList.style.display = 'none';
      }
    });
  });
}

export default partitionSwitching;
