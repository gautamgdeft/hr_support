<header>
   <nav class="navbar">
      <div class="container-fluid">
         <div class="navbar-header">
            <button id="nav-icon1" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span> 
            </button>
            <!--                  <a class="navbar-brand" href="#">WebSiteName</a>-->
         </div>
         <div class="collapse navbar-collapse" id="top-myNavbar">
            <ul class="nav navbar-nav">
               @guest
                  <li><a href="{{ route('login') }}">Login</a></li>
                  <li><a href="{{ route('register') }}">Register</a></li>
               @else
                  <li>
                     <a href="{{ route('logout') }}" onclick="event.preventDefault();
                              document.getElementById('logout-form').submit();">
                              {{ Auth::user()->name }} / Logout
                     </a>
                     <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                              {{ csrf_field() }}
                     </form>
                  </li>

                  @if(Auth::user()->Role == 'admin')
                     <li><a href="{{route('adminhomepage')}}">Dashboard</a></li>
                     @else
                     <li><a href="{{route('front.view.user')}}">Edit Profile</a></li>
                  @endif


               @endguest
            </ul>            
         </div>
         <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
               <li><a href="{{route('history')}}">History@flatworld</a></li>
               <li><a href="{{route('quality')}}">Quality@flatworld</a></li>
               <li><a href="{{route('life')}}">life@flatworld</a></li>
               <li><a href="{{route('work')}}">Work@flatworld</a></li>
               <li><a href="{{route('employment')}}">Employment@flatworld</a></li>
               <li><a href="{{route('workvslife')}}">Work vs life@flatworld</a></li>
               <li><a href="{{route('growth')}}">growth@flatworld</a></li>
               <li><a href="{{route('benifits')}}">benefits@flatworld</a></li>
               <li><a href="{{route('fun')}}">fun@flatworld</a></li>
               <li><a href="{{route('dialup')}}">dail-up@flatworld</a></li>
            </ul>
         </div>
         <div class="overlay"> </div>
      </div>
   </nav>
</header>