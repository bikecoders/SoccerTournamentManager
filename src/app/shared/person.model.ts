import { Team } from './../team-stats/team-list/shared/team.model';

export class Person {
  /**
   * The team that this player belongs
   */
  team: Team;

  /**
   * Name of the person
   */
  name: string;

  /**
   * Surname of the person
   */
  surname: string;

  /**
   * Birth date of the person
   */
  birthDate: Date;

  /**
   * Constructor, all the parameters are optional a default value of null will be put instead
   *
   * @param team
   * @param name
   * @param surname
   * @param birthDate
   */
  constructor(
    team: Team,
    name?: string,
    surname?: string,
    birthDate?: Date) {
    this.team = team;
    this.name = name || null;
    this.surname = surname || null;
    this.birthDate = birthDate || null;
  }
}
