<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Projects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("creator_id")->nullable();
            $table->string("title");
            $table->string("slug");
            $table->string("image")->nullable();
            $table->text("description");
            $table->longText("specification");
            $table->enum("urgency", ["urgent", "normal", "insignificant"]);
            $table->enum("status", ["start", "continue", "finish", "reject"])->nullable();
            $table->timestamp("starting_date")->nullable();
            $table->timestamp("finished_date")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
