module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy student.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var id = this.req.params.id;
    var student = await Student.destroyOne({id: id});

    if (student) {
      return this.res.send('success');
    } else {
      return this.res.send('fail');
    }
    
  }


};
