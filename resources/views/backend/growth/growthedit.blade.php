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
                Growth Section
                <small>Control panel</small>
            </h1>
        </section>
<!-- Main content -->
<section class="content">
    @if(session('growthsuccess'))
        <div class="alert-box success">
          <h1><small>{{ Session('growthsuccess') }}</small></h1>
        </div>
    @endif
    <form method="POST" action="{{ route('growth.update') }}">
        {{ csrf_field() }}
       <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Growth Page Content</h3>
            </div>
            <div class="box-body pad">
                <input type="hidden" name="growth_id" value="{!!html_entity_decode($growthdata[0]['id'])!!}">
            </div>
            <div class='box-body pad'>
                <textarea id="editor1" name="growth_text" rows="10" cols="80" class="summernote">{!!html_entity_decode($growthdata[0]['growth_text'])!!}</textarea>
            </div>

        </div>
        <input type="submit" name="submit" value="Update">
    </form>
</section>
<!-- CK Editor -->               
@endsection
 