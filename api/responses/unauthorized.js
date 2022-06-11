module.exports = function unauthorized() {

  var req = this.req;
  var res = this.res;

  if (req.wantsJSON) {
    return res.sendStatus(401);
  }

  else {

    if (req.session.admin) {
      delete req.session.admin;
    }
    
    req.addFlash('fail', 'Akses ditolak.');
    return res.redirect('/');
  }

};
