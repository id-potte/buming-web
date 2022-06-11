module.exports = {


  friendlyName: 'Index',


  description: 'Index admin.',


  fn: async function (exits) {

    return this.res.view('login', {
      layout: 'layouts/login',
    })

  }


};
