import { Person } from './person.model';

export interface Player extends Person {
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
  Position: 'Goal Keeper' | DefenderPosition | MidfielderPosition | ForwardPosition;

  /**
   * A boolean to determinate if a player if titular or not
   * true - means that it is
   * undefined | false - means that is not
   */
  Titular?: boolean;
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
