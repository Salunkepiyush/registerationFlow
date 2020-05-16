"use strict";

module.exports = {
  authenticateService: (params, User) => {
    return new Promise((resolve, reject) => {
      User.find({ userName: { $regex: params.userName, $options: "i" } })
        .then((data) => {
          if (data && data.length > 0) {
            if (data[0].password == params.password) {
              return resolve({ message: "success", data: data[0] });
            } else {
              return reject({
                message: "Invalid username and password",
                data: {},
              });
            }
          } else {
            return resolve({ message: "User not found", data: {} });
          }
        })
        .catch((err) => {
          return reject(err);
        });
    });
  },
  saveUserService: (params, User) => {
    return new Promise((resolve, reject) => {
      let user = new User(params);
      user
        .save()
        .then((data) => {
          return resolve(data);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  },
};
