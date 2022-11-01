
// slider
const slider_content = document.querySelectorAll('.slider_content')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let index = 0


const mount = () => slider_content[index].classList.add('active')
const unmount = () => slider_content[index].classList.remove('active')
next.addEventListener('click', () => {
    unmount()
    if(index >= slider_content.length - 1){
        index = 0
    }
    else {

        index++
    }
    mount()
})

prev.addEventListener('click', () => {
    unmount()
    if(index <= 0){
        index = slider_content.length - 1
    }
    else {
        index--
    }
    mount()
})
mount()


// Corazon

let btncorazon = document.getElementById('corazon');
    corazon.addEventListener('click',mostraraCorazon);
    function mostraraCorazon(){
        document.getElementById('contenidoCoarazon').innerHTML = 
   
        `
        <section id="containerPrincipalCorazon" class="flter">
        <div class="containerCorazon">
            
            <div class="hijocontainercorazon">
                <img src="img/bolso-1.png" alt="" class="bolsoCorazon">
            </div>
           <div class="hijocontainercorazon">
            <h4 class="titleCarazon">Berkely</h2>
                
                <p>Wallet whith chain</p>
                
                <p>Style #29491 0294iqo1000</p>
                
                <span>REMOVE</span>
           </div>
        </div>
        <span class="linea2"></span>


        <div class="containerCorazon">
            <div class="hijocontainercorazon">
                <img src="img/bolso-1.png" alt="" class="bolsoCorazon">
            </div>
           <div class="hijocontainercorazon">
            <h4 class="titleCarazon">Berkely</h2>
                
                <p>Wallet whith chain</p>
                
                <p>Style #29491 0294iqo1000</p>
                
                <span>REMOVE</span>
           </div>
        </div>
    </section>
        `
        ocultarContainerPrincipal()
        document.getElementById('slider').style.display = 'block';
        document.getElementById('btnCerrarCorazon').style.display = 'block';
        document.getElementById('contenidoCoarazon').style.display = 'block';
    }



//Ocultar contenido principal

function ocultarContainerPrincipal(){

    document.getElementById('slider').style.display = 'none';
    document.getElementById("carteras").style.display = 'none';
    document.getElementById("titles").style.display = 'none';
    document.getElementById("titles-2").style.display = 'none';
    document.getElementById("categorias").style.display = 'none';
    document.getElementById("titles-3").style.display = 'none';
    

}


//Esta funcion se encarga de mostrar el contenido principal
function mostrarContainerPrincipal(){

    document.getElementById('slider').style.display = 'block';
    document.getElementById("carteras").style.display = 'flex';
    document.getElementById("titles").style.display = 'block';
    document.getElementById("titles-2").style.display = 'block';
    document.getElementById("categorias").style.display = 'flex';
    document.getElementById("titles-3").style.display = 'block';
}

//Ocultar corazon

let btnCorazon = document.getElementById('btnCerrarCorazon');
    btnCorazon.addEventListener('click',cerrarCorazon);
    function cerrarCorazon(){
        document.getElementById('contenidoCoarazon').style.display = 'none';
        document.getElementById('btnCerrarCorazon').style.display = 'none';
        mostrarContainerPrincipal()    
    }

    //Contenido Lupa
    let lupa = document.getElementById('lupa');
    lupa.addEventListener('click',mostrarLupa);
    function mostrarLupa(){
        document.getElementById('contenidoLupa').innerHTML = 
        `
        <div class="input">
        <input type="text" placeholder="Type here to search">
        
        `
        document.getElementById('contenidoLupa').style.display = 'block'; 
        document.getElementById('btnLupa').style.display = 'flex'; 
   
        ocultarContainerPrincipal()
   
    }

//OCULTAR LUPA

let botonLupa = document.getElementById('btnLupa');
    botonLupa.addEventListener('click',sacarLupa);
    function sacarLupa(){
        document.getElementById('contenidoLupa').style.display = 'none'; 
        document.getElementById('btnLupa').style.display = 'none';
        mostrarContainerPrincipal()

    }



//DESCRIPCION DE CARTERA
let divCard = document.getElementById('botonCartera');
    divCard.addEventListener('click', mostrarContenidoCartera);
        function mostrarContenidoCartera(){
        document.getElementById('descripcCarteraid').innerHTML =
        `
        <div class="descripcionCartera">
        <div class="descripcionCartera1">
            <img src="img/bolso-1.png" alt="" class="img-contenidoCartera">
        </div>

        <div class="descripcionCartera2">
            <h4>Artsy</h4>
            <p class="wallet">Wallet with chain</p>
            <p class="style">Style #36252 0YK0G 1000</p>
            <span class="precio">$564</span>
            <br>
            <button class="buy">BUY NOW</button>
            <p class="add">ADD TO CART</p>

        </div>
    </div>
    
    <div class="descripcion">

        <h4 class="h4" >Description</h4>
        <p >
            As in handbags, the double ring and bar design defines the wallet shape, highlighting the front flap closure which is tucked inside the hardware. Completed with an organizational interior, the black leather wallet features a detachable chain.
        </p>
        <h4 class="material">Material & care</h4>
        <p>
            All products are made with carefully selected materials. Please handle with care for longer product life.
            - Protect from direct light, heat and rain. Should it 
            become wet, dry it immediately with a soft cloth
            - Store in the provided flannel bag or box
            - Clean with a soft, dry cloth
        </p>
    </div>
        `
        ocultarContainerPrincipal()
        document.getElementById('btnCartera').style.display = 'flex'; 
        document.getElementById('descripcCarteraid').style.display = 'block'; 
    }


    //OCULTAR CONTENIDO CARTERA

    let botonCerrarCartera = document.getElementById('btnCartera');
    botonCerrarCartera.addEventListener('click',sacarContenidoCartera);
    function sacarContenidoCartera(){
        document.getElementById('descripcCarteraid').style.display = 'none';
        document.getElementById('btnCartera').style.display = 'none'; 
        
        mostrarContainerPrincipal()
        
}








/*
let botonCard = document.getElementById("boton");

botonCard.addEventListener("click",DescripcionCarteras);

function DescripcionCarteras(){
    document.getElementById('descripcionDeCarteras').innerHTML =     
    `
            
            `
            document.getElementById('btnCerrar').style.display = 'block';
            //Esta borra el contanido principal
            ocultarContainerPrincipal();
}




let botonCerrar = document.getElementById("btnCerrar");
botonCerrar.addEventListener("click",ocultarDescrupcion);
    
function ocultarDescrupcion(){
document.getElementById('btnCerrar').style.display = 'none';
document.getElementById('cerrarContenido').style.display = 'none'
//Muestra el contandio
mostrarContainerPrincipal()

}


    //ContenidoLupa
    let lupa = document.getElementById('lupa');
        document.addEventListener('click',MostrarContenidoLupa);
        function MostrarContenidoLupa(){
        document.getElementById('lupa').innerHTML =        
        ` 
        
        
        `
        ocultarContainerPrincipal()
        document.getElementById('lupa').style.display = 'block';    



        };

 */      