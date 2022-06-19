module.exports = {


  friendlyName: 'Create',


  description: 'Create articel.',


  inputs: {
    title: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 64
    },

    content: {
      type: 'string',
      required: true,
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    
    var data = await Information.create(inputs);

    this.req.addFlash('msg', '<strong>Success!</strong> Data bertambah');
    return this.res.redirect('/information');

  }


};
