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
                Employment Section
                <small>Control panel</small>
            </h1>
        </section>
<!-- Main content -->
<section class="content">
    <form method="POST" action="{{ route('employment.update') }}">
        {{ csrf_field() }}
       <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Employment Page Content</h3>
            </div>
            <div class="box-body pad">
                <input type="hidden" name="employment_id" value="{!!html_entity_decode($employmentdata[0]['id'])!!}">
            </div>
            <div class='box-body pad'>
                <textarea id="editor1" name="employment_text" rows="10" cols="80" class="summernote">{!!html_entity_decode($employmentdata[0]['employment_text'])!!}</textarea>
            </div>

        </div>
        <input type="submit" name="submit" value="Update">
    </form>
</section>
<!-- CK Editor -->               
@endsection
 