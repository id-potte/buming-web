module.exports = {


  friendlyName: 'Show',


  description: 'Show articel.',


  inputs: {

  },


  exits: {
    success: {
      responType: 'view',
      viewTemplatePath: 'pages/editInformation',
    }
  },


  fn: async function (inputs) {

    var id = this.req.param('id');
    var information = await Information.findOne({id: id});

    if(!information){
      return this.res.view('404', {title: 'Informasi Kesehatan'});
    }

    return ({
      title: 'Edit Informasi Kesehatan',
      information,
    });

  }


};
