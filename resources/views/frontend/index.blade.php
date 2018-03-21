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
                           <!-- <h3>Mission Statement</h3>
                           <p>"FLATWORLD IS COMMITTED TO PROVIDING ONGOING VALUE TO OUR CUSTOMERS. WE LEVERAGE TECHNOLOGY AND IMPLEMENT BEST PRACTICES, TO PROVIDE A RANGE OF HIGH QUALITY AND COST-EFFICIENT INFORMATION TECHNOLOGY SOLUTIONS, FROM GLOBAL LOCATIONS ENABLING CUSTOMERS ACHIEVE THEIR BUSINESS GOALS".</p> -->
                           {!!html_entity_decode($home[0]['columnleft'])!!}
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-6">
                     <div class="led_sec">
                        
                        <div class="video_sec">
                           <a href="javascript:void(0)">
                           <img src="images/play-button.png" alt=""></a>

                           <div class="main-video"> 
                           <video width="100%" height="337" class="video_cstm" controls >
                              <source src="/images/{!!html_entity_decode($home[0]['columncenter'])!!}" allow="autoplay" type="video/mp4">  
                           </video>
                           </div>
                        </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                     <div class="statement_sec pull-right">
                        <div class="content">
                           <!-- <h3>Vision Statement</h3>
                           <p>"FLATWORLD SOLUTIONS WILL BE A PARTNER OF CHOICE BY PROVIDING VALUE TO ENABLE OUR CUSTOMER’S LONG-TERM SUSTAINABLE GROWTH".</p> -->
                           {!!html_entity_decode($home[0]['columnright'])!!}
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
                        <!--<div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 class="modal-title">Modal Header</h4>
                           </div> -->
                        <div class="modal-body videoyoutube">
                        <!--<iframe width="100%" height="315" src="{{strip_tags($home[0]['columncenter'])}}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
                           <video width="100%" height="337" class="video_cstm" controls >
                              <source src="/images/{!!html_entity_decode($home[0]['columncenter'])!!}" allow="autoplay" type="video/mp4">  
                           </video>
                           <!-- {!!html_entity_decode($home[0]['columncenter'])!!}
                           {{strip_tags($home[0]['columncenter'])}} -->
                              <script>   
                            

                              $('.video_sec a').on('click', function () {
                                $(this).hide(); 
                                $('.video_cstm')[0].play();

                              })
                              $('#myModal').on('hidden.bs.modal', function () {
                                $('.video_cstm')[0].pause();
                              })
                              </script>

                        </div>
                     </div>
                  </div>
               </div>
   </body>
 @endsection     