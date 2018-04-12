@extends('layouts.frontendheader')
@section('content')
   <body class="main-work-page">
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page work-page no-before">
         <!-- header section -->
        @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap">
            <div class="">
               <div class="">
                  <div class="talking_vector">
                    <!--  <img src="images/character-vector.png" alt=""> -->
                     @include('frontend.animation.work.ani_work')
                  </div>
                  <div class="left-office-history">
                     <div class="hr-speaking mCustomScrollbar">
                        <div class="content">
                          <ul class="number">
                           {!!html_entity_decode($worktext[0]['work_text'])!!}
                             
                           </ul>
                        </div>
                     </div>
                      <i class="fa fa-search-plus fa-2x" aria-hidden="true"></i>
                  </div>
               </div>
            </div>
         </section>
      </div>
         <div class="popup-zoom work-popup-zoom main-work-list" id="zoom-txt">
            <a class="popup-close ">X</a>
            {!!html_entity_decode($worktext[0]['work_text'])!!}
            <a href="{{ route('employment') }}" class="btn-nxt">Next</a>
         </div>
         <script>
            $(document).ready(function(){
               setTimeout(function() {
                  $("#zoom-txt").addClass('full-zoom');
               }, 19000);

               $(".popup-close").click(function(){
                  $("#zoom-txt").removeClass('full-zoom');
               });

               $(document).keydown(function(e){   
                if(e.keyCode == 27) {
                  if ($('#zoom-txt').hasClass('full-zoom')) {
                    $('#zoom-txt').removeClass('full-zoom');
                  } 
                }
              });

              $('.fa-search-plus').click(function(){
                $("#zoom-txt").addClass('full-zoom');
              });

            });
         </script>    
   </body>
@endsection