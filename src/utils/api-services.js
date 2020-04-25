import request from 'superagent';

const URL = 'https://covid-19-stat-production.herokuapp.com';

export const createUser = async(firstName, phoneNumber, location) => {
  await request
    .post(`${URL}/api/v1/users/welcome`, {
      firstName,
      phoneNumber,
      location
    })
}

export const removeUser = async(phoneNumber) => {
  await request
  .delete(`${URL}/api/v1/users`, {
    phoneNumber
  })
}