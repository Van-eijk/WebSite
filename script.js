const aside = document.getElementById("aside");

aside.addEventListener('mousemove', ()=>{
    aside.style.backgroundColor = "yellow";
});

aside.addEventListener('mouseleave', ()=>{
    aside.style.backgroundColor = "blue";
})