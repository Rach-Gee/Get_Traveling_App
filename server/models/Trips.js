const { Schema, model } = require('mongoose');

const tripsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    require: true,
    default: false,
  },
  itinerary: {
    type: Schema.Types.ObjectId,
    ref: 'Itinerary'
  }
});

const Trips = model('Trips', tripsSchema);

module.exports = Trips;