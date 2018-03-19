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
                  <div class="panel-body edit-profile-panel">
                           <div class="form-group edit-pro-title">
                               <h1>User Profile Details</h1>
                           </div>

                           <div class="form-group">
                               <h2><b>Name:</b> <span>{{ Auth::user()->name }} </span></h2>
                           </div>

                           <div class="form-group">
                               <h2><b>Email:</b><span class="user-email-text"> {{ Auth::user()->email }}</span> </h2>
                           </div> 
                          
                          
                           <a class="button" href="{{route('front.edit.user')}}">Edit User
                           </a>
                            <a class="button" href="{{route('home')}}">Close</a>
                  </div>
                </form>
              </div>
            </div>
        </section>
    </div>
  </body>
@endsection