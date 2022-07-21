const fadeIn = document.querySelectorAll(".fade-in");
const slideIn = document.querySelectorAll(".fade-left .fade-right")


const options = {
  threshold: 0,
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) 
{
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else{
      entry.target.classList.add("appear")
      appearOnScroll.unobserve(entry.target)
    }
  });
;},
options);

fadeIn.forEach(element => {
  appearOnScroll.observe(element);
});

slideIn.forEach(element => {
  appearOnScroll.observe(element);
});



