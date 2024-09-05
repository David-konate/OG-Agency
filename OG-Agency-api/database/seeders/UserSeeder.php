<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // création de l'administrateur
        User::create([
            'name' => 'Daouda',
            'password' => Hash::make('Azerty@123'),
            'email' => 'admin@boss.fr',
            'slug' => Str::slug('daouda'),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
            'google_id' => null,

        ]);
    }
}
