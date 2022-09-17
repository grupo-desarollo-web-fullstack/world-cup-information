const header = () => {
  const menuIcon = document.getElementById('menuIcon');

  const menuHeader = document.getElementById('menuHeader');
  const animateIcon = () => menuIcon.classList.toggle('menu-icon--rotated');
  const openMenu = () => {
    menuHeader.classList.toggle('menu--hamburger-open');
    animateIcon();
  }
  const closeMenu = () => {
    menuHeader.classList.remove('menu--hamburger-open');
    animateIcon();
  }
  const handleClickHeader = e => e.target.nodeName === 'A' && closeMenu();
  menuIcon.addEventListener('click', openMenu);
  menuHeader.addEventListener('click', handleClickHeader)
}

export default header;