/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /': { action: 'index'},
  'POST /admin': { action: 'create'},
  'POST /login': { action: 'login'},
  'GET /logout': { action: 'logout'},

  'GET /dashboard': { action: 'dashboard/index'},

  'GET /student': { action: 'student/index'},
  'GET /student/:nim': { action: 'student/show'},
  'GET /student/new': { action: 'student/new'},
  'POST /student': { action: 'student/create'},
  'POST /student/:nim': { action: 'student/update'},
  'DELETE /student/:id': { action: 'student/destroy'},

  'GET /patient': { action: 'patient/index'},
  'GET /patient/:id': { action: 'patient/show'},
  'GET /patient/new': { action: 'patient/new'},
  'POST /patient': { action: 'patient/create'},
  'POST /patient/:id': { action: 'patient/update'},
  'DELETE /patient/:id': { action: 'patient/destroy'},

  'GET /master/:name': { action: 'master/index'},
  'POST /master': { action: 'master/create'},
  'DELETE /master/:name/:id': { action: 'master/destroy'},

  'GET /information': { action: 'information/index'},
  'GET /information/:id': { action: 'information/show'},
  'GET /information/new': { action: 'information/new'},
  'POST /information': { action: 'information/create'},
  'POST /information/:id': { action: 'information/update'},
  'DELETE /information/:id': { action: 'information/destroy'},


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  'GET /csrf/token': { action: 'security/grant-csrf-token' },

  'POST /api/v1/auth/check': { action: 'Auth/phone_check'},
  'POST /api/v1/auth/otp': { action: 'Auth/otp_req'},
  'POST /api/v1/auth/verify': { action: 'Auth/otp_verify'},

  'GET /wa/qr': { action: 'Wa/init'},

};
