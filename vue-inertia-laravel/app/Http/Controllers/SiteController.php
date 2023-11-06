<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function index()
    {
        return Inertia::render('index');
    }

    public function Page1()
    {
        return Inertia::render('Page1');
    }

    public function Page2()
    {
        return Inertia::render('Page2');
    }

    public function Page3()
    {
        return Inertia::render('Page3');
    }

    public function Page4()
    {
        return Inertia::render('Page4');
    }

    public function Page5()
    {
        return Inertia::render('Page5');
    }
}
