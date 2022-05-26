<?php

namespace App\Http\Controllers;

use App\Models\StavkaKorpe;
use Illuminate\Http\Request;

class StavkaKorpeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return StavkaKorpe::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request )
    {
      
;    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StavkaKorpe  $stavkaKorpe
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return StavkaKorpe::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StavkaKorpe  $stavkaKorpe
     * @return \Illuminate\Http\Response
     */
    public function edit(StavkaKorpe $stavkaKorpe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StavkaKorpe  $stavkaKorpe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StavkaKorpe $stavkaKorpe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StavkaKorpe  $stavkaKorpe
     * @return \Illuminate\Http\Response
     */
    public function destroy(StavkaKorpe $stavkaKorpe)
    {
        //
    }
}
