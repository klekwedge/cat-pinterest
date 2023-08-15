function getCatsImage() {
  async function getData() {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=20&size=thumb"
    );
    const data = await res.json();
    showData(data);
  }

  getData();

  const showData = function (data) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      createCatImage(data[i]);
    }
  };

  const createCatImage = function (newCat) {
    const catList = document.querySelector(".cats__list");

    const catItem = document.createElement("li");
    catItem.classList.add("cats__item");

    const catImage = document.createElement("img");
    catImage.classList.add("cats__image");
    catImage.src = newCat.url;
    catImage.alt = "Cat image";

    const catLikeIcon = document.createElement("img");
    catLikeIcon.classList.add("cats__like");
    catLikeIcon.src = "assets/svg/like.png";
    catLikeIcon.alt = "Like image";

    catItem.append(catImage);
    catItem.append(catLikeIcon);
    catList.append(catItem);
  };
}

export default getCatsImage;
