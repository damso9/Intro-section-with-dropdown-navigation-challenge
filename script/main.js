const iconMenu = document.querySelector('#icon-menu')
const closeMenu = document.querySelector('.close-menu')
const sideToggle = document.querySelector('.side-toggle')
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')


// Toggle Dropdown Selectors
const featureDropdownImg = document.querySelector('.feature-dropdown-img')
const featureDropdownUl = document.querySelector('.feature-dropdown')
// @hideToggle hides the display of any element passed to it
// const hideToggle = (element) => {
//     // element.style.display = 'none';

// }
// const showToggle = (element) => {
//     // element.style.display = 'block'
//     // element.style.width = '0'
// }


iconMenu.onclick = () => {
    sideToggle.style.width = '60%'
    overlay.style.display = 'block'


}
closeMenu.onclick = (e) => {
    console.log('closeMenu')
    sideToggle.style.width = '0'
    overlay.style.display = 'none'

  
 
    console.log('sideToggle removed')

}

featureDropdownImg.onclick = () => {
    console.log('feature dwon do')
    featureDropdownUl.classList.toggle('hide')
}