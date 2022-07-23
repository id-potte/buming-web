/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const otpGen  = require("otp-generator");
const otpTool = require("otp-without-db"); 
const key     = "234sdf435erwrsdf4345345";

module.exports = {
  phone_check: async function(req, res){
    var app = req.param('app');
    var phone = req.param('phone');

    var model = sails.models[app];
    
    var user = await model.findOne({phone_number: phone});

    if (!user) {
      return res.json({
        state: false,
      });
    }
    return res.json({
      state: true,
      name: user.name,
    });
  },

  otp_req: async function(req, res){
    var app = req.param('app');
    var phone = req.param('phone');

    var model = sails.models[app];
    
    var user = await model.findOne({phone_number: phone});

    if (!user) {
      return res.json({
        state: false,
        phone,
      });
    }
    
    let otp = otpGen.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    let hash = otpTool.createNewOTP(phone,otp,key,expiresAfter=1,algorithm="sha256");

    let num = await sails.helpers.formatNumber(phone);
    var result = sails.hooks.whatsapp.client.sendMessage(num, '#Buming, OTP: ' + otp + '\n\nJangan bagikan kode ini pada siapa pun');

    if (result){
      return res.json({
        state: true,
        phone,
        hash
      });
    }

    return res.json({
      state: false,
      phone,
    });
  },

  otp_verify: function (req, res) {
    let otp = req.param('otp');
    let phone = req.param('phone');
    let hash = req.param('hash');

    var verify = otpTool.verifyOTP(phone,otp,hash,key,algorithm="sha256")

    return res.json({
      verify,
    });
  }

};

