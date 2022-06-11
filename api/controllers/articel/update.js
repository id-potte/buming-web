module.exports = {


  friendlyName: 'Update',


  description: 'Update articel.',


  inputs: {
    title: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 64
    },

    content: {
      type: 'string',
      required: true,
    },
  },


  exits: {

  },


  fn: async function ({title, content}) {
    var req = this.req;
    var res = this.res;

    var id = this.req.params.id;

    req.file('gambar').upload({
      saveAs: function(file, cb) {
        cb(null, file.filename);
      },
      dirname: require('path').resolve(sails.config.appPath, 'assets/images/articel')
    },function (err, uploadedFiles) {
      if (err) return res.serverError(err);

      Articel.update(id).set({
        title,
        image: uploadedFiles[0].filename,
        content,
        publisher: req.session.admin.name,
      })
      .exec(function (err){
        if (err) return res.serverError(err);
      });
    });

    this.req.addFlash('msg', '<strong>Success!</strong> Data diubah.');
    return res.redirect('/articel');

  }


};
