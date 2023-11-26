<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!------------- Links ------------------>
    <link rel="stylesheet" href="{{ asset('vendor/Bootstrap/bootstrap.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/courses.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/responsive.min.css') }}" />
    <title>@yield('title')</title>
</head>

<body>
    @yield('content')

    @include('partials.footer')
    <!------------- Scripts ---------------->
    <script src="{{ asset('javascript/courses.js') }}"></script>
</body>

</html>
