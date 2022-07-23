/**
 * whatsapp hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */
const { Client , NoAuth, ClientInfo } = require('whatsapp-web.js');
var QRCode = require('qrcode');

module.exports = function defineWhatsappHook(sails) {
  
  const client = new Client({
    restartOnAuthFail: true,
    takeoverOnConflict: true,
    puppeteer: {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process', // <- this one doesn't works in Windows
        '--disable-gpu'
      ],
    },
    authStrategy: new NoAuth(),
  });

  return {

    /**
     * Runs when this Sails app loads/lifts.
     */
    client,
    
    initialize: async function () {

      client.on('qr', (qr) => {
        sails.log.info('WaClient QR RECEIVED');
        QRCode.toDataURL(qr, function (err, url) {
          sails.sockets.blast('qr', url);
        });
      });

      client.on('authenticated', async () => {
        sails.log.info('WaClient authenticated');
      });

      client.on('ready', () => {
        sails.log.info('WaClient ready');
        sails.sockets.blast('ready', client.info);
      }); 

      client.on('disconnected', (reason) => {
        sails.sockets.blast('disconnected', reason);
        client.destroy();
        client.initialize();
      });

    }

  };

};