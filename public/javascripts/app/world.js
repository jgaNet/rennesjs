var World = function(app, options) {
    this.app = app;
    $.extend(this, options);
    this.players = {};
};

World.prototype.addPlayer = function(player) {
    this.players[player.name] = player;
};

define(function() {
    return World;
});