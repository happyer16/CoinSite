import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Coin = new Schema({
  name : String,
  amount : Number,
  buyAvg : Number,
  buySum : Number
});

export default mongoose.model('coin',Coin);
