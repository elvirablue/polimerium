  
$(document).on('ready', function(){ 
//******************модальные окна для форм**************************************************

     
   // $("#user_phone_modal").mask("+7 (999) 999-9999");
   
    var popup_wrapper = document.querySelector('.modal_wrapper');
    var popup = document.querySelector('.js-modal');
    var close = popup.querySelector('.modal_close');
    var title = popup.querySelector('#modal_title');
    var text = popup.querySelector('#modal_text');     

    
    $('.js-btn-modal-1').click(function(event){
          event.preventDefault();          
          title.innerText  = 'Где находится код на упаковке?';
          text.innerHTML = '<p>Код находится на задней стороне упаковки, в нижней части. Код покрыт защитным слоем, который нужно стереть. Если сохранность поля нарушена - обязательно проверьте код на сайте POLYMERIUM. Каждый код можно проверить всего 1 раз.</p>';
          PopupShow(event);
    });
    

    $('.js-btn-modal-2').click(function(event){
          event.preventDefault();          
          title.innerText  = 'Почему ARMPACK- невозможно подделать?';
          text.innerHTML = '<p>1. ARM PACK - на каждом продукте свой уникальный одноразовый код, тоесть если код был введен один раз - то больше воспользоваться им не возможно, соответственно "клонирование" кодов не возможно.</p><p>2. На этапах перевозки продукции и распространения, списать или скопировать код не возможно, он защищен специальным скретч покрытием, которое можно стереть только один раз.</p><p>3. Все оригинальные одноразовые коды с продуктов надежно хранятся в защищенной веб-базе POLYMERIUM и доступ к ним есть только у нескольких ответственных лиц компании.</p>';
          PopupShow(event);
    });
   


    function PopupShow(event) {
          event.preventDefault();
          popup.classList.remove('zoomOut');
          popup_wrapper.classList.remove('fadeOut');
          popup.classList.add('show', 'zoomIn');
          popup_wrapper.classList.add('show', 'fadeIn');
          
    };
   

    function closePopup() {
          if (popup.classList.contains('show')) {
                popup.classList.add('zoomOut');
                popup_wrapper.classList.add('fadeOut');
                setTimeout(function(){
                      popup.classList.remove('show', 'zoomIn' );      
                      popup_wrapper.classList.remove('show', 'fadeIn');
                }, 200);
                
          };
          
    }

    window.addEventListener('keydown', function(event) {
          if (event.keyCode === 27) {
                closePopup();
          };
    });

    popup_wrapper.addEventListener('click', function(event) {
          closePopup();
          
    });
 
    close.addEventListener('click', function(event) {
          event.preventDefault();
          closePopup();
    });


});