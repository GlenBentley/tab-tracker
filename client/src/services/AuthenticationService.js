import Api from '@/services/Api'

export default {
  register(credentials) {
    return Api().post('register', credentials)
  }
}

// shows how this will be called.
//AuthenticationService.register({
//   email: 'test121@gmail.com',
//    password: '123456'
//})
