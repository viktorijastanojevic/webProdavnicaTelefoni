<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StavkaKorpe extends Model
{
    use HasFactory;

    public function korpa()
    {
        return $this->belongsTo(Korpa::class);
    }
}
