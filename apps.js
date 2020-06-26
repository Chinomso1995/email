//scroll event for mobile devices
window.addEventListener('scroll', ()=>{
  const mq = window.matchMedia( "(max-width: 500px)" );
  if(mq.matches){
    window.scrollTo(0, 626)
  }else{
    window.scrollTo();
  } 
});
//filter emails
const searchEmail = document.querySelector('.search-email');

searchEmail.addEventListener('keyup', filterEmail);

function filterEmail (e){
  const emailText = e.target.value.toLowerCase();
  document.querySelectorAll('.email-body').forEach((email) =>{
    const emailItem = email.innerHTML;
    if(emailItem.toLowerCase().indexOf(emailText) !== -1){
      email.style.display = '';
    }else{
      email.style.display='none'
    }
  })
  

}

