import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Coin = new Schema({
  coinname : String,
  amount : Number
});

export default mongoose.model('coin',Coin);
