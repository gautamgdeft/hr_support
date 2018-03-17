@extends('layouts.frontendheader')
@section('content')
   <body class="main-work-page">
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
                  <div class="left-office-history">
                     <div class="hr-speaking mCustomScrollbar">
                        <div class="content">
                           <ul class="number">
                              <li>Do unto others what you want them to do unto you. Respect, empathise, support, cooperate, partner are the operative part of your daily life. Smile and spread the cheer, you spend close to 160+ hours right here @ work every month.
                              </li>
                              <li>Clothes make the man, so they say! Dressed for work means you have free collars or rolled up sleeves or for others a fancy blazer and spanking white shirts /trousers.  Anything short and you may end up as the odd one out. We do have special days to celebrate India and its colourful culture.
                              </li>
                              <li>When you work with us we empower you with tools and technology, this will include access to software programs and laptops, mobile phones and internet dongles. All these are for your privileged use when you are @work. Look out for your ‘man Friday’ in the IT department; you may need to reach out to him/her for a changeover of devices or a handover of devices when you choose to move out of the Flatworld family.
                              </li>
                              <li>We are a 100% software compliant organisation and we dependent on each of our employees too to make sure unnecessary and non-compliant software are not downloaded into your devices. We do have firewall protocols etc, but we also know a willing employee is the best defence in software compliance. 
                              </li>
                              <li>We love our teams to be socially active, even if it’s on the web. However social media, personal calls and mails are to be on a need- to – do basis; which means updating LinkedIn, or Instagram is a standard out-of-office hours hobby!
                              </li>
                              <li>Shh! Competition is watching. While you are co-working with teams @ Flatworld it’s possible that you will receive client confidential information or specialised processes of Flatworld Solutions. We would love for you to keep all that you do back at office safely stored as advised. Enjoy your personal time at home and allow for the data safety of your company to be secured.
                              </li>
                              <li>Employees must be alert and aware of any potential dangers to themselves or their co-workers. We encourage each employee to take every precaution to ensure that your surroundings are safe and secure. Guard personal belongings and company property. Visitors should be escorted at all times. Report any suspicious activity to a supervisor immediately.
                              </li>
                              <li>In the event of an emergency, dial 9 from the Phone Extension that is available immediately. If you hear a fire alarm or other emergency alert system, proceed quickly and calmly to the nearest exit / Assembly Point. Kindly use the STAIRS only. Once the building has been evacuated, HR / Admin may authorize employees to re-enter after confirming the attendance / Head Count.
                              </li>
                           </ul>
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