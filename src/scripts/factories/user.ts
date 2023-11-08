class User {
    private userHasSelected: boolean;
    private score: number;
  
    constructor() {
      this.userHasSelected = false;
      this.score = 0;
    }
  
    // Si option sélectionnée, mettre true en paramètre...
    setUserSelected(selected: boolean): void {
      this.userHasSelected = selected;
    }
  }
  