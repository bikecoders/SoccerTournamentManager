import { Injectable } from '@angular/core';

import { Player } from './player.model';
import { CrudList } from './../../../shared/crud-list';

@Injectable()
export class PlayersService extends CrudList<Player> {

  constructor() {
    super();
   }

}
