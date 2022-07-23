/**
 * WaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  init: function (req, res){
    sails.hooks.whatsapp.client.initialize();
    sails.log.info('Initializing custom hook (`whatsapp`)');
    return res.json({
      state: 'loading QRCode...',
    });
  }

};

