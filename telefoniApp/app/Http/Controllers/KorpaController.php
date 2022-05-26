<?php

namespace App\Http\Controllers;

use App\Http\Resources\StavkaKorpeCollection;
use App\Models\Korpa;
use App\Models\Proizvod;
use App\Models\StavkaKorpe;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class KorpaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        if (Auth::guard('api')->check()) {
            $userID = auth('api')->user()->getKey();
            
        }
        //return  response()->json($userID);
        $cart = Korpa::create([
            'id' => random_int(1,100),  
            'key' => random_int(1,100),  
            'content' => ' ',

            'user_id' =>   $userID   ,

        ]);
        return response()->json([
            'Message' => 'A new cart have been created for you!',
            'cartToken' => $cart->id,
            'cartKey' => $cart->key,
            'cart' => $cart->user_id
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Korpa  $korpa
     * @return \Illuminate\Http\Response
     */
    public function show($id,Request $request) //prikazuje sadrzaj korpe
    {
        $validator = Validator::make($request->all(), [
            'cartKey' => 'required',
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }
       $korpa = Korpa::find($id);
        $cartKey = $request->input('cartKey');
        if ($korpa->key == $cartKey) {
            return response()->json([
                'id korpe' => $korpa->id,
                'Items in Cart' => new StavkaKorpeCollection($korpa->stavke),
            ], 200);

        } else {

            return response()->json([
                'message' => 'The CarKey you provided does not match the Cart Key for this Cart.',
            ], 400);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Korpa  $korpa
     * @return \Illuminate\Http\Response
     */
    public function edit(Korpa $korpa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Korpa  $korpa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Korpa $korpa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Korpa  $korpa
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cartKey' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }

        $cartKey = $request->input('cartKey');
        $korpa = Korpa::find($id);
        if ($korpa->key == $cartKey) {
            $korpa->delete();
            return response()->json("uspesno obrisana korpa!" );
        } else {

            return response()->json([
                'message' => 'The CarKey you provided does not match the Cart Key for this Cart.',
            ], 400);
        }
    }
    
    public function addProducts($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'cartKey' => 'required',
            'productID' => 'required',
            'quantity' => 'required|numeric|min:1|max:10',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 400);
        }

        $cartKey = $request->input('cartKey');
        $productID = $request->input('productID');
        $quantity = $request->input('quantity');
        $userID = auth('api')->user()->getKey();
        $korpa = Korpa::find($id);
       
        //Check if the CarKey is Valid
        if ($korpa->key == $cartKey) {
            //Check if the proudct exist or return 404 not found.
            try { 
                $Product = Proizvod::findOrFail($productID);
            } catch (ModelNotFoundException $e) {
                return response()->json([
                    'message' => 'The Product you\'re trying to add does not exist.',
                ], 404);
            }

            //check if the the same product is already in the Cart, if true update the quantity, if not create a new one.
            $cartItem = StavkaKorpe::where(['korpa_id' => $korpa->getKey(), 'proizvod_id' => $productID])->first();
            if ($cartItem) {
              $cartItem->quantity = $quantity;
                StavkaKorpe::where(['korpa_id' => $korpa->getKey(), 'proizvod_id' => $productID])->update(['kolicina' =>   $quantity]);
            } else {
                $ukupnaCena = $quantity*$Product->cena;
                StavkaKorpe::create([
                  
                    'korpa_id' => $korpa->getKey(), 
                    'proizvod_id' => $productID, 
                    'kolicina' => $quantity,
                    'user_id' => $userID,
                    'cena' => $ukupnaCena //  $quantity * $Product->cena              
                
                ]);
            }

            return response()->json(['message' => 'The Cart was updated with the given product information successfully'], 200);

        } else {

            return response()->json([
                'message' => 'The CarKey you provided does not match the Cart Key for this Cart.',
            ], 400);
        }

    }
}
