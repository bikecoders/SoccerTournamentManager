import { Person } from './person.model';

export interface Technician extends Person {
  /**
   * Nationality of the technician
   */
  nationality: string;

  /**
   * The role of the technician
   */
  role: TechnicalStaffRoles;
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
