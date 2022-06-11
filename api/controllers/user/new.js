module.exports = {


  friendlyName: 'New',


  description: 'New user.',


  inputs: {

  },

  exits: {

  },

  fn: async function (inputs) {

    var access = this.req.params.access;

    var users = await User.find({access: access});

    var phone_list = [];

    users.forEach(element => {
      phone_list.push(element.username)
    });

    var data = await Student.find({
      phone_number: { nin: phone_list}
    });
    
    return this.res.json(data);

  }


};
