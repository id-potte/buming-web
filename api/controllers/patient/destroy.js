module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy patient.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var id = this.req.params.id;
    var patient = await Patient.destroyOne({id: id});

    if (patient) {
      return this.res.send('success');
    } else {
      return this.res.send('fail');
    }

  }


};
