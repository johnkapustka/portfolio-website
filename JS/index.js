let options = {}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) 
{
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else{
      entry.target.classList.add("appear")
      observer.unobserve(entry.target)
    }
  });
;},
options);

const faded = document.querySelector("#profile-pic");
appearOnScroll.observe(faded);
