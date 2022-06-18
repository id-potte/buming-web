/**
 * Reproduksi.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    pregnancy: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 2
    },


    number_of_children: {
      type: 'number',
      required: true,
    },

    menstrual_cycle: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 64
    },

    gap_during_menstrual_cycle: {
      type: 'number',
      required: true,
      min: 1,
      max: 30
    },

    menstrual_period: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 32
    },

    hpht: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 32
    },

    hpl: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 32
    },

    pregnancy_complications_history: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 64
    },
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

