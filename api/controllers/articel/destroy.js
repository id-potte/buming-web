module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy articel.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var id = this.req.params.id;
    var articel = await Articel.destroyOne({id: id});

    if (articel) {
      return this.res.send('success');
    } else {
      return this.res.send('fail');
    }

  }


};
