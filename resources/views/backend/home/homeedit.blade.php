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

            @if(session('homesuccess'))
                <div class="alert-box success">
                    <h1><small>{{ Session('homesuccess') }}</small></h1>
                </div>
            @endif
            @if(session('homevideoerror'))
                <div class="alert-box success">
                    <h1><small>{{ Session('homevideoerror') }}</small></h1>
                </div>
            @endif


    <form method="POST" action="{{ route('homesecupdate') }}" enctype="multipart/form-data">
        {{ csrf_field() }}
        <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Home Page Left Side Text</h3>
            </div>
            <div class="box-body pad">
                <input type="hidden" name="home_id" value="{!!html_entity_decode($homesecdata[0]['id'])!!}">
                <input type="hidden" name="oldvideo" value="{!!html_entity_decode($homesecdata[0]['columncenter'])!!}">
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
                 <input type="file" name="columncenter" id="video">
            </div>
            <div class="">
                <video width="150px" height="150px" class="video_cstm" controls >
                  <source src="/images/{!!html_entity_decode($homesecdata[0]['columncenter'])!!}" allow="autoplay" type="video/mp4">  
               </video>
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
