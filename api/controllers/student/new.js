module.exports = {


  friendlyName: 'New',


  description: 'New student.',


  inputs: {

  },


  exits: {
    success: {
      responType: 'view',
      viewTemplatePath: 'pages/addStudent',
    }
  },


  fn: async function (inputs) {

    var study = await Study.find();

    return ({
      title: 'Tambah Mahasiswa',
      study,
    });

  }


};
