let menu=document.getElementsByClassName("menu")[0];
let main=document.getElementsByClassName("main")[0];

menu.addEventListener('click',function(){
    if(menu.classList.contains("menu1")===false)
    {
        main.style.display ="block";
        menu.classList.add("menu1");
        menu.style.border ="2px dotted rgb(211, 0, 0)";

    }else{
        main.style.display ="none";
        menu.classList.remove("menu1");
        menu.style.border ="2px solid var(--bkg-color)";
    }
})

console.log(main);