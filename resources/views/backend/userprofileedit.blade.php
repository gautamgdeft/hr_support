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
                <div class="user-details">
                <table class="users-details-table" colspan="10" rowspan="5">
                    <form name="editdetails" method="Post" action="{{ route('user.profile.update') }}">
                    {{ csrf_field() }}

                    <div class="panel-body">
                          
                        <div class="form-group">
                            <label>Name: </label>
                            <input type="text" value="{{ Auth::user()->name }}" name="name">
                        </div>

                        <div class="form-group">
                            <label>Email: </label>
                            <input type="email" value="{{ Auth::user()->email }}" name="email">
                        </div> 

                        <input type="submit" class="submitting" name="submit" value="submit">

                    </div>
                    </form>
                     <a href="{{route('user.password.change')}}">change password</a>      
                </table>
                </div>
                </section>              
@endsection
