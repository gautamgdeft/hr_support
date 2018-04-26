<header>
   <nav class="navbar">
      <div class="container-fluid">
         <div class="navbar-header">
            <button id="nav-icon1" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span> 
            </button>
            <!--<a class="navbar-brand" href="#">WebSiteName</a>-->
         </div>
         <div class="collapse navbar-collapse" id="top-myNavbar">
            <ul class="nav navbar-nav">
               @guest
                  <li><a href="{{ route('login') }}">Login</a></li>
                  <li><a href="{{ route('register') }}">Register</a></li>
               @else
               
                  <li class="sub-menus user-name-menu front-menu"> <a class="anchor-no-css" href="#">
                  @php
                  $username = Auth::user()->name;
                  $namecount = strlen($username);
                     if($namecount <= 15){
                        echo $username;
                     }else{
                        $string = substr($username,0,15).'...';
                        echo $string;
                     }
                  @endphp
                  </a>
                     <ul class="inner-user-menu">
                     <li><a href="{{route('user.admin.homepage')}}">Dashboard</a></li>
                     <li>
                        <a href="{{ route('logout') }}" onclick="event.preventDefault();
                           document.getElementById('logout-form').submit();">Logout
                        </a>
                     </li>
                     <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;"> {{ csrf_field() }}
                     </form>
                     </ul>
                  </li>

               @endguest
            </ul> 

            <script>
            $(document).ready(function(){
               jQuery(".user-name-menu").click(function(){
                  jQuery(".inner-user-menu").toggle();
                  //alert('786');
               });

               $('.main-wrap').click(function(){  
                  $('.inner-user-menu').hide();
               });
            });
            </script>           
         </div>
         <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
               <li class="dash-menu {{ Request::is('/') ? 'active' : '' }}"><a href="{{route('home')}}">Home</a></li>
               <li class="dash-menu {{ Request::is('history') ? 'active' : '' }}"><a href="{{route('history')}}">History@flatworld</a></li>
               <li class="dash-menu {{ Request::is('quality') ? 'active' : '' }}"><a href="{{route('quality')}}">Quality@flatworld</a></li>
               <li class="dash-menu {{ Request::is('life') ? 'active' : '' }}"><a href="{{route('life')}}">life@flatworld</a></li>
               <li class="dash-menu {{ Request::is('work') ? 'active' : '' }}"><a href="{{route('work')}}">Work@flatworld</a></li>
               <li class="dash-menu {{ Request::is('employment') ? 'active' : '' }}"><a href="{{route('employment')}}">Employment@flatworld</a></li>
               <li class="dash-menu {{ Request::is('workvslife') ? 'active' : '' }}"><a href="{{route('workvslife')}}">Work vs life@flatworld</a></li>
               <li class="dash-menu {{ Request::is('growth') ? 'active' : '' }}"><a href="{{route('growth')}}">growth@flatworld</a></li>
               <li class="dash-menu {{ Request::is('benifits') ? 'active' : '' }}"><a href="{{route('benifits')}}">benefits@flatworld</a></li>
               <li class="dash-menu {{ Request::is('fun') ? 'active' : '' }}"><a href="{{route('fun')}}">fun@flatworld</a></li>
               <li class="dash-menu {{ Request::is('dialup') ? 'active' : '' }}"><a href="{{route('dialup')}}">dail-up@flatworld</a></li>
            </ul>
         </div>
         <div class="overlay"> </div>
      </div>
   </nav>
</header>