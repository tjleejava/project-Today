import axios from 'axios';

export async function loginAPI(id, password) {

  const data = {
    id: id,
    pwd: password
  }
  
  return await axios.post('/auths/login', data)

    
    // .then(json => {
    //   sessionStorage.setItem('accessToken', json.accessToken);
    //   localStorage.setItem('accessToken', json.accessToken);
    //   window.cookieStore.get('accessToken')
    //   .then(obj => obj.value)
    //   .then(token => console.log('cookieStore accessToken: ' + token));
    // });
}

export async function checkAPI() {
  return await axios.get('/auths/check');
}

export async function logoutAPI() {
  console.log('logout api')
  return await axios.post('/auths/logout');
}