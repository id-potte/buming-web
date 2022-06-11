module.exports = {


  friendlyName: 'New',


  description: 'New patient.',


  inputs: {

  },


  exits: {
    success: {
      responType: 'view',
      viewTemplatePath: 'pages/addPatient',
    }
  },


  fn: async function (inputs) {

    var ethnic = await Ethnic.find();
    var religion = await Religion.find();
    var education = await Education.find();
    var profession = await Profession.find();

    return ({
      title: 'Tambah Pasien',
      ethnic,
      religion,
      education,
      profession,
    });

  }


};
