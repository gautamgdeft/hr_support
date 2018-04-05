@extends('layouts.frontendheader')
@section('content')
   <body class="fun-page">
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page work-page no-before">
         <!-- header section -->
           @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap fun-sec">
            <div class="">
               <div class="">
                  <div class="left-office-history">
                     <div class="hr-speaking mCustomScrollbar">
                        <div class="content ">
                           <ul>
                             <!--   {!!html_entity_decode($funtext)!!} -->
                             @php $cat = 1 @endphp 
                               @foreach($funtext as $fun)
                              <!--  {{$fun->event_name}} -->
                              <li class="event-name" dataid = "popup-gallery{{$cat}}"><img width="184px" height="150px" src="images/{{$fun->event_image}}" alt=""/>
                              <div class="popup-gallery{{$cat}}" style="display:none;">
                                 @foreach($funimages as $funimg)
                                 @if($funimg->event_id == $fun->id)
                                 <a class="" href="/images/{{$funimg->event_gallery}}" title="The Cleaner"></a>
                                 @endif
                                 @endforeach
                              </div>
                              </li>
                              @php $cat++  @endphp
                               @endforeach  



                                <!--  {!!html_entity_decode($funimages)!!} -->




                              <!-- <li class="event-name"><img src="images/gallery-img.png" alt=""/>




                              <div class="popup-gallery" style="display:none;">
                                 
                                 <a class="first-li-popup" href="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg" title="The Cleaner"></a>
                                 <a href="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg" title="Winter Dance"></a>
                                 <a href="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg" title="The Uninvited Guest"></a>
                                 <a href="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg" title="Oh no, not again!"></a>
                                 <a href="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg" title="Swan Lake"></a>
                                 <a href="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg" title="The Shake"></a>
   
                              </div>





                              </li> -->





















































                             <!--  <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li>
                              <li><img src="images/gallery-img.png" alt=""/> </li> -->
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
      <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
      <script src="https://cdn.jsdelivr.net/jquery.mcustomscrollbar/3.0.6/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/bootstrap.min.js"></script> -->
      <script>
         // $(document).ready(function(){
         // $('#nav-icon1').click(function(){
         // $(this).toggleClass('open');
         // $('.overlay').toggleClass('overlay-show');
         // });
         // });
      </script>
      <script>
         // $(document).ready(function(){
         // //	$(".hr-speaking").mCustomScrollbar({
         // 	//	theme			: "dark",
         // 		//scrollButtons	: { scrollType: "stepped" },
         // 		//live			: "on"
         // //	});
         
         // $(".hr-speaking").mCustomScrollbar({
         // 					scrollButtons:{enable:true},
         // 					theme:"light-thick",
         // 					scrollbarPosition:"outside"
         // 				});
         
         // });
         
         //  jQuery('#nav-icon1').on('click',function(){
         //     jQuery('body').toggleClass('active_menu');
         // });
         
         
         // jQuery('.navbar-collapse.in li').on('click',function(){
         //     jQuery('body').removeClass('active_menu');
         // });
         
         
      </script>
   </body>
@endsection