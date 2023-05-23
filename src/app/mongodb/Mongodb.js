import mongoose from 'mongoose';

const Mongodb = async () => {
  try {
    await mongoose.connect('mongodb+srv://ferhat:<password>@sahibinden.ehok4qf.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB bağlantısı başarılı!');
  } catch (error) {
    console.error('MongoDB bağlantısı başarısız!', error);
  }
};

export default Mongodb;
