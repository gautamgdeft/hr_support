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
                Home Section
                <small>Control panel</small>
            </h1>
        </section>
<!-- Main content -->
<section class="content">
    <form method="POST" action="{{ route('homesecupdate') }}">
        {{ csrf_field() }}
        <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Home Page Left Side Text</h3>
            </div>
            <div class="box-body pad">
                <input type="hidden" name="home_id" value="{!!html_entity_decode($homesecdata[0]['id'])!!}">
            </div>
            <div class='box-body pad'>
                <textarea id="editor1" name="columnleft" rows="10" cols="80" class="summernote">{!!html_entity_decode($homesecdata[0]['columnleft'])!!}</textarea>
            </div>
        </div>
        <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Home Page Center Text</h3>
            </div>
            <div class='box-body pad'>
                <textarea id="editor2" name="columncenter" rows="10" cols="80" class="summernote">{!!html_entity_decode($homesecdata[0]['columncenter'])!!}</textarea>
            </div>
        </div>
        <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Home Page Right Side Text</h3>
            </div>
            <div class='box-body pad'>
                <textarea id="editor3" name="columnright" rows="10" cols="80" class="summernote">{!!html_entity_decode($homesecdata[0]['columnright'])!!}</textarea>
            </div>
        </div>
        <input type="submit" name="submit" value="Update">
    </form>
</section>
<!-- CK Editor -->               
@endsection
