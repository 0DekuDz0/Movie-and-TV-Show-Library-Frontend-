  const btnTendency = document.getElementById('tendency');
  const btnSearch = document.getElementById('search');
  const btnList = document.getElementById('list');
  let btnSign = document.querySelectorAll('.sign-btn'); 
  let btnLog = document.querySelectorAll('.log-btn')
  let btnExit = document.querySelectorAll('.exit');
  const iconSearch = document.getElementById('icon-search');
  const btnAddMovie = document.getElementById('add-in-list')

  const tendency = document.querySelector('.tendency');
  const search = document.querySelector('.search');
  const list = document.querySelector('.list');
  const emptyList = document.querySelector('.empty-list');
  const noLogged = document.querySelector('.no-logged');
  const signSection = document.getElementById('sign-in')
  const logSection = document.getElementById('log-in');
  const loadingSection = document.querySelector('.loading');
  const navbar = document.getElementById("navBar")

  


let datalist = document.querySelector('datalist');

let isLogged = true;

let sectionList = [tendency,search,list,emptyList,noLogged,signSection,logSection];
let btnSectionList = [btnTendency,btnSearch,btnList];

let favList = [1];

function toggleSection(nameSection,sectionName){
  sectionList.forEach((section)=>{
    if(section === nameSection){
      section.className = `${sectionName}`
    }else{
      section.className = 'visible'
    }

  })
}

function toggleBtnColor(namebtn){
  btnSectionList.forEach((btn)=>{
    if(btn === namebtn){
      btn.className = `red`
    }else{
      btn.className = 'black'
    }
  })
}


let lastSection = tendency;
let lastSectionName = 'tendency';

btnTendency.addEventListener('click',()=>{
  toggleSection(tendency,'tendency')
  lastSection = tendency;
  lastSectionName = 'tendency'
  toggleBtnColor(btnTendency)
})
btnSearch.addEventListener('click',()=>{
  toggleSection(search,'search')
  lastSection = search;
  lastSectionName = 'search'
  toggleBtnColor(btnSearch)
})
btnList.addEventListener('click',()=>{
  if(isLogged && favList.length != 0){
      toggleSection(list,'list')
      lastSection = list;
      lastSectionName = 'list'
      toggleBtnColor(btnList)
  }else{
    if(isLogged === false){
      toggleSection(noLogged,'no-logged')
      lastSection = noLogged;
      lastSectionName = 'no-logged'
      toggleBtnColor(btnList)
    }
    if(favList.length === 0){
      toggleSection(emptyList,'empty-list')
      lastSection = emptyList;
      lastSectionName = 'empty-list'
      toggleBtnColor(btnList)
    }
  }

})
btnSign.forEach((item)=>{
  item.addEventListener('click',()=>{
    toggleSection(signSection,'sign-log')
  })
  })

  btnLog.forEach((item)=>{
    item.addEventListener('click',()=>{
      toggleSection(logSection,'sign-log')
    })
  })
    
   btnExit.forEach((item)=>{
    
    item.addEventListener('click',()=>{
    toggleSection(lastSection,lastSectionName);
  });
    })

    btnAddMovie.addEventListener('click',()=>{
      toggleSection(search,'search')
    lastSection = search;
    lastSectionName = 'search'
    
    })
    

window.addEventListener('load',()=>{
  loadingSection.className = 'visible';
  navbar.classList.toggle('visible');
  toggleSection(tendency)
})


