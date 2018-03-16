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
                              <p>Like most emerging businesses, your company has slotted our 
                                 core teams into rookie (probationers), Regulars (permanent) 
                                 and Professionals (consultants). All of these team members 
                                 are critical to the wellbeing of the company. Its takes for much
                                 talent and many experienced hands to ensure a project 
                                 succeeds and a client is made happy. 
                              </p>
                              <p>Appointment:</p>
                              <p>At Flatworld you would have been through the pre-screening 
                                 process plus written tests and passed the final selection rounds 
                                 before finally sitting down for salary negotiations. We are glad 
                                 it turned favourable and we work together for a season. We 
                                 value your decision to join the 13 year old company as its sets
                                 sights on a greater growth trajectory. 
                              </p>
                              <p>Like most emerging businesses, your company has slotted our 
                                 core teams into rookie (probationers), Regulars (permanent) 
                                 and Professionals (consultants). All of these team members 
                                 are critical to the wellbeing of the company. Its takes for much
                                 talent and many experienced hands to ensure a project 
                                 succeeds and a client is made happy. 
                              </p>
                              <p>Appointment:</p>
                              <p>At Flatworld you would have been through the pre-screening 
                                 process plus written tests and passed the final selection rounds 
                                 before finally sitting down for salary negotiations. We are glad 
                                 it turned favourable and we work together for a season. We 
                                 value your decision to join the 13 year old company as its sets
                                 sights on a greater growth trajectory. 
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="talking_vector bottom">
                  <img src="images/character-vector2.png" alt="">
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