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
                Benifits Section
                <small>Control panel</small>
            </h1>
        </section>
<!-- Main content -->
<section class="content">

    @if(session('benifitssuccess'))
        <div class="alert-box success">
          <h1><small>{{ Session('benifitssuccess') }}</small></h1>
        </div>
    @endif
    <form method="POST" action="{{ route('benifits.update') }}">
        {{ csrf_field() }}
       <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Benifits Page Content</h3>
            </div>
            <div class="box-body pad">
                <input type="hidden" name="benifits_id" value="{!!html_entity_decode($benifitdata[0]['id'])!!}">
            </div>
            <div class='box-body pad'>
                <textarea id="editor1" name="benifits_text" rows="10" cols="80" class="summernote">{!!html_entity_decode($benifitdata[0]['benifits_text'])!!}</textarea>
            </div>

        </div>
        <input type="submit" name="submit" value="Update">
    </form>
</section>
<!-- CK Editor -->               
@endsection
 