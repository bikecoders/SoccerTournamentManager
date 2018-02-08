import { Team } from './../../../team-stats/team-list/shared/team.model';
import { Person } from './../../../shared/person.model';

export class Technician extends Person {
  /**
   * Nationality of the technician
   */
  nationality: string;

  /**
   * The role of the technician
   */
  role: TechnicalStaffRoles;

  /**
   * Constructor, all the parameters are optional a default value of null will be put instead
   *
   * @param team
   * @param name
   * @param surname
   * @param birthDate
   * @param nationality
   * @param role
   */
  constructor(
    team: Team,
    name?: string,
    surname?: string,
    birthDate?: Date,
    nationality?: string,
    role?: TechnicalStaffRoles) {

    super(team, name, surname, birthDate);

    this.nationality = nationality || null;
    this.role = role || null;
  }
}

/**
 * All possible technical staff roles
 */
export enum TechnicalStaffRoles {
  technician = 'Technician',
  assistant = 'Assistant',
  Medic = 'Medic',
  preparer = 'Preparer',
}
