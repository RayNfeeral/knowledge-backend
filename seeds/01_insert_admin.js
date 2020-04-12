
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').where({
    name: 'Rafael Nery Machado',
    email: 'rafaelnerymachado@gmail.com',
    password: 'Rnm=2506@',
    admin: true
  }).first().del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Rafael Nery Machado',
          email: 'rafaelnerymachado@gmail.com',
          password: 'Rnm=2506@',
          admin: true
        }
      ]);
    });
};
