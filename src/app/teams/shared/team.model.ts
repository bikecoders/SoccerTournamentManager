import { Technician } from './../../staff/technicians/shared/technician.model';
import { CrudList } from './../../shared/crud-list';
import { Player, ForwardPosition } from '../../staff/players/shared/player.model';

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
   * Players of the this team
   */
  players: CrudList<Player>;

  /**
   * Technicians of this team
   */
  technician: CrudList<Technician>;

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

    // Init the arrays
    this.players = new CrudList<Player>();
    this.technician = new CrudList<Technician>();
  }
}
