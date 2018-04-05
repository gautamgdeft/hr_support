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
    <form class="custom-form" method="POST" action="{{ route('contact.update') }}" enctype="multipart/form-data">
        {{ csrf_field() }}
        <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Add New Contact</h3>
            </div>
            <div class='box-body pad'>
                <table border="" class="contact-table-bckend" id="tblcontact">
                <input type="hidden" name="contact_id"  value="{!!html_entity_decode($contactdata['id'])!!}">
                <input type="hidden" name="oldphoto"  value="{!!html_entity_decode($contactdata['photo'])!!}">

                    <tr><th>Name</th><td><input  name="name" type="text" value="{!!html_entity_decode($contactdata['name'])!!}"></td></tr>
                    <tr><th>Position</th><td><input  name="position" type="text" value="{!!html_entity_decode($contactdata['position'])!!}"></td></tr>
                    <tr><th>Telephone</th><td><input  name="telephone" type="tel" value="{!!html_entity_decode($contactdata['telephone'])!!}"></td></tr>
                    <tr><th>Email</th><td><input  name="email" type="email" value="{!!html_entity_decode($contactdata['email'])!!}"></td></tr>
                    <tr><th>Photo</th><td><input  name="photo" type="file" accept="image/*" value="{!!html_entity_decode($contactdata['photo'])!!}"><img height="150px" width="150px" src="/images/{!!html_entity_decode($contactdata['photo'])!!}"></td></tr>
                    @if ($errors->has('photo'))
                       <div class="alert-box alert">
                         <h1>{{ $errors->first('photo') }}</h1>
                       </div>
                    @endif
                </table>
            </div>
        </div>
        <input type="submit" name="submit" value="Update Contact">
        <a href="{{route('contact.section')}}">Back</a>
    </form>
</section>
<!-- CK Editor -->                   
@endsection
 