import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';


import { SensorService } from './api/sensor.service';
import { SwitchService } from './api/switch.service';
import { RaspiService } from './api/raspi.service';
import { RfidService } from './api/rfid.service';
import { LogsService } from './api/logs.service';


@NgModule({
  imports:      [HttpClientModule],
  declarations: [],
  exports:      [],
  providers: [
    SensorService,
    SwitchService,
    RaspiService,
    RfidService,
    LogsService
     ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
