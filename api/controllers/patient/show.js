module.exports = {


  friendlyName: 'Show',


  description: 'Show patient.',


  inputs: {

  },


  exits: {
    success: {
      responType: 'view',
      viewTemplatePath: 'pages/editPatient',
    }
  },


  fn: async function (inputs) {

    var id = this.req.param('id');
    var patient = await Patient.findOne({id: id});

    if(!patient){
      return this.res.view('404', {title: 'Pasien'});
    }

    var ethnic = await Ethnic.find();
    var religion = await Religion.find();
    var education = await Education.find();
    var profession = await Profession.find();
    var student = await Student.find();

    return ({
      title: 'Edit Pasien',
      patient,
      ethnic,
      religion,
      education,
      profession,
      student,
    });

  }


};
