export default {
  baseURL: process.env.NODE_ENV === 'environment' ? 'http://localhost:3000': '/'
}
console.log(process.env.NODE_ENV);