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

  'GET /articel': { action: 'articel/index'},
  'GET /articel/:id': { action: 'articel/show'},
  'GET /articel/new': { action: 'articel/new'},
  'POST /articel': { action: 'articel/create'},
  'POST /articel/:id': { action: 'articel/update'},
  'DELETE /articel/:id': { action: 'articel/destroy'},


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
  'POST /auth': { action: 'Auth/cek_phone'},
  'POST /otp': { action: 'Auth/cek_otp'},

  'GET /csrf/token': { action: 'security/grant-csrf-token' },

};
