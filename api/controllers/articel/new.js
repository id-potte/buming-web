module.exports = {


  friendlyName: 'New',


  description: 'New articel.',


  inputs: {

  },


  exits: {
    success: {
      responType: 'view',
      viewTemplatePath: 'pages/addArticel',
    }
  },


  fn: async function (inputs) {

    return ({
      title: 'Tambah Artikel',
    });

  }


};
