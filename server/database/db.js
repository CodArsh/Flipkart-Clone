import mongoose from "mongoose";
export const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-nuobyrp-shard-00-00.4kuidmy.mongodb.net:27017,ac-nuobyrp-shard-00-01.4kuidmy.mongodb.net:27017,ac-nuobyrp-shard-00-02.4kuidmy.mongodb.net:27017/?ssl=true&replicaSet=atlas-v7ou4f-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  } catch (err) {
    console.log("ERROR WHILE CONNECTING WITH DATABASE => ", err.message);
  }
};
