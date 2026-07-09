import { MaskModuleOptions } from '@nova/nestjs-mask';

/**
 * Opciones de configuración para el módulo raíz del meta-framework Nova Platform.
 *
 * Permite personalizar el comportamiento de los módulos internos
 * registrados por {@link NovaPlatformModule.forRoot}.
 */
export interface NovaPlatformModuleOptions {
  /**
   * Opciones de configuración para el módulo de enmascaramiento.
   * Se pasan directamente a {@link MaskModule.forRoot}.
   *
   * @see MaskModuleOptions
   */
  mask?: MaskModuleOptions;
}
