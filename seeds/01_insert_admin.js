const bcrypt = require('bcrypt-nodejs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').where({
    name: 'Rafael Nery Machado',
    email: 'rafaelnerymachado@gmail.com',
    admin: true
  }).first().del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Rafael Nery Machado',
          email: 'rafaelnerymachado@gmail.com',
          password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, bcrypt.genSaltSync(10)),
          admin: true
        }
      ]);
    });
};
