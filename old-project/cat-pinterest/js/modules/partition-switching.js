function partitionSwitching() {
  const menuButtons = document.querySelectorAll('.menu__button');
  menuButtons.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
      menuButtons.forEach((buttonMenu) => {
        buttonMenu.classList.remove('_active');
      });

      menuButton.classList.add('_active');
    });
  });
}

export default partitionSwitching;
