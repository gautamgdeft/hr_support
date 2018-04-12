@extends('layouts.frontendheader')

@section('content')

   <body class="home-page">
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page">
         <!-- header section -->
            @include('layouts.menufrontend')
         <!-- header end -->

         <section class="main-wrap">
            <div class="container">
               <div class="row">
                  <div class="col-sm-3">
                     <div class="statement_sec">
                        <div class="content">
                           {!!html_entity_decode($home[0]['columnleft'])!!}
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-6">
                     <div class="led_sec">
                        
                        <div class="video_sec" id="video_sec_id">
                           <a href="javascript:void(0)">
                           <img src="images/play-button.png" alt=""></a>

                           <div class="main-video video-self" id="main-video-tag"> 
                           <video width="100%" height="337" id="video" class="video_cstm"><source src="/images/{!!html_entity_decode($home[0]['columncenter'])!!}" allow="autoplay" type="video/mp4"></video>
                           </div>
                        </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                     <div class="statement_sec pull-right">
                        <div class="content">
                           {!!html_entity_decode($home[0]['columnright'])!!}
                        </div>
                     </div>
                  </div>
               </div>
               <div class="talking_vector">         
                  @include('frontend.animation.home.Home_x715')
               </div>
            </div>
            <img src="images/forground-characters.png" alt="" class="forground-img">
         </section>
     </div>
              
<script>
$(window).load(function() {

   //alert('page is loaded');


  setTimeout(function() {
      $('.video_cstm')[0].play();
  }, 20000);

  setTimeout(function() {
    $("#main-video-tag").addClass('fxxscr zindexsrc');
  }, 18999);

  setTimeout(function() {
    $("#main-video-tag").addClass('fullscreen');
  }, 19000);

  setTimeout(function() {
    $("#video").addClass('videotag');  
  }, 23000);

  setTimeout(function() {
    $("#main-video-tag").removeClass('zindexsrc');
  }, 23000);

  setTimeout(function() {
    $("#main-video-tag").removeClass('video-self'); 
  }, 24500);

  setTimeout(function() {
    $("#main-video-tag").removeClass('fxxscr');
  }, 24700);
});


$(document).ready(function(){
    
  $( '.video_cstm' ).on(
      'timeupdate', 

      function(event){
          $this = $(this);
          if( this.currentTime > ( this.duration - 2 ) ) {
              $this.addClass('video-portal');
              $("#main-video-tag").addClass('full-remaining');
          }

      });

  $(document).keydown(function(e){   
    if(e.keyCode == 27) {
      if ($('#main-video-tag').hasClass('fullscreen')) {
      $("#video_sec_id").addClass('hide_logo_image');
      $("#main-video-tag").addClass('video-esc');
      setTimeout(function() {
        $("#video").removeClass('videotag');  
        $("#main-video-tag").removeClass('fullscreen');
      }, 100);
      } 
    }
  });
});
</script>
</body>
@endsection     