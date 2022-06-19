module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy Information.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var id = this.req.params.id;
    var info = await Information.destroyOne({id: id});

    if (info) {
      return this.res.send('success');
    } else {
      return this.res.send('fail');
    }

  }


};
