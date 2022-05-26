<?php

namespace App\Http\Resources;

use App\Models\Kategorija;
use Illuminate\Http\Resources\Json\JsonResource;

class ProizvodResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'description' => $this->resource->description,
            'price' => $this->resource->price,
            'amount' => $this->resource->amount,
            'category' => new KategorijaResource(Kategorija::find($this->resource->category)),
            'image' => $this->resource->image,
            'kamera' => $this->resource->kamera,
            'memorija' => $this->resource->memorija,
            'baterija' => $this->resource->baterija,
            'tezina' => $this->resource->tezina,
            'ekran' => $this->resource->ekran,
        

            
 
        ];
    }
}
