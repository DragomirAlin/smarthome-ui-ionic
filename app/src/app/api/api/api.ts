export * from './sensor.service';
import { SensorService } from './sensor.service';
export * from './switch.service';
import { SwitchService } from './switch.service';
export * from './raspi.service';
import { RaspiService } from './raspi.service';
export * from './logs.service';
import { LogsService } from './logs.service';
export * from './rfid.service';
import { RfidService } from './rfid.service';

export const APIS = [SensorService, SwitchService, RaspiService, LogsService, RfidService];  /// aici
