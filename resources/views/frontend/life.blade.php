@extends('layouts.frontendheader')
@section('content')
   <body>
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page life_flat-page">
         <!-- header section -->
         @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-md-5">
                     <div class="life-content">
                        <div class="hr-speaking mCustomScrollbar">
                           <div class="content">
                              {!!html_entity_decode($lifetext[0]['life_text'])!!}
                           </div>
                        </div>
                        <i class="fa fa-search-plus fa-2x" aria-hidden="true"></i>
                     </div>
                  </div>
               </div>
               <div class="talking_vector right">
                <!--   <img src="images/character-vector.png" alt=""> -->
                  @include('frontend.animation.life.ani_life')
               </div>
            </div>
         </section>
      </div>
         <div class="popup-zoom life-popup-zoom life-flat-list" id="zoom-txt">
            <a class="popup-close ">X</a>
            {!!html_entity_decode($lifetext[0]['life_text'])!!}
            <a href="{{ route('work') }}" class="btn-nxt">Next</a>
         </div>
         <script>
            $(document).ready(function(){
               setTimeout(function() {
                  $("#zoom-txt").addClass('full-zoom');
               }, 21000);

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