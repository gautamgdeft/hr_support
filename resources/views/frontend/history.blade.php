@extends('layouts.frontendheader')

@section('content')
   <body class="main-history-page">
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page history-page">
         <!-- header section -->
          @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap">
            <div class="">
               <div class="">
                  <div class="left-office-history">
                     <div class="hr-speaking mCustomScrollbar">
                        <div class="content">
                           <ul>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                           </ul>
                           <p class="title"> A little update over our current office location and staff strengths:</p>
                           <div class="office-location row">
                              <div class="col-sm-6">
                                 <p> FLATWORLD HAS 3 DELIVERY OFFICES:</p>
                              </div>
                              <div class="col-sm-3">
                                 <figure>
                                    <img src="images/office-1.png">
                                    <figcaption> BENGALURU</figcaption>
                                 </figure>
                              </div>
                              <div class="col-sm-3">
                                 <figure>
                                    <img src="images/office-1.png">
                                    <figcaption>PHILIPPINES</figcaption>
                                 </figure>
                              </div>
                           </div>
                           <div class="working-out-office">
                              <span><i>(you will be working out of this office)</i></span>
                              <ul>
                                 <li>
                                    Banaswadi
                                    <div class="employee-count">
                                       <img src="images/employee-icon.png">
                                       <span> 310</span>
                                    </div>
                                 </li>
                                 <li>
                                    Infantry Road
                                    <div class="employee-count">
                                       <img src="images/employee-icon.png">
                                       <span> 200</span>
                                    </div>
                                 </li>
                                 <li>
                                    Davao
                                    <div class="employee-count">
                                       <img src="images/employee-icon.png">
                                       <span> 400+</span>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="talking_vector">
                        <img src="images/character-vector.png" alt="">
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
         
          jQuery('#nav-icon1').on('click',function(){
         jQuery('body').toggleClass('active_menu');
         });
         
         
         jQuery('.navbar-collapse.in li').on('click',function(){
         jQuery('body').removeClass('active_menu');
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
         
         
         
         
      </script>
   </body>
@endsection