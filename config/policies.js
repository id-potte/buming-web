/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/
 '*': true,
  // 'dashboard/*': 'isAdmin',
  // 'student/*': 'isAdmin',
  // 'patient/*': 'isAdmin',
  // 'articel/*': 'isAdmin',
  // 'master/*': 'isAdmin',

  // // 'create': true,
  // // 'index': true,
  // // 'login': true,

  // // 'AuthController': {
  // //   'cek_phone': true,
  // //   'cek_otp': true,
  // // },
  // 'api/v1/student/*': true,
};