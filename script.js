//Picture-------------------
function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
      }  
}   
ibg();
//--------------------------------------------------------------

//Click-------------------
let photo = document.querySelectorAll('.team');
photo.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
  photo.forEach(el=>{ el.classList.remove('_click-mode'); });
  item.classList.add('_click-mode');
})
});

let left = document.querySelector('.left');
let right = document.querySelector('.right');

right.addEventListener("click", function(e){
  let active = document.querySelector('._click-mode');
  let id = Number(active.dataset.id);
  if(id == 4) { id = 0;};
  let newphoto = document.querySelector('.team[data-id="'+(id + 1)+'"]');
  newphoto.classList.add('_click-mode');
  active.classList.remove('_click-mode');
});
left.addEventListener("click", function(e){
  let active = document.querySelector('._click-mode');
  let id = Number(active.dataset.id);
  if(id == 1) { id = 5;};
  let newphoto = document.querySelector('.team[data-id="'+(id - 1)+'"]');
  newphoto.classList.add('_click-mode');
  active.classList.remove('_click-mode');
});
//--------------------------------------------------------------

//Menu--------
const iconMenu = document.querySelector('.nav-icon');
const bodyMenu = document.querySelector('.nav-menu');
const navMenu = document.querySelector('.nav');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    bodyMenu.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
  });
}
document.addEventListener('click', function(e) {
  if(e.target.tagName === 'A') {
    bodyMenu.classList.remove('_active');
    iconMenu.classList.remove('_active');
    document.body.classList.remove('_lock');
  }
});
//--------------------------------------------------------------

//Animation all content--------
let scrollelem = document.querySelectorAll('.anim-item');

window.addEventListener('scroll',scrollanimate);
function scrollanimate(){
    for(let i = 0; i<scrollelem.length; i++){
        const elem = scrollelem[i];
        const elemh = elem.offsetHeight;
        const elemposition = offset(elem).top;
        const startanimate = 4;

        let point = window.innerHeight - elemh / startanimate;
        if (elemh > window.innerHeight){
            point = window.innerHeight - window.innerHeight / startanimate;
        }

        if((pageYOffset > elemposition - point && pageYOffset < (elemposition + elemh))){
            elem.classList.add('_activean');
        } else{
          if(!elem.classList.contains('_no-hide')){
            elem.classList.remove('_activean');
          }
        }
    }
}
function offset(el){
    const g = el.getBoundingClientRect();
    const leftscrl = window.pageXOffset || document.documentElement.scrollLeft;
    const topscrl = window.pageYOffset|| document.documentElement.scrollTop;
    return {top: g.top + topscrl, left: g.left + leftscrl}
}
scrollanimate();

//--------------------------------------------------------------

//Picture selection--------
const list = document.querySelectorAll('.shop-pic-other__products');
let picturesbox = document.querySelector('.shop-pic__picture');
let index = 0;
let number = document.querySelector('.number2');
 list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('_activebox'); });
        item.classList.add('_activebox');
        let url = item.dataset.src;
        index = item.dataset.index;
        text.innerHTML = `${json[index][name]}`;
        number.innerHTML = `${Number(index) + 1}/4`;
        return picturesbox.style.backgroundImage = `url(${url})`, index;
    })
});
//--------------------------------------------------------------

//Text selection--------
let json = [{
  "Description":"Easy to ride, care free surfing craft that's fun for everyone, paddles well, super fast down the line and great for any level of surfing depending on who rides it. The Donny Stoker, a rework on design from stokesys first ever pro model. A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression.",
  "Features":"While each of five individuals played a different role in the incident in question, the actions of all of them resulted in the death of Tyre Nichols and they are all responsible,” said Shelby County District Attorney General Steve Mulroy at a press conference on Thursday afternoon",
  "Dimensions":"The news today from Memphis officials that these five officers are being held criminally accountable for their deadly and brutal actions gives us hope as we continue to push for justice for Tyre,” the attorneys and family said in a statement following the arrests.",
},{
  "Description":"It was so violently intentional. There really was no purpose or basis to be that violent or brutal against a defenseless human being. I mean, this is a citizen. These Memphis police officers are charged with protecting their citizens and instead they literally unabashedly beat him for over three minutes,” attorney Antonio Romanucci told TIME on Tuesday.",
  "Features":"In addition to second-degree murder, the officers faced charges of official misconduct, aggravated assault, aggravated kidnapping, and official oppression. Two firefighters involved in the traffic stop have also been put on leave.",
  "Dimensions":"Nichols worked at a FedEx facility, had a 4-year-old son, and had his mother’s name tattooed on his arm, according to the New York Times. He also had Crohn’s disease and suffered from severe weight loss, ABC News reported. Officials said his family described him as a “cheerful” individual who loves skateboarding and enjoying sunsets over Shelby Farms Park on the city’s east side.",
},{
  "Description":"In an initial description of the incident, police wrote in a Jan. 8 statement that as officers attempted to make a traffic stop for reckless driving, a “confrontation occurred, and the suspect fled the scene on foot.”",
  "Features":"The statement added that officers pursued Nichols and in attempting to do so “another confrontation occurred” and that he was later apprehended. The statement noted that Nichols “complained of having a shortness of breath” and he was transported to hospital in critical condition.",
  "Dimensions":"The Nichols family hired a forensic pathologist to review the case and his family’s lawyers say that Nichols’s injuries are consistent with what is shown on the video, following a preliminary independent autopsy. “There were large amounts of blood found in the deep tissues of his body,” Romanucci says.",
},{
  "Description":"The arrest video has not yet been released to the public but the family’s lawyers expect that the prosecution will release the footage within two weeks. On Thursday, Memphis police chief Cerelyn Davis called for calm ahead of the release of what she called the “heinous, reckless, and inhumane” death of Tyre Nichols.",
  "Features":"A source told CNN that authorities expect to release the footage on Friday. Law enforcement across the U.S. are bracing for demonstrations and unrest following the video’s release, multiple sources told CNN.",
  "Dimensions":"“What is so alarming about the video is the escalation from the moment they encountered Tyre—and that escalation only increases,” Crump says. “The first words that you hear Tyre utter is, ‘what did I do?’ And there’s never an answer for that.”",
}];

let text = document.querySelector('.shop-description-about-the-product');
let menu = document.querySelectorAll('.shop-description-menu__text');
let name = 'Description';
menu.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
  menu.forEach(el=>{ el.classList.remove('_choose'); });
  item.classList.add('_choose');
  console.log(index);
  name = item.dataset.text;
  return text.innerHTML = `${json[index][name]}`, name;
})
});
//--------------------------------------------------------------

//Click product--------
let leftprod = document.querySelector('.butons__left');
let righprod = document.querySelector('.butons__right');

righprod.addEventListener("click", function(e){
  let active = document.querySelector('._activebox');
  let id = Number(active.dataset.index) + 1;
  console.log(id);
  if(id == 4) { id = 0;};
  let newphoto = document.querySelector('.shop-pic-other__products[data-index="'+id+'"]');
  newphoto.classList.add('_activebox');
  active.classList.remove('_activebox');
  let url = newphoto.dataset.src;
  text.innerHTML = `${json[id][name]}`;
  number.innerHTML = `${Number(id) + 1}/4`;
  picturesbox.style.backgroundImage = `url(${url})`;
});
leftprod.addEventListener("click", function(e){
  let active = document.querySelector('._activebox');
  let id = Number(active.dataset.index) - 1;
  console.log(id);
  if(id == -1) { id = 3;};
  console.log(id);
  let newphoto = document.querySelector('.shop-pic-other__products[data-index="'+id+'"]');
  newphoto.classList.add('_activebox');
  active.classList.remove('_activebox');
  let url = newphoto.dataset.src;
  text.innerHTML = `${json[id][name]}`;
  number.innerHTML = `${Number(id)+1}/4`;
  picturesbox.style.backgroundImage = `url(${url})`;
});
//--------------------------------------------------------------