var app = require("./src/server/server"),
    { PORT } = require("./config/config");

//start server
app.listen(PORT, function() {
    console.log("server now listening on port", PORT);
})