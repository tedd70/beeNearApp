import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

// Service
import { LuggageStoreService } from './luggageStore.service';

@Injectable({ providedIn: "root" })

export class LuggageStoreResolver implements Resolve<any> {
  
  constructor(
    private storeService: LuggageStoreService
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Promise<any> {
    const storesData = await this.getCurrentLuggageCountResponse();

    return storesData;
  }

  private async getCurrentLuggageCountResponse() {
    return this.storeService.getCurrentLuggageCount().toPromise();
  }
}