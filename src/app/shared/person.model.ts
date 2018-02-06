import { Team } from './team.model';

export interface Person {
  /**
   * The team that this player belongs
   */
  team: Team;

  /**
   * Name of the person
   */
  name;

  /**
   * Surname of the person
   */
  surname;

  /**
   * Birth date of the person
   */
  birthDate: Date;
}
