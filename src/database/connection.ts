import mongoose from 'mongoose';

const MONGO_URL = 'mongodb://localhost:27017/solid';

const connection = () => {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  }).then(() => console.log('🏃 Mongo is Running'));
};

export default connection;