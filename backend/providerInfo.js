class CraftmanProfile {
  constructor(NAME, RATING, FEEDBACK) {
    this.name = NAME;
    this.rating = RATING;
    this.sellerFeedbackLevel = FEEDBACK;
  }
  updateRating(R) {
    this.rating = R;
  }
  updateFeedback(F) {
    this.sellerFeedbackLevel = F;
  }
}

class CraftProvider {
  constructor(LOCATION, TYPE) {
    this.locationInfo = LOCATION;
    this.type = TYPE;
  }
  addThumbnailAddress(ADDR) {
    this.thumbLink = ADDR;
  }
  addCraftmanProfile(CRAFTMAN) {
    this.cInfo = CRAFTMAN;
  }
}

class databaseHandlerSet {
  constructor(User,PERMISSION) {
    this.UserInfo = User;
    this.admin = false;
    this.add   = 0;
    this.warn  = 0;
    this,prohibited = false;
    this.permission = 0;
    if (PERMISSION == "Admin") {
      this.admin = true;
      this.permission = 10;
    } else if(PERMISSION == "ReadOnly") {
      this.permission = 4;
    } else if(PERMISSION == "Developer") {
      this.permission = 6;
    } else if(PERMISSION == "Manager") {
      this.permission = 7;
    } else if(PERMISSION == "WriteOnly") {
      this.permission = 2;
    } else { 
      return
    }
  }
  apply(data) {
    if(this.permission>=7) {
      /** TODO: MongoDB Database -- Apply Function **
       **********************************************
       * MongoDB.CheckIntegrity(dest,tbl,data)      *
       * MongoDB.ApplyDatabase(dest,tbl,data)       *
       * this.add += this.permission                *
       * return "ACCEPTED"                          *
       **********************************************/ 
    } else {
      this.warn += this.permission
      return "PROHIBITED"
    }
  }
  getWorkerCreditScore() {
    return this.add*2-this.warn;
  }
  banUser(requestedAccount) {
    if(this.permission == 10) {
      // ACCOUNTS[requestedAccount].prohibited = true;
      // ACCOUNTS[requestedAccount].permission = 0;
      return
    }
    this.permission = 0;
    this.prohibited = true;
  }
  editUserPermission(PERMISSION, ACCESSPERMISSION) {
    if(ACCESSPERMISSION < 7) {
      return
    }
    this.prohibited = false;
    this.permission = PERMISSION;
  }
}
