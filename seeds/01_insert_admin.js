
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, name: 'Rafael Nery Machado',
          email: 'rafaelnerymachado@gmail.com',
          password: 'Rnm=2506@',
          admin: true
        }
      ]);
    });
};
