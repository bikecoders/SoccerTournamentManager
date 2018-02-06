import { Team } from './../team/shared/team.model';

export interface Person {
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
}
