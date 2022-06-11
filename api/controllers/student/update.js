module.exports = {


  friendlyName: 'Update',


  description: 'Update student.',


  inputs: {
     nim: {
      type: 'string',
      required: true,
      minLength: 4,
      maxLength: 32
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
      maxLength: 13
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
  },


  exits: {

  },


  fn: async function (inputs) {

    var data = await Student.update({nim : inputs.nim}).set(inputs);

    this.req.addFlash('msg', '<strong>Success!</strong> Data diubah.');
    return this.res.redirect('/student');

  }


};
