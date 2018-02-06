import { Team } from './../../../team-stats/team-list/shared/team.model';
import { Person } from './../../../shared/person.model';

export class Player extends Person {
  /**
   * Picture of the player
   */
  picture: string;

  /**
   * Number of the player
   */
  number: Number;

  /**
   * Position of the player
   */
  position: 'Goal Keeper' | DefenderPosition | MidfielderPosition | ForwardPosition;

  /**
   * A boolean to determinate if a player if titular or not
   * true - means that it is
   * undefined | false - means that is not
   */
  Titular?: boolean;

  /**
   * Constructor, all the parameters are optional a default value of null will be put instead
   *
   * @param team
   * @param name
   * @param surname
   * @param birthDate
   * @param picture
   * @param number
   * @param position
   */
  constructor(
    team: Team,
    name?: string,
    surname?: string,
    birthDate?: Date,
    picture?: string,
    number?: Number,
    position?: 'Goal Keeper' | DefenderPosition | MidfielderPosition | ForwardPosition) {

    super(team, name, surname, birthDate);

    this.picture = picture || null;
    this.number = number || null;
    this.position = position || null;
  }

  /**
   * Function to know given an element if is a Player instance
   *
   * @param element Element to know if is an element
   */
  static isAPlayer(element: Player): boolean {
    return element instanceof Player;
  }
}

/**
 * Defender Positions
 */
export enum DefenderPosition {
  centreBack = 'Defender',
  sweeper = 'Sweeper',
  fullBack = 'Full-Back',
  wingBack = 'Wing-Back'
}

/**
 * Midfield Positions
 */
export enum MidfielderPosition {
  centreMidfield = 'Centre Midfield',
  defensiveMidfield = 'Defensive Midfield',
  attackingMidfield = 'Attacking Midfield',
  wideMidfield = 'Wide Midfield'
}

/**
 * Forward Positions
 */
export enum ForwardPosition {
  centreForward = 'Centre Forward',
  secondStriker = 'Second Striker',
  winger = 'Winger'
}
