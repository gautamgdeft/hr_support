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
                        {!!html_entity_decode($historytext[0]['historytext'])!!}
                           <!-- <ul>
                              <li>Flatworld as an idea was conceived in 1999 as Outsource2india, established in 2004 in the US and India as Flatworld solutions Inc., and has impacted over 10,000+ customers and over 3000+ employees in a span of 13 years.
                              </li>

                              <li>Your company pioneered the start-up culture before it became a fad, it embraced technology early to break geographic boundaries, and it diversified into multiple services to become a Global Services supermarket when everyone else was specialising in one service.</li>

                              <li>Your company continues to grow, with one purpose: to provide a complete range of Information Technology services to the global business community, from the most cost-effective global locations, giving the highest qualitative and financial value to our customers.</li>

                              <li>Starting with data processing over 12 years ago, Flatworld Solutions offers 14 different IT services today, ranging from the relatively simple to the most complex processes.</li>

                              <li>Experience the joy of working alongside digital marketers, adobe artists, video editors, software gurus, structural engineers, architects, data analysts… the list goes on. Life at Flatworld can never get boring, so many people and so many opportunities. Truly expanding possibilities… of customer, employee and shareholders.</li>

                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                              <li>Flatworld as an idea was conceived in 1999 as outsource2india. established in 2004 in the US and india as Flatworld Solutions Inc.. nad has imacted over 10.000+ customers and over 3000+ employees in a span of 13 years.</li>
                           </ul>


                           
                           <p class="title"> A little update on our current office location and staff strengths:</p>
                           <div class="office-location row">
                              <div class="col-sm-12">
                                 <p> FLATWORLD HAS 3 DELIVERY OFFICES:</p>
                              </div>
                           </div>
                           <div class="office-name row">
                              <div class="col-sm-4">
                                 <figure>
                                    <img src="images/office-1.png">
                                    <figcaption> Bangalore – Banaswadi office with 310 employees (you will be working out of this office)</figcaption>
                                 </figure>
                              </div>
                              <div class="col-sm-4">
                                 <figure>
                                    <img src="images/office-1.png">
                                    <figcaption> Bangalore- Infantry road with 200 employees</figcaption>
                                 </figure>
                              </div>
                              <div class="col-sm-4">
                                 <figure>
                                    <img src="images/office-1.png">
                                    <figcaption>Philippines- Davao office with 400+ employees</figcaption>
                                 </figure>
                              </div>
                           </div>
                           <div class="office-location row">
                              <div class="col-sm-12">
                                 <p>FLATWORLD HAS 2 SALES OFFICES:</p>
                              </div>
                           </div>
                           <div class="office-name row">
                              <div class="col-sm-6">
                                 <figure>
                                    <figcaption>New Jersey, USA</figcaption>
                                 </figure>
                              </div>
                              <div class="col-sm-6">
                                 <figure>
                                    <figcaption>London, UK</figcaption>
                                 </figure>
                              </div>
                           </div> -->


                           <!-- <div class="working-out-office">
                              <span><i>Flatworld has 2 Sales offices</i></span>
                              <ul>
                                 <li>New Jersey, USA</li>
                                 <li>London, UK</li>
                              </ul> -->
                              <!-- <ul>
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
                              </ul> -->
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