@extends('layouts.frontendheader')
@section('content')
   <body class="growth-page">
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page work-page no-before">
         <!-- header section -->
         @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap">
            <div class="">
               <div class="">
                  <div class="talking_vector">
                     <img src="images/character-vector.png" alt="">
                  </div>
                  <div class="left-office-history pull-right">
                     <div class="hr-speaking mCustomScrollbar">
                        <div class="content">
                           <ul>
                              <li>	1.	Growth in Flatworld is a 2 step process across various 
                                 stages of your career. We look at skill development and 
                                 process continuity to evaluate and recommend best 
                                 performers of our team for higher roles and designations. 
                              </li>
                              <li>2.	There are Managers who have started their careers as 
                                 plain editors, designers,engineers, but have proven skill 
                                 development year on year and accumulated leadership
                                 and communication skills over the years and hence was
                                 internally promoted
                              </li>
                              <li>3.	Then there are managers who have improved personal 
                                 skill over time, equipped with specialised training who 
                                 have moved to become Business Heads, Directors 
                                 and lead departments.
                              </li>
                              <li>4.	So while there is a growth path, we encourage every
                                 team member to shine light on that path with skill
                                 development and personal learning. 
                              </li>
                              <li>5.	At Flatworld we understand if we stop learning, we stop 
                                 growing, if we stop growing,we die. We take 3600 
                                 feedback every 6 months and ensure every team member
                                 is  supported to grow.
                              </li>
                              <li>6.	Every honest employee would love to know how he fares 
                                 at the workplace; it’s almost a hidden habit to check on
                                 scores or feedback.
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
      <script src="https://cdn.jsdelivr.net/jquery.mcustomscrollbar/3.0.6/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script>
         $(document).ready(function(){
         $('#nav-icon1').click(function(){
         $(this).toggleClass('open');
         $('.overlay').toggleClass('overlay-show');
         });
         });
      </script>
      <script>
         $(document).ready(function(){
         //	$(".hr-speaking").mCustomScrollbar({
         	//	theme			: "dark",
         		//scrollButtons	: { scrollType: "stepped" },
         		//live			: "on"
         //	});
         
         $(".hr-speaking").mCustomScrollbar({
         					scrollButtons:{enable:true},
         					theme:"light-thick",
         					scrollbarPosition:"outside"
         				});
         
         });
         
         
          jQuery('#nav-icon1').on('click',function(){
             jQuery('body').toggleClass('active_menu');
         });
         
         
         jQuery('.navbar-collapse.in li').on('click',function(){
             jQuery('body').removeClass('active_menu');
         });
         
      </script>
   </body>
@endsection