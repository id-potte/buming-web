module.exports = {


  friendlyName: 'Index',


  description: 'Index religion.',


  inputs: {
    
  },


  exits: {
    success: {
      responType: 'view',
      viewTemplatePath: 'pages/master'
    }
  },


  fn: async function (inputs) {

    var name = this.req.param('name');
    var title = '';
    var table;

    if(name === 'study'){
      title = 'List Program Studi';
      table = await Study.find();
    }else if(name === 'ethnic'){
      title = 'List Suku';
      table = await Ethnic.find();
    }else if(name === 'religion'){
      title = 'List Agama';
      table = await Religion.find();
    }else if(name === 'education'){
      title = 'List Pendidikan';
      table = await Education.find();
    }else if(name === 'profession'){
      title = 'List Pekerjaan';
      table = await Profession.find();
    }

    return ({name, title, table});

  }


};
