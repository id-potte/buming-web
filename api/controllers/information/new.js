module.exports = {


  friendlyName: 'New',


  description: 'New articel.',


  inputs: {

  },


  exits: {
    success: {
      responType: 'view',
      viewTemplatePath: 'pages/addInformation',
    }
  },


  fn: async function (inputs) {

    return ({
      title: 'Tambah Informasi Kesehatan',
    });

  }


};
