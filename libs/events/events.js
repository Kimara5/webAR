

AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");
        var subeBaja = true;

        //Evento de click, aumenta la escala del modelo al tocarlo
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                /*
                //Aumenta en 1 la escala del modelo
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity.setAttribute('scale', scale);
                */
                
                //Cambia de animacion al tocar modelo gltf (las animaciones pueden verse al abrir el json del gltf buscando animations)
                //aEntity.setAttribute('animation-mixer', {clip: 'Giro'});
                
                //Si la animacion activa es SubeBaja, la cambia por Giro, si Giro está activa, la cambia por SubeBaja
                const animActive = aEntity.getAttribute('animation-mixer');
                if(subeBaja){
                    aEntity.setAttribute('animation-mixer', {clip: 'Girar', loop: 'once'});
                    console.log('ANIM = subeBaja True');
                    subeBaja = false;
                    //giro = true;
                    //subeBaja = false;
                }else if(!subeBaja){
                    aEntity.setAttribute('animation-mixer', {clip: 'RotaDelante'});
                    //giro = false;
                    console.log('ANIM = subeBaja False');
                    subeBaja = true;
                }
            }
        });
}});