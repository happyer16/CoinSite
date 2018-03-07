import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Coin = new Schema({
  coinname : String,
  amount : Number,
  created : {type : Date, default : Date.now}
});

export default mongoose.model('coin', Coin);
