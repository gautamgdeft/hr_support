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

    @if(session('contactdlt'))
        <div class="alert-box success">
            <h1><small>{{ Session('contactdlt') }}</small></h1>
        </div>
    @endif
    @if(session('contactadd'))
        <div class="alert-box success">
            <h1><small>{{ Session('contactadd') }}</small></h1>
        </div>
    @endif
    @if(session('contactupdate'))
        <div class="alert-box success">
            <h1><small>{{ Session('contactupdate') }}</small></h1>
        </div>
    @endif

   <!--  <form method="POST" action="{{ route('contact.update') }}"> -->
        {{ csrf_field() }}
        <div class='box box-info'>
        <div class='box-header'>
            <h3 class='box-title'>Contact Page Content</h3>
            <a href="{{ route('contact.new') }}" class="add-new-btn btn sidbtn">Add New</a>
        </div>
            <div class='box-body pad'>
<table border="" class="contact-table-bckend" id="tblcontact">
    <tr><th>Name</th><th>Position</th><th>Telephone</th><th>Email</th><th>Photo</th><th>Action</th></tr>



    @foreach($contactdata as $contact)
    <tr class="tr-repeat-contact" id="contact-row-1" datacount ="1">
        <td>{!!html_entity_decode($contact['name'])!!}</td>
        <td>{!!html_entity_decode($contact['position'])!!}</td>
        <td>{!!html_entity_decode($contact['telephone'])!!}</td>
        <td>{!!html_entity_decode($contact['email'])!!}</td>
        <td><img height="150px" width="150px" src="/images/{!!html_entity_decode($contact['photo'])!!}"></td>
        <td>
        <a href="{{ route('contact.edit')}}?id={{$contact['id']}}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
        
        <a class="popup-modal" href="#test-modal_{{ $contact['id'] }}"><i class="fa fa-trash-o" aria-hidden="true"></i></a>

        <div id="test-modal_{{ $contact['id'] }}" class=" test-modal white-popup-block mfp-hide">
            <h1>Sure to delete record</h1>
            <div class="mod-content">
                <a href="{{ route('contact.delete')}}?id={{$contact['id']}}">Delete</a>
                <a class="popup-modal-dismiss" href="#">Dismiss</a>
            </div>
       </div> 

        </td>
    </tr>
   
    @endforeach



</table>
            </div>
        </div>
      <!--   <input type="submit" name="submit" value="submit"> -->
  <!--   </form> -->
</section>
<!-- CK Editor -->                   
@endsection
 