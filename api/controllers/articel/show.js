module.exports = {


  friendlyName: 'Show',


  description: 'Show articel.',


  inputs: {

  },


  exits: {
    success: {
      responType: 'view',
      viewTemplatePath: 'pages/editArticel',
    }
  },


  fn: async function (inputs) {

    var id = this.req.param('id');
    var articel = await Articel.findOne({id: id});

    if(!articel){
      return this.res.view('404', {title: 'Artikel'});
    }

    return ({
      title: 'Edit Artikel',
      articel,
    });

  }


};
