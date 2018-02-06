export class Team {
  /**
   * The name of the team
   */
  name: string;

  /**
   * The flag of the team
   * Should be and URL
   */
  flag: string;

  /**
   * The shield of the team
   * Should be and URL
   */
  shield: string;

  /**
   * Constructor, all the parameters are optional a default value of '' will be put instead
   *
   * @param name
   * @param flag
   * @param shield
   */
  constructor(name?: string, flag?: string, shield?: string) {
    this.name = name || '';
    this.flag = flag || '';
    this.shield = shield || '';
  }

  /**
   * Function to know given an element if is a Team instance
   *
   * @param element Element to know if is an element
   */
  static isATeam(element: Team): boolean {
    return element instanceof Team;
  }
}
