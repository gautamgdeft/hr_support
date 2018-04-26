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
                    <!--Flash messgaes-->
                @if(session('success'))
                <div class="alert-box success">
                    <h1><small>{{ Session('success') }}</small></h1>
                </div>
                @endif
                <!--Flash messgaes ends-->
                </section>
                <!-- Main content -->
                <section class="content">
                <div class='box box-info'>
                <h3 class='box-title'>User Profile </h3>
                </div>
                <div class="user-details">
                <table class="users-details-table" colspan="10" rowspan="5">
                    <tr><th><b>Name: </b></th><td>{{Auth::User()->name}}</td></tr>
                    <tr><th><b>Email: </b></th><td>{{Auth::User()->email}}</td></tr>
                    <a href="{{route('user.profile.edit')}}">Edit User</a>
                </table>
                </div>
                </section>              
@endsection
