<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,  initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

      <title>
         {{ Request::is('login') ? 'Login' : '' }}
         {{ Request::is('home') ? 'Home' : '' }}
         {{ Request::is('history') ? 'History' : '' }}
         {{ Request::is('quality') ? 'Quality' : '' }}
         {{ Request::is('life') ? 'Life' : '' }}
         {{ Request::is('work') ? 'Work' : '' }}
         {{ Request::is('employment') ? 'Employment' : '' }}
         {{ Request::is('workvslife') ? 'Work vs Life' : '' }}
         {{ Request::is('growth') ? 'Growth' : '' }}
         {{ Request::is('benifits') ? 'Benifits' : '' }}
         {{ Request::is('fun') ? 'Fun' : '' }}
         {{ Request::is('dialup') ? 'Dial-Up' : '' }}
         {{ Request::is('viewuser') ? 'User' : '' }}
         {{ Request::is('edituser') ? 'Edit-User' : '' }}
         {{ Request::is('editpassword') ? 'Edit-Password' : '' }}
      </title>
      <link rel="icon" href="images/favicon.png" type="image/x-icon">
      <link href="css/bootstrap.min.css" rel="stylesheet">
      <link href="css/style.css" rel="stylesheet">
      <link href="css/font-awesome.min.css" rel="stylesheet">
      <link href="css/jquery.mCustomScrollbar.css" rel="stylesheet">

       <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
              <script src="/js/validator.js" type="text/javascript"></script>
   </head>
        @yield('content')
</html>