var Player = function(app, options) {
    this.app = app;
    $.extend(this, options);
};

define(function() {
    return Player;
});