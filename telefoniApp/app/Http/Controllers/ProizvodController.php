<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProizvodResource;
use App\Models\Proizvod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProizvodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProizvodResource::collection(Proizvod::all());
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
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' =>  'required' , 
                'description' => 'required|string|max:100', 
                'price' => 'required',
                'amount' => 'required',  
                'category' => 'required'  ,
                'image' =>'  '

            ]
        );
        if ($validator->fails()) 
            return response()->json($validator->errors());


         
            

        $p = Proizvod::create([
                'name' =>   $request->name, 
                'description' => $request->description, 
                'price' =>  $request->price, 
                'amount' =>  $request->amount, 
                'category' =>  $request->category, 
                'image' =>  $request->image
           
        ]);
        return response()->json(["Uspesno kreiran proizvod",$p]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ProizvodResource(Proizvod::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function edit(Proizvod $proizvod)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Proizvod $proizvod)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function destroy(Proizvod $proizvod)
    {
        //
    }
}
