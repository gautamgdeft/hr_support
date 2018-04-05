@extends('layouts.backendheader')
@section('content')
<div class="wrapper row-offcanvas row-offcanvas-left">
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-side sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar.less -->
        @include('layouts.menubackend');
        <!-- /.sidebar -->
    </aside>

    <!-- Right side column. Contains the navbar and content of the page -->
    <aside class="right-side">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                Contact Section
                <small>Control panel</small>
            </h1>
        </section>
<!-- Main content -->
<section class="content">
    <form method="POST" action="{{ route('contact.newentry') }}" enctype="multipart/form-data">
        {{ csrf_field() }}
        <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Add New Contact</h3>
            </div>
            <div class='box-body pad'>
                <table border="" class="contact-table-bckend" id="tblcontact">
                    <tr><th>Name</th><td><input  name="name" type="text" value="{{ old('name') }}"></td></tr>
                    <tr><th>Position</th><td><input  name="position" type="text" value="{{ old('position') }}"></td></tr>
                    <tr><th>Telephone</th><td><input  name="telephone" type="tel" value="{{ old('telephone') }}"></td></tr>
                    <tr><th>Email</th><td><input  name="email" type="email" value="{{ old('email') }}"></td></tr>
                    <tr><th>Photo</th><td><input  name="photo" type="file" accept="image/*" value="{{ old('photo') }}"></td></tr>

                    @if ($errors->has('photo'))
                       <div class="alert-box alert">
                         <h1>{{ $errors->first('photo') }}</h1>
                       </div>
                    @endif


                </table>
            </div>
        </div>
        <input type="submit" name="submit" value="Add new">
    </form>
</section>
<!-- CK Editor -->                   
@endsection
 