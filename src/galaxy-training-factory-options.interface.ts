import { LoggerService } from '@nestjs/common';

/**
 * Opciones de configuración para la factoría de aplicaciones Nova Platform.
 *
 * Permite personalizar el comportamiento de arranque de la aplicación NestJS,
 * incluyendo la posibilidad de omitir las validaciones de entorno.
 */
export interface NovaPlatformFactoryOptions {
  /**
   * Servicio de logger personalizado para la aplicación NestJS.
   * Si no se proporciona, se usa el logger por defecto de NestJS.
   */
  logger?: LoggerService;
  /**
   * Indica si se deben omitir las validaciones de entorno (NodeJs y NestJS).
   * Útil para entornos de prueba o desarrollo donde las versiones pueden diferir.
   * @default false
   */
  skipEnvValidation?: boolean;
}
