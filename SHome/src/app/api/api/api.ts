export * from './sensor.service';
import { SensorService } from './sensor.service';
export * from './switch.service';
import { SwitchService } from './switch.service';
export * from './raspi.service';
import { RaspiService } from './raspi.service';
export const APIS = [SensorService, SwitchService, RaspiService];  /// aici
