// Фунцкия отправки fetch запросов
import {infoModal, loader} from "./_vars";

async function sendData(data, url) {
  return await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'multipart/form-data'},
    body: data,
  })
}

// показ/скрытие модалки ошибки

const toggleLoader = () => {
  loader.classList.toggle('hidden')
}

const showInfoModal = (responseText) => {
  infoModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('info-modal')) {
      infoModal.classList.add('hidden')
    }

  })
  const modalText = infoModal.querySelector('.info-modal__content-text')
  modalText.textContent = responseText
  infoModal.classList.remove('hidden')
}


// Обрезка длинного текста на определенную длину
const cutString = (stringArray, stringLength) => {
  stringArray.forEach(str => {
    let cutLength = 0
    stringLength ? cutLength = stringLength : cutLength = +str.dataset.shear

    if (cutLength && cutLength < str.textContent.length) {
      str.textContent = `${str.textContent.substring(0, cutLength)}...`
    }
  })
}

// показ/скрытие мобильного меню

const burgerMobile = document.querySelector('.header__burger-mobile');
const closeMenu = document.querySelector('.header__close-mobile');
const header = document.querySelector('.header');

burgerMobile.addEventListener('click', ()=>{
  header.classList.add('_mobile-active');
  document.body.style.overflow = 'hidden'

})
closeMenu.addEventListener('click',()=> {
  header.classList.remove('_mobile-active');
  document.body.style.overflow = ''
} )


export {
  sendData,
  toggleLoader,
  showInfoModal,
  cutString
}
