<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Korpa extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        
    ];

    public function stavke()
    {
        return $this->hasMany(StavkaKorpe::class);
    }


}
