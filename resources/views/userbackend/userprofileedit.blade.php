@extends('layouts.userbackend.backendheader')
@section('content')
<div class="wrapper row-offcanvas row-offcanvas-left">
<aside class="left-side sidebar-offcanvas">
<!-- sidebar: style can be found in sidebar.less -->
    @include('layouts.userbackend.menubackend');
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
    <h3 class='box-title'>Edit user profile</h3>
    </div>
    <div class="user-details">
        <form name="editdetails" method="Post" action="{{ route('user.profile.updates') }}" enctype="multipart/form-data">
        {{ csrf_field() }}
       

    <div class="edit-details">
             <table class="users-details-table" colspan="10" rowspan="5">
                <tr><th><b>Name: </b></th><td><input type="text" value="{{ Auth::user()->name }}" name="name" required="required"></td></tr>
                <tr><th><b>Image: </b></th><td><input type="file" name="image" required="required"></td></tr>

            @if ($errors->has('image'))
               <div class="alert-box alert">
                 <h1>{{ $errors->first('image') }}</h1>
               </div>
            @endif



                <tr><th><b></b></th><td><img src="/images/{{Auth::User()->image}}" height="150px" width="150px"></td></tr>  

                <tr><th></th><td>
             <input type="submit" class="submitting"  name="submit" value="submit"></td></tr>    
            </table>

 </div>
        </form>     
      </div>
    </section>              
@endsection
