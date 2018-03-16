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
                  <!--Flash messgaes-->
                    @if(session('failed'))
                    <div class="alert-box success">
                        <h1><small>{{ Session('failed') }}</small></h1>
                    </div>
                    @endif
                    @if(session('passfailed'))
                    <div class="alert-box success">
                        <h1><small>{{ Session('passfailed') }}</small></h1>
                    </div>
                    @endif
                    @if(session('samepassfailed'))
                    <div class="alert-box success">
                        <h1><small>{{ Session('samepassfailed') }}</small></h1>
                    </div>
                    @endif
                  <!--Flash messgaes ends-->
                <form name="editdetails" method="Post" action="{{ route('front.password.update') }}">
                {{ csrf_field() }}
                    <div class="panel-body">
                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label>Current  Password</label>
                              <input id="currentpassword" type="password" class="form-control" name="currentpassword" required>
                        </div> 
                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label>New Password</label>
                            <input id="password" type="password" class="form-control" name="password" required>
                        </div>
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input id="password-confirm" type="password" class="form-control" name="confirmpassword" required>
                        </div> 
                        <div class="form-group"> 
                          <input type="submit" class="submitting" name="submit" value="Submit">
                        </div>
                        <a class="button" href="{{route('front.view.user')}}">Back</a>
                    </div>
                </form>            
               </div>
            </div>
         </section>
      </div>
   </body>
@endsection