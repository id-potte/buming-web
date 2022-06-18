module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy master.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var id = this.req.params.id;
    var m = this.req.params.name;

    var model = sails.models[m];

    var result = await model.destroyOne({id: id});

    if (result) {
      return this.res.send('success');
    } else {
      return this.res.send('fail');
    }

  }


};
