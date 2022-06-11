module.exports = {


  friendlyName: 'Index',


  description: 'Index patient.',


  inputs: {

  },


  exits: {
    
  },


  fn: async function (inputs) {

    var patients = await Patient.find({});

    var data = {
      title: 'List Pasien',
      patients,
    };

    return this.res.view('pages/patients', data);

  }

};
