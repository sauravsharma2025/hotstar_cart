let data_cart=[
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
        age:28,
        movie_title:"baghi",
        duration:'2hours 40 min ',
        movie_type:"Action ",
        lang:"Hindi ",
        year:2022,
        desc:"this is very nice movie i watch it many time....",
        city:"gwalior"
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
        age:28,
        movie_title:"Welcome",
        duration:'2hours 40 min ',
        movie_type:"Action ",
        lang:"Hindi ",
        year:2022,
        desc:"this is very nice movie i watch it many time....",
        city:"gwalior"
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1714/1121714-v-fd6318f27562",
        age:28,
        movie_title:"Run",
        duration:'2hours 40 min ',
        movie_type:"Action ",
        lang:"Hindi ",
        year:2022,
        desc:"this is very nice movie i watch it many time....",
        city:"gwalior"
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
        age:28,
        movie_title:"happy Family",
        duration:'2hours 40 min ',
        movie_type:"Action ",
        lang:"Hindi ",
        year:2022,
        desc:"this is very nice movie i watch it many time....",
        city:"gwalior"
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v",
        age:28,
        movie_title:"Dil",
        duration:'2hours 40 min ',
        movie_type:"Action ",
        lang:"Hindi ",
        year:2022,
        desc:"this is very nice movie i watch it many time....",
        city:"gwalior"
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
        age:28,
        movie_title:"Jigar",
        duration:'2hours 40 min ',
        movie_type:"Action ",
        lang:"Hindi ",
        year:2022,
        desc:"this is very nice movie i watch it many time....",
        city:"gwalior"
    }
]
let container=document.getElementById('container');
let card= document.createElement('div');
card.className='card';
card.style.display='flex';
card.style.gap='10px'
card.style.justifyContent='center';
card.style.position='relative';

for(let i=0;i<data_cart.length;i++){
  
let box=document.createElement('div');
box.className='box';
let img=document.createElement('img');
img.src=data_cart[i].img;
img.width=200;
img.height=200;
//data over image
let movie_title=document.createElement('h3');
movie_title.innerText=data_cart[i].movie_title;
let duration=document.createElement('span');
duration.innerText=data_cart[i].duration;
let movie_type=document.createElement('span');
movie_type.innerText=data_cart[i].movie_type;
let lang=document.createElement('span');
lang.innerText=data_cart[i].lang;
let year=document.createElement('span');
year.innerText=data_cart[i].year;
let desc=document.createElement('p');
desc.innerText=data_cart[i].desc;
let watchNow=document.createElement('p');
watchNow.innerHTML=`<span class="material-icons">
play_arrow
</span>Watch Now`;
let watchList=document.createElement('p');
watchList.innerHTML=`<span class="material-icons">
add
</span>Watch List`;
let content= document.createElement('div');
content.appendChild(movie_title);
content.appendChild(duration);
content.appendChild(movie_type);
content.appendChild(lang);
content.appendChild(year);
content.appendChild(desc);
content.appendChild(watchNow);
content.appendChild(watchList);
//content is having all content of over img
content.style.position='absolute';
content.style.bottom='0'
content.style.color='white';
content.style.backgroundColor='#242a40';
content.style.fontSize='20px'
content.style.width='300px';


box.appendChild(content);
content.style.display='none'
img.addEventListener('mouseover',bigImg)
img.addEventListener('mouseout',normalImg)
box.appendChild(img);
card.appendChild(box);
container.appendChild(card);
function bigImg(x){
    img.style.height = "300px";
    img.style.width = "300px";
    content.style.display='block'
}
function normalImg(x) {
    img.style.height = "200px";
    img.style.width = "200px";
    content.style.display='none'
  }
}