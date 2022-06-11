module.exports = {


  friendlyName: 'Show',


  description: 'Show student.',


  inputs: {

  },


  exits: {
    success: {
      responType: 'view',
      viewTemplatePath: 'pages/editStudent',
    }
  },


  fn: async function (inputs) {

    var nim = this.req.param('nim');
    var student = await Student.findOne({nim: nim});

    if(!student){
      return this.res.view('404', {title: 'Mahasiswa'});
    }

    var study = await Study.find();

    return ({
      title: 'Edit Mahasiswa',
      student,
      study
    });

  }


};
