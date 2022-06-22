const pizzas=[
    {id:1, nombre:"MOZZARELLA",Imagen:"mozzarella.png",ingredientes:["Queso","Tomate","Cebolla"], precio:890},
    {id:2, nombre:"NAPOLITANA",Imagen:"napolitana.png", ingredientes:["Tomate","Queso","Oregano","Ajo"], precio:560},
    {id:3, nombre:"CARBONARA",Imagen:"carbonara.png", ingredientes:["Bacon","Huevo","Queso"], precio:1100},
    {id:4, nombre:"MARGARITA",Imagen:"margarita.png", ingredientes:["Ajo","Tomate","Albahaca","Queso"], precio:1300},
    {id:5, nombre:"FUGAZZETTA",Imagen:"fugazzetta.png", ingredientes:["Cebolla","Oregano","Aceituna","Mozarella"], precio:890},
    {id:6, nombre:"HAWAIANA",Imagen:"hawaiana.png", ingredientes:["Anana","Queso","Tomate"], precio:1200},
 ]

 document.addEventListener('DOMContentLoaded', ()=>{
const pizzaslocal=localStorage.setItem('pizzas',JSON.stringify(pizzas))})


const nombre=document.getElementById('nombre');
const imagen=document.getElementById('imagen');
const ingredientes=document.getElementById('ingredientes');
const precios=document.getElementById('precios');
const input=document.querySelector('input');
const button=document.querySelector('button');



const functionPizzas=(pizzas)=>{

    button.addEventListener('click',(e)=>{

        while(nombre.firstChild){
            nombre.removeChild(nombre.firstChild);}
            
        while(precios.firstChild){
            precios.removeChild(precios.firstChild)}

        while(imagen.firstChild ){
            imagen.removeChild(imagen.firstChild)}

        while(ingredientes.firstChild){
            ingredientes.removeChild(ingredientes.firstChild);}

     let resultado=input.value.toUpperCase()
     input.value=("")
     

     const buscarNombrePizza=pizzas.find(pizzas=>pizzas.nombre==resultado);
     if(buscarNombrePizza!=undefined){    
        
     const pizzaNombre=document.createTextNode(buscarNombrePizza.nombre);
     const pizzaPrecio=document.createTextNode(`$${buscarNombrePizza.precio}`);
     const pizzaImagen=document.createElement('img')
                pizzaImagen.setAttribute('src', buscarNombrePizza.Imagen);
     const pizzaIngredientes=document.createTextNode(buscarNombrePizza.ingredientes)
                
    
     
    
    

     nombre.appendChild(pizzaNombre);
     precios.appendChild(pizzaPrecio);
     imagen.appendChild(pizzaImagen)
     ingredientes.appendChild(pizzaIngredientes)

     }

     else{
     alert('No hay pizzas con el nombre ingresado')}

    })


}

functionPizzas(pizzas)


