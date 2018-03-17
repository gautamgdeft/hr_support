@extends('layouts.frontendheader')
@section('content')
   <body>
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page life_flat-page">
         <!-- header section -->
         @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-md-5">
                     <div class="life-content">
                        <div class="hr-speaking mCustomScrollbar">
                           <div class="content">
                              <ol type="number">
                                 <li>We value what you bring to the table, the talents and skills God has given you. We refrain from judging you on race, colour, sex, age, religion, marital status etc. Real good talent is what we promote and honest hard work we celebrate. Welcome to the Flatworld way of Life
                                 </li>
                                 <li>We value women employees and their right to a fair and secure workplace. Unsolicited advances, comments or acts are to be strictly avoided. We list out some possible occurrences that could cause grievous mental and emotional hurt to fellow colleagues. Issues like <i>unwelcome or unsolicited sexual advances; displaying sexually suggestive material; unwelcome sexual flirtations, advances or propositions; suggestive comments; verbal abuse of a sexual nature; sexually oriented jokes; crude or vulgar language or gestures; graphic or verbal commentaries about an individual’s body; display or distribution of obscene materials; physical contact such as patting, pinching or brushing against someone’s body; or physical assault of a sexual nature</i> is to be wisely avoided in course of work.
                                 </li>
                                 <li>We do have a reporting mechanism and a Complaints Committee where all those discriminated or harassed can report to, this includes external counsellors and Women employee representatives.
                                 </li>
                                 <li> We like our teams to be on a high always… but that is usually on winning deals or meeting targets or making new friends or learning a new hobby.
                                 Alcohol, drugs and tobacco are strictly to be avoided in office hours and in office premises. Our deaddiction polices include counselling, admission to deaddiction centres or termination of service. For us, you become family the day you join us, we would like to partner your journey  and celebrate your growth and good health. 
                                 </li>
                                 <li> All leaders at Flatworld value every effort that you put in and hence acknowledge your importance in our growth story. During the course @ work anyone can walk in for a chat or to give a suggestion or simply to have a cup of tea together. You are welcome to meet the CEO/Directors/ Business Heads at any time. Just ensure you have a great topic on hand, everyone like a good chat over coffee.
                                 </li>
                              </ol>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="talking_vector right">
                  <img src="images/character-vector.png" alt="">
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