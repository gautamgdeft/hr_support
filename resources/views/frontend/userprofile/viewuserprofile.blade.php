@extends('layouts.frontendheader')
@section('content')
  <body class="benifits">
      <div class="potrait-msg"> website not available in portrait mode </div>
    <div class="main-page work-page no-before">
        <!-- header section -->
        @include('layouts.menufrontend')
        <!-- header end -->
        <section class="main-wrap">
          <div class="talking_vector">
            <img src="images/character-vector.png" alt="">
          </div>
            <div class="left-office-history">
              <div class="hr-speaking mCustomScrollbar">
                <form name="editdetails" method="Post" action="{{ route('front.update.user') }}">
                  {{ csrf_field() }}
                  <div class="panel-body">
                           <div class="form-group">
                               <h1>User Profile Details</h1>
                           </div>

                           <div class="form-group">
                               <h2><b>Name:</b> {{ Auth::user()->name }} </h2>
                           </div>

                           <div class="form-group">
                               <h2><b>Email:</b> {{ Auth::user()->email }} </h2>
                           </div> 
                           <a class="button" href="{{route('home')}}">Close</a>
                           <a href="{{route('front.edit.user')}}">Edit User</a>
                  </div>
                </form>
              </div>
            </div>
        </section>
    </div>
  </body>
@endsection