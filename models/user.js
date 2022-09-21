const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const UserSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  skill: String,
  languages: [
    {
      type: String,
    },
  ],
  friends: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
}],
  username: String,
  email: String,
  password: String,
  postcode: String,
  country: {
    type: String,
    default: 'GB',
  },
  geoLocation: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
  },
  picture: {
    type: String,
    default: 'https://ca.slack-edge.com/T0266FRGM-U011PLSSMA9-g7e8a6705c42-512',
  },
  github: {
    type: String,
    default: 'makersacademy',
  },
});

UserSchema.pre('save', async function (next) {
  const location = await geocoder.geocode({
    countryCode: this.contry,
    zipcode: this.postcode,
    maxResults: 1,
  });
  this.geoLocation = {
    type: 'Point',
    coordinates: [location[0].latitude, location[0].longitude],
  };
  console.log(this.postcode.replace(/ /g, ''));
  next();
});

module.exports = mongoose.model('User', UserSchema);
