@extends('layouts.frontendheader')
@section('content')
   <body class="dial-up">
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page work-page no-before">
         <!-- header section -->
          @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap fun-sec">
            <div class="">
               <div class="">
                  <div class="talking_vector">
                   <!--   <img src="images/character-vector.png" alt=""> -->
                    @include('frontend.animation.dialup.ani_dialup')
                  </div>
                  <div class="left-office-history">
                     <div class="hr-speaking mCustomScrollbar">
                        <div class="content">
                           <ul>

                           @foreach($contacttext as $contact)
                                 <li>
                                 <div class="left-sec">
                                    <figure> <img src="images/{{$contact->photo}}" alt=""/> </figure>
                                 </div>
                                 <div class="right-sec">
                                    <figcaption>
                                       <p>{{$contact->name}} </p>
                                       <p>{{$contact->position}}</p>
                                       <p class="phone-number"><span><img src="images/call-icon.png" alt=""/> </span> +{{$contact->telephone}}</p>
                                       <p class="Email"><span><img src="images/msg-icon.png" alt=""/> </span> {{$contact->email}} </p>
                                    </figcaption>
                                 </div>
                              </li>
                           @endforeach
























<!-- 
                              <li>
                                 <div class="left-sec">
                                    <figure> <img src="images/user-img.png" alt=""/> </figure>
                                 </div>
                                 <div class="right-sec">
                                    <figcaption>
                                       <p>Name </p>
                                       <p>Position </p>
                                       <p class="phone-number"><span><img src="images/call-icon.png" alt=""/> </span> +xx xxxxxxxxxx </p>
                                       <p class="Email"><span><img src="images/msg-icon.png" alt=""/> </span> xxxxxxxx@Xmail.com </p>
                                    </figcaption>
                                 </div>
                              </li>
                              <li>
                                 <div class="left-sec">
                                    <figure> <img src="images/user-img.png" alt=""/> </figure>
                                 </div>
                                 <div class="right-sec">
                                    <figcaption>
                                       <p>Name </p>
                                       <p>Position </p>
                                       <p class="phone-number"><span><img src="images/call-icon.png" alt=""/> </span> +xx xxxxxxxxxx </p>
                                       <p class="Email"><span><img src="images/msg-icon.png" alt=""/> </span> xxxxxxxx@Xmail.com </p>
                                    </figcaption>
                                 </div>
                              </li> -->
                             <!--  <li>
                                 <div class="left-sec">
                                    <figure> <img src="images/user-img.png" alt=""/> </figure>
                                 </div>
                                 <div class="right-sec">
                                    <figcaption>
                                       <p>Name </p>
                                       <p>Position </p>
                                       <p class="phone-number"><span><img src="images/call-icon.png" alt=""/> </span> +xx xxxxxxxxxx </p>
                                       <p class="Email"><span><img src="images/msg-icon.png" alt=""/> </span> xxxxxxxx@Xmail.com </p>
                                    </figcaption>
                                 </div>
                              </li>
                              <li>
                                 <div class="left-sec">
                                    <figure> <img src="images/user-img.png" alt=""/> </figure>
                                 </div>
                                 <div class="right-sec">
                                    <figcaption>
                                       <p>Name </p>
                                       <p>Position </p>
                                       <p class="phone-number"><span><img src="images/call-icon.png" alt=""/> </span> +xx xxxxxxxxxx </p>
                                       <p class="Email"><span><img src="images/msg-icon.png" alt=""/> </span> xxxxxxxx@Xmail.com </p>
                                    </figcaption>
                                 </div>
                              </li>
                              <li>
                                 <div class="left-sec">
                                    <figure> <img src="images/user-img.png" alt=""/> </figure>
                                 </div>
                                 <div class="right-sec">
                                    <figcaption>
                                       <p>Name </p>
                                       <p>Position </p>
                                       <p class="phone-number"><span><img src="images/call-icon.png" alt=""/> </span> +xx xxxxxxxxxx </p>
                                       <p class="Email"><span><img src="images/msg-icon.png" alt=""/> </span> xxxxxxxx@Xmail.com </p>
                                    </figcaption>
                                 </div>
                              </li>
                              <li>
                                 <div class="left-sec">
                                    <figure> <img src="images/user-img.png" alt=""/> </figure>
                                 </div>
                                 <div class="right-sec">
                                    <figcaption>
                                       <p>Name </p>
                                       <p>Position </p>
                                       <p class="phone-number"><span><img src="images/call-icon.png" alt=""/> </span> +xx xxxxxxxxxx </p>
                                       <p class="Email"><span><img src="images/msg-icon.png" alt=""/> </span> xxxxxxxx@Xmail.com </p>
                                    </figcaption>
                                 </div>
                              </li> -->
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