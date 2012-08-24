ig.module( 'bootstrap.demos.resident-raver.levels.degraff' )
.requires('impact.image','bootstrap.demos.resident-raver.entities.player','bootstrap.demos.resident-raver.entities.powerup-spawner','bootstrap.demos.resident-raver.entities.powerup-spawner','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.demos.resident-raver.entities.elevator','bootstrap.demos.resident-raver.entities.elevator','bootstrap.entities.outofbounds','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.void','bootstrap.entities.spawner')
.defines(function(){
LevelDegraff=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":20,"y":194,"settings":{"name":"player"}},{"type":"EntityPowerupSpawner","x":56,"y":-4,"settings":{"size":{"x":16,"y":12},"name":"zombies","spawnEntity":"EntityZombie","maxPool":30,"delay":4}},{"type":"EntityPowerupSpawner","x":184,"y":-4,"settings":{"size":{"x":16,"y":12},"name":"zombies_clone","spawnEntity":"EntityZombie","maxPool":30,"delay":8}},{"type":"EntityVoid","x":60,"y":44,"settings":{"name":"cord1"}},{"type":"EntityVoid","x":60,"y":220,"settings":{"name":"cord2"}},{"type":"EntityVoid","x":188,"y":220,"settings":{"name":"cord4"}},{"type":"EntityVoid","x":188,"y":44,"settings":{"name":"cord3"}},{"type":"EntityVoid","x":48,"y":168,"settings":{"size":{"x":32,"y":48},"name":"floor1a"}},{"type":"EntityVoid","x":48,"y":120,"settings":{"size":{"x":32,"y":48},"name":"floor2a"}},{"type":"EntityVoid","x":48,"y":56,"settings":{"size":{"x":32,"y":48},"name":"floor3a"}},{"type":"EntityVoid","x":176,"y":168,"settings":{"size":{"x":32,"y":48},"name":"floor1b"}},{"type":"EntityVoid","x":176,"y":120,"settings":{"size":{"x":32,"y":48},"name":"floor2b"}},{"type":"EntityVoid","x":176,"y":56,"settings":{"size":{"x":32,"y":48},"name":"floor3b"}},{"type":"EntityElevator","x":48,"y":56,"settings":{"target":{"1":"floor3a","2":"floor2a","3":"floor1a"},"cord":{"1":"cord1","2":"cord2"}}},{"type":"EntityElevator","x":176,"y":168,"settings":{"target":{"1":"floor1b","2":"floor2b","3":"floor3b"},"cord":{"1":"cord3","2":"cord4"}}},{"type":"EntityOutofbounds","x":0,"y":244,"settings":{"size":{"x":256,"y":16}}},{"type":"EntityVoid","x":0,"y":-20,"settings":{"name":"settings","defaultInstructions":"Welcome To Degraff Hall"}},{"type":"EntityVoid","x":96,"y":64,"settings":{"name":"door1","size":{"x":16,"y":32}}},{"type":"EntityVoid","x":144,"y":64,"settings":{"name":"door2","size":{"x":16,"y":32}}},{"type":"EntityVoid","x":96,"y":128,"settings":{"name":"door3","size":{"x":16,"y":32}}},{"type":"EntityVoid","x":144,"y":128,"settings":{"name":"door4","size":{"x":16,"y":32}}},{"type":"EntitySpawner","x":124,"y":-32,"settings":{"name":"weapons","target":{"1":"door1","2":"door2","3":"door3","4":"door4"},"spawnEntity":"EntityDoor","maxPool":1,"delay":2}}],"layer":[{"name":"main","width":16,"height":14,"linkWithCollision":false,"visible":1,"tilesetName":"media/bootstrap/demos/resident-raver/images/dorm-tiles-purple.png","repeat":false,"preRender":true,"distance":"1","tilesize":16,"foreground":false,"data":[[5,5,5,8,9,5,5,5,5,5,5,9,8,5,5,5],[5,19,22,22,20,7,19,22,22,20,7,19,22,22,20,5],[5,26,26,26,26,7,26,26,26,26,7,26,26,26,26,5],[5,8,8,8,8,7,8,8,8,8,7,8,8,8,8,5],[5,7,7,7,7,7,12,7,7,12,7,7,7,7,7,5],[5,19,20,7,7,19,24,22,22,24,20,7,7,19,20,5],[5,26,26,7,7,26,26,26,26,26,26,7,7,26,26,5],[5,8,8,7,7,8,8,8,8,8,8,7,7,8,8,5],[5,7,7,7,7,7,12,7,7,12,7,7,7,7,7,5],[5,19,20,7,7,19,24,22,22,24,20,7,7,19,20,5],[5,26,26,7,7,26,26,26,26,26,26,7,7,26,26,5],[5,8,8,7,7,8,8,8,8,8,8,7,7,8,8,5],[5,19,20,7,7,19,22,22,22,22,20,7,7,19,20,5],[5,14,14,36,36,14,14,14,14,14,14,36,36,14,14,5]]},{"name":"collision","width":16,"height":14,"linkWithCollision":false,"visible":0,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[1,1,1,23,23,1,1,1,1,1,1,23,23,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1]]}]}/*]JSON*/;
LevelDegraffResources=[new ig.Image('media/bootstrap/demos/resident-raver/images/dorm-tiles-purple.png')];
});