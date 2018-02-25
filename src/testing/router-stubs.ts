// export for convenience.
// export { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

import { Component, Directive, Injectable, Input } from '@angular/core';
import { NavigationExtras, UrlTree } from '@angular/router';

/*
@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
*/

/*
@Component({ selector: 'router-outlet', template: '' })
export class RouterOutletStubComponent { }
*/

export class LocationStub {
  /**
   * Navigates back in the platform's history.
   */
  back(): void {}
}

@Injectable()
export class RouterStub {
  /**
   * The URL that the user is step in
   */
  currentUrl: string;

  navigate(commands: any[], extras?: NavigationExtras) { }
  navigateByUrl(url: string | UrlTree, extras?: NavigationExtras) {
    // Set current url as the received as parameter
    this.currentUrl = <string>url;
  }
}

/*
// Only implements params and part of snapshot.paramMap
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { convertToParamMap, ParamMap } from '@angular/router';

@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.paramMap is Observable
  private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
  paramMap = this.subject.asObservable();

  // Test parameters
  private _testParamMap: ParamMap;
  get testParamMap() { return this._testParamMap; }
  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subject.next(this._testParamMap);
  }

  // ActivatedRoute.snapshot.paramMap
  get snapshot() {
    return { paramMap: this.testParamMap };
  }
}
*/
