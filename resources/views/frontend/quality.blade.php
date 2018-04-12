@extends('layouts.frontendheader')
@section('content')
   <body>
     <div class="potrait-msg"> website not available in portrait mode </div>
      <div class="main-page quality-page dr-outer">
         <!-- header section -->
         @include('layouts.menufrontend')
         <!-- header end -->
         <section class="main-wrap">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-lg-offset-6 col-lg-6">
                     <div class="quality_sec">
                        <div class="quality-policy">
                           <img src="images/quality-policy.png" alt="">
                        </div>
                        <div class="content">
                        {!!html_entity_decode($qualitytext[0]['quality_text'])!!}  
                        </div>
                        <i class="fa fa-search-plus fa-2x" aria-hidden="true"></i>
                     </div>
                     
                  </div>
               </div>
            </div>
            <div class="thum_vector">
               <img src="images/thum-up.png" alt="">
            </div>
         </section>
      </div>
      
      <div class="popup-zoom quality-popup-zoom quality-page-list" id="zoom-txt">
         <a class="popup-close ">X</a>
         {!!html_entity_decode($qualitytext[0]['quality_text'])!!}
         <a href="{{ route('life') }}" class="btn-nxt">Next</a>
      </div>
      <script>
         $(document).ready(function(){

            setTimeout(function() {
               $("#zoom-txt").addClass('full-zoom');
            }, 2000);

            $(".popup-close").click(function(){
               $("#zoom-txt").removeClass('full-zoom');
            });

            $(document).keydown(function(e){   
             if(e.keyCode == 27) {
               if ($('#zoom-txt').hasClass('full-zoom')) {
                 $('#zoom-txt').removeClass('full-zoom');
               } 
             }
           });

           $('.fa-search-plus').click(function(){
             $("#zoom-txt").addClass('full-zoom');
           });

         });


      </script>





      
      <div id="myModal" class="modal fade" role="dialog">
         <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
               <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <!--        <h4 class="modal-title">Modal Header</h4>-->
               </div>
               <div class="modal-body">
                  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yAoLSRbwxL8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
               </div>
            </div>
         </div>
      </div>
   </body>
@endsection