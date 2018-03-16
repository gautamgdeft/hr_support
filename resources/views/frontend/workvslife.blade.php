@extends('layouts.frontendheader')
@section('content')
   <body class="work-vs-life-page">
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page work-page no-before">
         <!-- header section -->
        @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap">
            <div class="">
               <div class="">
                  <div class="left-office-history">
                     <div class="hr-speaking mCustomScrollbar">
                        <div class="content">
                           <p>We celebrate our relationship by
                              respecting each other’s time. If all
                              employees turn up on time,imagine 
                              the increase in productivity and stress
                              free everyone will experience.
                           </p>
                           <p>Absenteeism is a habit you are 
                              discouraged to bring into this
                              company. It should always be 
                              “LEAVE WITH A CAUSE’, stay at
                              home for a reason. We also love
                              for you to use your swanky 
                              phones to let your leaders know if 
                              you are sick, in an emergency or 
                              family issues and we honour and and 
                              support our teams through the tough
                              times.
                           </p>
                           <p>
                              Here is the math for how you can
                              balance work and life.
                           <p>
                           <p>Earned Leave: You have 13 days of 
                              earned leave per year, the only caveats 
                              being you need to enable your
                              supervisor to back up for you, so he 
                           </p>
                           <p>We celebrate our relationship by
                              respecting each other’s time. If all
                              employees turn up on time,imagine 
                              the increase in productivity and stress
                              free everyone will experience.
                           </p>
                           <p>Absenteeism is a habit you are 
                              discouraged to bring into this
                              company. It should always be 
                              “LEAVE WITH A CAUSE’, stay at
                              home for a reason. We also love
                              for you to use your swanky 
                              phones to let your leaders know if 
                              you are sick, in an emergency or 
                              family issues and we honour and and 
                              support our teams through the tough
                              times.
                           </p>
                           <p>
                              Here is the math for how you can
                              balance work and life.
                           <p>
                           <p>Earned Leave: You have 13 days of 
                              earned leave per year, the only caveats 
                              being you need to enable your
                              supervisor to back up for you, so he 
                           </p>
                        </div>
                     </div>
                     <!-- <div class="talking_vector">
                        <img src="images/character-vector.png" alt="">
                        </div> -->
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