import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    const uri = 'mongodb+srv://ferhat:4231ferhat@sahibinden.ehok4qf.mongodb.net/?retryWrites=true&w=majority';
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB bağlantısı başarılı!');
  } catch (error) {
    console.error('MongoDB bağlantısı başarısız!', error);
  }
};

export default connectToDatabase;
