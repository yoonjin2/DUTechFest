class UserClass{
  constructor(ID,PW, PERM) {
    this.ID = ID;
    this.PW = PW;
    this.regdate = Date.now();
    this.permission = PERM;
  }
  getPW() {
    return this.PW;
  }
  getIdentifier() {
    return this.ID;
  }
  getRegistrationTime() {
    return this.regdate;
  }
}
class Schema {}

const userAccount = new Schema({
  firstName: String,
  lastname: String,
  emailInfo: String,
  mailProviderIsKnown: Boolean,
  mailProviderType: Number,
  mailProvider: String,
  SNSBinded: Boolean,
  SNSProviderIdentifier: Number,
  UserInfo: new UserClass("TestUser", "TEST", "000")
});

//const userModel = mongoose.model('UserTableForTestingDatabase', userSchema);
//app.Post('/userControllers', [UserController.insert])

