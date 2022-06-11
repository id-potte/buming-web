module.exports = {


  friendlyName: 'Index',


  description: 'Index student.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var students = await Student.find({});

    var data = {
      title: 'List Mahasiswa',
      students,
    };

    return this.res.view('pages/students', data);

  }


};
