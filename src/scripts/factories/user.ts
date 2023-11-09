class User {
   userHasSelected: boolean;
   score: number;
  
    constructor() {
      this.userHasSelected = false;
      this.score = 0;
    }
  
    setUserSelected(selected: boolean): void {
      this.userHasSelected = selected;
    }
  }
  