import { Team } from './../../../teams/shared/team.model';
import { Person } from './../../../shared/person.model';

export class Player extends Person {
  /**
   * Picture of the player
   */
  picture: string;

  /**
   * Number of the player
   */
  number: number;

  /**
   * Position of the player
   */
  position: 'Goal Keeper' | DefenderPosition | MidfielderPosition | ForwardPosition;

  /**
   * A boolean to determinate if a player if titular or not
   * true - means that it is
   * undefined | false - means that is not
   */
  titular?: boolean;

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
    number?: number,
    position?: 'Goal Keeper' | DefenderPosition | MidfielderPosition | ForwardPosition,
    titular?: boolean) {

    super(team, name, surname, birthDate);

    this.picture = picture || null;
    this.number = number || null;
    this.position = position || null;
    this.titular = titular || false;
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

/**
 * Get all the possible player positions as an array of objects
 *
 * Useful to populate the dropdown options when creating a new player
 *
 * @returns {array} Array of objects with the positions grouped
 */
export function getPlayerPositionOptions() {
  const playerPositionOptions = [
    {
      name: 'Goal Keeper',
      positions: ['Goal Keeper']
    },
    {
      name: 'Defender',
      positions: []
    },
    {
      name: 'Midfield',
      positions: []
    },
    {
      name: 'Forward',
      positions: []
    }
  ];

  // Add Defender positions
  for (const position in DefenderPosition) {
    if (DefenderPosition.hasOwnProperty(position)) {
      playerPositionOptions[1].positions.push(DefenderPosition[position]);
    }
  }

  // Add Midfield positions
  for (const position in MidfielderPosition) {
    if (MidfielderPosition.hasOwnProperty(position)) {
      playerPositionOptions[2].positions.push(MidfielderPosition[position]);
    }
  }

  // Add Forward positions
  for (const position in ForwardPosition) {
    if (ForwardPosition.hasOwnProperty(position)) {
      playerPositionOptions[3].positions.push(ForwardPosition[position]);
    }
  }

  return playerPositionOptions;
}
