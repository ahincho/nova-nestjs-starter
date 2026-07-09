/**
 * @nova/nestjs-starter
 *
 * Meta-framework empresarial Nova Platform para TypeScript + NestJS.
 * Punto de entrada único que re-exporta todas las librerías puras,
 * módulos NestJS y provee la factoría de arranque.
 *
 * El desarrollador consumidor instala este paquete y obtiene todo el
 * ecosistema listo para usar.
 *
 * @packageDocumentation
 */

/* ─── Librerías puras ─── */

/** Re-exportaciones de @nova/mask-utils */
export {
  MaskType,
  CountryCode,
  MaskConfig,
  MaskResult,
  MaskStrategy,
  StrategyRegistry,
  InvalidFormatException,
  StrategyNotFoundException,
  EmailMaskStrategy,
  PeruPhoneMaskStrategy,
  UsPhoneMaskStrategy,
  GenericPhoneMaskStrategy,
  PeruIdentityMaskStrategy,
  UsIdentityMaskStrategy,
  GenericIdentityMaskStrategy,
  CreditCardMaskStrategy,
  PeruBankAccountMaskStrategy,
  GenericBankAccountMaskStrategy,
  PersonNameMaskStrategy,
  IpAddressMaskStrategy,
  MaskEngine,
  FIELD_INFERENCE_MAP,
  inferMaskType,
  Masked,
  MaskPropertyMetadata,
  MaskedOptions,
  MaskedClass,
  SkipMasking,
  MASK_METADATA_KEY,
  MASK_CLASS_METADATA_KEY,
  SKIP_MASK_METADATA_KEY,
} from '@nova/mask-utils';

/** Re-exportaciones de @nova/date-utils */
export {
  DatePattern,
  formatISO,
  formatDate,
  parseDate,
} from '@nova/date-utils';

/** Re-exportaciones de @nova/mapper-utils */
export {
  FieldMapping,
  MapperOptions,
  ObjectMapper,
  mapByConvention,
  mapWithConfig,
  createMapper,
} from '@nova/mapper-utils';

/** Re-exportaciones de @nova/api-standard */
export {
  ApiError,
  ApiMetadata,
  ApiLink,
  RateLimitInfo,
  PageInfo,
  ApiResponse,
} from '@nova/api-standard';

/* ─── Módulos NestJS ─── */

/** Re-exportaciones de @nova/nestjs-mask */
export {
  MaskModule,
  MASK_MODULE_OPTIONS,
  MaskModuleOptions,
  MaskService,
  MaskInterceptor,
} from '@nova/nestjs-mask';

/** Re-exportaciones de @nova/nestjs-api-standard */
export {
  ApiStandardModule,
  ApiStandardInterceptor,
  ApiStandardExceptionFilter,
} from '@nova/nestjs-api-standard';

/* ─── Meta-framework ─── */

/** Módulo raíz del meta-framework */
export { NovaPlatformModule } from './nova.module';

/** Opciones del módulo raíz */
export { NovaPlatformModuleOptions } from './nova-module-options.interface';

/** Factoría de aplicaciones */
export { NovaPlatformFactory } from './nova.factory';

/** Opciones de la factoría */
export { NovaPlatformFactoryOptions } from './nova-factory-options.interface';
