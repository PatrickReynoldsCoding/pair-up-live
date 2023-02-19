const User = require('../../models/user');

require('../mongodb_helper');

describe('User model', () => {
  it('create an instance of the User Model Schema', () => {
    const user = new User({
      username: 'Test User',
      email: 'example@example.com',
      password: '123456',
    });
    expect(user.username).toEqual('Test User');
    expect(user.email).toEqual('example@example.com');
    expect(user.password).toEqual('123456');
  });
  it('Saves User data to database', (done) => {
    const user = new User({
      username: 'Test User',
      email: 'example@example.com',
      password: '123456',
      postcode: 'E1',
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();
        expect(users[0].username).toEqual('Test User');
        expect(users[0].email).toEqual('example@example.com');
        expect(users[0].password).toEqual('123456');
      });
      done();
    });
  });
  it('Saves User data with geocoding data obtained via API', (done) => {
    const user = new User({
      username: 'Test User',
      email: 'example@example.com',
      password: '123456',
      postcode: 'E1',
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();
        expect(users[0].geoLocation.coordinates[0]).toEqual(expect.any(Number));
        expect(users[0].geoLocation.coordinates[1]).toEqual(expect.any(Number));
      });
      done();
    });
  });
});
