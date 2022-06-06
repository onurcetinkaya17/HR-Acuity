const swiperOrg = new Swiper('#organizations-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    items: 6,
    autoplay: {
        delay: 1700,
        disableOnInteraction: true,
        },
  
      breakpoints: {
        100: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        767: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1100: {
          slidesPerView: 6,
          spaceBetween: 0,
        },
      },
  });

const swiperEasy = new Swiper('#easily-document-slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    items: 4,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 800,
  });
 

function changeSlide(btn){
  swiperEasy.slideTo(btn.id,500,false);
}

const swiperTesti = new Swiper('#testimonial-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    items: 3,
    navigation: {
      nextEl: '#swiperbuttonnext',
      prevEl: '#swiperbuttonprev',
    },
  });

  //accordion
const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

//Popups 
//esc popup close
window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
    video_close();
    popup_close();
  }
}

//The Video Popup
// Get the modal
var modal = document.getElementById("light");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    lightbox_close();
  }
}
function lightbox_open(){
  var lightBoxVideo = document.getElementById("videoHR");
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.currentTime=0;
  lightBoxVideo.play();
}
function lightbox_close(){
  var lightBoxVideo = document.getElementById("videoHR");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}
//See How It Works Video Popup
function video_open(){
  var howItWorksVideo = document.getElementById("howItWorks");
  document.getElementById('open').style.display = 'block';
  document.getElementById('close').style.display = 'block';
  howItWorksVideo.currentTime=0;
  howItWorksVideo.play();
}
function video_close(){
  var howItWorksVideo = document.getElementById("howItWorks");
  document.getElementById('open').style.display = 'none';
  document.getElementById('close').style.display = 'none';
  howItWorksVideo.pause();
}
//Book A Demo Form Popup
function popup_open() {
  document.getElementById('popup').style.display = 'flex';
}
function popup_close() {
  document.getElementById('popup').style.display = 'none';
}
//Form Validations
/*function onSubmit(){
  var email= document.getElementById("email").value;
  if(isEmpty(email)){
    document.getElementById("emailEmptyError").classList.add("empty-email");
  }
  document.getElementById("emailFormatError").classList.add("email");
}


//required block
document.addEventListener('invalid', (function () {
  return function (e) {
    e.preventDefault();
    document.getElementById("email").focus();
  };
})(), true);

//Helper Functions
function isEmpty(strValue)
{
      // Test whether strValue is empty
    if (!strValue || strValue.trim() === "" || (strValue.trim()).length === 0) {
        return true;
    }
    else {
    return false;}
}
function isEmailValid(strValue)
{
      // Test whether strValue is empty
    if (!strValue || strValue.trim() === "" || (strValue.trim()).length === 0) {
        return true;
    }
    else {
    return false;}
}*/

//Form
const form = document.getElementById('form');
const email = document.getElementById('email');
const numberofemp = document.getElementById('numberofemp');
const iminterestedin = document.getElementById('iminterestedin');
const formbutton = document.getElementById('formbutton');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const numberofempValue = numberofemp.value.trim();
  const iminterestedinValue = iminterestedin.value.trim();

  if(emailValue === '') {
      setError(email, 'Please complete this required field.');
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Email must be formatted correctly.');
  } else {
      setSuccess(email);
  }

  if(numberofempValue == '0') {
    setError(numberofemp, 'Please select an option from the dropdown menu.')
  }
  else {
    setSuccess(numberofemp);
  }

  if(iminterestedinValue == '0') {
    setError(iminterestedin, 'Please select an option from the dropdown menu.')
    }
  else {
    setSuccess(iminterestedin);
  }
}
function isEmpty(strValue)
{
      // Test whether strValue is empty
    if (!strValue || strValue.trim() === "" || (strValue.trim()).length === 0) {
        return true;
    }
    else {
    return false;}
}