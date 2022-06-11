module.exports = {


  friendlyName: 'Index',


  description: 'Index user.',


  inputs: {

  },


  fn: async function (inputs) {

    var studentUser = await User.find({access: 1});

    var patientUser = await User.find({access: 2});

    return this.res.view('pages/user', {
      title: 'Daftar Pengguna Mobile App',
      studentUser,
      patientUser
    });

  }


};
