/**
 * Students.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nim: {
      type: 'string',
      required: true,
      minLength: 4,
      maxLength: 32,
      unique: true
    },

    name: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 64
    },

    phone_number: {
      type: 'string',
      required: true,
      minLength: 8,
      maxLength: 13,
      unique: true
    },

    age: {
      type: 'number',
      required: true,
      min: 1,
      max: 30
    },

    address: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 64
    },

    study_program: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 64
    },

    semester: {
      type: 'number',
      required: true,
      min: 1,
      max: 10
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
    patient:{
      collection: 'patient',
      via: 'companion'
    },
    
  },

};

