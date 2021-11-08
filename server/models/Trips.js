const { Schema, model } = require('mongoose');

const tripsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    require: true,
    default: false,
  },
  // TODO: MAKE THIS FIELD INTO PLURAL FORM eg itineraries
  itinerary: [{
    type: Schema.Types.ObjectId,
    ref: 'Itinerary'
  }]
});

const Trips = model('Trips', tripsSchema);

module.exports = Trips;