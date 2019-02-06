var userTwo = {
  name: 'james',
  email: 'james.potter@hogwarts.wiz',

  login() {
    console.log(this.name, 'Logged In');
  },
  logout() {
    console.log(this.name, 'Logged Out');
  }
}
