module.exports = {


  friendlyName: 'Index',


  description: 'Index DAshboard.',


  inputs: {

  },

  fn: async function (inputs) {

    var students = await Student.count();
    var patients = await Patient.count();
    var wa = await Wasession.find();

    return this.res.view('pages/dashboard', {
      title : 'Dashboard',
      students,
      patients,
      wa,
    })

  }


};
