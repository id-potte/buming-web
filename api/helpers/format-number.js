module.exports = {


  friendlyName: 'Format number',


  description: '',


  inputs: {

    number: {
      type: 'string',
      required: true
    }

  },


  fn: async function (inputs, exits) {
    var result = inputs.number.replace(/\D/g, '');

    if (result.startsWith('0')) {
      result = '62' + result.substr(1);
    }

    if (!result.endsWith('@c.us')) {
      result += '@c.us';
    }

    return exits.success(result);
  }


};

