
import mongoose from "mongoose";
import app from "./app";
const PORT = 5000;

async function bootstrap() {

    try {
        await mongoose.connect('')

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        })
    }
    catch (err) {
        console.log(err);

    }

}


bootstrap();