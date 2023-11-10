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

    //data passing to vue component
    public function Page1()
    {
        $json = [
            'name' => 'John Doe',
            'age' => 25,
            'city' => 'New York',
        ];
        return Inertia::render('Page1',[
            'data' => $json,
        ]);
    }

    public function Page2()
    {
        $meta = [
            'title' => 'This is page 2',
        ];
        return Inertia::render('Page2')->withViewData(['meta' => $meta]);
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
