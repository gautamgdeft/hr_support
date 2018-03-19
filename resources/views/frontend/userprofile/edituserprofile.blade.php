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

              <div class="panel-body edit-user-details-page">
                <div class="form-group">
                  <h1>User Profile Details</h1>
                </div>

                <div class="form-group">
                  <label>Name: </label>
                  <input type="text" value="{{ Auth::user()->name }}" name="name" class="form-control">
                </div>

                <!-- <div class="form-group">
                  <label>Email: </label>
                  <input type="email" value="{{ Auth::user()->email }}" name="email" class="form-control">
                </div> --> 

                <input type="submit" class="submitting" name="submit" value="Submit" class="form-control">

                
                <a class="button" href="{{route('front.password.edit')}}">Change Password</a>
                <!-- <a class="button" href="{{route('front.view.user')}}">Back</a> -->
              </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</body>
@endsection