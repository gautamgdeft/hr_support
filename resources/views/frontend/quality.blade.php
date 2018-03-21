@extends('layouts.frontendheader')
@section('content')
   <body>
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page quality-page dr-outer">
         <!-- header section -->
         @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-lg-offset-6 col-lg-6">
                     <div class="quality_sec">
                        <div class="quality-policy">
                           <img src="images/quality-policy.png" alt="">
                        </div>
                        <div class="content">
                        {!!html_entity_decode($qualitytext[0]['quality_text'])!!}

                           <!-- <p>Flatworld Solutions (P) Ltd aims to achieve and endeavours to continuously enhance customer satisfaction by
                           </p>
                           <ol type="number">
                              <li>Providing quality, timely and cost-effective solutions in the ITES domain. <i>( which means we play the game hard, drive excellence  with reduced costs for our customers)</i>
                              </li>
                              <li>By empowering its employees with the use of state of the art technology and infrastructure. <i>( simply means we look out for hardware, software and other solutions to ensure we stay ahead of competition)</i>
                              </li>
                              <li>To continuously strive for Operational excellence.<i> ( always ON mode, never distracted from delivering 99.5% quality all the time)</i>
                              </li>
                              <li>To establish and sustain a competitive presence in the BPO industry by implementing Quality Systems. <i>( process rigor that ensures we stay on top, innovative/tech enabling solutions to pioneer our growth)</i>
                              </li>
                           </ol>
                           <p>Do connect with your Business Head or Operations Manager to know How the ISO policy affects your area of work and enrol for a training session as soon as you join the team. You will be surprised at how the process ensures quality adherence at your desk.
                           </p> -->
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="thum_vector">
               <img src="images/thum-up.png" alt="">
            </div>
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