var Game = function() {
    this.world = new World(this);
    this.self = new Player(this, {
        name: "toto"
    });
    this.world.addPlayer(this.self);
}

Game.prototype.newPlayer = function() {
    console.log("New Player");
};

Game.prototype.events = function() {

};

define(["jquery", "socketio", "app/player", "app/world"], function($, io, Player, World) {
    var app = new Game();
    var socket = io.connect('http://localhost:3000');
    socket.on('user connected', function(data) {
        console.log("ok");
        app.newPlayer();
    });
    $(document).ready(function() {
        console.log(app);
    });
});