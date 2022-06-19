module.exports = {


  friendlyName: 'Index',


  description: 'Index Information.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var informations = await Information.find({});
    
    var data = {
      title: 'List Informasi Kesehatan',
      informations,
    };

    return this.res.view('pages/information', data);

  }


};
