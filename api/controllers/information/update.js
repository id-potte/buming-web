module.exports = {


  friendlyName: 'Update',


  description: 'Update Information.',


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

    var id = this.req.params.id;
    var data = await Information.update(id).set(inputs);

    this.req.addFlash('msg', '<strong>Success!</strong> Data diubah.');
    return this.res.redirect('/information');

  }


};
