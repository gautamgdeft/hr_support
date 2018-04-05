<section class="sidebar">
                    <!-- Sidebar user panel -->
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="/backend/img/avatar3.png" class="img-circle" alt="User Image" />
                        </div>
                        <div class="pull-left info">
                            <p>Hello, {{ Auth::user()->name }}</p>

                            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <!-- search form -->
                    <form action="#" method="get" class="sidebar-form">
                        <!-- <div class="input-group">
                            <input type="text" name="q" class="form-control" placeholder="Search..."/>
                            <span class="input-group-btn">
                                <button type='submit' name='seach' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i></button>
                            </span>
                        </div> -->
                    </form>
                    <!-- /.search form -->
                    
                    <!-- sidebar menu: : style can be found in sidebar.less -->
                    <ul class="sidebar-menu">
                        <li class="dash-menu {{ Request::is('LaraAdmin') ? 'active' : '' }}" id="dash">
                            <a href="{{route('adminhomepage')}}">
                                <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                            </a>
                        </li>

                        <!--Edit profile Section-->
                        <!-- <li class="{{ Request::is('user-profile') ? 'active' : '' }}" id="home">
                            <a href="{{route('userprofile')}}">
                                <i class="fa fa-th"></i> <span>User Profile</span>
                            </a>
                        </li> -->
                        <!--Edit profile section ends -->

                        <!-- Main Page section -->

                        <!-- Home Page -->
                        <li class="{{ Request::is('home-section') ? 'active' : '' }}" id="home">
                            <a href="{{route('homesection')}}">
                                <i class="fa fa-th"></i> <span>Home Page</span>
                            </a>
                        </li>
                        <!-- History Page -->
                        <li class="{{ Request::is('history-section') ? 'active' : '' }}" id="history">
                            <a href="{{route('history.section')}}">
                                <i class="fa fa-th"></i> <span>History Page</span>
                            </a>
                        </li>
                        <!-- Quality Page -->
                        <li class="{{ Request::is('quality-section') ? 'active' : '' }}" id="quality">
                            <a href="{{route('quality.section')}}">
                                <i class="fa fa-th"></i> <span>Quality Page</span>
                            </a>
                        </li>
                        <!-- Life Page -->
                        <li class="{{ Request::is('life-section') ? 'active' : '' }}" id="life">
                            <a href="{{route('life.section')}}">
                                <i class="fa fa-th"></i> <span>Life Page</span>
                            </a>
                        </li>
                        <!-- Work Page -->
                        <li class="{{ Request::is('work-section') ? 'active' : '' }}" id="work">
                            <a href="{{route('work.section')}}">
                                <i class="fa fa-th"></i> <span>Work Page</span>
                            </a>
                        </li>
                        <!-- Employment Page -->
                        <li class="{{ Request::is('employment-section') ? 'active' : '' }}" id="employment">
                            <a href="{{route('employment.section')}}">
                                <i class="fa fa-th"></i> <span>Employment Page</span>
                            </a>
                        </li>
                        <!-- Work vs Life Page -->
                        <li class="{{ Request::is('worklife-section') ? 'active' : '' }}" id="workvslife">
                            <a href="{{route('worklife.section')}}">
                                <i class="fa fa-th"></i> <span>Work-vs-life Page</span>
                            </a>
                        </li>
                         <!-- Growth Page -->
                        <li class="{{ Request::is('growth-section') ? 'active' : '' }}" id="growth">
                            <a href="{{route('growth.section')}}">
                                <i class="fa fa-th"></i> <span>Growth Page</span>
                            </a>
                        </li>
                        <!-- Benifits Page -->
                        <li class="{{ Request::is('benifits-section') ? 'active' : '' }}" id="benifits">
                            <a href="{{route('benifits.section')}}">
                                <i class="fa fa-th"></i> <span>Benifits Page</span>
                            </a>
                        </li>

                        <!-- Fun Page -->
                        <li class="{{ (\Request::route()->getName() == 'fun.section' || \Request::route()->getName() == 'fun.new' || \Request::route()->getName() == 'fun.edit') ? 'active' : '' }}" id="fun">
                            <a href="{{route('fun.section')}}">
                                <i class="fa fa-th"></i> <span>Fun Page</span>
                            </a>
                            <ul class="treeview-menu" style="display:none;">
                                <li class="{{ Request::is('fun-section') ? 'active' : '' }}">
                                <a href="{{route('fun.section')}}"><i class="fa fa-angle-double-right"></i>All Fun Events</a></li>
                                <li class="{{ Request::is('fun-addnew') ? 'active' : '' }}">
                                <a href="{{route('fun.new')}}"><i class="fa fa-angle-double-right"></i>Add New Event</a></li>
                            </ul>
                        </li>

                        <!-- Contact Page -->
                        <li class="{{ (\Request::route()->getName() == 'contact.section' || \Request::route()->getName() == 'contact.new' || \Request::route()->getName() == 'contact.edit') ? 'active' : '' }}" id="contact">
                            <a href="{{route('contact.section')}}">
                                <i class="fa fa-th"></i> <span>Contact Page</span>
                            </a>
                            <ul class="treeview-menu" style="display:none;">
                                <li class="{{ Request::is('contact-section') ? 'active' : '' }}">
                                <a href="{{route('contact.section')}}"><i class="fa fa-angle-double-right"></i>All Contacts</a></li>
                                <li class="{{ Request::is('contact-addnew') ? 'active' : '' }}">
                                <a href="{{route('contact.new')}}"><i class="fa fa-angle-double-right"></i>Add New Contact</a></li>
                            </ul>
                        </li>
                        <!-- Main page section ended -->














                       <!--  <li>
                            <a href="pages/widgets.html">
                                <i class="fa fa-th"></i> <span>Widgets</span> <small class="badge pull-right bg-green">new</small>
                            </a>
                        </li> -->
                        <!-- <li class="treeview">
                            <a href="#">
                                <i class="fa fa-bar-chart-o"></i>
                                <span>Charts</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="pages/charts/morris.html"><i class="fa fa-angle-double-right"></i> Morris</a></li>
                                <li><a href="pages/charts/flot.html"><i class="fa fa-angle-double-right"></i> Flot</a></li>
                                <li><a href="pages/charts/inline.html"><i class="fa fa-angle-double-right"></i> Inline charts</a></li>
                            </ul>
                        </li> -->
                       <!--  <li class="treeview">
                            <a href="#">
                                <i class="fa fa-laptop"></i>
                                <span>UI Elements</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="pages/UI/general.html"><i class="fa fa-angle-double-right"></i> General</a></li>
                                <li><a href="pages/UI/icons.html"><i class="fa fa-angle-double-right"></i> Icons</a></li>
                                <li><a href="pages/UI/buttons.html"><i class="fa fa-angle-double-right"></i> Buttons</a></li>
                                <li><a href="pages/UI/sliders.html"><i class="fa fa-angle-double-right"></i> Sliders</a></li>
                                <li><a href="pages/UI/timeline.html"><i class="fa fa-angle-double-right"></i> Timeline</a></li>
                            </ul>
                        </li> -->

                       
                        <!-- <li class="treeview">
                            <a href="{{route('homesection')}}">
                                <i class="fa fa-edit"></i> <span>Forms</span>
                                
                            </a> -->
                             <!-- <ul class="treeview-menu">
                                <li><a href="pages/forms/general.html"><i class="fa fa-angle-double-right"></i> General Elements</a></li>
                                <li><a href="pages/forms/advanced.html"><i class="fa fa-angle-double-right"></i> Advanced Elements</a></li>
                                <li><a href="pages/forms/editors.html"><i class="fa fa-angle-double-right"></i> Editors</a></li>
                            </ul> -->
                            <!-- <ul class="treeview-menu">
                                <li><a href="pages/forms/general.html"><i class="fa fa-angle-double-right"></i> General Elements</a></li>
                                <li><a href="pages/forms/advanced.html"><i class="fa fa-angle-double-right"></i> Advanced Elements</a></li>
                                <li><a href="pages/forms/editors.html"><i class="fa fa-angle-double-right"></i> Editors</a></li>
                            </ul> -->
                       <!--  </li> -->
                        <!-- <li class="treeview">
                            <a href="#">
                                <i class="fa fa-table"></i> <span>Tables</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="pages/tables/simple.html"><i class="fa fa-angle-double-right"></i> Simple tables</a></li>
                                <li><a href="pages/tables/data.html"><i class="fa fa-angle-double-right"></i> Data tables</a></li>
                            </ul>
                        </li> -->
                        <!-- <li>
                            <a href="pages/calendar.html">
                                <i class="fa fa-calendar"></i> <span>Calendar</span>
                                <small class="badge pull-right bg-red">3</small>
                            </a>
                        </li> -->
                       <!--  <li>
                            <a href="pages/mailbox.html">
                                <i class="fa fa-envelope"></i> <span>Mailbox</span>
                                <small class="badge pull-right bg-yellow">12</small>
                            </a>
                        </li> -->
                        <!-- <li class="treeview">
                            <a href="#">
                                <i class="fa fa-folder"></i> <span>Examples</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="pages/examples/invoice.html"><i class="fa fa-angle-double-right"></i> Invoice</a></li>
                                <li><a href="pages/examples/login.html"><i class="fa fa-angle-double-right"></i> Login</a></li>
                                <li><a href="pages/examples/register.html"><i class="fa fa-angle-double-right"></i> Register</a></li>
                                <li><a href="pages/examples/lockscreen.html"><i class="fa fa-angle-double-right"></i> Lockscreen</a></li>
                                <li><a href="pages/examples/404.html"><i class="fa fa-angle-double-right"></i> 404 Error</a></li>
                                <li><a href="pages/examples/500.html"><i class="fa fa-angle-double-right"></i> 500 Error</a></li>
                                <li><a href="pages/examples/blank.html"><i class="fa fa-angle-double-right"></i> Blank Page</a></li>
                            </ul>
                        </li> -->
                    </ul>
                </section>