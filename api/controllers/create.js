module.exports = {


  friendlyName: 'Create',


  description: 'Create something.',


  inputs: {
    name: {
      type: 'string',
      required: true,
      maxLength: 64,
    },

    username: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 32,
    },

    password: {
      type: 'string',
      required: true,
      protect: true,
    },
  },


  exits: {
    success: {
      description: 'New user account was created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
    },

    userNameAlreadyInUse: {
      statusCode: 409,
      description: 'The provided username is already in use.',
    },
  },


  fn: async function ({name, username, password}) {

    var newUsername = username.toLowerCase();

    var newAdmin = await Admin.create({
      name,
      username: newUsername,
      password: await sails.helpers.passwords.hashPassword(password),
    });

  }


};
