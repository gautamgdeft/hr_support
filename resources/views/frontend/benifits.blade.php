@extends('layouts.frontendheader')
@section('content')
   <body class="benifits">
   
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
                              <li> All employees at Flatworld will compulsorily have Health insurance of
                                 either government or private sector based on the Salary bracket. 
                                 Other benefits include Accident Insurance, Life Term insurance, 
                                 provident fund etc. While you set your sights on performance, it’s our 
                                 endeavour that you have most bases covered.
                              </li>
                              <li> <b class="block">Health Insurance</b> Full time employees are covered from their date of joining in any one 
                                 of Flatworld Health care programs. Employees who fall under the ESI 
                                 wages will be covered under ESI Insurance Coverage and other 
                                 Employees will come under the Group Medical Coverage by a private 
                                 insurer. For Coverage details, do contact HR / Admin Team,
                                 you will be surprised that even pregnancy and childbirth costs are
                                 covered. Options of insuring immediate family are also offered as an
                                 add-on benefit.
                              </li>
                              <li><b>Group Personal Accident Insurance:</b>  All Employees are covered
                                 under this Insurance with 3 times the annual CTC as sum assured in 
                                 the event of unforeseen eventuality.
                              </li>
                              <li><b>Group Term Life:</b> All Employees are covered under this Insurance 
                                 with 3 times the annual CTC as sum assured in the event of 
                                 unforeseen eventuality under natural circumstances.
                              </li>
                              <li><b class="block">Retirement Plan </b>As we celebrate life together at Flatworld, government rules dictate 
                                 that retirement begins from the 59th birthday!! So, all employees on 
                                 the rolls of Flatworld Solutions will be discharged from service on 
                                 attaining the age of 58 years. All benefits and accruals due will be 
                                 disbursed within 30 working days. 
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