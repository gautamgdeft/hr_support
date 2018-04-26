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
                <small>Fun panel</small>
            </h1>
        </section>
<!-- Main content -->
<section class="content">
            @if(session('funupdate'))
                <div class="alert-box success">
                    <h1><small>{{ Session('funupdate') }}</small></h1>
                </div>
            @endif
            @if(session('fungalimgdlt'))
                <div class="alert-box success">
                    <h1><small>{{ Session('fungalimgdlt') }}</small></h1>
                </div>
            @endif
            
    <form class="custom-form" method="POST" action="{{ route('fun.update') }}" enctype="multipart/form-data">
        {{ csrf_field() }}
        <div class='box box-info'>
            <div class='box-header'>
                <h3 class='box-title'>Edit Event</h3>
            </div>
            <div class='box-body pad'>
            <div class="customfun-detail">
                <table border="" class="fun-table-bckend" id="tblfunupdate">
                <input type="hidden" name="fun_id"  value="{!!html_entity_decode($fundata['id'])!!}">
                <input type="hidden" name="oldphoto"  value="{!!html_entity_decode($fundata['event_image'])!!}">

                    <tr><th>Event name</th><td><input  name="event_name" type="text" value="{!!html_entity_decode($fundata['event_name'])!!}"></td></tr>
                    <tr><th>Event image</th><td><input  name="event_image" type="file" accept="image/*" value="{!!html_entity_decode($fundata['event_image'])!!}"><img height="150px" width="150px" src="/images/{!!html_entity_decode($fundata['event_image'])!!}"></td></tr>
                     @if ($errors->has('event_image'))
                       <div class="alert-box alert">
                         <h1>{{ $errors->first('event_image') }}</h1>
                       </div>
                    @endif
                    <tr><th>Add Gallery Image</th><td><input  name="event_gallery[]" type="file" value="" accept="image/*"></td></tr>
                    @if(session('fungaledit'))
                        <div class="alert-box alert">
                            <h1><small>{{ Session('fungaledit') }}</small></h1>
                        </div>
                    @endif
                </table>
                <a id="add-more-update" class="update-add-more">Add more</a>

            </div>

                <div class="gallery-collection">
                  <h2 class="headline">Event Gallery</h2>
                    <ul>
                       @foreach($funimages as $funimage)
                    @if($funimage->event_id == $fundata['id'])
                         <li>
                            <img height="150px" width="150px" src="/images/{!!html_entity_decode($funimage->event_gallery)!!}">
                            <div class="delete-option">
                                <!-- <a href="{{ route('fun.delete.gallery')}}?id={{$funimage->event_id}}&gid={{$funimage->id}}">Delete</a> -->

                                <a class="popup-modal" href="#test-modal_{{ $funimage->id }}"><i class="fa fa-trash-o" aria-hidden="true"></i></a>

                                    <div id="test-modal_{{ $funimage->id }}" class=" test-modal white-popup-block mfp-hide">
                                        <h1>Sure to delete gallery image</h1>
                                        <div class="mod-content">
                                             <a href="{{ route('fun.delete.gallery')}}?id={{$funimage->event_id}}&gid={{$funimage->id}}">Delete</a>
                                            <a class="popup-modal-dismiss" href="#">Dismiss</a>
                                        </div>
                                   </div>   
                            </div>
                            <input type="hidden" name="oldgallery[]"  value="{!!html_entity_decode($funimage->event_gallery)!!}">
                        </li>

                        @endif
                    @endforeach 
                    </ul>
                    
                </div>
 
            </div>
        </div>
        <input type="submit" name="submit" value="Update event">
        <a href="{{route('fun.section')}}">Back</a>
    </form>
</section>
<!-- CK Editor -->                   
@endsection
 