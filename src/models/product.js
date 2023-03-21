import mongoose from 'mongoose';
const proSche = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});
export default mongoose.model('Product', proSche);
