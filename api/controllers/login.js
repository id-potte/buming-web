module.exports = {


  friendlyName: 'Login',


  description: 'Login admin.',


  inputs: {
    username: {
      type: 'string',
      required: true,
      maxLength: 32,
    },

    password: {
      type: 'string',
      required: true,
    }
  },


  exits: {
    badCombo: {
      responseType: 'authFail',
    }
  },


  fn: async function ({username, password}) {

    var admin = await Admin.findOne({
      username: username.toLowerCase(),
    });

    if(!admin){
      throw 'badCombo';
    }

    await sails.helpers.passwords.checkPassword(password, admin.password).intercept('incorrect', 'badCombo');

    this.req.session.admin = admin;

    return this.res.redirect('/dashboard');
  }
};
