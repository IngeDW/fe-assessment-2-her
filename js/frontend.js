// Retrieves tags to use in JavaScript
const introduction = document.querySelector('[data-introduction]');
const buttonIntro = document.querySelector('[href="#scrollToForm"]');
const profileForm = document.querySelector('[data-profileForm]');

// Positioning the form NOT in sight
profileForm.classList.add('gone');

// Function that changes the intro text to a form where the user can make a profile
buttonIntro.addEventListener('click', function(){
    event.preventDefault();                              
    profileForm.classList.toggle('showForm');         
    introduction.classList.add('introGone');      
});

// Const declarations of Form Fieldsets
const formPartOne = document.querySelector('[data-formPartOne]');
const formPartTwo = document.querySelector('[data-formPartTwo]');
const formPartThree = document.querySelector('[data-formPartThree]');
const formPartFour = document.querySelector('[data-formPartFour]');
const formPartFive = document.querySelector('[data-formPartFive]');

// Const declarations of the buttons
const firstButton = document.querySelector('[data-firstButton]');
const secondButton = document.querySelector('[data-secondButton]');
const thirdButton = document.querySelector('[data-thirdButton]');
const fourthButton = document.querySelector('[data-fourthButton]');
const formSubmit = document.querySelector('[data-formSubmit]');


//Removing the form fieldsets (except the first part)
formPartTwo.classList.add('away');
formPartThree.classList.add('away');
formPartFour.classList.add('away');
formPartFive.classList.add('away');
formSubmit.classList.add('away');

//Removing buttons
secondButton.classList.add('away');
thirdButton.classList.add('away');
fourthButton.classList.add('away');
formSubmit.classList.add('away');

// First part is filled in 
firstButton.addEventListener('click', function() {
  event.preventDefault();
  formPartTwo.classList.add('appear');
  formPartOne.classList.add('away');
  secondButton.classList.add('appear');
  firstButton.classList.add('away');
})

secondButton.addEventListener('click', function() {
  event.preventDefault();
  formPartThree.classList.add('appear');
  formPartTwo.classList.remove('appear');
  thirdButton.classList.add('appear');
  secondButton.classList.add('away');
})

thirdButton.addEventListener('click', function() {
  event.preventDefault();
  formPartFour.classList.add('appear');
  formPartThree.classList.remove('appear');
  fourthButton.classList.add('appear');
  thirdButton.classList.add('away');
})

fourthButton.addEventListener('click', function() {
  event.preventDefault();
  formPartFive.classList.add('appear');
  formPartFour.classList.remove('appear');
  formSubmit.classList.add('appear');
  fourthButton.classList.add('away');
})

formSubmit.addEventListener('click', function() {
  event.preventDefault();
  formPartFour.classList.add('away');
})