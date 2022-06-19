/**
 * Patients.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nik: {
      type: 'string',
      required: true,
      minLength: 16,
      maxLength: 16,
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
      min: 10,
      max: 50
    },

    mariage_age: {
      type: 'number',
      required: true,
      min: 1,
      max: 40
    },

    ethnic: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 32
    },

    religion: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 32
    },

    education: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    profession: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 32
    },

    address: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 64
    },

    blood_type: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 3
    },

    bpjs_number: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    checkup_address: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 64
    },

    husband_name: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 64
    },

    husband_phone_number: {
      type: 'string',
      required: true,
      minLength: 8,
      maxLength: 13
    },

    husband_age: {
      type: 'number',
      required: true,
      min: 15,
      max: 70
    },

    husband_ethnic: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 32
    },

    husband_religion: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 32
    },

    husband_education: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 32
    },

    husband_profession: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 32
    },

    husband_address: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 64
    },

    student: {
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

    // companion: {
    //   model: 'student'
    // },
  },

};

