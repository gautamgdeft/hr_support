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
   <!--  <form method="POST" action="{{ route('contact.update') }}"> -->

            
            @if(session('fundlt'))
                <div class="alert-box success">
                    <h1><small>{{ Session('fundlt') }}</small></h1>
                </div>
            @endif
            @if(session('funadd'))
                <div class="alert-box success">
                    <h1><small>{{ Session('funadd') }}</small></h1>
                </div>
            @endif

        {{ csrf_field() }}
        <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Fun Page Content</h3>
                <a href="{{ route('fun.new') }}" class="add-new-btn btn sidbtn">Add New</a>
            </div>
            <div class='box-body pad'>
<table border="" class="contact-table-bckend" id="tblcontact">
    <tr><th>Name</th><th>Event Banner Image</th><th>Action</th></tr>


@if(isset($fundata))
    @foreach($fundata as $fun)
        <tr class="tr-repeat-contact" id="fun-row-1" datacount ="1">
            <td>{!!html_entity_decode($fun->event_name)!!}</td>
            <td><img height="150px" width="150px" src="/images/{!!html_entity_decode($fun->event_image)!!}"></td>
            <td>
                <a href="{{ route('fun.edit',['id' => $fun['id']])}}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a> 
                <!-- <a href="{{ route('fun.delete')}}?id={{$fun['id']}}"><i class="fa fa-trash-o" aria-hidden="true"></i></a> -->

                <a class="popup-modal" href="#test-modal_{{ $fun['id'] }}"><i class="fa fa-trash-o" aria-hidden="true"></i></a>

                <div id="test-modal_{{ $fun['id'] }}" class=" test-modal white-popup-block mfp-hide">
                    <h1>Sure to delete record</h1>
                    <div class="mod-content">
                        <a href="{{ route('fun.delete')}}?id={{$fun['id']}}">Delete</a>
                        <a class="popup-modal-dismiss" href="#">Dismiss</a>
                    </div>
               </div> 
            </td>
        </tr>   
    @endforeach
@endif


</table>
            </div>
        </div>
      <!--   <input type="submit" name="submit" value="submit"> -->
  <!--   </form> -->
</section>
<!-- CK Editor -->                   
@endsection
 