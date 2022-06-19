/**
 * Persalinan_kala2.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    kala2_episitomi: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala2_episitomi_indikasi: {
      type: 'string',
      required: false,
      minLength: 1,
      maxLength: 12
    },

    kala2_pendampingPersalinan: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    kala2_gawatJanin: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 12
    },

    kala2_gawatJanin_tindakan: {
      type: 'string',
      required: false,
      minLength: 1,
      maxLength: 32
    },

    kala2_analisaMasalahKebutuhan: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 100
    },

    kala2_penatalaksanaan: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 100
    },

    kala2_evaluasi: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 100
    },

    patient: {
      type: 'number',
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

