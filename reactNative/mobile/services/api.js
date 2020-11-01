import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333'
});

export default api;

/**
 * IOS com emulador: localhost
 * IOS com físico: IP da máquina local
 * ANDROID com emulador: localhost (execute: *  adb reverse tcp:3333 tcp:3333)
 * ANDROID com emulador: 10.0.2.2 (AndroidStuio)
 * ANDROID com emulador: 10.0.3.2 (Genymotion)
 * ANDROID com físico: IP da máquina local

 */