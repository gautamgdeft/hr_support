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
                Fun Section
                <small>Control panel</small>
            </h1>
        </section>
<!-- Main content -->
<section class="content">
    <form class="custom-form" method="POST" action="{{ route('fun.newentry') }}" enctype="multipart/form-data">
        {{ csrf_field() }}
        <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Add New Event</h3>
            </div>
            <div class='box-body pad'>
            <div class="customfun-detail">
                <table border="" class="fun-table-bckend" id="tblfun">
                    <tr><th>Event Name</th><td><input  name="event_name" type="text"></td></tr>
                    <tr><th>Event Photo</th><td><input  name="event_image" type="file" accept="image/*"></td></tr>
                    @if ($errors->has('event_image'))
                       <div class="alert-box alert">
                         <h1>{{ $errors->first('event_image') }}</h1>
                       </div>
                    @endif
                    <tr class="event-gallery"><th>Event Gallery</th><td><input  name="event_gallery[]" type="file" accept="image/*"></td></tr>
                    @if(session('fungaledit'))
                        <div class="alert-box alert">
                            <h1><small>{{ Session('fungaledit') }}</small></h1>
                        </div>
                    @endif
                </table>
                <a id="add-fun-gallery" class="event-gallery-add">Add More</a>
                </div>
            </div>
        </div>
        <input type="submit" name="submit" value="Add new">
    </form>
</section>
<!-- CK Editor -->                   
@endsection
 


