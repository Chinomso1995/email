//scroll event for mobile devices
window.addEventListener('scroll', ()=>{
  const mq = window.matchMedia( "(max-width: 500px)" );
  if(mq.matches){
    window.scrollTo(0, 626)
  }else{
    window.scrollTo();
  } 
});
//change text on smaller screens;
const firstText = document.querySelector('tr:nth-of-type(3) td:first-of-type');
const secondText = document.querySelector('tr:nth-of-type(4) td:nth-of-type(2)');
const thirdText = document.querySelector('tr:nth-of-type(5) td:nth-of-type(2)');
const fourthText = document.querySelector('tr:nth-of-type(5) td:nth-of-type(3)');
const fifthText = document.querySelector('tr:nth-of-type(6) td:nth-of-type(2)');
const sixthText = document.querySelector('tr:nth-of-type(6) td:nth-of-type(3)');
const mq = window.matchMedia( "(max-width: 500px)" );
if(mq.matches){
  firstText.textContent = 'bbb.bbbb@example.com';
  secondText.textContent = 'xxx@example.com, www.www@example.com'
  thirdText.textContent = 'vvv.vvv@example.com, uuu@example.com, ...'
  fourthText.textContent = '[ HR-888 ] Notice of official announcement'
  fifthText.textContent = 'sss@example.com, rrr.rrrr@example.com, ...'
  sixthText.textContent = '[HR-887(Revised: Office Expansion Project Tea...'
}
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

