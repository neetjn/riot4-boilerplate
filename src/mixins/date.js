export default class {
  constructor() {
    // eslint-disable-next-line
    console.log('Date Plugin Initialized')
  }
  getDate() {
    return new Date().getDate().toString()
  }
}
