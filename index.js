// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


$('#submit-form').submit((e) => {
            e.preventDefault()
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbz9rCeLxgvQ66mSxHfhLzLfMBXD3vwF2SG-vA4cCIasVkVQnEywuWP3tS86mqWxfE1k/exechttps://script.google.com/macros/s/AKfycbz9rCeLxgvQ66mSxHfhLzLfMBXD3vwF2SG-vA4cCIasVkVQnEywuWP3tS86mqWxfE1k/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                success: function (response) {
                    alert("form submitted successfully")
                    window.location.reload()
                },
                error: function (err) {
                    console.log(err)
                }
            })
        })



document
  .getElementById('submit-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous error messages
    document
      .querySelectorAll('.error-message')
      .forEach((el) => (el.style.display = 'none'));

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Name validation
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
      document.getElementById('emailError').textContent =
        'Valid email is required';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }

    // Message validation
    if (message === '') {
      document.getElementById('messageError').textContent =
        'Message is required';
      document.getElementById('messageError').style.display = 'block';
      isValid = false;
    }

    // If valid, send email
    if (isValid) {
      const params = { name, email, subject, message };
      const serviceId = 'service_j30ojo4';
      const templateId = 'template_gy1ewio';

      emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
          document.getElementById('contactForm').reset();
          alert('Your message sent successfully!');
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  });
