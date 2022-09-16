const header = () => {
  const menuIcon = document.getElementById('menuIcon');
  const menuIconAnimation = () => menuIcon.classList.toggle('menu-icon--rotated');
  menuIcon.addEventListener('click', menuIconAnimation)
};




export default header;