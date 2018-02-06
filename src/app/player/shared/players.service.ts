import { Injectable } from '@angular/core';

import { CrudList } from '../../shared/crud-list';
import { Player } from './player.model';

@Injectable()
export class PlayersService extends CrudList<Player> {

  constructor() {
    super();
   }

}
