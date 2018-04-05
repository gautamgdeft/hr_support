@extends('layouts.backendheader')
@section('content')
    <div class="wrapper row-offcanvas row-offcanvas-left">
        <aside class="left-side sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar.less -->
        @include('layouts.menubackend');
        <!-- /.sidebar -->
        </aside>

    <!-- Right side column. Contains the navbar and content of the page -->
    <aside class="right-side">
        <section class="content-header">
            <h1>
                Home Section<small>Control panel</small>
            </h1>
        </section>
    <!-- Main content -->
    <section class="content">
        <div class='box box-info'>
            <h3 class='box-title'>User Profile </h3>
        </div>

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

        <div class="user-details">
            <table class="users-details-table" colspan="10" rowspan="5">
                <form name="editdetails" method="Post" action="{{ route('user.password.update') }}">
                {{ csrf_field() }}
                    <div class="panel-body">
                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">Current  Password</label>

                            <div class="col-md-6">
                                <input id="currentpassword" type="password" class="form-control" name="currentpassword" required>
                            </div>
                        </div> 
                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">New Password</label>
                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required>
                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="confirmpassword" class="col-md-4 control-label">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="confirmpassword" required>
                            </div>
                        </div> 
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <input type="submit" class="submitting" name="submit" value="submit">
                            </div>
                        </div>
                    </div>
                </form>            
            </table>
        </div>
    </section>            
@endsection
