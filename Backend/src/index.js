import app from "./app.js";
import connectDB from "./db/db.js";
import dotenv from"dotenv"

dotenv.config({
  path:"./.env"
})

const PORT = process.env.PORT || 8000;



connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
  });
});
