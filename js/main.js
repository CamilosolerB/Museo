$('document').ready(function($){

    var  menu= $('.menu ul');

    $('.menu-icon').on('click',function(){
        
        if(menu.hasClass('show')){
            menu.removeClass('show')
        }
        else{
            menu.addClass('show')
        }

        
    })
        
    $('.reservar').on('click',function(){
        var nom,ape,doc,ema,cel,imp,imp1;
        imp1=document.getElementById('visita')
        imp=document.getElementById('visita').value;
        nom=document.getElementById('nombre').value;
        ape=document.getElementById('apellido').value;
        doc=document.getElementById('documento').value;
        ema=document.getElementById('correo').value;
        cel=document.getElementById('celular').value;
        
        switch(imp){
            case "2021-09-04":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-09-05":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-09-11":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-09-16":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
                alert("!Viva Mexico!")
                break;
            case "2021-09-18":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-09-19":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-09-25":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-09-26":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-09-26":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-10-02":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-10-03":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-10-03":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-10-09":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;          
            case "2021-10-10":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;  
            case "2021-10-16":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-10-17":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-10-23":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-10-24":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-10-30":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-10-31":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
            break;
            case "2021-11-02":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
                alert("Feliz dia de muertos")
                break;
                case "2021-11-06":
                alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
                break;
                case "2021-11-07":
                    alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
                break;
                case "2021-11-13":
                    alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
                    break;
                case "2021-11-14":
                    alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
                break;
                case "2021-11-15":
                    alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
                    alert("Conmemoremos a los heroes caido en la revolucion mexicana")    
                break;    
                case "2021-11-20":
                    alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
                    break;
                    case "2021-11-21":
                        alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
                    break;
                case "2021-11-27":
                    alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
                break;
                case "2021-11-28":
                    alert("Señor(a) "+nom+" "+ape+" con documento numero"+doc+" la fecha de su visita quedo para el dia "+imp+", su reservacion llegara al correo "+ema+" o al numero"+cel+" esperamos que disfrutes tu visita :D");
                break;    
            default: 
            alert("Este dia no es valido");
        }
    })

})