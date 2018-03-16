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
                           <h3>mission statement</h3>
                           <p>"flatworld is committed to providing ongoing value to our customers. we leverage technology and implement best practices, to provide a range of high quality and cost-efficient information technology solutions, from global locations enabling customers achieve their business  goals".</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-6">
                     <div class="led_sec">
                        <img src="images/led.png" alt="">
                        <div class="video_sec">
                           <a href="javascript:void(0)" data-toggle="modal" data-target="#myModal">
                           <img src="images/play-button.png" alt=""></a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class="statement_sec pull-right">
                        <div class="content">
                           <h3>vision statement</h3>
                           <p>"flatworld solutions will be a partner of choice bt providing value to enable our customer's long-term sustainable growth".</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="talking_vector">
                  <img src="images/character-vector.png" alt="">
               </div>
            </div>
            <img src="images/forground-characters.png" alt="" class="forground-img">
         </section>
     </div>
               <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
               <script src="js/bootstrap.min.js"></script>
               <script>
                  $(document).ready(function(){
                  $('#nav-icon1').click(function(){
                  $(this).toggleClass('open');
                  $('.overlay').toggleClass('overlay-show');
                  });
                  });
                  
                  
                  jQuery('#nav-icon1').on('click',function(){
                  jQuery('body').toggleClass('active_menu');
                  });
                  

                  jQuery('.navbar-collapse.in li').on('click',function(){
                  jQuery('body').removeClass('active_menu');
                  });
               </script>
               <!-- modal box popup -->
               <!-- Modal -->
               <div id="myModal" class="modal fade" role="dialog">
                  <div class="modal-dialog">
                     <!-- Modal content-->
                     <div class="modal-content">
                        <div class="modal-header">
                           <button type="button" class="close" data-dismiss="modal">&times;</button>
                           <!--        <h4 class="modal-title">Modal Header</h4>-->
                        </div>
                        <div class="modal-body">
                           <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yAoLSRbwxL8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                     </div>
                  </div>
               </div>
   </body>
 @endsection     