let tabsLis=document.querySelectorAll('.tabs li'),
    boxes=document.querySelectorAll('.content .box'),
    search=document.querySelector('#search'),
    searchBox=document.querySelector('#search-box'),
    exit=document.querySelector('#exit'),
    settings=document.querySelector('#settings'),
    settingsBox=document.querySelector('#settings-box'),
    back=document.querySelector('#back'),
    chatBox=document.querySelector('#chat-box'),
    open=document.querySelector('.open')

tabsLis.forEach((tab)=>{
    //add click for each li
    tab.addEventListener('click',function(e){
        tabsLis.forEach((tab)=>{
            //on click remove class active from all li
            tab.classList.remove("active");
        });
        //add class active on the li
        e.currentTarget.classList.add('active');
        boxes.forEach((box)=>{
            //remove class active for all content section on click
            box.classList.remove('active');
            //select the section that contain the class of data-whatsapp and put class active on list
             document.querySelector('.'+ e.currentTarget.dataset.whatsapp).classList.add('active');
        });
    });
});

search.addEventListener('click',()=>{
    searchBox.classList.add('show');
});

exit.addEventListener('click',()=>{
    searchBox.classList.remove('show');
});

settings.addEventListener('click',()=>{
    settingsBox.classList.add('show');
});

(document.body || document.documentElement).addEventListener('click',function(event){
    //If the element on which the click event occurs is not setting box or setting btn,then hide it
    if((event.target !==settingsBox) && (event.target !=settings))
        settingsBox.classList.remove('show');
},false);

back.addEventListener('click',()=>{
    chatBox.classList.add('hide');
});
open.addEventListener('click',()=>{
    chatBox.classList.remove('hide');
});