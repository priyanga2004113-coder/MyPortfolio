document.querySelectorAll('section').forEach(sec=>{
  sec.style.display='none';
});
 function toggleMenu(){
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
 }

  document.getElementById('home').style.display='block';

  function showSection(id){
    document.querySelectorAll('section').forEach(sec=>{
      sec.classList.remove('active');
      sec.style.display='none';
    });

    const target=document.getElementById(id);
    target.style.display='block';
    target.classList.add('active');

    window.scrollTo(0,0);
  }
