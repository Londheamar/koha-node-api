import app from "./src/app.js";

const startServer = () => {
    app.listen(process.env.PORT, () => {
        console.log("⚙️  Server is running on port: " + process.env.PORT);
    });
};


try {
    // Start the server
    if(process.env.PORT){
        startServer();
    }else{
        console.log("Unable to start server!");
        process.exit(0)
    }
} catch (err) {
    console.log("Error starting server : ", err);
}