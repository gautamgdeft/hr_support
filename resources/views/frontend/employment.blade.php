@extends('layouts.frontendheader')
@section('content')
   <body class=" dr-outer">
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="employement-outr main-page employment no-before">
         <!-- header section -->
          @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-md-5">
                     <div class="employment-content">
                        <div class="hr-speaking mCustomScrollbar">
                           <div class="content">
                             {!!html_entity_decode($employmenttext[0]['employment_text'])!!}
                           </div>
                        </div>
                        <i class="fa fa-search-plus fa-2x" aria-hidden="true"></i>
                     </div>
                  </div>
               </div>
               <div class="talking_vector bottom">
                 <!--  <img src="images/character-vector2.png" alt=""> -->
                 @include('frontend.animation.employment.ani_employment')
               </div>
            </div>
         </section>
      </div>
      <div class="popup-zoom employment-popup-zoom" id="zoom-txt">
            <a class="popup-close ">X</a>
            {!!html_entity_decode($employmenttext[0]['employment_text'])!!}
            <a href="{{ route('workvslife') }}" class="btn-nxt">Next</a>
         </div>
         <script>
            $(document).ready(function(){
               setTimeout(function() {
                  $("#zoom-txt").addClass('full-zoom');
               }, 13000);

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