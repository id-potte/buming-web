module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


  inputs: {
    username: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32,
    },

    password: {
      type: 'string',
      required: true,
      minLength: 8,
      maxLength: 16,
    },

    access: {
      type: 'number',
      required: true,
    },
  },


  exits: {

  },


  fn: async function ({username, password, access}) {

    var newUser = await User.create({
      username,
      password: await sails.helpers.passwords.hashPassword(password),
      access,
    });

    this.req.addFlash('msg', '<strong>Success!</strong> Data bertambah');
    return this.res.redirect('/user');

  }


};
