function getCatsImage() {
  function createCatImage(newCat) {
    const catList = document.querySelector('.cats__list');

    const catItem = document.createElement('li');
    catItem.classList.add('cats__item');

    const catImage = document.createElement('img');
    catImage.classList.add('cats__image');
    catImage.src = newCat.url;
    catImage.alt = 'Cat image';

    const catLikeIcon = document.createElement('div');

    catLikeIcon.classList.add('cats__like');
    catLikeIcon.innerHTML = '<svg class="cats__svg" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path class="cats__path" d="M33 6C29.52 6 26.18 7.62 24 10.18C21.82 7.62 18.48 6 15 6C8.84 6 4 10.84 4 17C4 24.56 10.8 30.72 21.1 40.08L24 42.7L26.9 40.06C37.2 30.72 44 24.56 44 17C44 10.84 39.16 6 33 6ZM24.2 37.1L24 37.3L23.8 37.1C14.28 28.48 8 22.78 8 17C8 13 11 10 15 10C18.08 10 21.08 11.98 22.14 14.72H25.88C26.92 11.98 29.92 10 33 10C37 10 40 13 40 17C40 22.78 33.72 28.48 24.2 37.1Z" fill="#F24E1E"/> </svg>';

    catItem.append(catImage);
    catItem.append(catLikeIcon);
    catList.append(catItem);
  }

  function showData(data) {
    for (let i = 0; i < data.length; i += 1) {
      createCatImage(data[i]);
    }
  }

  async function getData() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=20&size=thumb');
    const data = await res.json();
    showData(data);
  }

  getData();

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
