module.exports = function authFail() {

  var req = this.req;
  var res = this.res;

  if (req.wantsJSON) {
    return res.sendStatus(401);
  }

  else {

    if (req.session.admin) {
      delete req.session.admin;
    }
    
    req.addFlash('fail', 'Kombinasi username & password tidak ditemukan.');
    return res.redirect('/');
  }

};
