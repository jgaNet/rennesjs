require.config({
    baseUrl: "/javascripts",
    paths: {
        "app": "./app",
        "jquery": "libs/jquery-1.11.0.min",
        "socketio": "/socket.io/socket.io"
    }
});

requirejs(["app/game"]);