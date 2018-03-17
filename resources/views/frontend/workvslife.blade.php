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
                           
                           <p>We celebrate our relationship by respecting each other’s time. If all employees turn up on time, imagine the increase in productivity and stress free lives everyone will experience. Absenteeism is a habit you are discouraged to bring into this company. It should always be “LEAVE WITH A CAUSE’, stay at home for a reason. We also love for you to use your swanky phones to let your leaders know if you are sick, in an emergency or family issues and we honour and support our teams through the tough times.</p>

                           <p><b>Here is the math for how you can balance work and life.</b></p> 

                           <p><b>Earned Leave:</b> You have 13 days of earned leave per year, the only caveats being you need to enable your supervisor to back up for you, so he needs to know your plans 10 days ahead. Family time for most of you requires longer holidays, and we at Flatworld ensure you get an accrued 30 days in a year from previous years.
                           You could use up to 13 days of your accrued earned leave at a time to enjoy personal commitments or just laze around and finish couple of books or climb the Western Ghats. 
                           Celebrate life, we encourage it.</p>

                           <p><b>Sick / Casual Leave:</b> This is something we wish you never need to use, we always wish our colleagues remain hale and hearty all though the year. In the unlikely event you fall sick, don’t panic, you could use 12  paid leaves over a calendar year to rest and revert back to good health. Just ensure you intimate in writing to your supervisor so that client work continues round the clock. Do check with HR on your Health care benefits in case you need hospitalisation.</p>

                           <p><b>Maternity & Paternity leave :</b> When you have a new entrant to your family, we know those moments require lots of rest, planning and personal time. As an organisation we celebrate parenthood and ensure full maternity benefits of 6 months are passed on to expectant mothers. As the new age father, handling a little more responsibility during childbirth,  we give 7 days of paid paternity leave so as to enable the father partake of the joy and celebrate the occasion. </p>


                           <p><b>Company Paid Holidays:</b> Over the year as the nation celebrates its founding days and people celebrate festivals, @ Flatworld we extend 10 holidays on most important days as listed below so that we could spend time with family and resetting our focus. We acknowledge other religious festivals and offer a restricted holiday for those celebrating them, our way of ensuring parity for all.</p>

                           <p>The company observes the following 10 holidays in a Calendar Year.
                            <b>New Year’s Day, Republic Day, Good Friday, May Day, Independence Day, Ganesh Chaturthi, Gandhi Jayanti, Deepavali, Kannada Rajyotsava, Christmas Day</b></p>

                           <p><b>Exam Leave :</b> Study whilst at work is a great task in itself. We offer incentives of Rs.5000 and a 10 day Study holiday period to encourage those who want to skill themselves up the ladder. Do take prior approvals and suggestions on type of courses from your mentors! HR will list out a plan for your education and growth</p> 

                           <p><b>Leave of Absence:</b> Life has unplanned situations and those call for extreme measures. We acknowledge genuine claims and allow for absence from work but will classify those holidays as ‘Unpaid’ so as to bear parity with all employees. If the period of absence is long, then continuation of employee benefits may be reviewed as the law of the land so decides.</p>
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