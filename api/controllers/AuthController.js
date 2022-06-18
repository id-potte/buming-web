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
  cek_phone: function(req, res){
    let phone = req.param('nomor');
    let otp = otpGen.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });

    let hash = otpTool.createNewOTP(phone,otp,key,expiresAfter=5,algorithm="sha256");


    res.send({otp,hash});
  },

  cek_otp: function (req, res) {
    let otp = req.param('otp');
    let phone = req.param('nomor');
    let hash = req.param('hash');

    var verify = otpTool.verifyOTP(phone,otp,hash,key,algorithm="sha256")

    res.send(verify);
  }

};

