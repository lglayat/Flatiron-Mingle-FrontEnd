class User {
  constructor(userJSON) {
    this.name = userJSON.name
    this.id = userJSON.id
    this.gender = userJSON.gender
    this.age = userJSON.age
    this.questions = new Questions()
  }

  render() {
    return `<li data-userid='${this.id}' data-props='${JSON.stringify(this)}' class='user-element'> Name: ${this.name} Age: ${this.age} </li>`
  }

  add_question(obj){

  }
}
