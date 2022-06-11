module.exports = {


  friendlyName: 'Index',


  description: 'Index articel.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var articels = await Articel.find({});
    
    var data = {
      title: 'List Artikel',
      articels,
    };

    return this.res.view('pages/articels', data);

  }


};
