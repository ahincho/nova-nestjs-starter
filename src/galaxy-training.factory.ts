import { NestFactory } from '@nestjs/core';
import { Type, INestApplication } from '@nestjs/common';
import { NovaPlatformFactoryOptions } from './nova-factory-options.interface';

/** Versión major mínima requerida de Node.js. */
const REQUIRED_NODE_MAJOR = 24;

/** Versión major requerida de NestJS. */
const REQUIRED_NESTJS_MAJOR = 11;

/**
 * Factoría de aplicaciones Nova Platform NestJS.
 *
 * Reemplaza a {@link NestFactory.create} proporcionando validación automática
 * del entorno de ejecución antes de crear la aplicación. Verifica que las versiones
 * de NodeJs y NestJS sean compatibles con el meta-framework.
 *
 * @example
 * ```typescript
 * import { NovaPlatformFactory } from '@nova/nestjs-starter';
 * import { AppModule } from './app.module';
 *
 * async function bootstrap() {
 *   const app = await NovaPlatformFactory.create(AppModule);
 *   await app.listen(3000);
 * }
 * bootstrap();
 * ```
 */
export class NovaPlatformFactory {
  /**
   * Crea una aplicación NestJS con validación de entorno.
   *
   * Antes de crear la aplicación, verifica que:
   * - La versión de Node.js sea 22 o superior
   * - La versión de NestJS sea 11.x
   *
   * Si alguna validación falla, lanza un error descriptivo en español.
   * Si ambas validaciones son exitosas, registra un mensaje informativo.
   *
   * @param module - Módulo raíz de la aplicación NestJS.
   * @param options - Opciones de configuración opcionales.
   * @returns Promesa que resuelve con la instancia de la aplicación NestJS.
   * @throws Error si la versión de Node.js no es 22 o superior.
   * @throws Error si la versión de NestJS no es 11.x.
   */
  static async create(
    module: Type<unknown>,
    options?: NovaPlatformFactoryOptions,
  ): Promise<INestApplication> {
    if (!options?.skipEnvValidation) {
      NovaPlatformFactory.validateNodeVersion();
      NovaPlatformFactory.validateNestVersion();

      const nodeVersion = process.version;
      const nestVersion = NovaPlatformFactory.detectNestVersion();

      console.log(
        `[Nova Platform] Validación exitosa — Node.js: ${nodeVersion}, NestJS: ${nestVersion}`,
      );
    }

    const appOptions: Record<string, unknown> = {};
    if (options?.logger) {
      appOptions['logger'] = options.logger;
    }

    return NestFactory.create(module, appOptions);
  }

  /**
   * Valida que la versión de Node.js sea 22 o superior.
   *
   * @throws Error si la versión de Node.js no cumple el requisito mínimo.
   */
  private static validateNodeVersion(): void {
    const nodeVersion = process.version;
    const nodeMajor = parseInt(nodeVersion.replace('v', '').split('.')[0], 10);

    if (nodeMajor < REQUIRED_NODE_MAJOR) {
      throw new Error(
        `[Nova Platform] Error: Se requiere Node.js ${REQUIRED_NODE_MAJOR}.x o superior. ` +
          `Versión detectada: ${nodeVersion}. Por favor, actualice su entorno.`,
      );
    }
  }

  /**
   * Valida que la versión de NestJS sea 11.x.
   *
   * @throws Error si la versión de NestJS no es 11.x.
   */
  private static validateNestVersion(): void {
    const nestVersion = NovaPlatformFactory.detectNestVersion();
    const nestMajor = parseInt(nestVersion.split('.')[0], 10);

    if (nestMajor !== REQUIRED_NESTJS_MAJOR) {
      throw new Error(
        `[Nova Platform] Error: Se requiere NestJS 11.x. ` +
          `Versión detectada: ${nestVersion}. Por favor, verifique la versión del framework.`,
      );
    }
  }

  /**
   * Detecta la versión de NestJS leyendo el package.json de @nestjs/common.
   *
   * @returns Versión de NestJS como string (ej: "11.0.0").
   */
  private static detectNestVersion(): string {
    try {
      /* eslint-disable @typescript-eslint/no-require-imports */
      const nestPackage = require('@nestjs/common/package.json');
      return nestPackage.version;
    } catch {
      return 'desconocida';
    }
  }
}
