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
                              <div class="li-title"><h1>{{$fun->event_name}}</h1></div>
                              </li>
                              @php $cat++  @endphp
                               @endforeach  
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   </body>
@endsection