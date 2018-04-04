import request from '../utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  const params = {
    method:"POST",
    body:{
      "userSo":{
        "userName":"admin",
        "createTimeFrom":"",
        "createTimeTo":"",
        "createdTimeEnd":"",

      },
    },
  };
  return request('http://dx6qdf.natappfree.cc/bas/user/list',params);
}
