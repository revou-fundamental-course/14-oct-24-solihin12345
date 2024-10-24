//mengganti nama di home page
let tombolGantiNama = document.getElementById("home-a")

function replaceName (){
    let nama = prompt("Masukkan Nama Anda","")
    let namaHome = document.getElementById("nama-home").innerHTML = nama
}


tombolGantiNama.addEventListener("click",function(){
replaceName()
})
//mengganti nama di home page -END
// untuk bagian kotak message
function setMassage (nama,birthDate,email,gender,massage){
    document.getElementById("sender-full-name").innerHTML = nama
    document.getElementById("sender-birth-date").innerHTML = birthDate
    document.getElementById("sender-email").innerHTML=  email
    document.getElementById("sender-gender").innerHTML= gender
    document.getElementById("sender-messages").innerHTML= massage
}

function validationFrom (){
    const name= document.forms["message-form"]["full-name"].value
    const birth= document.forms["message-form"]["birth-day"].value
    const gmail= document.forms["message-form"]["email"].value
    const gende= document.forms["message-form"]["gender"].value
    const messag= document.forms["message-form"]["area"].value

    if (name == "f" || birth== "" || gmail == "" || gende == "" || messag == ""){
        alert("Mohon Isi Semua!! Tidak Boleh Ada Yang Kosong")
        return false
    }

    setMassage(name,birth,gmail,gende,messag)
    return false
}






// banner scroll
let slideIndex = 1


function plusDiv (n){
    showIndex(slideIndex += n)
}

function showIndex (n){
    let i 
    let banner = document.querySelectorAll(".banner-home > img")
    if (n>banner.length){slideIndex=1}
    if (n< 1){slideIndex=banner.length}
    for (i = 0; i < banner.length; i++) {
        banner[i].style.display = "none"
    }
    banner[slideIndex-1].style.display="block"
    // console.info(slideIndex)
}

let buttonBanner = document.getElementsByClassName("button-scrol")
buttonBanner[0].addEventListener("click",function(){
    plusDiv(+1)
    showIndex(slideIndex)
})
buttonBanner[1].addEventListener("click",function(){
    plusDiv(-1)
    showIndex(slideIndex)
})

showIndex(slideIndex)


// animasi nama
let namaElement = document.getElementById("nama-home");
namaElement.classList.add("animate-name");

// Hilangkan animasi setelah selesai
setTimeout(() => {
    namaElement.classList.remove("animate-name");
}, 1000); // durasi animasi 1 detik

// animasi ketikkan
// Animasi teks diketik
const typedText = document.getElementById('typed-text');
const words = ["Silahkan masukkan nama anda!"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;
let typingSpeed = 150;

function type() {
    currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typedText.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1000); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        wordIndex = (wordIndex + 1) % words.length;
        isDeleting = false;
    }

    setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

document.addEventListener('DOMContentLoaded', type);

// Add scroll event listener
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  

  // Scroll effect for profile name
window.addEventListener('scroll', function() {
    const profileName = document.querySelector('.profile-name');
    const profilePosition = profileName.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
  
    if (profilePosition < screenPosition) {
      profileName.classList.add('fade-in');
    }
  });
  
  // Add CSS for fade-in effect
  const style = document.createElement('style');
  style.innerHTML = `
    .fade-in {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
  
    .profile-name {
      opacity: 0;
      transform: translateY(50px);
    }
  `;
  document.head.appendChild(style);
  