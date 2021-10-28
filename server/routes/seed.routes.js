const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const saltRounds = 10;

async function createAdmin() {
  const user = new User({
    username: process.argv[2],
    email: process.argv[3],
    password: await bcrypt.hash(process.argv[4], saltRounds),
    isAdmin: true,
  });
  await user.save();
}
createAdmin();
