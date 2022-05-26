<?php

namespace Database\Seeders;

use App\Models\Kategorija;
use Illuminate\Database\Seeder;

class KategorijaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kat1 = new Kategorija();
        $kat1->naziv="zicni telefoni";
        $kat1->save();

        $kat2 = new Kategorija();
        $kat2->naziv="standardni telefoni";
        $kat2->save();

        $kat3 = new Kategorija();
        $kat3->naziv="bezicni telefoni";
        $kat3->save();

        $kat4 = new Kategorija();
        $kat4->naziv="smart telefoni";
        $kat4->save();

        $kat5 = new Kategorija();
        $kat5->naziv="ostali telefoni";
        $kat5->save();
    }
}
