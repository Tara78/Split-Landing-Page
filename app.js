const left= document.querySelector('.left');
const right= document.querySelector('.right');
const container= document.querySelector('.container');

left.addEventListener('mouseenter',()=>{
  container.classList.add('hover-left');
})

left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
})

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
})


// @media screen and(max - width: 800px) {
//     h1{
//     font-size: 2rem;
//     top:30%;
//   }
//   .btn{
//     padding:1.5rem;
//     width:12rem;
//   }

// }

