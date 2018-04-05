@extends('layouts.frontendheader')

@section('content')
   <body class="main-history-page">
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page history-page">
         <!-- header section -->
          @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap">
            <div class="">
               <div class="">
                  <div class="left-office-history">
                     <div class="hr-speaking mCustomScrollbar">
                        <div class="content">
                         <!--  <i class="fa fa-search-plus" aria-hidden="true"></i> -->
                           {!!html_entity_decode($historytext[0]['historytext'])!!} 
                        </div>
                        </div>
                        <i class="fa fa-search-plus fa-2x" aria-hidden="true"></i>
                     </div>
                     <div class="talking_vector">
                       <!--  <img src="images/character-vector.png" alt=""> -->
                        @include('frontend.animation.history.ani_history')

                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
<div class="popup-zoom" id="zoom-txt">
<a class="popup-close">X</a>
{!!html_entity_decode($historytext[0]['historytext'])!!} 
<a href="{{ route('quality') }}" class="btn-nxt">Next</a>
</div>

<script>
$(document).ready(function() {

  setTimeout(function() {
  $("#zoom-txt").addClass('full-zoom');
  }, 10000);

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