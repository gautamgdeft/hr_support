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
                           <ul>
                              <li>	1.	Do unto others what you want them to do unto you. 
                                 Respect, empathise, support, cooperate, partner are 
                                 the operative part of your daily life. Smile and spread 
                                 the cheer, you spend close to 160+ hours right here 
                                 @ work every month.
                              </li>
                              <li>2.	Clothes make the man, so they say! Dressed for work
                                 means you have free collars or rolled up sleeves or 
                                 for others a fancy blazer and spanking white shirts 
                                 /trousers.  Anything short and you may end up as the
                                 odd one out. We do have special days to celebrate 
                                 India and its colourful culture.
                              </li>
                              <li>3.	When you work with us we empower you with tools 
                                 and technology, this will include access to software 
                                 programs and laptops, mobile phones and internet 
                                 dongles. All these are for your privileged use when 
                                 you are @work. Look out for your ‘man Friday’ in the 
                                 IT department; you may need to reach out to him/her 
                                 for a changeover of devices or a handover of devices 
                                 when you choose to move out of the Flatworld family.
                              </li>
                              <li>4.	We are a 100% software compliant organisation and 
                                 we dependent on each of our employees too to make
                                 sure unnecessary and non-compliant software are 
                                 not downloaded into your devices. We do have firewall 
                                 protocols etc, but we also know a willing employee is 
                                 the best defence in software compliance. 
                              </li>
                              <li>	5.	Do unto others what you want them to do unto you. 
                                 Respect, empathise, support, cooperate, partner are 
                                 the operative part of your daily life. Smile and spread 
                                 the cheer, you spend close to 160+ hours right here 
                                 @ work every month.
                              </li>
                              <li>6.	Clothes make the man, so they say! Dressed for work
                                 means you have free collars or rolled up sleeves or 
                                 for others a fancy blazer and spanking white shirts 
                                 /trousers.  Anything short and you may end up as the
                                 odd one out. We do have special days to celebrate 
                                 India and its colourful culture.
                              </li>
                              <li>7.	When you work with us we empower you with tools 
                                 and technology, this will include access to software 
                                 programs and laptops, mobile phones and internet 
                                 dongles. All these are for your privileged use when 
                                 you are @work. Look out for your ‘man Friday’ in the 
                                 IT department; you may need to reach out to him/her 
                                 for a changeover of devices or a handover of devices 
                                 when you choose to move out of the Flatworld family.
                              </li>
                              <li>8.	We are a 100% software compliant organisation and 
                                 we dependent on each of our employees too to make
                                 sure unnecessary and non-compliant software are 
                                 not downloaded into your devices. We do have firewall 
                                 protocols etc, but we also know a willing employee is 
                                 the best defence in software compliance. 
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