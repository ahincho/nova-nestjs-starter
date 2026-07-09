import { DynamicModule, Module } from '@nestjs/common';
import { MaskModule } from '@nova/nestjs-mask';
import { ApiStandardModule } from '@nova/nestjs-api-standard';
import { NovaPlatformModuleOptions } from './nova-module-options.interface';

/**
 * Módulo raíz del meta-framework Nova Platform NestJS.
 *
 * Registra internamente todos los módulos del ecosistema:
 * - {@link MaskModule} para enmascaramiento automático de datos sensibles
 * - {@link ApiStandardModule} para envelope estándar de respuestas REST
 *
 * @example
 * ```typescript
 * @Module({
 *   imports: [NovaPlatformModule.forRoot({ mask: { enabled: true } })],
 * })
 * export class AppModule {}
 * ```
 */
@Module({})
export class NovaPlatformModule {
  /**
   * Registra todos los módulos internos del meta-framework.
   *
   * @param options - Opciones de configuración opcionales.
   *   Si no se proporcionan, se usan los valores por defecto de cada módulo.
   * @returns Módulo dinámico configurado con todos los módulos internos.
   */
  static forRoot(options?: NovaPlatformModuleOptions): DynamicModule {
    return {
      module: NovaPlatformModule,
      imports: [
        MaskModule.forRoot(options?.mask),
        ApiStandardModule.forRoot(),
      ],
    };
  }
}
