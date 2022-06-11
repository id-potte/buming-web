module.exports = {


  friendlyName: 'Create',


  description: 'Create master.',


  inputs: {
    name: {
      type: 'string',
      required: true,
      maxLength: 64,
    },

    master: {
      type: 'string',
      required: true,
      maxLength: 32,
    },

  },


  exits: {
    success: {
      description: 'Data was created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'invalid.',
    },

  },


  fn: async function ({name, master}) {


    var model = sails.models[master];

    await model.create({
      name,
    });

    this.req.addFlash('msg', '<strong>Success!</strong> Data bertambah');
    return this.res.redirect(`/master/${master}`);

  }

};
