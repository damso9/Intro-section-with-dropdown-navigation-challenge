const iconMenu = document.querySelector('#icon-menu')
const closeMenu = document.querySelector('.close-menu')
const sideToggle = document.querySelector('.side-toggle')
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')
let featureDropdown = false
let companyDropdown = false


// Toggle Dropdown Selectors
const featureDropdownImg = document.querySelector('.feature-dropdown-img')
const featureDropdownUl = document.querySelector('.feature-dropdown')

const featureDesktopDropdownImg = document.querySelector('.featureDesktop-dropdown-img')
const featureDesktopDropdownUl = document.querySelector('.featureDesktop-dropdown')

const companyDesktopDropdownImg = document.querySelector('.companyDesktop-dropdown-img')
const companyDesktopDropdownUl = document.querySelector('.companyDesktop-dropdown')

// for Desktop
const feature = document.querySelector('#feature')
const company = document.querySelector('#company')

// for Mobile
const featureMobile = document.querySelector('#feature-mobile')
const companyMobile = document.querySelector('#company-mobile')

featureDesktopDropdownUl.classList.add('hide')
companyDesktopDropdownUl.classList.add('hide')

const companyDropdownImg = document.querySelector('.company-dropdown-img')
const companyDropdownUl = document.querySelector('.company-dropdown')
iconMenu.onclick = () => {
    sideToggle.style.width = '60%'
    overlay.style.display = 'block'
    companyDropdownUl.classList.add('hide')
    featureDropdownUl.classList.add('hide')

}
closeMenu.onclick = (e) => {
    console.log('closeMenu')
    sideToggle.style.width = '0'
    overlay.style.display = 'none'

  
 
    console.log('sideToggle removed')

}


const toggleDropdown = (elementImg, elementUl,status) => {

    
    if (status) {
        elementImg.setAttribute('src', './images/icon-arrow-down.svg')

        status = !status
        elementUl.classList.toggle('hide')
    } else {
        elementImg.setAttribute('src', './images/icon-arrow-up.svg')

        status = !status
        elementUl.classList.toggle('hide')

    }
}
companyDropdownImg.onclick = (e) => {
    if (companyDropdown) {
    toggleDropdown(companyDropdownImg,companyDropdownUl,companyDropdown)
        companyDropdown = false
    } else {
    toggleDropdown(companyDropdownImg,companyDropdownUl,companyDropdown)
        companyDropdown = true
    }

}
featureDropdownImg.onclick = (e) => {
    if (featureDropdown) {
    toggleDropdown(featureDropdownImg,featureDropdownUl,featureDropdown)
        featureDropdown = false
    } else {
    toggleDropdown(featureDropdownImg,featureDropdownUl,featureDropdown)

        featureDropdown = true
    }

}
featureDesktopDropdownImg.onclick = (e) => {
    if (featureDropdown) {
        toggleDropdown(featureDesktopDropdownImg,featureDesktopDropdownUl,featureDropdown)
            featureDropdown = false
        } else {
            toggleDropdown(featureDesktopDropdownImg,featureDesktopDropdownUl,featureDropdown)
    
            featureDropdown = true
        }
}

companyDesktopDropdownImg.onclick = (e) => {
    if (companyDropdown) {
        toggleDropdown(companyDesktopDropdownImg,companyDesktopDropdownUl,companyDropdown)
            companyDropdown = false
        } else {
            toggleDropdown(companyDesktopDropdownImg,companyDesktopDropdownUl,companyDropdown)
    
            companyDropdown = true
        }
}
company.onclick = (e) => {
    if (companyDropdown) {
        toggleDropdown(companyDesktopDropdownImg,companyDesktopDropdownUl,companyDropdown)
            companyDropdown = false
        } else {
            toggleDropdown(companyDesktopDropdownImg,companyDesktopDropdownUl,companyDropdown)
    
            companyDropdown = true
        }
}
feature.onclick = (e) => {
    if (featureDropdown) {
        toggleDropdown(featureDesktopDropdownImg,featureDesktopDropdownUl,featureDropdown)
            featureDropdown = false
        } else {
            toggleDropdown(featureDesktopDropdownImg,featureDesktopDropdownUl,featureDropdown)
    
            featureDropdown = true
        }
}
companyMobile.onclick = (e) => {
    if (companyDropdown) {
    toggleDropdown(companyDropdownImg,companyDropdownUl,companyDropdown)
        companyDropdown = false
    } else {
    toggleDropdown(companyDropdownImg,companyDropdownUl,companyDropdown)
        companyDropdown = true
    }

}
featureMobile.onclick = (e) => {
    if (featureDropdown) {
    toggleDropdown(featureDropdownImg,featureDropdownUl,featureDropdown)
        featureDropdown = false
    } else {
    toggleDropdown(featureDropdownImg,featureDropdownUl,featureDropdown)

        featureDropdown = true
    }

}