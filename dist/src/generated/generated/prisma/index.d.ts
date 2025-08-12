
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model adopter
 * 
 */
export type adopter = $Result.DefaultSelection<Prisma.$adopterPayload>
/**
 * Model adoption
 * 
 */
export type adoption = $Result.DefaultSelection<Prisma.$adoptionPayload>
/**
 * Model pet
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type pet = $Result.DefaultSelection<Prisma.$petPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const pet_size: {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

export type pet_size = (typeof pet_size)[keyof typeof pet_size]


export const pet_type: {
  dog: 'dog',
  cat: 'cat',
  other: 'other'
};

export type pet_type = (typeof pet_type)[keyof typeof pet_type]

}

export type pet_size = $Enums.pet_size

export const pet_size: typeof $Enums.pet_size

export type pet_type = $Enums.pet_type

export const pet_type: typeof $Enums.pet_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Adopters
 * const adopters = await prisma.adopter.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Adopters
   * const adopters = await prisma.adopter.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adopter`: Exposes CRUD operations for the **adopter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adopters
    * const adopters = await prisma.adopter.findMany()
    * ```
    */
  get adopter(): Prisma.adopterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adoption`: Exposes CRUD operations for the **adoption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adoptions
    * const adoptions = await prisma.adoption.findMany()
    * ```
    */
  get adoption(): Prisma.adoptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.petDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    adopter: 'adopter',
    adoption: 'adoption',
    pet: 'pet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adopter" | "adoption" | "pet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      adopter: {
        payload: Prisma.$adopterPayload<ExtArgs>
        fields: Prisma.adopterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adopterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adopterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adopterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adopterPayload>
          }
          findFirst: {
            args: Prisma.adopterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adopterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adopterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adopterPayload>
          }
          findMany: {
            args: Prisma.adopterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adopterPayload>[]
          }
          create: {
            args: Prisma.adopterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adopterPayload>
          }
          createMany: {
            args: Prisma.adopterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adopterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adopterPayload>[]
          }
          delete: {
            args: Prisma.adopterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adopterPayload>
          }
          update: {
            args: Prisma.adopterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adopterPayload>
          }
          deleteMany: {
            args: Prisma.adopterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adopterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adopterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adopterPayload>[]
          }
          upsert: {
            args: Prisma.adopterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adopterPayload>
          }
          aggregate: {
            args: Prisma.AdopterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdopter>
          }
          groupBy: {
            args: Prisma.adopterGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdopterGroupByOutputType>[]
          }
          count: {
            args: Prisma.adopterCountArgs<ExtArgs>
            result: $Utils.Optional<AdopterCountAggregateOutputType> | number
          }
        }
      }
      adoption: {
        payload: Prisma.$adoptionPayload<ExtArgs>
        fields: Prisma.adoptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adoptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adoptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          findFirst: {
            args: Prisma.adoptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adoptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          findMany: {
            args: Prisma.adoptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>[]
          }
          create: {
            args: Prisma.adoptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          createMany: {
            args: Prisma.adoptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adoptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>[]
          }
          delete: {
            args: Prisma.adoptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          update: {
            args: Prisma.adoptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          deleteMany: {
            args: Prisma.adoptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adoptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adoptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>[]
          }
          upsert: {
            args: Prisma.adoptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          aggregate: {
            args: Prisma.AdoptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdoption>
          }
          groupBy: {
            args: Prisma.adoptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdoptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.adoptionCountArgs<ExtArgs>
            result: $Utils.Optional<AdoptionCountAggregateOutputType> | number
          }
        }
      }
      pet: {
        payload: Prisma.$petPayload<ExtArgs>
        fields: Prisma.petFieldRefs
        operations: {
          findUnique: {
            args: Prisma.petFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.petFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          findFirst: {
            args: Prisma.petFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.petFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          findMany: {
            args: Prisma.petFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>[]
          }
          create: {
            args: Prisma.petCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          createMany: {
            args: Prisma.petCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.petCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>[]
          }
          delete: {
            args: Prisma.petDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          update: {
            args: Prisma.petUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          deleteMany: {
            args: Prisma.petDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.petUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.petUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>[]
          }
          upsert: {
            args: Prisma.petUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.petGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.petCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    adopter?: adopterOmit
    adoption?: adoptionOmit
    pet?: petOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdopterCountOutputType
   */

  export type AdopterCountOutputType = {
    adoption: number
  }

  export type AdopterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | AdopterCountOutputTypeCountAdoptionArgs
  }

  // Custom InputTypes
  /**
   * AdopterCountOutputType without action
   */
  export type AdopterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdopterCountOutputType
     */
    select?: AdopterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdopterCountOutputType without action
   */
  export type AdopterCountOutputTypeCountAdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adoptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model adopter
   */

  export type AggregateAdopter = {
    _count: AdopterCountAggregateOutputType | null
    _avg: AdopterAvgAggregateOutputType | null
    _sum: AdopterSumAggregateOutputType | null
    _min: AdopterMinAggregateOutputType | null
    _max: AdopterMaxAggregateOutputType | null
  }

  export type AdopterAvgAggregateOutputType = {
    id: number | null
  }

  export type AdopterSumAggregateOutputType = {
    id: number | null
  }

  export type AdopterMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
  }

  export type AdopterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
  }

  export type AdopterCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    _all: number
  }


  export type AdopterAvgAggregateInputType = {
    id?: true
  }

  export type AdopterSumAggregateInputType = {
    id?: true
  }

  export type AdopterMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
  }

  export type AdopterMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
  }

  export type AdopterCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type AdopterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adopter to aggregate.
     */
    where?: adopterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adopters to fetch.
     */
    orderBy?: adopterOrderByWithRelationInput | adopterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adopterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adopters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adopters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adopters
    **/
    _count?: true | AdopterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdopterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdopterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdopterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdopterMaxAggregateInputType
  }

  export type GetAdopterAggregateType<T extends AdopterAggregateArgs> = {
        [P in keyof T & keyof AggregateAdopter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdopter[P]>
      : GetScalarType<T[P], AggregateAdopter[P]>
  }




  export type adopterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adopterWhereInput
    orderBy?: adopterOrderByWithAggregationInput | adopterOrderByWithAggregationInput[]
    by: AdopterScalarFieldEnum[] | AdopterScalarFieldEnum
    having?: adopterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdopterCountAggregateInputType | true
    _avg?: AdopterAvgAggregateInputType
    _sum?: AdopterSumAggregateInputType
    _min?: AdopterMinAggregateInputType
    _max?: AdopterMaxAggregateInputType
  }

  export type AdopterGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    _count: AdopterCountAggregateOutputType | null
    _avg: AdopterAvgAggregateOutputType | null
    _sum: AdopterSumAggregateOutputType | null
    _min: AdopterMinAggregateOutputType | null
    _max: AdopterMaxAggregateOutputType | null
  }

  type GetAdopterGroupByPayload<T extends adopterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdopterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdopterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdopterGroupByOutputType[P]>
            : GetScalarType<T[P], AdopterGroupByOutputType[P]>
        }
      >
    >


  export type adopterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    adoption?: boolean | adopter$adoptionArgs<ExtArgs>
    _count?: boolean | AdopterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adopter"]>

  export type adopterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["adopter"]>

  export type adopterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["adopter"]>

  export type adopterSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }

  export type adopterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone", ExtArgs["result"]["adopter"]>
  export type adopterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | adopter$adoptionArgs<ExtArgs>
    _count?: boolean | AdopterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type adopterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type adopterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $adopterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "adopter"
    objects: {
      adoption: Prisma.$adoptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
    }, ExtArgs["result"]["adopter"]>
    composites: {}
  }

  type adopterGetPayload<S extends boolean | null | undefined | adopterDefaultArgs> = $Result.GetResult<Prisma.$adopterPayload, S>

  type adopterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adopterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdopterCountAggregateInputType | true
    }

  export interface adopterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adopter'], meta: { name: 'adopter' } }
    /**
     * Find zero or one Adopter that matches the filter.
     * @param {adopterFindUniqueArgs} args - Arguments to find a Adopter
     * @example
     * // Get one Adopter
     * const adopter = await prisma.adopter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adopterFindUniqueArgs>(args: SelectSubset<T, adopterFindUniqueArgs<ExtArgs>>): Prisma__adopterClient<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adopter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adopterFindUniqueOrThrowArgs} args - Arguments to find a Adopter
     * @example
     * // Get one Adopter
     * const adopter = await prisma.adopter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adopterFindUniqueOrThrowArgs>(args: SelectSubset<T, adopterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adopterClient<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adopter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adopterFindFirstArgs} args - Arguments to find a Adopter
     * @example
     * // Get one Adopter
     * const adopter = await prisma.adopter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adopterFindFirstArgs>(args?: SelectSubset<T, adopterFindFirstArgs<ExtArgs>>): Prisma__adopterClient<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adopter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adopterFindFirstOrThrowArgs} args - Arguments to find a Adopter
     * @example
     * // Get one Adopter
     * const adopter = await prisma.adopter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adopterFindFirstOrThrowArgs>(args?: SelectSubset<T, adopterFindFirstOrThrowArgs<ExtArgs>>): Prisma__adopterClient<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adopters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adopterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adopters
     * const adopters = await prisma.adopter.findMany()
     * 
     * // Get first 10 Adopters
     * const adopters = await prisma.adopter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adopterWithIdOnly = await prisma.adopter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adopterFindManyArgs>(args?: SelectSubset<T, adopterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adopter.
     * @param {adopterCreateArgs} args - Arguments to create a Adopter.
     * @example
     * // Create one Adopter
     * const Adopter = await prisma.adopter.create({
     *   data: {
     *     // ... data to create a Adopter
     *   }
     * })
     * 
     */
    create<T extends adopterCreateArgs>(args: SelectSubset<T, adopterCreateArgs<ExtArgs>>): Prisma__adopterClient<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adopters.
     * @param {adopterCreateManyArgs} args - Arguments to create many Adopters.
     * @example
     * // Create many Adopters
     * const adopter = await prisma.adopter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adopterCreateManyArgs>(args?: SelectSubset<T, adopterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adopters and returns the data saved in the database.
     * @param {adopterCreateManyAndReturnArgs} args - Arguments to create many Adopters.
     * @example
     * // Create many Adopters
     * const adopter = await prisma.adopter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adopters and only return the `id`
     * const adopterWithIdOnly = await prisma.adopter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adopterCreateManyAndReturnArgs>(args?: SelectSubset<T, adopterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adopter.
     * @param {adopterDeleteArgs} args - Arguments to delete one Adopter.
     * @example
     * // Delete one Adopter
     * const Adopter = await prisma.adopter.delete({
     *   where: {
     *     // ... filter to delete one Adopter
     *   }
     * })
     * 
     */
    delete<T extends adopterDeleteArgs>(args: SelectSubset<T, adopterDeleteArgs<ExtArgs>>): Prisma__adopterClient<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adopter.
     * @param {adopterUpdateArgs} args - Arguments to update one Adopter.
     * @example
     * // Update one Adopter
     * const adopter = await prisma.adopter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adopterUpdateArgs>(args: SelectSubset<T, adopterUpdateArgs<ExtArgs>>): Prisma__adopterClient<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adopters.
     * @param {adopterDeleteManyArgs} args - Arguments to filter Adopters to delete.
     * @example
     * // Delete a few Adopters
     * const { count } = await prisma.adopter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adopterDeleteManyArgs>(args?: SelectSubset<T, adopterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adopters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adopterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adopters
     * const adopter = await prisma.adopter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adopterUpdateManyArgs>(args: SelectSubset<T, adopterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adopters and returns the data updated in the database.
     * @param {adopterUpdateManyAndReturnArgs} args - Arguments to update many Adopters.
     * @example
     * // Update many Adopters
     * const adopter = await prisma.adopter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adopters and only return the `id`
     * const adopterWithIdOnly = await prisma.adopter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends adopterUpdateManyAndReturnArgs>(args: SelectSubset<T, adopterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adopter.
     * @param {adopterUpsertArgs} args - Arguments to update or create a Adopter.
     * @example
     * // Update or create a Adopter
     * const adopter = await prisma.adopter.upsert({
     *   create: {
     *     // ... data to create a Adopter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adopter we want to update
     *   }
     * })
     */
    upsert<T extends adopterUpsertArgs>(args: SelectSubset<T, adopterUpsertArgs<ExtArgs>>): Prisma__adopterClient<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adopters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adopterCountArgs} args - Arguments to filter Adopters to count.
     * @example
     * // Count the number of Adopters
     * const count = await prisma.adopter.count({
     *   where: {
     *     // ... the filter for the Adopters we want to count
     *   }
     * })
    **/
    count<T extends adopterCountArgs>(
      args?: Subset<T, adopterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdopterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adopter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdopterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdopterAggregateArgs>(args: Subset<T, AdopterAggregateArgs>): Prisma.PrismaPromise<GetAdopterAggregateType<T>>

    /**
     * Group by Adopter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adopterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adopterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adopterGroupByArgs['orderBy'] }
        : { orderBy?: adopterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adopterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdopterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the adopter model
   */
  readonly fields: adopterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adopter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adopterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adoption<T extends adopter$adoptionArgs<ExtArgs> = {}>(args?: Subset<T, adopter$adoptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the adopter model
   */
  interface adopterFieldRefs {
    readonly id: FieldRef<"adopter", 'Int'>
    readonly name: FieldRef<"adopter", 'String'>
    readonly email: FieldRef<"adopter", 'String'>
    readonly phone: FieldRef<"adopter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * adopter findUnique
   */
  export type adopterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adopterInclude<ExtArgs> | null
    /**
     * Filter, which adopter to fetch.
     */
    where: adopterWhereUniqueInput
  }

  /**
   * adopter findUniqueOrThrow
   */
  export type adopterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adopterInclude<ExtArgs> | null
    /**
     * Filter, which adopter to fetch.
     */
    where: adopterWhereUniqueInput
  }

  /**
   * adopter findFirst
   */
  export type adopterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adopterInclude<ExtArgs> | null
    /**
     * Filter, which adopter to fetch.
     */
    where?: adopterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adopters to fetch.
     */
    orderBy?: adopterOrderByWithRelationInput | adopterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adopters.
     */
    cursor?: adopterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adopters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adopters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adopters.
     */
    distinct?: AdopterScalarFieldEnum | AdopterScalarFieldEnum[]
  }

  /**
   * adopter findFirstOrThrow
   */
  export type adopterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adopterInclude<ExtArgs> | null
    /**
     * Filter, which adopter to fetch.
     */
    where?: adopterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adopters to fetch.
     */
    orderBy?: adopterOrderByWithRelationInput | adopterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adopters.
     */
    cursor?: adopterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adopters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adopters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adopters.
     */
    distinct?: AdopterScalarFieldEnum | AdopterScalarFieldEnum[]
  }

  /**
   * adopter findMany
   */
  export type adopterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adopterInclude<ExtArgs> | null
    /**
     * Filter, which adopters to fetch.
     */
    where?: adopterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adopters to fetch.
     */
    orderBy?: adopterOrderByWithRelationInput | adopterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adopters.
     */
    cursor?: adopterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adopters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adopters.
     */
    skip?: number
    distinct?: AdopterScalarFieldEnum | AdopterScalarFieldEnum[]
  }

  /**
   * adopter create
   */
  export type adopterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adopterInclude<ExtArgs> | null
    /**
     * The data needed to create a adopter.
     */
    data: XOR<adopterCreateInput, adopterUncheckedCreateInput>
  }

  /**
   * adopter createMany
   */
  export type adopterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adopters.
     */
    data: adopterCreateManyInput | adopterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * adopter createManyAndReturn
   */
  export type adopterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * The data used to create many adopters.
     */
    data: adopterCreateManyInput | adopterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * adopter update
   */
  export type adopterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adopterInclude<ExtArgs> | null
    /**
     * The data needed to update a adopter.
     */
    data: XOR<adopterUpdateInput, adopterUncheckedUpdateInput>
    /**
     * Choose, which adopter to update.
     */
    where: adopterWhereUniqueInput
  }

  /**
   * adopter updateMany
   */
  export type adopterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adopters.
     */
    data: XOR<adopterUpdateManyMutationInput, adopterUncheckedUpdateManyInput>
    /**
     * Filter which adopters to update
     */
    where?: adopterWhereInput
    /**
     * Limit how many adopters to update.
     */
    limit?: number
  }

  /**
   * adopter updateManyAndReturn
   */
  export type adopterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * The data used to update adopters.
     */
    data: XOR<adopterUpdateManyMutationInput, adopterUncheckedUpdateManyInput>
    /**
     * Filter which adopters to update
     */
    where?: adopterWhereInput
    /**
     * Limit how many adopters to update.
     */
    limit?: number
  }

  /**
   * adopter upsert
   */
  export type adopterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adopterInclude<ExtArgs> | null
    /**
     * The filter to search for the adopter to update in case it exists.
     */
    where: adopterWhereUniqueInput
    /**
     * In case the adopter found by the `where` argument doesn't exist, create a new adopter with this data.
     */
    create: XOR<adopterCreateInput, adopterUncheckedCreateInput>
    /**
     * In case the adopter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adopterUpdateInput, adopterUncheckedUpdateInput>
  }

  /**
   * adopter delete
   */
  export type adopterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adopterInclude<ExtArgs> | null
    /**
     * Filter which adopter to delete.
     */
    where: adopterWhereUniqueInput
  }

  /**
   * adopter deleteMany
   */
  export type adopterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adopters to delete
     */
    where?: adopterWhereInput
    /**
     * Limit how many adopters to delete.
     */
    limit?: number
  }

  /**
   * adopter.adoption
   */
  export type adopter$adoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    where?: adoptionWhereInput
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    cursor?: adoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * adopter without action
   */
  export type adopterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adopterInclude<ExtArgs> | null
  }


  /**
   * Model adoption
   */

  export type AggregateAdoption = {
    _count: AdoptionCountAggregateOutputType | null
    _avg: AdoptionAvgAggregateOutputType | null
    _sum: AdoptionSumAggregateOutputType | null
    _min: AdoptionMinAggregateOutputType | null
    _max: AdoptionMaxAggregateOutputType | null
  }

  export type AdoptionAvgAggregateOutputType = {
    id: number | null
    pet_id: number | null
    adopter_id: number | null
  }

  export type AdoptionSumAggregateOutputType = {
    id: number | null
    pet_id: number | null
    adopter_id: number | null
  }

  export type AdoptionMinAggregateOutputType = {
    id: number | null
    pet_id: number | null
    adopter_id: number | null
    adoption_date: Date | null
  }

  export type AdoptionMaxAggregateOutputType = {
    id: number | null
    pet_id: number | null
    adopter_id: number | null
    adoption_date: Date | null
  }

  export type AdoptionCountAggregateOutputType = {
    id: number
    pet_id: number
    adopter_id: number
    adoption_date: number
    _all: number
  }


  export type AdoptionAvgAggregateInputType = {
    id?: true
    pet_id?: true
    adopter_id?: true
  }

  export type AdoptionSumAggregateInputType = {
    id?: true
    pet_id?: true
    adopter_id?: true
  }

  export type AdoptionMinAggregateInputType = {
    id?: true
    pet_id?: true
    adopter_id?: true
    adoption_date?: true
  }

  export type AdoptionMaxAggregateInputType = {
    id?: true
    pet_id?: true
    adopter_id?: true
    adoption_date?: true
  }

  export type AdoptionCountAggregateInputType = {
    id?: true
    pet_id?: true
    adopter_id?: true
    adoption_date?: true
    _all?: true
  }

  export type AdoptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adoption to aggregate.
     */
    where?: adoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptions to fetch.
     */
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adoptions
    **/
    _count?: true | AdoptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdoptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdoptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdoptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdoptionMaxAggregateInputType
  }

  export type GetAdoptionAggregateType<T extends AdoptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdoption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdoption[P]>
      : GetScalarType<T[P], AggregateAdoption[P]>
  }




  export type adoptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adoptionWhereInput
    orderBy?: adoptionOrderByWithAggregationInput | adoptionOrderByWithAggregationInput[]
    by: AdoptionScalarFieldEnum[] | AdoptionScalarFieldEnum
    having?: adoptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdoptionCountAggregateInputType | true
    _avg?: AdoptionAvgAggregateInputType
    _sum?: AdoptionSumAggregateInputType
    _min?: AdoptionMinAggregateInputType
    _max?: AdoptionMaxAggregateInputType
  }

  export type AdoptionGroupByOutputType = {
    id: number
    pet_id: number | null
    adopter_id: number | null
    adoption_date: Date
    _count: AdoptionCountAggregateOutputType | null
    _avg: AdoptionAvgAggregateOutputType | null
    _sum: AdoptionSumAggregateOutputType | null
    _min: AdoptionMinAggregateOutputType | null
    _max: AdoptionMaxAggregateOutputType | null
  }

  type GetAdoptionGroupByPayload<T extends adoptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdoptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdoptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdoptionGroupByOutputType[P]>
            : GetScalarType<T[P], AdoptionGroupByOutputType[P]>
        }
      >
    >


  export type adoptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    adopter_id?: boolean
    adoption_date?: boolean
    adopter?: boolean | adoption$adopterArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type adoptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    adopter_id?: boolean
    adoption_date?: boolean
    adopter?: boolean | adoption$adopterArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type adoptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pet_id?: boolean
    adopter_id?: boolean
    adoption_date?: boolean
    adopter?: boolean | adoption$adopterArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type adoptionSelectScalar = {
    id?: boolean
    pet_id?: boolean
    adopter_id?: boolean
    adoption_date?: boolean
  }

  export type adoptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pet_id" | "adopter_id" | "adoption_date", ExtArgs["result"]["adoption"]>
  export type adoptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adopter?: boolean | adoption$adopterArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }
  export type adoptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adopter?: boolean | adoption$adopterArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }
  export type adoptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adopter?: boolean | adoption$adopterArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }

  export type $adoptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "adoption"
    objects: {
      adopter: Prisma.$adopterPayload<ExtArgs> | null
      pet: Prisma.$petPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pet_id: number | null
      adopter_id: number | null
      adoption_date: Date
    }, ExtArgs["result"]["adoption"]>
    composites: {}
  }

  type adoptionGetPayload<S extends boolean | null | undefined | adoptionDefaultArgs> = $Result.GetResult<Prisma.$adoptionPayload, S>

  type adoptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adoptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdoptionCountAggregateInputType | true
    }

  export interface adoptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adoption'], meta: { name: 'adoption' } }
    /**
     * Find zero or one Adoption that matches the filter.
     * @param {adoptionFindUniqueArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adoptionFindUniqueArgs>(args: SelectSubset<T, adoptionFindUniqueArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adoption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adoptionFindUniqueOrThrowArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adoptionFindUniqueOrThrowArgs>(args: SelectSubset<T, adoptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionFindFirstArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adoptionFindFirstArgs>(args?: SelectSubset<T, adoptionFindFirstArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionFindFirstOrThrowArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adoptionFindFirstOrThrowArgs>(args?: SelectSubset<T, adoptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adoptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adoptions
     * const adoptions = await prisma.adoption.findMany()
     * 
     * // Get first 10 Adoptions
     * const adoptions = await prisma.adoption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adoptionWithIdOnly = await prisma.adoption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adoptionFindManyArgs>(args?: SelectSubset<T, adoptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adoption.
     * @param {adoptionCreateArgs} args - Arguments to create a Adoption.
     * @example
     * // Create one Adoption
     * const Adoption = await prisma.adoption.create({
     *   data: {
     *     // ... data to create a Adoption
     *   }
     * })
     * 
     */
    create<T extends adoptionCreateArgs>(args: SelectSubset<T, adoptionCreateArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adoptions.
     * @param {adoptionCreateManyArgs} args - Arguments to create many Adoptions.
     * @example
     * // Create many Adoptions
     * const adoption = await prisma.adoption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adoptionCreateManyArgs>(args?: SelectSubset<T, adoptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adoptions and returns the data saved in the database.
     * @param {adoptionCreateManyAndReturnArgs} args - Arguments to create many Adoptions.
     * @example
     * // Create many Adoptions
     * const adoption = await prisma.adoption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adoptions and only return the `id`
     * const adoptionWithIdOnly = await prisma.adoption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adoptionCreateManyAndReturnArgs>(args?: SelectSubset<T, adoptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adoption.
     * @param {adoptionDeleteArgs} args - Arguments to delete one Adoption.
     * @example
     * // Delete one Adoption
     * const Adoption = await prisma.adoption.delete({
     *   where: {
     *     // ... filter to delete one Adoption
     *   }
     * })
     * 
     */
    delete<T extends adoptionDeleteArgs>(args: SelectSubset<T, adoptionDeleteArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adoption.
     * @param {adoptionUpdateArgs} args - Arguments to update one Adoption.
     * @example
     * // Update one Adoption
     * const adoption = await prisma.adoption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adoptionUpdateArgs>(args: SelectSubset<T, adoptionUpdateArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adoptions.
     * @param {adoptionDeleteManyArgs} args - Arguments to filter Adoptions to delete.
     * @example
     * // Delete a few Adoptions
     * const { count } = await prisma.adoption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adoptionDeleteManyArgs>(args?: SelectSubset<T, adoptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adoptions
     * const adoption = await prisma.adoption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adoptionUpdateManyArgs>(args: SelectSubset<T, adoptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptions and returns the data updated in the database.
     * @param {adoptionUpdateManyAndReturnArgs} args - Arguments to update many Adoptions.
     * @example
     * // Update many Adoptions
     * const adoption = await prisma.adoption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adoptions and only return the `id`
     * const adoptionWithIdOnly = await prisma.adoption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends adoptionUpdateManyAndReturnArgs>(args: SelectSubset<T, adoptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adoption.
     * @param {adoptionUpsertArgs} args - Arguments to update or create a Adoption.
     * @example
     * // Update or create a Adoption
     * const adoption = await prisma.adoption.upsert({
     *   create: {
     *     // ... data to create a Adoption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adoption we want to update
     *   }
     * })
     */
    upsert<T extends adoptionUpsertArgs>(args: SelectSubset<T, adoptionUpsertArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionCountArgs} args - Arguments to filter Adoptions to count.
     * @example
     * // Count the number of Adoptions
     * const count = await prisma.adoption.count({
     *   where: {
     *     // ... the filter for the Adoptions we want to count
     *   }
     * })
    **/
    count<T extends adoptionCountArgs>(
      args?: Subset<T, adoptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdoptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdoptionAggregateArgs>(args: Subset<T, AdoptionAggregateArgs>): Prisma.PrismaPromise<GetAdoptionAggregateType<T>>

    /**
     * Group by Adoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adoptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adoptionGroupByArgs['orderBy'] }
        : { orderBy?: adoptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adoptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdoptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the adoption model
   */
  readonly fields: adoptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adoption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adoptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adopter<T extends adoption$adopterArgs<ExtArgs> = {}>(args?: Subset<T, adoption$adopterArgs<ExtArgs>>): Prisma__adopterClient<$Result.GetResult<Prisma.$adopterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pet<T extends adoption$petArgs<ExtArgs> = {}>(args?: Subset<T, adoption$petArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the adoption model
   */
  interface adoptionFieldRefs {
    readonly id: FieldRef<"adoption", 'Int'>
    readonly pet_id: FieldRef<"adoption", 'Int'>
    readonly adopter_id: FieldRef<"adoption", 'Int'>
    readonly adoption_date: FieldRef<"adoption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * adoption findUnique
   */
  export type adoptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter, which adoption to fetch.
     */
    where: adoptionWhereUniqueInput
  }

  /**
   * adoption findUniqueOrThrow
   */
  export type adoptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter, which adoption to fetch.
     */
    where: adoptionWhereUniqueInput
  }

  /**
   * adoption findFirst
   */
  export type adoptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter, which adoption to fetch.
     */
    where?: adoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptions to fetch.
     */
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adoptions.
     */
    cursor?: adoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adoptions.
     */
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * adoption findFirstOrThrow
   */
  export type adoptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter, which adoption to fetch.
     */
    where?: adoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptions to fetch.
     */
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adoptions.
     */
    cursor?: adoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adoptions.
     */
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * adoption findMany
   */
  export type adoptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter, which adoptions to fetch.
     */
    where?: adoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptions to fetch.
     */
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adoptions.
     */
    cursor?: adoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptions.
     */
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * adoption create
   */
  export type adoptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * The data needed to create a adoption.
     */
    data: XOR<adoptionCreateInput, adoptionUncheckedCreateInput>
  }

  /**
   * adoption createMany
   */
  export type adoptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adoptions.
     */
    data: adoptionCreateManyInput | adoptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * adoption createManyAndReturn
   */
  export type adoptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * The data used to create many adoptions.
     */
    data: adoptionCreateManyInput | adoptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * adoption update
   */
  export type adoptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * The data needed to update a adoption.
     */
    data: XOR<adoptionUpdateInput, adoptionUncheckedUpdateInput>
    /**
     * Choose, which adoption to update.
     */
    where: adoptionWhereUniqueInput
  }

  /**
   * adoption updateMany
   */
  export type adoptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adoptions.
     */
    data: XOR<adoptionUpdateManyMutationInput, adoptionUncheckedUpdateManyInput>
    /**
     * Filter which adoptions to update
     */
    where?: adoptionWhereInput
    /**
     * Limit how many adoptions to update.
     */
    limit?: number
  }

  /**
   * adoption updateManyAndReturn
   */
  export type adoptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * The data used to update adoptions.
     */
    data: XOR<adoptionUpdateManyMutationInput, adoptionUncheckedUpdateManyInput>
    /**
     * Filter which adoptions to update
     */
    where?: adoptionWhereInput
    /**
     * Limit how many adoptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * adoption upsert
   */
  export type adoptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * The filter to search for the adoption to update in case it exists.
     */
    where: adoptionWhereUniqueInput
    /**
     * In case the adoption found by the `where` argument doesn't exist, create a new adoption with this data.
     */
    create: XOR<adoptionCreateInput, adoptionUncheckedCreateInput>
    /**
     * In case the adoption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adoptionUpdateInput, adoptionUncheckedUpdateInput>
  }

  /**
   * adoption delete
   */
  export type adoptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter which adoption to delete.
     */
    where: adoptionWhereUniqueInput
  }

  /**
   * adoption deleteMany
   */
  export type adoptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adoptions to delete
     */
    where?: adoptionWhereInput
    /**
     * Limit how many adoptions to delete.
     */
    limit?: number
  }

  /**
   * adoption.adopter
   */
  export type adoption$adopterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adopter
     */
    select?: adopterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adopter
     */
    omit?: adopterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adopterInclude<ExtArgs> | null
    where?: adopterWhereInput
  }

  /**
   * adoption.pet
   */
  export type adoption$petArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    where?: petWhereInput
  }

  /**
   * adoption without action
   */
  export type adoptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
  }


  /**
   * Model pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type PetSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type PetMinAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    type: $Enums.pet_type | null
    breed: string | null
    size: $Enums.pet_size | null
    description: string | null
    available: boolean | null
  }

  export type PetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    type: $Enums.pet_type | null
    breed: string | null
    size: $Enums.pet_size | null
    description: string | null
    available: boolean | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    age: number
    type: number
    breed: number
    size: number
    description: number
    available: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type PetSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    type?: true
    breed?: true
    size?: true
    description?: true
    available?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    type?: true
    breed?: true
    size?: true
    description?: true
    available?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    type?: true
    breed?: true
    size?: true
    description?: true
    available?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pet to aggregate.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type petGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petWhereInput
    orderBy?: petOrderByWithAggregationInput | petOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: petScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: number
    name: string
    age: number | null
    type: $Enums.pet_type
    breed: string | null
    size: $Enums.pet_size
    description: string | null
    available: boolean | null
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends petGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type petSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    type?: boolean
    breed?: boolean
    size?: boolean
    description?: boolean
    available?: boolean
    adoption?: boolean | pet$adoptionArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type petSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    type?: boolean
    breed?: boolean
    size?: boolean
    description?: boolean
    available?: boolean
  }, ExtArgs["result"]["pet"]>

  export type petSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    type?: boolean
    breed?: boolean
    size?: boolean
    description?: boolean
    available?: boolean
  }, ExtArgs["result"]["pet"]>

  export type petSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    type?: boolean
    breed?: boolean
    size?: boolean
    description?: boolean
    available?: boolean
  }

  export type petOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "type" | "breed" | "size" | "description" | "available", ExtArgs["result"]["pet"]>
  export type petInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | pet$adoptionArgs<ExtArgs>
  }
  export type petIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type petIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $petPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pet"
    objects: {
      adoption: Prisma.$adoptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      age: number | null
      type: $Enums.pet_type
      breed: string | null
      size: $Enums.pet_size
      description: string | null
      available: boolean | null
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type petGetPayload<S extends boolean | null | undefined | petDefaultArgs> = $Result.GetResult<Prisma.$petPayload, S>

  type petCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<petFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface petDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pet'], meta: { name: 'pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {petFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends petFindUniqueArgs>(args: SelectSubset<T, petFindUniqueArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {petFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends petFindUniqueOrThrowArgs>(args: SelectSubset<T, petFindUniqueOrThrowArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends petFindFirstArgs>(args?: SelectSubset<T, petFindFirstArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends petFindFirstOrThrowArgs>(args?: SelectSubset<T, petFindFirstOrThrowArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends petFindManyArgs>(args?: SelectSubset<T, petFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {petCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends petCreateArgs>(args: SelectSubset<T, petCreateArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {petCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends petCreateManyArgs>(args?: SelectSubset<T, petCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {petCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends petCreateManyAndReturnArgs>(args?: SelectSubset<T, petCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {petDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends petDeleteArgs>(args: SelectSubset<T, petDeleteArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {petUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends petUpdateArgs>(args: SelectSubset<T, petUpdateArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {petDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends petDeleteManyArgs>(args?: SelectSubset<T, petDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends petUpdateManyArgs>(args: SelectSubset<T, petUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {petUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends petUpdateManyAndReturnArgs>(args: SelectSubset<T, petUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {petUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends petUpsertArgs>(args: SelectSubset<T, petUpsertArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends petCountArgs>(
      args?: Subset<T, petCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends petGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: petGroupByArgs['orderBy'] }
        : { orderBy?: petGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, petGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pet model
   */
  readonly fields: petFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__petClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adoption<T extends pet$adoptionArgs<ExtArgs> = {}>(args?: Subset<T, pet$adoptionArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pet model
   */
  interface petFieldRefs {
    readonly id: FieldRef<"pet", 'Int'>
    readonly name: FieldRef<"pet", 'String'>
    readonly age: FieldRef<"pet", 'Int'>
    readonly type: FieldRef<"pet", 'pet_type'>
    readonly breed: FieldRef<"pet", 'String'>
    readonly size: FieldRef<"pet", 'pet_size'>
    readonly description: FieldRef<"pet", 'String'>
    readonly available: FieldRef<"pet", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * pet findUnique
   */
  export type petFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet findUniqueOrThrow
   */
  export type petFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet findFirst
   */
  export type petFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pets.
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * pet findFirstOrThrow
   */
  export type petFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pets.
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * pet findMany
   */
  export type petFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pets to fetch.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pets.
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * pet create
   */
  export type petCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * The data needed to create a pet.
     */
    data: XOR<petCreateInput, petUncheckedCreateInput>
  }

  /**
   * pet createMany
   */
  export type petCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pets.
     */
    data: petCreateManyInput | petCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pet createManyAndReturn
   */
  export type petCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * The data used to create many pets.
     */
    data: petCreateManyInput | petCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pet update
   */
  export type petUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * The data needed to update a pet.
     */
    data: XOR<petUpdateInput, petUncheckedUpdateInput>
    /**
     * Choose, which pet to update.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet updateMany
   */
  export type petUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pets.
     */
    data: XOR<petUpdateManyMutationInput, petUncheckedUpdateManyInput>
    /**
     * Filter which pets to update
     */
    where?: petWhereInput
    /**
     * Limit how many pets to update.
     */
    limit?: number
  }

  /**
   * pet updateManyAndReturn
   */
  export type petUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * The data used to update pets.
     */
    data: XOR<petUpdateManyMutationInput, petUncheckedUpdateManyInput>
    /**
     * Filter which pets to update
     */
    where?: petWhereInput
    /**
     * Limit how many pets to update.
     */
    limit?: number
  }

  /**
   * pet upsert
   */
  export type petUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * The filter to search for the pet to update in case it exists.
     */
    where: petWhereUniqueInput
    /**
     * In case the pet found by the `where` argument doesn't exist, create a new pet with this data.
     */
    create: XOR<petCreateInput, petUncheckedCreateInput>
    /**
     * In case the pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<petUpdateInput, petUncheckedUpdateInput>
  }

  /**
   * pet delete
   */
  export type petDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter which pet to delete.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet deleteMany
   */
  export type petDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pets to delete
     */
    where?: petWhereInput
    /**
     * Limit how many pets to delete.
     */
    limit?: number
  }

  /**
   * pet.adoption
   */
  export type pet$adoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    where?: adoptionWhereInput
  }

  /**
   * pet without action
   */
  export type petDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdopterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone'
  };

  export type AdopterScalarFieldEnum = (typeof AdopterScalarFieldEnum)[keyof typeof AdopterScalarFieldEnum]


  export const AdoptionScalarFieldEnum: {
    id: 'id',
    pet_id: 'pet_id',
    adopter_id: 'adopter_id',
    adoption_date: 'adoption_date'
  };

  export type AdoptionScalarFieldEnum = (typeof AdoptionScalarFieldEnum)[keyof typeof AdoptionScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    type: 'type',
    breed: 'breed',
    size: 'size',
    description: 'description',
    available: 'available'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'pet_type'
   */
  export type Enumpet_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pet_type'>
    


  /**
   * Reference to a field of type 'pet_type[]'
   */
  export type ListEnumpet_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pet_type[]'>
    


  /**
   * Reference to a field of type 'pet_size'
   */
  export type Enumpet_sizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pet_size'>
    


  /**
   * Reference to a field of type 'pet_size[]'
   */
  export type ListEnumpet_sizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pet_size[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type adopterWhereInput = {
    AND?: adopterWhereInput | adopterWhereInput[]
    OR?: adopterWhereInput[]
    NOT?: adopterWhereInput | adopterWhereInput[]
    id?: IntFilter<"adopter"> | number
    name?: StringFilter<"adopter"> | string
    email?: StringFilter<"adopter"> | string
    phone?: StringFilter<"adopter"> | string
    adoption?: AdoptionListRelationFilter
  }

  export type adopterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    adoption?: adoptionOrderByRelationAggregateInput
  }

  export type adopterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: adopterWhereInput | adopterWhereInput[]
    OR?: adopterWhereInput[]
    NOT?: adopterWhereInput | adopterWhereInput[]
    name?: StringFilter<"adopter"> | string
    phone?: StringFilter<"adopter"> | string
    adoption?: AdoptionListRelationFilter
  }, "id" | "email">

  export type adopterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    _count?: adopterCountOrderByAggregateInput
    _avg?: adopterAvgOrderByAggregateInput
    _max?: adopterMaxOrderByAggregateInput
    _min?: adopterMinOrderByAggregateInput
    _sum?: adopterSumOrderByAggregateInput
  }

  export type adopterScalarWhereWithAggregatesInput = {
    AND?: adopterScalarWhereWithAggregatesInput | adopterScalarWhereWithAggregatesInput[]
    OR?: adopterScalarWhereWithAggregatesInput[]
    NOT?: adopterScalarWhereWithAggregatesInput | adopterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"adopter"> | number
    name?: StringWithAggregatesFilter<"adopter"> | string
    email?: StringWithAggregatesFilter<"adopter"> | string
    phone?: StringWithAggregatesFilter<"adopter"> | string
  }

  export type adoptionWhereInput = {
    AND?: adoptionWhereInput | adoptionWhereInput[]
    OR?: adoptionWhereInput[]
    NOT?: adoptionWhereInput | adoptionWhereInput[]
    id?: IntFilter<"adoption"> | number
    pet_id?: IntNullableFilter<"adoption"> | number | null
    adopter_id?: IntNullableFilter<"adoption"> | number | null
    adoption_date?: DateTimeFilter<"adoption"> | Date | string
    adopter?: XOR<AdopterNullableScalarRelationFilter, adopterWhereInput> | null
    pet?: XOR<PetNullableScalarRelationFilter, petWhereInput> | null
  }

  export type adoptionOrderByWithRelationInput = {
    id?: SortOrder
    pet_id?: SortOrderInput | SortOrder
    adopter_id?: SortOrderInput | SortOrder
    adoption_date?: SortOrder
    adopter?: adopterOrderByWithRelationInput
    pet?: petOrderByWithRelationInput
  }

  export type adoptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pet_id?: number
    AND?: adoptionWhereInput | adoptionWhereInput[]
    OR?: adoptionWhereInput[]
    NOT?: adoptionWhereInput | adoptionWhereInput[]
    adopter_id?: IntNullableFilter<"adoption"> | number | null
    adoption_date?: DateTimeFilter<"adoption"> | Date | string
    adopter?: XOR<AdopterNullableScalarRelationFilter, adopterWhereInput> | null
    pet?: XOR<PetNullableScalarRelationFilter, petWhereInput> | null
  }, "id" | "pet_id">

  export type adoptionOrderByWithAggregationInput = {
    id?: SortOrder
    pet_id?: SortOrderInput | SortOrder
    adopter_id?: SortOrderInput | SortOrder
    adoption_date?: SortOrder
    _count?: adoptionCountOrderByAggregateInput
    _avg?: adoptionAvgOrderByAggregateInput
    _max?: adoptionMaxOrderByAggregateInput
    _min?: adoptionMinOrderByAggregateInput
    _sum?: adoptionSumOrderByAggregateInput
  }

  export type adoptionScalarWhereWithAggregatesInput = {
    AND?: adoptionScalarWhereWithAggregatesInput | adoptionScalarWhereWithAggregatesInput[]
    OR?: adoptionScalarWhereWithAggregatesInput[]
    NOT?: adoptionScalarWhereWithAggregatesInput | adoptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"adoption"> | number
    pet_id?: IntNullableWithAggregatesFilter<"adoption"> | number | null
    adopter_id?: IntNullableWithAggregatesFilter<"adoption"> | number | null
    adoption_date?: DateTimeWithAggregatesFilter<"adoption"> | Date | string
  }

  export type petWhereInput = {
    AND?: petWhereInput | petWhereInput[]
    OR?: petWhereInput[]
    NOT?: petWhereInput | petWhereInput[]
    id?: IntFilter<"pet"> | number
    name?: StringFilter<"pet"> | string
    age?: IntNullableFilter<"pet"> | number | null
    type?: Enumpet_typeFilter<"pet"> | $Enums.pet_type
    breed?: StringNullableFilter<"pet"> | string | null
    size?: Enumpet_sizeFilter<"pet"> | $Enums.pet_size
    description?: StringNullableFilter<"pet"> | string | null
    available?: BoolNullableFilter<"pet"> | boolean | null
    adoption?: XOR<AdoptionNullableScalarRelationFilter, adoptionWhereInput> | null
  }

  export type petOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    type?: SortOrder
    breed?: SortOrderInput | SortOrder
    size?: SortOrder
    description?: SortOrderInput | SortOrder
    available?: SortOrderInput | SortOrder
    adoption?: adoptionOrderByWithRelationInput
  }

  export type petWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: petWhereInput | petWhereInput[]
    OR?: petWhereInput[]
    NOT?: petWhereInput | petWhereInput[]
    name?: StringFilter<"pet"> | string
    age?: IntNullableFilter<"pet"> | number | null
    type?: Enumpet_typeFilter<"pet"> | $Enums.pet_type
    breed?: StringNullableFilter<"pet"> | string | null
    size?: Enumpet_sizeFilter<"pet"> | $Enums.pet_size
    description?: StringNullableFilter<"pet"> | string | null
    available?: BoolNullableFilter<"pet"> | boolean | null
    adoption?: XOR<AdoptionNullableScalarRelationFilter, adoptionWhereInput> | null
  }, "id">

  export type petOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    type?: SortOrder
    breed?: SortOrderInput | SortOrder
    size?: SortOrder
    description?: SortOrderInput | SortOrder
    available?: SortOrderInput | SortOrder
    _count?: petCountOrderByAggregateInput
    _avg?: petAvgOrderByAggregateInput
    _max?: petMaxOrderByAggregateInput
    _min?: petMinOrderByAggregateInput
    _sum?: petSumOrderByAggregateInput
  }

  export type petScalarWhereWithAggregatesInput = {
    AND?: petScalarWhereWithAggregatesInput | petScalarWhereWithAggregatesInput[]
    OR?: petScalarWhereWithAggregatesInput[]
    NOT?: petScalarWhereWithAggregatesInput | petScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pet"> | number
    name?: StringWithAggregatesFilter<"pet"> | string
    age?: IntNullableWithAggregatesFilter<"pet"> | number | null
    type?: Enumpet_typeWithAggregatesFilter<"pet"> | $Enums.pet_type
    breed?: StringNullableWithAggregatesFilter<"pet"> | string | null
    size?: Enumpet_sizeWithAggregatesFilter<"pet"> | $Enums.pet_size
    description?: StringNullableWithAggregatesFilter<"pet"> | string | null
    available?: BoolNullableWithAggregatesFilter<"pet"> | boolean | null
  }

  export type adopterCreateInput = {
    name: string
    email: string
    phone: string
    adoption?: adoptionCreateNestedManyWithoutAdopterInput
  }

  export type adopterUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    adoption?: adoptionUncheckedCreateNestedManyWithoutAdopterInput
  }

  export type adopterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    adoption?: adoptionUpdateManyWithoutAdopterNestedInput
  }

  export type adopterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    adoption?: adoptionUncheckedUpdateManyWithoutAdopterNestedInput
  }

  export type adopterCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
  }

  export type adopterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type adopterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type adoptionCreateInput = {
    adoption_date: Date | string
    adopter?: adopterCreateNestedOneWithoutAdoptionInput
    pet?: petCreateNestedOneWithoutAdoptionInput
  }

  export type adoptionUncheckedCreateInput = {
    id?: number
    pet_id?: number | null
    adopter_id?: number | null
    adoption_date: Date | string
  }

  export type adoptionUpdateInput = {
    adoption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    adopter?: adopterUpdateOneWithoutAdoptionNestedInput
    pet?: petUpdateOneWithoutAdoptionNestedInput
  }

  export type adoptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: NullableIntFieldUpdateOperationsInput | number | null
    adopter_id?: NullableIntFieldUpdateOperationsInput | number | null
    adoption_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adoptionCreateManyInput = {
    id?: number
    pet_id?: number | null
    adopter_id?: number | null
    adoption_date: Date | string
  }

  export type adoptionUpdateManyMutationInput = {
    adoption_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adoptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: NullableIntFieldUpdateOperationsInput | number | null
    adopter_id?: NullableIntFieldUpdateOperationsInput | number | null
    adoption_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type petCreateInput = {
    name: string
    age?: number | null
    type: $Enums.pet_type
    breed?: string | null
    size: $Enums.pet_size
    description?: string | null
    available?: boolean | null
    adoption?: adoptionCreateNestedOneWithoutPetInput
  }

  export type petUncheckedCreateInput = {
    id?: number
    name: string
    age?: number | null
    type: $Enums.pet_type
    breed?: string | null
    size: $Enums.pet_size
    description?: string | null
    available?: boolean | null
    adoption?: adoptionUncheckedCreateNestedOneWithoutPetInput
  }

  export type petUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpet_typeFieldUpdateOperationsInput | $Enums.pet_type
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    size?: Enumpet_sizeFieldUpdateOperationsInput | $Enums.pet_size
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    adoption?: adoptionUpdateOneWithoutPetNestedInput
  }

  export type petUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpet_typeFieldUpdateOperationsInput | $Enums.pet_type
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    size?: Enumpet_sizeFieldUpdateOperationsInput | $Enums.pet_size
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    adoption?: adoptionUncheckedUpdateOneWithoutPetNestedInput
  }

  export type petCreateManyInput = {
    id?: number
    name: string
    age?: number | null
    type: $Enums.pet_type
    breed?: string | null
    size: $Enums.pet_size
    description?: string | null
    available?: boolean | null
  }

  export type petUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpet_typeFieldUpdateOperationsInput | $Enums.pet_type
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    size?: Enumpet_sizeFieldUpdateOperationsInput | $Enums.pet_size
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type petUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpet_typeFieldUpdateOperationsInput | $Enums.pet_type
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    size?: Enumpet_sizeFieldUpdateOperationsInput | $Enums.pet_size
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AdoptionListRelationFilter = {
    every?: adoptionWhereInput
    some?: adoptionWhereInput
    none?: adoptionWhereInput
  }

  export type adoptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adopterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type adopterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adopterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type adopterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type adopterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdopterNullableScalarRelationFilter = {
    is?: adopterWhereInput | null
    isNot?: adopterWhereInput | null
  }

  export type PetNullableScalarRelationFilter = {
    is?: petWhereInput | null
    isNot?: petWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adoptionCountOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    adopter_id?: SortOrder
    adoption_date?: SortOrder
  }

  export type adoptionAvgOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    adopter_id?: SortOrder
  }

  export type adoptionMaxOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    adopter_id?: SortOrder
    adoption_date?: SortOrder
  }

  export type adoptionMinOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    adopter_id?: SortOrder
    adoption_date?: SortOrder
  }

  export type adoptionSumOrderByAggregateInput = {
    id?: SortOrder
    pet_id?: SortOrder
    adopter_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumpet_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.pet_type | Enumpet_typeFieldRefInput<$PrismaModel>
    in?: $Enums.pet_type[] | ListEnumpet_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.pet_type[] | ListEnumpet_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumpet_typeFilter<$PrismaModel> | $Enums.pet_type
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumpet_sizeFilter<$PrismaModel = never> = {
    equals?: $Enums.pet_size | Enumpet_sizeFieldRefInput<$PrismaModel>
    in?: $Enums.pet_size[] | ListEnumpet_sizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.pet_size[] | ListEnumpet_sizeFieldRefInput<$PrismaModel>
    not?: NestedEnumpet_sizeFilter<$PrismaModel> | $Enums.pet_size
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AdoptionNullableScalarRelationFilter = {
    is?: adoptionWhereInput | null
    isNot?: adoptionWhereInput | null
  }

  export type petCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    type?: SortOrder
    breed?: SortOrder
    size?: SortOrder
    description?: SortOrder
    available?: SortOrder
  }

  export type petAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type petMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    type?: SortOrder
    breed?: SortOrder
    size?: SortOrder
    description?: SortOrder
    available?: SortOrder
  }

  export type petMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    type?: SortOrder
    breed?: SortOrder
    size?: SortOrder
    description?: SortOrder
    available?: SortOrder
  }

  export type petSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type Enumpet_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pet_type | Enumpet_typeFieldRefInput<$PrismaModel>
    in?: $Enums.pet_type[] | ListEnumpet_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.pet_type[] | ListEnumpet_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumpet_typeWithAggregatesFilter<$PrismaModel> | $Enums.pet_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpet_typeFilter<$PrismaModel>
    _max?: NestedEnumpet_typeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumpet_sizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pet_size | Enumpet_sizeFieldRefInput<$PrismaModel>
    in?: $Enums.pet_size[] | ListEnumpet_sizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.pet_size[] | ListEnumpet_sizeFieldRefInput<$PrismaModel>
    not?: NestedEnumpet_sizeWithAggregatesFilter<$PrismaModel> | $Enums.pet_size
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpet_sizeFilter<$PrismaModel>
    _max?: NestedEnumpet_sizeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type adoptionCreateNestedManyWithoutAdopterInput = {
    create?: XOR<adoptionCreateWithoutAdopterInput, adoptionUncheckedCreateWithoutAdopterInput> | adoptionCreateWithoutAdopterInput[] | adoptionUncheckedCreateWithoutAdopterInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutAdopterInput | adoptionCreateOrConnectWithoutAdopterInput[]
    createMany?: adoptionCreateManyAdopterInputEnvelope
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
  }

  export type adoptionUncheckedCreateNestedManyWithoutAdopterInput = {
    create?: XOR<adoptionCreateWithoutAdopterInput, adoptionUncheckedCreateWithoutAdopterInput> | adoptionCreateWithoutAdopterInput[] | adoptionUncheckedCreateWithoutAdopterInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutAdopterInput | adoptionCreateOrConnectWithoutAdopterInput[]
    createMany?: adoptionCreateManyAdopterInputEnvelope
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type adoptionUpdateManyWithoutAdopterNestedInput = {
    create?: XOR<adoptionCreateWithoutAdopterInput, adoptionUncheckedCreateWithoutAdopterInput> | adoptionCreateWithoutAdopterInput[] | adoptionUncheckedCreateWithoutAdopterInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutAdopterInput | adoptionCreateOrConnectWithoutAdopterInput[]
    upsert?: adoptionUpsertWithWhereUniqueWithoutAdopterInput | adoptionUpsertWithWhereUniqueWithoutAdopterInput[]
    createMany?: adoptionCreateManyAdopterInputEnvelope
    set?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    disconnect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    delete?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    update?: adoptionUpdateWithWhereUniqueWithoutAdopterInput | adoptionUpdateWithWhereUniqueWithoutAdopterInput[]
    updateMany?: adoptionUpdateManyWithWhereWithoutAdopterInput | adoptionUpdateManyWithWhereWithoutAdopterInput[]
    deleteMany?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type adoptionUncheckedUpdateManyWithoutAdopterNestedInput = {
    create?: XOR<adoptionCreateWithoutAdopterInput, adoptionUncheckedCreateWithoutAdopterInput> | adoptionCreateWithoutAdopterInput[] | adoptionUncheckedCreateWithoutAdopterInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutAdopterInput | adoptionCreateOrConnectWithoutAdopterInput[]
    upsert?: adoptionUpsertWithWhereUniqueWithoutAdopterInput | adoptionUpsertWithWhereUniqueWithoutAdopterInput[]
    createMany?: adoptionCreateManyAdopterInputEnvelope
    set?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    disconnect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    delete?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    update?: adoptionUpdateWithWhereUniqueWithoutAdopterInput | adoptionUpdateWithWhereUniqueWithoutAdopterInput[]
    updateMany?: adoptionUpdateManyWithWhereWithoutAdopterInput | adoptionUpdateManyWithWhereWithoutAdopterInput[]
    deleteMany?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
  }

  export type adopterCreateNestedOneWithoutAdoptionInput = {
    create?: XOR<adopterCreateWithoutAdoptionInput, adopterUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: adopterCreateOrConnectWithoutAdoptionInput
    connect?: adopterWhereUniqueInput
  }

  export type petCreateNestedOneWithoutAdoptionInput = {
    create?: XOR<petCreateWithoutAdoptionInput, petUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: petCreateOrConnectWithoutAdoptionInput
    connect?: petWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type adopterUpdateOneWithoutAdoptionNestedInput = {
    create?: XOR<adopterCreateWithoutAdoptionInput, adopterUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: adopterCreateOrConnectWithoutAdoptionInput
    upsert?: adopterUpsertWithoutAdoptionInput
    disconnect?: adopterWhereInput | boolean
    delete?: adopterWhereInput | boolean
    connect?: adopterWhereUniqueInput
    update?: XOR<XOR<adopterUpdateToOneWithWhereWithoutAdoptionInput, adopterUpdateWithoutAdoptionInput>, adopterUncheckedUpdateWithoutAdoptionInput>
  }

  export type petUpdateOneWithoutAdoptionNestedInput = {
    create?: XOR<petCreateWithoutAdoptionInput, petUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: petCreateOrConnectWithoutAdoptionInput
    upsert?: petUpsertWithoutAdoptionInput
    disconnect?: petWhereInput | boolean
    delete?: petWhereInput | boolean
    connect?: petWhereUniqueInput
    update?: XOR<XOR<petUpdateToOneWithWhereWithoutAdoptionInput, petUpdateWithoutAdoptionInput>, petUncheckedUpdateWithoutAdoptionInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type adoptionCreateNestedOneWithoutPetInput = {
    create?: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput>
    connectOrCreate?: adoptionCreateOrConnectWithoutPetInput
    connect?: adoptionWhereUniqueInput
  }

  export type adoptionUncheckedCreateNestedOneWithoutPetInput = {
    create?: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput>
    connectOrCreate?: adoptionCreateOrConnectWithoutPetInput
    connect?: adoptionWhereUniqueInput
  }

  export type Enumpet_typeFieldUpdateOperationsInput = {
    set?: $Enums.pet_type
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumpet_sizeFieldUpdateOperationsInput = {
    set?: $Enums.pet_size
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type adoptionUpdateOneWithoutPetNestedInput = {
    create?: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput>
    connectOrCreate?: adoptionCreateOrConnectWithoutPetInput
    upsert?: adoptionUpsertWithoutPetInput
    disconnect?: adoptionWhereInput | boolean
    delete?: adoptionWhereInput | boolean
    connect?: adoptionWhereUniqueInput
    update?: XOR<XOR<adoptionUpdateToOneWithWhereWithoutPetInput, adoptionUpdateWithoutPetInput>, adoptionUncheckedUpdateWithoutPetInput>
  }

  export type adoptionUncheckedUpdateOneWithoutPetNestedInput = {
    create?: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput>
    connectOrCreate?: adoptionCreateOrConnectWithoutPetInput
    upsert?: adoptionUpsertWithoutPetInput
    disconnect?: adoptionWhereInput | boolean
    delete?: adoptionWhereInput | boolean
    connect?: adoptionWhereUniqueInput
    update?: XOR<XOR<adoptionUpdateToOneWithWhereWithoutPetInput, adoptionUpdateWithoutPetInput>, adoptionUncheckedUpdateWithoutPetInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumpet_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.pet_type | Enumpet_typeFieldRefInput<$PrismaModel>
    in?: $Enums.pet_type[] | ListEnumpet_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.pet_type[] | ListEnumpet_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumpet_typeFilter<$PrismaModel> | $Enums.pet_type
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumpet_sizeFilter<$PrismaModel = never> = {
    equals?: $Enums.pet_size | Enumpet_sizeFieldRefInput<$PrismaModel>
    in?: $Enums.pet_size[] | ListEnumpet_sizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.pet_size[] | ListEnumpet_sizeFieldRefInput<$PrismaModel>
    not?: NestedEnumpet_sizeFilter<$PrismaModel> | $Enums.pet_size
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumpet_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pet_type | Enumpet_typeFieldRefInput<$PrismaModel>
    in?: $Enums.pet_type[] | ListEnumpet_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.pet_type[] | ListEnumpet_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumpet_typeWithAggregatesFilter<$PrismaModel> | $Enums.pet_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpet_typeFilter<$PrismaModel>
    _max?: NestedEnumpet_typeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumpet_sizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pet_size | Enumpet_sizeFieldRefInput<$PrismaModel>
    in?: $Enums.pet_size[] | ListEnumpet_sizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.pet_size[] | ListEnumpet_sizeFieldRefInput<$PrismaModel>
    not?: NestedEnumpet_sizeWithAggregatesFilter<$PrismaModel> | $Enums.pet_size
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpet_sizeFilter<$PrismaModel>
    _max?: NestedEnumpet_sizeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type adoptionCreateWithoutAdopterInput = {
    adoption_date: Date | string
    pet?: petCreateNestedOneWithoutAdoptionInput
  }

  export type adoptionUncheckedCreateWithoutAdopterInput = {
    id?: number
    pet_id?: number | null
    adoption_date: Date | string
  }

  export type adoptionCreateOrConnectWithoutAdopterInput = {
    where: adoptionWhereUniqueInput
    create: XOR<adoptionCreateWithoutAdopterInput, adoptionUncheckedCreateWithoutAdopterInput>
  }

  export type adoptionCreateManyAdopterInputEnvelope = {
    data: adoptionCreateManyAdopterInput | adoptionCreateManyAdopterInput[]
    skipDuplicates?: boolean
  }

  export type adoptionUpsertWithWhereUniqueWithoutAdopterInput = {
    where: adoptionWhereUniqueInput
    update: XOR<adoptionUpdateWithoutAdopterInput, adoptionUncheckedUpdateWithoutAdopterInput>
    create: XOR<adoptionCreateWithoutAdopterInput, adoptionUncheckedCreateWithoutAdopterInput>
  }

  export type adoptionUpdateWithWhereUniqueWithoutAdopterInput = {
    where: adoptionWhereUniqueInput
    data: XOR<adoptionUpdateWithoutAdopterInput, adoptionUncheckedUpdateWithoutAdopterInput>
  }

  export type adoptionUpdateManyWithWhereWithoutAdopterInput = {
    where: adoptionScalarWhereInput
    data: XOR<adoptionUpdateManyMutationInput, adoptionUncheckedUpdateManyWithoutAdopterInput>
  }

  export type adoptionScalarWhereInput = {
    AND?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
    OR?: adoptionScalarWhereInput[]
    NOT?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
    id?: IntFilter<"adoption"> | number
    pet_id?: IntNullableFilter<"adoption"> | number | null
    adopter_id?: IntNullableFilter<"adoption"> | number | null
    adoption_date?: DateTimeFilter<"adoption"> | Date | string
  }

  export type adopterCreateWithoutAdoptionInput = {
    name: string
    email: string
    phone: string
  }

  export type adopterUncheckedCreateWithoutAdoptionInput = {
    id?: number
    name: string
    email: string
    phone: string
  }

  export type adopterCreateOrConnectWithoutAdoptionInput = {
    where: adopterWhereUniqueInput
    create: XOR<adopterCreateWithoutAdoptionInput, adopterUncheckedCreateWithoutAdoptionInput>
  }

  export type petCreateWithoutAdoptionInput = {
    name: string
    age?: number | null
    type: $Enums.pet_type
    breed?: string | null
    size: $Enums.pet_size
    description?: string | null
    available?: boolean | null
  }

  export type petUncheckedCreateWithoutAdoptionInput = {
    id?: number
    name: string
    age?: number | null
    type: $Enums.pet_type
    breed?: string | null
    size: $Enums.pet_size
    description?: string | null
    available?: boolean | null
  }

  export type petCreateOrConnectWithoutAdoptionInput = {
    where: petWhereUniqueInput
    create: XOR<petCreateWithoutAdoptionInput, petUncheckedCreateWithoutAdoptionInput>
  }

  export type adopterUpsertWithoutAdoptionInput = {
    update: XOR<adopterUpdateWithoutAdoptionInput, adopterUncheckedUpdateWithoutAdoptionInput>
    create: XOR<adopterCreateWithoutAdoptionInput, adopterUncheckedCreateWithoutAdoptionInput>
    where?: adopterWhereInput
  }

  export type adopterUpdateToOneWithWhereWithoutAdoptionInput = {
    where?: adopterWhereInput
    data: XOR<adopterUpdateWithoutAdoptionInput, adopterUncheckedUpdateWithoutAdoptionInput>
  }

  export type adopterUpdateWithoutAdoptionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type adopterUncheckedUpdateWithoutAdoptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type petUpsertWithoutAdoptionInput = {
    update: XOR<petUpdateWithoutAdoptionInput, petUncheckedUpdateWithoutAdoptionInput>
    create: XOR<petCreateWithoutAdoptionInput, petUncheckedCreateWithoutAdoptionInput>
    where?: petWhereInput
  }

  export type petUpdateToOneWithWhereWithoutAdoptionInput = {
    where?: petWhereInput
    data: XOR<petUpdateWithoutAdoptionInput, petUncheckedUpdateWithoutAdoptionInput>
  }

  export type petUpdateWithoutAdoptionInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpet_typeFieldUpdateOperationsInput | $Enums.pet_type
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    size?: Enumpet_sizeFieldUpdateOperationsInput | $Enums.pet_size
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type petUncheckedUpdateWithoutAdoptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumpet_typeFieldUpdateOperationsInput | $Enums.pet_type
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    size?: Enumpet_sizeFieldUpdateOperationsInput | $Enums.pet_size
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type adoptionCreateWithoutPetInput = {
    adoption_date: Date | string
    adopter?: adopterCreateNestedOneWithoutAdoptionInput
  }

  export type adoptionUncheckedCreateWithoutPetInput = {
    id?: number
    adopter_id?: number | null
    adoption_date: Date | string
  }

  export type adoptionCreateOrConnectWithoutPetInput = {
    where: adoptionWhereUniqueInput
    create: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput>
  }

  export type adoptionUpsertWithoutPetInput = {
    update: XOR<adoptionUpdateWithoutPetInput, adoptionUncheckedUpdateWithoutPetInput>
    create: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput>
    where?: adoptionWhereInput
  }

  export type adoptionUpdateToOneWithWhereWithoutPetInput = {
    where?: adoptionWhereInput
    data: XOR<adoptionUpdateWithoutPetInput, adoptionUncheckedUpdateWithoutPetInput>
  }

  export type adoptionUpdateWithoutPetInput = {
    adoption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    adopter?: adopterUpdateOneWithoutAdoptionNestedInput
  }

  export type adoptionUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    adopter_id?: NullableIntFieldUpdateOperationsInput | number | null
    adoption_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adoptionCreateManyAdopterInput = {
    id?: number
    pet_id?: number | null
    adoption_date: Date | string
  }

  export type adoptionUpdateWithoutAdopterInput = {
    adoption_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: petUpdateOneWithoutAdoptionNestedInput
  }

  export type adoptionUncheckedUpdateWithoutAdopterInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: NullableIntFieldUpdateOperationsInput | number | null
    adoption_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adoptionUncheckedUpdateManyWithoutAdopterInput = {
    id?: IntFieldUpdateOperationsInput | number
    pet_id?: NullableIntFieldUpdateOperationsInput | number | null
    adoption_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}