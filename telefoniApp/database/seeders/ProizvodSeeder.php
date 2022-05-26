<?php

namespace Database\Seeders;

use App\Models\Proizvod;
use Illuminate\Database\Seeder;

class ProizvodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Proizvod::create(['image'=>'https://static.tehnomanija.rs/UserFiles/products/2020/017/large/146405.webp', 'name'=>'Panasonic Mobilni telefon TU150EX', 'description'=>'Praktičan i kompaktan mobilni telefon interne memorije od 32 MB. Poseduje TFT ekran veličine od 2,4" i rezolucije od 320 x 240 px ', 'price'=>6500, 'amount'=>0, 'category'=>2]);
        Proizvod::create(['image'=>'https://static.tehnomanija.rs/UserFiles/products/2021/006/large/20142.webp', 'name'=>'PANASONIC Telefon KX TS 500FXW', 'description'=>' Ponovno biranje poslednjeg biranog broja. Elektronsko podešavanje jačine zvuka, Montiranje baze na zid ', 'price'=>2100, 'amount'=>0, 'category'=>1]);
        Proizvod::create(['image'=>'https://static.tehnomanija.rs/UserFiles/products/2022/001/large/186522.webp', 'name'=>'Gigaset Bežični telefon A180 - Crni', 'description'=>' Bežični telefon kompaktnog dizajna u crnoj boji. Osvetljeni grafički displej od 1,5" sa prikazom vremena i datuma ', 'price'=>3300, 'amount'=>0, 'category'=>3]);
        Proizvod::create(['image'=>'https://static.tehnomanija.rs/UserFiles/products/2020/003/large/157496.webp', 'name'=>'iPhone 11 - White', 'description'=>' Odličan pametni telefon sa iOS 14 operativnim sistemom. Veliki 6,1" Liquid Retina HD ekran IPS tehnologije sa rezolucijom do 1792 x 828 px ', 'price'=>69900, 'amount'=>0, 'category'=>4]);
        Proizvod::create(['image'=>'https://static.tehnomanija.rs/UserFiles/products/2022/001/large/186017.webp', 'name'=>'Samsung Galaxy S22 Ultra 256 GB - Crni ', 'description'=>'Pametni telefon sa Dynamic AMOLED ekranom od 6,8",Odlična rezolucija 3088 x 1440 px nudi jasne prikaze slike ', 'price'=>164990, 'amount'=>0, 'category'=>4]);
        Proizvod::create(['image'=>'https://static.tehnomanija.rs/UserFiles/products/2021/023/large/182599.webp', 'name'=>'Iphone 13 ', 'description'=>'Pametni telefon sa Dynamic AMOLED ekranom od 6,8",Odlična rezolucija 3088 x 1440 px nudi jasne prikaze slike ', 'price'=> 120000, 'amount'=>0, 'category'=>4]);
        Proizvod::create(['image'=>'https://static.tehnomanija.rs/UserFiles/products/2021/023/large/180916.webp', 'name'=>'Xiaomi mi 11T ', 'description'=>'Pametni telefon sa Dynamic AMOLED ekranom od 6,8",Odlična rezolucija 3088 x 1440 px nudi jasne prikaze slike ', 'price'=> 120000, 'amount'=>0, 'category'=>4]);




       
    }
}
