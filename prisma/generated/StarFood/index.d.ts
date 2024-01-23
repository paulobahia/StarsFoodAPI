
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Restaurants
 * 
 */
export type Restaurants = $Result.DefaultSelection<Prisma.$RestaurantsPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Variations
 * 
 */
export type Variations = $Result.DefaultSelection<Prisma.$VariationsPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model ProductOrder
 * 
 */
export type ProductOrder = $Result.DefaultSelection<Prisma.$ProductOrderPayload>
/**
 * Model ProductImages
 * 
 */
export type ProductImages = $Result.DefaultSelection<Prisma.$ProductImagesPayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  WAITING: 'WAITING',
  IN_PRODUCTION: 'IN_PRODUCTION',
  DONE: 'DONE',
  COMPLETED: 'COMPLETED',
  PAID_OUT: 'PAID_OUT'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Restaurants
 * const restaurants = await prisma.restaurants.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurants.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.restaurants`: Exposes CRUD operations for the **Restaurants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurants.findMany()
    * ```
    */
  get restaurants(): Prisma.RestaurantsDelegate<ExtArgs>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs>;

  /**
   * `prisma.variations`: Exposes CRUD operations for the **Variations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variations
    * const variations = await prisma.variations.findMany()
    * ```
    */
  get variations(): Prisma.VariationsDelegate<ExtArgs>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.productOrder`: Exposes CRUD operations for the **ProductOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductOrders
    * const productOrders = await prisma.productOrder.findMany()
    * ```
    */
  get productOrder(): Prisma.ProductOrderDelegate<ExtArgs>;

  /**
   * `prisma.productImages`: Exposes CRUD operations for the **ProductImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImages.findMany()
    * ```
    */
  get productImages(): Prisma.ProductImagesDelegate<ExtArgs>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Restaurants: 'Restaurants',
    Products: 'Products',
    Variations: 'Variations',
    Categories: 'Categories',
    Order: 'Order',
    ProductOrder: 'ProductOrder',
    ProductImages: 'ProductImages',
    Table: 'Table',
    Payments: 'Payments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'restaurants' | 'products' | 'variations' | 'categories' | 'order' | 'productOrder' | 'productImages' | 'table' | 'payments'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Restaurants: {
        payload: Prisma.$RestaurantsPayload<ExtArgs>
        fields: Prisma.RestaurantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          findFirst: {
            args: Prisma.RestaurantsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          findMany: {
            args: Prisma.RestaurantsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>[]
          }
          create: {
            args: Prisma.RestaurantsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          createMany: {
            args: Prisma.RestaurantsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RestaurantsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          update: {
            args: Prisma.RestaurantsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RestaurantsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          aggregate: {
            args: Prisma.RestaurantsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRestaurants>
          }
          groupBy: {
            args: Prisma.RestaurantsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RestaurantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantsCountArgs<ExtArgs>,
            result: $Utils.Optional<RestaurantsCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Variations: {
        payload: Prisma.$VariationsPayload<ExtArgs>
        fields: Prisma.VariationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          findFirst: {
            args: Prisma.VariationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          findMany: {
            args: Prisma.VariationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>[]
          }
          create: {
            args: Prisma.VariationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          createMany: {
            args: Prisma.VariationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VariationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          update: {
            args: Prisma.VariationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          deleteMany: {
            args: Prisma.VariationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VariationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VariationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VariationsPayload>
          }
          aggregate: {
            args: Prisma.VariationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVariations>
          }
          groupBy: {
            args: Prisma.VariationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VariationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariationsCountArgs<ExtArgs>,
            result: $Utils.Optional<VariationsCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      ProductOrder: {
        payload: Prisma.$ProductOrderPayload<ExtArgs>
        fields: Prisma.ProductOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductOrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductOrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          findFirst: {
            args: Prisma.ProductOrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductOrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          findMany: {
            args: Prisma.ProductOrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>[]
          }
          create: {
            args: Prisma.ProductOrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          createMany: {
            args: Prisma.ProductOrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductOrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          update: {
            args: Prisma.ProductOrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          deleteMany: {
            args: Prisma.ProductOrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductOrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductOrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductOrderPayload>
          }
          aggregate: {
            args: Prisma.ProductOrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductOrder>
          }
          groupBy: {
            args: Prisma.ProductOrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductOrderCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductOrderCountAggregateOutputType> | number
          }
        }
      }
      ProductImages: {
        payload: Prisma.$ProductImagesPayload<ExtArgs>
        fields: Prisma.ProductImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImagesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImagesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          findFirst: {
            args: Prisma.ProductImagesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImagesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          findMany: {
            args: Prisma.ProductImagesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>[]
          }
          create: {
            args: Prisma.ProductImagesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          createMany: {
            args: Prisma.ProductImagesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductImagesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          update: {
            args: Prisma.ProductImagesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          deleteMany: {
            args: Prisma.ProductImagesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImagesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductImagesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          aggregate: {
            args: Prisma.ProductImagesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductImages>
          }
          groupBy: {
            args: Prisma.ProductImagesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImagesCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductImagesCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>,
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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
   * Count Type RestaurantsCountOutputType
   */

  export type RestaurantsCountOutputType = {
    Categories: number
    Order: number
    ProductImages: number
    Products: number
    Table: number
    Variations: number
  }

  export type RestaurantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categories?: boolean | RestaurantsCountOutputTypeCountCategoriesArgs
    Order?: boolean | RestaurantsCountOutputTypeCountOrderArgs
    ProductImages?: boolean | RestaurantsCountOutputTypeCountProductImagesArgs
    Products?: boolean | RestaurantsCountOutputTypeCountProductsArgs
    Table?: boolean | RestaurantsCountOutputTypeCountTableArgs
    Variations?: boolean | RestaurantsCountOutputTypeCountVariationsArgs
  }

  // Custom InputTypes

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantsCountOutputType
     */
    select?: RestaurantsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
  }


  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountProductImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImagesWhereInput
  }


  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountTableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }


  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountVariationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationsWhereInput
  }



  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    ProductImages: number
    Variations: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductImages?: boolean | ProductsCountOutputTypeCountProductImagesArgs
    Variations?: boolean | ProductsCountOutputTypeCountVariationsArgs
  }

  // Custom InputTypes

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProductImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImagesWhereInput
  }


  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountVariationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationsWhereInput
  }



  /**
   * Count Type VariationsCountOutputType
   */

  export type VariationsCountOutputType = {
    OrderProduct: number
  }

  export type VariationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderProduct?: boolean | VariationsCountOutputTypeCountOrderProductArgs
  }

  // Custom InputTypes

  /**
   * VariationsCountOutputType without action
   */
  export type VariationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationsCountOutputType
     */
    select?: VariationsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VariationsCountOutputType without action
   */
  export type VariationsCountOutputTypeCountOrderProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOrderWhereInput
  }



  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    Products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }



  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    Payments: number
    OrderProducts: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payments?: boolean | OrderCountOutputTypeCountPaymentsArgs
    OrderProducts?: boolean | OrderCountOutputTypeCountOrderProductsArgs
  }

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOrderWhereInput
  }



  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    Order: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | TableCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Restaurants
   */

  export type AggregateRestaurants = {
    _count: RestaurantsCountAggregateOutputType | null
    _avg: RestaurantsAvgAggregateOutputType | null
    _sum: RestaurantsSumAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  export type RestaurantsAvgAggregateOutputType = {
    Id: number | null
    RestaurantId: number | null
  }

  export type RestaurantsSumAggregateOutputType = {
    Id: number | null
    RestaurantId: number | null
  }

  export type RestaurantsMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    RestaurantId: number | null
    Active: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
  }

  export type RestaurantsMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    RestaurantId: number | null
    Active: boolean | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
  }

  export type RestaurantsCountAggregateOutputType = {
    Id: number
    Name: number
    RestaurantId: number
    Active: number
    CreatedAt: number
    UpdatedAt: number
    DeletedAt: number
    _all: number
  }


  export type RestaurantsAvgAggregateInputType = {
    Id?: true
    RestaurantId?: true
  }

  export type RestaurantsSumAggregateInputType = {
    Id?: true
    RestaurantId?: true
  }

  export type RestaurantsMinAggregateInputType = {
    Id?: true
    Name?: true
    RestaurantId?: true
    Active?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
  }

  export type RestaurantsMaxAggregateInputType = {
    Id?: true
    Name?: true
    RestaurantId?: true
    Active?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
  }

  export type RestaurantsCountAggregateInputType = {
    Id?: true
    Name?: true
    RestaurantId?: true
    Active?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    _all?: true
  }

  export type RestaurantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to aggregate.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantsMaxAggregateInputType
  }

  export type GetRestaurantsAggregateType<T extends RestaurantsAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurants[P]>
      : GetScalarType<T[P], AggregateRestaurants[P]>
  }




  export type RestaurantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantsWhereInput
    orderBy?: RestaurantsOrderByWithAggregationInput | RestaurantsOrderByWithAggregationInput[]
    by: RestaurantsScalarFieldEnum[] | RestaurantsScalarFieldEnum
    having?: RestaurantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantsCountAggregateInputType | true
    _avg?: RestaurantsAvgAggregateInputType
    _sum?: RestaurantsSumAggregateInputType
    _min?: RestaurantsMinAggregateInputType
    _max?: RestaurantsMaxAggregateInputType
  }

  export type RestaurantsGroupByOutputType = {
    Id: number
    Name: string
    RestaurantId: number
    Active: boolean
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: Date | null
    _count: RestaurantsCountAggregateOutputType | null
    _avg: RestaurantsAvgAggregateOutputType | null
    _sum: RestaurantsSumAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  type GetRestaurantsGroupByPayload<T extends RestaurantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    RestaurantId?: boolean
    Active?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    Categories?: boolean | Restaurants$CategoriesArgs<ExtArgs>
    Order?: boolean | Restaurants$OrderArgs<ExtArgs>
    ProductImages?: boolean | Restaurants$ProductImagesArgs<ExtArgs>
    Products?: boolean | Restaurants$ProductsArgs<ExtArgs>
    Table?: boolean | Restaurants$TableArgs<ExtArgs>
    Variations?: boolean | Restaurants$VariationsArgs<ExtArgs>
    _count?: boolean | RestaurantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurants"]>

  export type RestaurantsSelectScalar = {
    Id?: boolean
    Name?: boolean
    RestaurantId?: boolean
    Active?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
  }

  export type RestaurantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categories?: boolean | Restaurants$CategoriesArgs<ExtArgs>
    Order?: boolean | Restaurants$OrderArgs<ExtArgs>
    ProductImages?: boolean | Restaurants$ProductImagesArgs<ExtArgs>
    Products?: boolean | Restaurants$ProductsArgs<ExtArgs>
    Table?: boolean | Restaurants$TableArgs<ExtArgs>
    Variations?: boolean | Restaurants$VariationsArgs<ExtArgs>
    _count?: boolean | RestaurantsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RestaurantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurants"
    objects: {
      Categories: Prisma.$CategoriesPayload<ExtArgs>[]
      Order: Prisma.$OrderPayload<ExtArgs>[]
      ProductImages: Prisma.$ProductImagesPayload<ExtArgs>[]
      Products: Prisma.$ProductsPayload<ExtArgs>[]
      Table: Prisma.$TablePayload<ExtArgs>[]
      Variations: Prisma.$VariationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      RestaurantId: number
      Active: boolean
      CreatedAt: Date
      UpdatedAt: Date
      DeletedAt: Date | null
    }, ExtArgs["result"]["restaurants"]>
    composites: {}
  }


  type RestaurantsGetPayload<S extends boolean | null | undefined | RestaurantsDefaultArgs> = $Result.GetResult<Prisma.$RestaurantsPayload, S>

  type RestaurantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RestaurantsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RestaurantsCountAggregateInputType | true
    }

  export interface RestaurantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurants'], meta: { name: 'Restaurants' } }
    /**
     * Find zero or one Restaurants that matches the filter.
     * @param {RestaurantsFindUniqueArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RestaurantsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantsFindUniqueArgs<ExtArgs>>
    ): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Restaurants that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RestaurantsFindUniqueOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RestaurantsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsFindFirstArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RestaurantsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantsFindFirstArgs<ExtArgs>>
    ): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Restaurants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsFindFirstOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RestaurantsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurants.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurants.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const restaurantsWithIdOnly = await prisma.restaurants.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends RestaurantsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Restaurants.
     * @param {RestaurantsCreateArgs} args - Arguments to create a Restaurants.
     * @example
     * // Create one Restaurants
     * const Restaurants = await prisma.restaurants.create({
     *   data: {
     *     // ... data to create a Restaurants
     *   }
     * })
     * 
    **/
    create<T extends RestaurantsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantsCreateArgs<ExtArgs>>
    ): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Restaurants.
     *     @param {RestaurantsCreateManyArgs} args - Arguments to create many Restaurants.
     *     @example
     *     // Create many Restaurants
     *     const restaurants = await prisma.restaurants.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RestaurantsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurants.
     * @param {RestaurantsDeleteArgs} args - Arguments to delete one Restaurants.
     * @example
     * // Delete one Restaurants
     * const Restaurants = await prisma.restaurants.delete({
     *   where: {
     *     // ... filter to delete one Restaurants
     *   }
     * })
     * 
    **/
    delete<T extends RestaurantsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantsDeleteArgs<ExtArgs>>
    ): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Restaurants.
     * @param {RestaurantsUpdateArgs} args - Arguments to update one Restaurants.
     * @example
     * // Update one Restaurants
     * const restaurants = await prisma.restaurants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RestaurantsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantsUpdateArgs<ExtArgs>>
    ): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantsDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RestaurantsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurants = await prisma.restaurants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RestaurantsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurants.
     * @param {RestaurantsUpsertArgs} args - Arguments to update or create a Restaurants.
     * @example
     * // Update or create a Restaurants
     * const restaurants = await prisma.restaurants.upsert({
     *   create: {
     *     // ... data to create a Restaurants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurants we want to update
     *   }
     * })
    **/
    upsert<T extends RestaurantsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantsUpsertArgs<ExtArgs>>
    ): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurants.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantsCountArgs>(
      args?: Subset<T, RestaurantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantsAggregateArgs>(args: Subset<T, RestaurantsAggregateArgs>): Prisma.PrismaPromise<GetRestaurantsAggregateType<T>>

    /**
     * Group by Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsGroupByArgs} args - Group by arguments.
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
      T extends RestaurantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantsGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurants model
   */
  readonly fields: RestaurantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Categories<T extends Restaurants$CategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurants$CategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findMany'> | Null>;

    Order<T extends Restaurants$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Restaurants$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    ProductImages<T extends Restaurants$ProductImagesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurants$ProductImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, 'findMany'> | Null>;

    Products<T extends Restaurants$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurants$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Table<T extends Restaurants$TableArgs<ExtArgs> = {}>(args?: Subset<T, Restaurants$TableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findMany'> | Null>;

    Variations<T extends Restaurants$VariationsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurants$VariationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Restaurants model
   */ 
  interface RestaurantsFieldRefs {
    readonly Id: FieldRef<"Restaurants", 'Int'>
    readonly Name: FieldRef<"Restaurants", 'String'>
    readonly RestaurantId: FieldRef<"Restaurants", 'Int'>
    readonly Active: FieldRef<"Restaurants", 'Boolean'>
    readonly CreatedAt: FieldRef<"Restaurants", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Restaurants", 'DateTime'>
    readonly DeletedAt: FieldRef<"Restaurants", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Restaurants findUnique
   */
  export type RestaurantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where: RestaurantsWhereUniqueInput
  }


  /**
   * Restaurants findUniqueOrThrow
   */
  export type RestaurantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where: RestaurantsWhereUniqueInput
  }


  /**
   * Restaurants findFirst
   */
  export type RestaurantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }


  /**
   * Restaurants findFirstOrThrow
   */
  export type RestaurantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }


  /**
   * Restaurants findMany
   */
  export type RestaurantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }


  /**
   * Restaurants create
   */
  export type RestaurantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurants.
     */
    data: XOR<RestaurantsCreateInput, RestaurantsUncheckedCreateInput>
  }


  /**
   * Restaurants createMany
   */
  export type RestaurantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantsCreateManyInput | RestaurantsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Restaurants update
   */
  export type RestaurantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurants.
     */
    data: XOR<RestaurantsUpdateInput, RestaurantsUncheckedUpdateInput>
    /**
     * Choose, which Restaurants to update.
     */
    where: RestaurantsWhereUniqueInput
  }


  /**
   * Restaurants updateMany
   */
  export type RestaurantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantsUpdateManyMutationInput, RestaurantsUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantsWhereInput
  }


  /**
   * Restaurants upsert
   */
  export type RestaurantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurants to update in case it exists.
     */
    where: RestaurantsWhereUniqueInput
    /**
     * In case the Restaurants found by the `where` argument doesn't exist, create a new Restaurants with this data.
     */
    create: XOR<RestaurantsCreateInput, RestaurantsUncheckedCreateInput>
    /**
     * In case the Restaurants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantsUpdateInput, RestaurantsUncheckedUpdateInput>
  }


  /**
   * Restaurants delete
   */
  export type RestaurantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter which Restaurants to delete.
     */
    where: RestaurantsWhereUniqueInput
  }


  /**
   * Restaurants deleteMany
   */
  export type RestaurantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantsWhereInput
  }


  /**
   * Restaurants.Categories
   */
  export type Restaurants$CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    cursor?: CategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Restaurants.Order
   */
  export type Restaurants$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Restaurants.ProductImages
   */
  export type Restaurants$ProductImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
    where?: ProductImagesWhereInput
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    cursor?: ProductImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }


  /**
   * Restaurants.Products
   */
  export type Restaurants$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * Restaurants.Table
   */
  export type Restaurants$TableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Restaurants.Variations
   */
  export type Restaurants$VariationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
    where?: VariationsWhereInput
    orderBy?: VariationsOrderByWithRelationInput | VariationsOrderByWithRelationInput[]
    cursor?: VariationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariationsScalarFieldEnum | VariationsScalarFieldEnum[]
  }


  /**
   * Restaurants without action
   */
  export type RestaurantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantsInclude<ExtArgs> | null
  }



  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    Id: number | null
    RestaurantId: number | null
    CategoryId: number | null
  }

  export type ProductsSumAggregateOutputType = {
    Id: number | null
    RestaurantId: number | null
    CategoryId: number | null
  }

  export type ProductsMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    Description: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    RestaurantId: number | null
    CategoryId: number | null
    Status: boolean | null
    Active: boolean | null
  }

  export type ProductsMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    Description: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    RestaurantId: number | null
    CategoryId: number | null
    Status: boolean | null
    Active: boolean | null
  }

  export type ProductsCountAggregateOutputType = {
    Id: number
    Name: number
    Description: number
    ImgUrl: number
    CreatedAt: number
    UpdatedAt: number
    DeletedAt: number
    RestaurantId: number
    CategoryId: number
    Status: number
    Active: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    Id?: true
    RestaurantId?: true
    CategoryId?: true
  }

  export type ProductsSumAggregateInputType = {
    Id?: true
    RestaurantId?: true
    CategoryId?: true
  }

  export type ProductsMinAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    RestaurantId?: true
    CategoryId?: true
    Status?: true
    Active?: true
  }

  export type ProductsMaxAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    RestaurantId?: true
    CategoryId?: true
    Status?: true
    Active?: true
  }

  export type ProductsCountAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    ImgUrl?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    RestaurantId?: true
    CategoryId?: true
    Status?: true
    Active?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    Id: number
    Name: string
    Description: string
    ImgUrl: JsonValue
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: Date | null
    RestaurantId: number
    CategoryId: number
    Status: boolean
    Active: boolean
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Description?: boolean
    ImgUrl?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    RestaurantId?: boolean
    CategoryId?: boolean
    Status?: boolean
    Active?: boolean
    ProductImages?: boolean | Products$ProductImagesArgs<ExtArgs>
    Categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    Variations?: boolean | Products$VariationsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    Id?: boolean
    Name?: boolean
    Description?: boolean
    ImgUrl?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    RestaurantId?: boolean
    CategoryId?: boolean
    Status?: boolean
    Active?: boolean
  }

  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductImages?: boolean | Products$ProductImagesArgs<ExtArgs>
    Categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    Variations?: boolean | Products$VariationsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      ProductImages: Prisma.$ProductImagesPayload<ExtArgs>[]
      Categories: Prisma.$CategoriesPayload<ExtArgs>
      Restaurant: Prisma.$RestaurantsPayload<ExtArgs>
      Variations: Prisma.$VariationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      Description: string
      ImgUrl: Prisma.JsonValue
      CreatedAt: Date
      UpdatedAt: Date
      DeletedAt: Date | null
      RestaurantId: number
      CategoryId: number
      Status: boolean
      Active: boolean
    }, ExtArgs["result"]["products"]>
    composites: {}
  }


  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Products that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends ProductsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends ProductsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends ProductsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends ProductsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ProductImages<T extends Products$ProductImagesArgs<ExtArgs> = {}>(args?: Subset<T, Products$ProductImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, 'findMany'> | Null>;

    Categories<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Restaurant<T extends RestaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantsDefaultArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Variations<T extends Products$VariationsArgs<ExtArgs> = {}>(args?: Subset<T, Products$VariationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Products model
   */ 
  interface ProductsFieldRefs {
    readonly Id: FieldRef<"Products", 'Int'>
    readonly Name: FieldRef<"Products", 'String'>
    readonly Description: FieldRef<"Products", 'String'>
    readonly ImgUrl: FieldRef<"Products", 'Json'>
    readonly CreatedAt: FieldRef<"Products", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Products", 'DateTime'>
    readonly DeletedAt: FieldRef<"Products", 'DateTime'>
    readonly RestaurantId: FieldRef<"Products", 'Int'>
    readonly CategoryId: FieldRef<"Products", 'Int'>
    readonly Status: FieldRef<"Products", 'Boolean'>
    readonly Active: FieldRef<"Products", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }


  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }


  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }


  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }


  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
  }


  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }


  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }


  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
  }


  /**
   * Products.ProductImages
   */
  export type Products$ProductImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
    where?: ProductImagesWhereInput
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    cursor?: ProductImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }


  /**
   * Products.Variations
   */
  export type Products$VariationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
    where?: VariationsWhereInput
    orderBy?: VariationsOrderByWithRelationInput | VariationsOrderByWithRelationInput[]
    cursor?: VariationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariationsScalarFieldEnum | VariationsScalarFieldEnum[]
  }


  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
  }



  /**
   * Model Variations
   */

  export type AggregateVariations = {
    _count: VariationsCountAggregateOutputType | null
    _avg: VariationsAvgAggregateOutputType | null
    _sum: VariationsSumAggregateOutputType | null
    _min: VariationsMinAggregateOutputType | null
    _max: VariationsMaxAggregateOutputType | null
  }

  export type VariationsAvgAggregateOutputType = {
    Id: number | null
    ProductId: number | null
    RestaurantId: number | null
  }

  export type VariationsSumAggregateOutputType = {
    Id: number | null
    ProductId: number | null
    RestaurantId: number | null
  }

  export type VariationsMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    Value: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    ProductId: number | null
    RestaurantId: number | null
    Active: boolean | null
  }

  export type VariationsMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    Value: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    ProductId: number | null
    RestaurantId: number | null
    Active: boolean | null
  }

  export type VariationsCountAggregateOutputType = {
    Id: number
    Name: number
    Value: number
    CreatedAt: number
    UpdatedAt: number
    DeletedAt: number
    ProductId: number
    RestaurantId: number
    Active: number
    _all: number
  }


  export type VariationsAvgAggregateInputType = {
    Id?: true
    ProductId?: true
    RestaurantId?: true
  }

  export type VariationsSumAggregateInputType = {
    Id?: true
    ProductId?: true
    RestaurantId?: true
  }

  export type VariationsMinAggregateInputType = {
    Id?: true
    Name?: true
    Value?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    ProductId?: true
    RestaurantId?: true
    Active?: true
  }

  export type VariationsMaxAggregateInputType = {
    Id?: true
    Name?: true
    Value?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    ProductId?: true
    RestaurantId?: true
    Active?: true
  }

  export type VariationsCountAggregateInputType = {
    Id?: true
    Name?: true
    Value?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    ProductId?: true
    RestaurantId?: true
    Active?: true
    _all?: true
  }

  export type VariationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variations to aggregate.
     */
    where?: VariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationsOrderByWithRelationInput | VariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variations
    **/
    _count?: true | VariationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariationsMaxAggregateInputType
  }

  export type GetVariationsAggregateType<T extends VariationsAggregateArgs> = {
        [P in keyof T & keyof AggregateVariations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariations[P]>
      : GetScalarType<T[P], AggregateVariations[P]>
  }




  export type VariationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationsWhereInput
    orderBy?: VariationsOrderByWithAggregationInput | VariationsOrderByWithAggregationInput[]
    by: VariationsScalarFieldEnum[] | VariationsScalarFieldEnum
    having?: VariationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariationsCountAggregateInputType | true
    _avg?: VariationsAvgAggregateInputType
    _sum?: VariationsSumAggregateInputType
    _min?: VariationsMinAggregateInputType
    _max?: VariationsMaxAggregateInputType
  }

  export type VariationsGroupByOutputType = {
    Id: number
    Name: string
    Value: string
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: Date | null
    ProductId: number
    RestaurantId: number
    Active: boolean
    _count: VariationsCountAggregateOutputType | null
    _avg: VariationsAvgAggregateOutputType | null
    _sum: VariationsSumAggregateOutputType | null
    _min: VariationsMinAggregateOutputType | null
    _max: VariationsMaxAggregateOutputType | null
  }

  type GetVariationsGroupByPayload<T extends VariationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariationsGroupByOutputType[P]>
            : GetScalarType<T[P], VariationsGroupByOutputType[P]>
        }
      >
    >


  export type VariationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Value?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    ProductId?: boolean
    RestaurantId?: boolean
    Active?: boolean
    OrderProduct?: boolean | Variations$OrderProductArgs<ExtArgs>
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    _count?: boolean | VariationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variations"]>

  export type VariationsSelectScalar = {
    Id?: boolean
    Name?: boolean
    Value?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    ProductId?: boolean
    RestaurantId?: boolean
    Active?: boolean
  }

  export type VariationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderProduct?: boolean | Variations$OrderProductArgs<ExtArgs>
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    _count?: boolean | VariationsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VariationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variations"
    objects: {
      OrderProduct: Prisma.$ProductOrderPayload<ExtArgs>[]
      Products: Prisma.$ProductsPayload<ExtArgs>
      Restaurant: Prisma.$RestaurantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      Value: string
      CreatedAt: Date
      UpdatedAt: Date
      DeletedAt: Date | null
      ProductId: number
      RestaurantId: number
      Active: boolean
    }, ExtArgs["result"]["variations"]>
    composites: {}
  }


  type VariationsGetPayload<S extends boolean | null | undefined | VariationsDefaultArgs> = $Result.GetResult<Prisma.$VariationsPayload, S>

  type VariationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VariationsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VariationsCountAggregateInputType | true
    }

  export interface VariationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variations'], meta: { name: 'Variations' } }
    /**
     * Find zero or one Variations that matches the filter.
     * @param {VariationsFindUniqueArgs} args - Arguments to find a Variations
     * @example
     * // Get one Variations
     * const variations = await prisma.variations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VariationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VariationsFindUniqueArgs<ExtArgs>>
    ): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Variations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VariationsFindUniqueOrThrowArgs} args - Arguments to find a Variations
     * @example
     * // Get one Variations
     * const variations = await prisma.variations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VariationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VariationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Variations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsFindFirstArgs} args - Arguments to find a Variations
     * @example
     * // Get one Variations
     * const variations = await prisma.variations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VariationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VariationsFindFirstArgs<ExtArgs>>
    ): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Variations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsFindFirstOrThrowArgs} args - Arguments to find a Variations
     * @example
     * // Get one Variations
     * const variations = await prisma.variations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VariationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VariationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Variations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variations
     * const variations = await prisma.variations.findMany()
     * 
     * // Get first 10 Variations
     * const variations = await prisma.variations.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const variationsWithIdOnly = await prisma.variations.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends VariationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Variations.
     * @param {VariationsCreateArgs} args - Arguments to create a Variations.
     * @example
     * // Create one Variations
     * const Variations = await prisma.variations.create({
     *   data: {
     *     // ... data to create a Variations
     *   }
     * })
     * 
    **/
    create<T extends VariationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VariationsCreateArgs<ExtArgs>>
    ): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Variations.
     *     @param {VariationsCreateManyArgs} args - Arguments to create many Variations.
     *     @example
     *     // Create many Variations
     *     const variations = await prisma.variations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VariationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Variations.
     * @param {VariationsDeleteArgs} args - Arguments to delete one Variations.
     * @example
     * // Delete one Variations
     * const Variations = await prisma.variations.delete({
     *   where: {
     *     // ... filter to delete one Variations
     *   }
     * })
     * 
    **/
    delete<T extends VariationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VariationsDeleteArgs<ExtArgs>>
    ): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Variations.
     * @param {VariationsUpdateArgs} args - Arguments to update one Variations.
     * @example
     * // Update one Variations
     * const variations = await prisma.variations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VariationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VariationsUpdateArgs<ExtArgs>>
    ): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Variations.
     * @param {VariationsDeleteManyArgs} args - Arguments to filter Variations to delete.
     * @example
     * // Delete a few Variations
     * const { count } = await prisma.variations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VariationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VariationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variations
     * const variations = await prisma.variations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VariationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VariationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Variations.
     * @param {VariationsUpsertArgs} args - Arguments to update or create a Variations.
     * @example
     * // Update or create a Variations
     * const variations = await prisma.variations.upsert({
     *   create: {
     *     // ... data to create a Variations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variations we want to update
     *   }
     * })
    **/
    upsert<T extends VariationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VariationsUpsertArgs<ExtArgs>>
    ): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsCountArgs} args - Arguments to filter Variations to count.
     * @example
     * // Count the number of Variations
     * const count = await prisma.variations.count({
     *   where: {
     *     // ... the filter for the Variations we want to count
     *   }
     * })
    **/
    count<T extends VariationsCountArgs>(
      args?: Subset<T, VariationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariationsAggregateArgs>(args: Subset<T, VariationsAggregateArgs>): Prisma.PrismaPromise<GetVariationsAggregateType<T>>

    /**
     * Group by Variations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationsGroupByArgs} args - Group by arguments.
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
      T extends VariationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariationsGroupByArgs['orderBy'] }
        : { orderBy?: VariationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variations model
   */
  readonly fields: VariationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    OrderProduct<T extends Variations$OrderProductArgs<ExtArgs> = {}>(args?: Subset<T, Variations$OrderProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    Products<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Restaurant<T extends RestaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantsDefaultArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Variations model
   */ 
  interface VariationsFieldRefs {
    readonly Id: FieldRef<"Variations", 'Int'>
    readonly Name: FieldRef<"Variations", 'String'>
    readonly Value: FieldRef<"Variations", 'String'>
    readonly CreatedAt: FieldRef<"Variations", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Variations", 'DateTime'>
    readonly DeletedAt: FieldRef<"Variations", 'DateTime'>
    readonly ProductId: FieldRef<"Variations", 'Int'>
    readonly RestaurantId: FieldRef<"Variations", 'Int'>
    readonly Active: FieldRef<"Variations", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Variations findUnique
   */
  export type VariationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where: VariationsWhereUniqueInput
  }


  /**
   * Variations findUniqueOrThrow
   */
  export type VariationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where: VariationsWhereUniqueInput
  }


  /**
   * Variations findFirst
   */
  export type VariationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where?: VariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationsOrderByWithRelationInput | VariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variations.
     */
    cursor?: VariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variations.
     */
    distinct?: VariationsScalarFieldEnum | VariationsScalarFieldEnum[]
  }


  /**
   * Variations findFirstOrThrow
   */
  export type VariationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where?: VariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationsOrderByWithRelationInput | VariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variations.
     */
    cursor?: VariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variations.
     */
    distinct?: VariationsScalarFieldEnum | VariationsScalarFieldEnum[]
  }


  /**
   * Variations findMany
   */
  export type VariationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
    /**
     * Filter, which Variations to fetch.
     */
    where?: VariationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variations to fetch.
     */
    orderBy?: VariationsOrderByWithRelationInput | VariationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variations.
     */
    cursor?: VariationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variations.
     */
    skip?: number
    distinct?: VariationsScalarFieldEnum | VariationsScalarFieldEnum[]
  }


  /**
   * Variations create
   */
  export type VariationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Variations.
     */
    data: XOR<VariationsCreateInput, VariationsUncheckedCreateInput>
  }


  /**
   * Variations createMany
   */
  export type VariationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variations.
     */
    data: VariationsCreateManyInput | VariationsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Variations update
   */
  export type VariationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Variations.
     */
    data: XOR<VariationsUpdateInput, VariationsUncheckedUpdateInput>
    /**
     * Choose, which Variations to update.
     */
    where: VariationsWhereUniqueInput
  }


  /**
   * Variations updateMany
   */
  export type VariationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variations.
     */
    data: XOR<VariationsUpdateManyMutationInput, VariationsUncheckedUpdateManyInput>
    /**
     * Filter which Variations to update
     */
    where?: VariationsWhereInput
  }


  /**
   * Variations upsert
   */
  export type VariationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Variations to update in case it exists.
     */
    where: VariationsWhereUniqueInput
    /**
     * In case the Variations found by the `where` argument doesn't exist, create a new Variations with this data.
     */
    create: XOR<VariationsCreateInput, VariationsUncheckedCreateInput>
    /**
     * In case the Variations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariationsUpdateInput, VariationsUncheckedUpdateInput>
  }


  /**
   * Variations delete
   */
  export type VariationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
    /**
     * Filter which Variations to delete.
     */
    where: VariationsWhereUniqueInput
  }


  /**
   * Variations deleteMany
   */
  export type VariationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variations to delete
     */
    where?: VariationsWhereInput
  }


  /**
   * Variations.OrderProduct
   */
  export type Variations$OrderProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
    where?: ProductOrderWhereInput
    orderBy?: ProductOrderOrderByWithRelationInput | ProductOrderOrderByWithRelationInput[]
    cursor?: ProductOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOrderScalarFieldEnum | ProductOrderScalarFieldEnum[]
  }


  /**
   * Variations without action
   */
  export type VariationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variations
     */
    select?: VariationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VariationsInclude<ExtArgs> | null
  }



  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    Id: number | null
    RestaurantId: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    Id: number | null
    RestaurantId: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    RestaurantId: number | null
    Status: boolean | null
    Active: boolean | null
  }

  export type CategoriesMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    RestaurantId: number | null
    Status: boolean | null
    Active: boolean | null
  }

  export type CategoriesCountAggregateOutputType = {
    Id: number
    Name: number
    CreatedAt: number
    UpdatedAt: number
    DeletedAt: number
    RestaurantId: number
    Status: number
    Active: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    Id?: true
    RestaurantId?: true
  }

  export type CategoriesSumAggregateInputType = {
    Id?: true
    RestaurantId?: true
  }

  export type CategoriesMinAggregateInputType = {
    Id?: true
    Name?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    RestaurantId?: true
    Status?: true
    Active?: true
  }

  export type CategoriesMaxAggregateInputType = {
    Id?: true
    Name?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    RestaurantId?: true
    Status?: true
    Active?: true
  }

  export type CategoriesCountAggregateInputType = {
    Id?: true
    Name?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    RestaurantId?: true
    Status?: true
    Active?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    Id: number
    Name: string
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: Date | null
    RestaurantId: number
    Status: boolean
    Active: boolean
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    RestaurantId?: boolean
    Status?: boolean
    Active?: boolean
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    Id?: boolean
    Name?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    RestaurantId?: boolean
    Status?: boolean
    Active?: boolean
  }

  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      Restaurant: Prisma.$RestaurantsPayload<ExtArgs>
      Products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      CreatedAt: Date
      UpdatedAt: Date
      DeletedAt: Date | null
      RestaurantId: number
      Status: boolean
      Active: boolean
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }


  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Categories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends CategoriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
    **/
    create<T extends CategoriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const categories = await prisma.categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
    **/
    delete<T extends CategoriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
    **/
    upsert<T extends CategoriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Restaurant<T extends RestaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantsDefaultArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Products<T extends Categories$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Categories model
   */ 
  interface CategoriesFieldRefs {
    readonly Id: FieldRef<"Categories", 'Int'>
    readonly Name: FieldRef<"Categories", 'String'>
    readonly CreatedAt: FieldRef<"Categories", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Categories", 'DateTime'>
    readonly DeletedAt: FieldRef<"Categories", 'DateTime'>
    readonly RestaurantId: FieldRef<"Categories", 'Int'>
    readonly Status: FieldRef<"Categories", 'Boolean'>
    readonly Active: FieldRef<"Categories", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }


  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
  }


  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }


  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
  }


  /**
   * Categories.Products
   */
  export type Categories$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    Id: number | null
    UserId: number | null
    TableId: number | null
    RestaurantId: number | null
  }

  export type OrderSumAggregateOutputType = {
    Id: number | null
    UserId: number | null
    TableId: number | null
    RestaurantId: number | null
  }

  export type OrderMinAggregateOutputType = {
    Id: number | null
    Status: $Enums.Status | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    Paid: boolean | null
    Active: boolean | null
    UserId: number | null
    TableId: number | null
    RestaurantId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    Id: number | null
    Status: $Enums.Status | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    Paid: boolean | null
    Active: boolean | null
    UserId: number | null
    TableId: number | null
    RestaurantId: number | null
  }

  export type OrderCountAggregateOutputType = {
    Id: number
    Status: number
    CreatedAt: number
    UpdatedAt: number
    DeletedAt: number
    Paid: number
    Active: number
    UserId: number
    TableId: number
    RestaurantId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    Id?: true
    UserId?: true
    TableId?: true
    RestaurantId?: true
  }

  export type OrderSumAggregateInputType = {
    Id?: true
    UserId?: true
    TableId?: true
    RestaurantId?: true
  }

  export type OrderMinAggregateInputType = {
    Id?: true
    Status?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    Paid?: true
    Active?: true
    UserId?: true
    TableId?: true
    RestaurantId?: true
  }

  export type OrderMaxAggregateInputType = {
    Id?: true
    Status?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    Paid?: true
    Active?: true
    UserId?: true
    TableId?: true
    RestaurantId?: true
  }

  export type OrderCountAggregateInputType = {
    Id?: true
    Status?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    Paid?: true
    Active?: true
    UserId?: true
    TableId?: true
    RestaurantId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    Id: number
    Status: $Enums.Status
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: Date | null
    Paid: boolean
    Active: boolean
    UserId: number
    TableId: number
    RestaurantId: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Status?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    Paid?: boolean
    Active?: boolean
    UserId?: boolean
    TableId?: boolean
    RestaurantId?: boolean
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    Table?: boolean | TableDefaultArgs<ExtArgs>
    Payments?: boolean | Order$PaymentsArgs<ExtArgs>
    OrderProducts?: boolean | Order$OrderProductsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    Id?: boolean
    Status?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    Paid?: boolean
    Active?: boolean
    UserId?: boolean
    TableId?: boolean
    RestaurantId?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    Table?: boolean | TableDefaultArgs<ExtArgs>
    Payments?: boolean | Order$PaymentsArgs<ExtArgs>
    OrderProducts?: boolean | Order$OrderProductsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      Restaurant: Prisma.$RestaurantsPayload<ExtArgs>
      Table: Prisma.$TablePayload<ExtArgs>
      Payments: Prisma.$PaymentsPayload<ExtArgs>[]
      OrderProducts: Prisma.$ProductOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Status: $Enums.Status
      CreatedAt: Date
      UpdatedAt: Date
      DeletedAt: Date | null
      Paid: boolean
      Active: boolean
      UserId: number
      TableId: number
      RestaurantId: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Restaurant<T extends RestaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantsDefaultArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Payments<T extends Order$PaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Order$PaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    OrderProducts<T extends Order$OrderProductsArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly Id: FieldRef<"Order", 'Int'>
    readonly Status: FieldRef<"Order", 'Status'>
    readonly CreatedAt: FieldRef<"Order", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Order", 'DateTime'>
    readonly DeletedAt: FieldRef<"Order", 'DateTime'>
    readonly Paid: FieldRef<"Order", 'Boolean'>
    readonly Active: FieldRef<"Order", 'Boolean'>
    readonly UserId: FieldRef<"Order", 'Int'>
    readonly TableId: FieldRef<"Order", 'Int'>
    readonly RestaurantId: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.Payments
   */
  export type Order$PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }


  /**
   * Order.OrderProducts
   */
  export type Order$OrderProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
    where?: ProductOrderWhereInput
    orderBy?: ProductOrderOrderByWithRelationInput | ProductOrderOrderByWithRelationInput[]
    cursor?: ProductOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOrderScalarFieldEnum | ProductOrderScalarFieldEnum[]
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Model ProductOrder
   */

  export type AggregateProductOrder = {
    _count: ProductOrderCountAggregateOutputType | null
    _avg: ProductOrderAvgAggregateOutputType | null
    _sum: ProductOrderSumAggregateOutputType | null
    _min: ProductOrderMinAggregateOutputType | null
    _max: ProductOrderMaxAggregateOutputType | null
  }

  export type ProductOrderAvgAggregateOutputType = {
    Id: number | null
    Quantity: number | null
    OrderId: number | null
    VariationId: number | null
  }

  export type ProductOrderSumAggregateOutputType = {
    Id: number | null
    Quantity: number | null
    OrderId: number | null
    VariationId: number | null
  }

  export type ProductOrderMinAggregateOutputType = {
    Id: number | null
    Quantity: number | null
    OrderId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    VariationId: number | null
  }

  export type ProductOrderMaxAggregateOutputType = {
    Id: number | null
    Quantity: number | null
    OrderId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    VariationId: number | null
  }

  export type ProductOrderCountAggregateOutputType = {
    Id: number
    Quantity: number
    OrderId: number
    CreatedAt: number
    UpdatedAt: number
    VariationId: number
    _all: number
  }


  export type ProductOrderAvgAggregateInputType = {
    Id?: true
    Quantity?: true
    OrderId?: true
    VariationId?: true
  }

  export type ProductOrderSumAggregateInputType = {
    Id?: true
    Quantity?: true
    OrderId?: true
    VariationId?: true
  }

  export type ProductOrderMinAggregateInputType = {
    Id?: true
    Quantity?: true
    OrderId?: true
    CreatedAt?: true
    UpdatedAt?: true
    VariationId?: true
  }

  export type ProductOrderMaxAggregateInputType = {
    Id?: true
    Quantity?: true
    OrderId?: true
    CreatedAt?: true
    UpdatedAt?: true
    VariationId?: true
  }

  export type ProductOrderCountAggregateInputType = {
    Id?: true
    Quantity?: true
    OrderId?: true
    CreatedAt?: true
    UpdatedAt?: true
    VariationId?: true
    _all?: true
  }

  export type ProductOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOrder to aggregate.
     */
    where?: ProductOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrders to fetch.
     */
    orderBy?: ProductOrderOrderByWithRelationInput | ProductOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductOrders
    **/
    _count?: true | ProductOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductOrderMaxAggregateInputType
  }

  export type GetProductOrderAggregateType<T extends ProductOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateProductOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductOrder[P]>
      : GetScalarType<T[P], AggregateProductOrder[P]>
  }




  export type ProductOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOrderWhereInput
    orderBy?: ProductOrderOrderByWithAggregationInput | ProductOrderOrderByWithAggregationInput[]
    by: ProductOrderScalarFieldEnum[] | ProductOrderScalarFieldEnum
    having?: ProductOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductOrderCountAggregateInputType | true
    _avg?: ProductOrderAvgAggregateInputType
    _sum?: ProductOrderSumAggregateInputType
    _min?: ProductOrderMinAggregateInputType
    _max?: ProductOrderMaxAggregateInputType
  }

  export type ProductOrderGroupByOutputType = {
    Id: number
    Quantity: number
    OrderId: number
    CreatedAt: Date
    UpdatedAt: Date
    VariationId: number
    _count: ProductOrderCountAggregateOutputType | null
    _avg: ProductOrderAvgAggregateOutputType | null
    _sum: ProductOrderSumAggregateOutputType | null
    _min: ProductOrderMinAggregateOutputType | null
    _max: ProductOrderMaxAggregateOutputType | null
  }

  type GetProductOrderGroupByPayload<T extends ProductOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ProductOrderGroupByOutputType[P]>
        }
      >
    >


  export type ProductOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Quantity?: boolean
    OrderId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    VariationId?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Variation?: boolean | VariationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOrder"]>

  export type ProductOrderSelectScalar = {
    Id?: boolean
    Quantity?: boolean
    OrderId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    VariationId?: boolean
  }

  export type ProductOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Variation?: boolean | VariationsDefaultArgs<ExtArgs>
  }


  export type $ProductOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductOrder"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
      Variation: Prisma.$VariationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Quantity: number
      OrderId: number
      CreatedAt: Date
      UpdatedAt: Date
      VariationId: number
    }, ExtArgs["result"]["productOrder"]>
    composites: {}
  }


  type ProductOrderGetPayload<S extends boolean | null | undefined | ProductOrderDefaultArgs> = $Result.GetResult<Prisma.$ProductOrderPayload, S>

  type ProductOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductOrderFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductOrderCountAggregateInputType | true
    }

  export interface ProductOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductOrder'], meta: { name: 'ProductOrder' } }
    /**
     * Find zero or one ProductOrder that matches the filter.
     * @param {ProductOrderFindUniqueArgs} args - Arguments to find a ProductOrder
     * @example
     * // Get one ProductOrder
     * const productOrder = await prisma.productOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductOrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOrderFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductOrder that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductOrderFindUniqueOrThrowArgs} args - Arguments to find a ProductOrder
     * @example
     * // Get one ProductOrder
     * const productOrder = await prisma.productOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductOrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderFindFirstArgs} args - Arguments to find a ProductOrder
     * @example
     * // Get one ProductOrder
     * const productOrder = await prisma.productOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductOrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOrderFindFirstArgs<ExtArgs>>
    ): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderFindFirstOrThrowArgs} args - Arguments to find a ProductOrder
     * @example
     * // Get one ProductOrder
     * const productOrder = await prisma.productOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductOrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductOrders
     * const productOrders = await prisma.productOrder.findMany()
     * 
     * // Get first 10 ProductOrders
     * const productOrders = await prisma.productOrder.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const productOrderWithIdOnly = await prisma.productOrder.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends ProductOrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductOrder.
     * @param {ProductOrderCreateArgs} args - Arguments to create a ProductOrder.
     * @example
     * // Create one ProductOrder
     * const ProductOrder = await prisma.productOrder.create({
     *   data: {
     *     // ... data to create a ProductOrder
     *   }
     * })
     * 
    **/
    create<T extends ProductOrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOrderCreateArgs<ExtArgs>>
    ): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductOrders.
     *     @param {ProductOrderCreateManyArgs} args - Arguments to create many ProductOrders.
     *     @example
     *     // Create many ProductOrders
     *     const productOrder = await prisma.productOrder.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductOrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductOrder.
     * @param {ProductOrderDeleteArgs} args - Arguments to delete one ProductOrder.
     * @example
     * // Delete one ProductOrder
     * const ProductOrder = await prisma.productOrder.delete({
     *   where: {
     *     // ... filter to delete one ProductOrder
     *   }
     * })
     * 
    **/
    delete<T extends ProductOrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOrderDeleteArgs<ExtArgs>>
    ): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductOrder.
     * @param {ProductOrderUpdateArgs} args - Arguments to update one ProductOrder.
     * @example
     * // Update one ProductOrder
     * const productOrder = await prisma.productOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductOrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOrderUpdateArgs<ExtArgs>>
    ): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductOrders.
     * @param {ProductOrderDeleteManyArgs} args - Arguments to filter ProductOrders to delete.
     * @example
     * // Delete a few ProductOrders
     * const { count } = await prisma.productOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductOrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductOrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductOrders
     * const productOrder = await prisma.productOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductOrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductOrder.
     * @param {ProductOrderUpsertArgs} args - Arguments to update or create a ProductOrder.
     * @example
     * // Update or create a ProductOrder
     * const productOrder = await prisma.productOrder.upsert({
     *   create: {
     *     // ... data to create a ProductOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductOrder we want to update
     *   }
     * })
    **/
    upsert<T extends ProductOrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductOrderUpsertArgs<ExtArgs>>
    ): Prisma__ProductOrderClient<$Result.GetResult<Prisma.$ProductOrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderCountArgs} args - Arguments to filter ProductOrders to count.
     * @example
     * // Count the number of ProductOrders
     * const count = await prisma.productOrder.count({
     *   where: {
     *     // ... the filter for the ProductOrders we want to count
     *   }
     * })
    **/
    count<T extends ProductOrderCountArgs>(
      args?: Subset<T, ProductOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductOrderAggregateArgs>(args: Subset<T, ProductOrderAggregateArgs>): Prisma.PrismaPromise<GetProductOrderAggregateType<T>>

    /**
     * Group by ProductOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOrderGroupByArgs} args - Group by arguments.
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
      T extends ProductOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductOrderGroupByArgs['orderBy'] }
        : { orderBy?: ProductOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductOrder model
   */
  readonly fields: ProductOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Variation<T extends VariationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VariationsDefaultArgs<ExtArgs>>): Prisma__VariationsClient<$Result.GetResult<Prisma.$VariationsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductOrder model
   */ 
  interface ProductOrderFieldRefs {
    readonly Id: FieldRef<"ProductOrder", 'Int'>
    readonly Quantity: FieldRef<"ProductOrder", 'Int'>
    readonly OrderId: FieldRef<"ProductOrder", 'Int'>
    readonly CreatedAt: FieldRef<"ProductOrder", 'DateTime'>
    readonly UpdatedAt: FieldRef<"ProductOrder", 'DateTime'>
    readonly VariationId: FieldRef<"ProductOrder", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ProductOrder findUnique
   */
  export type ProductOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrder to fetch.
     */
    where: ProductOrderWhereUniqueInput
  }


  /**
   * ProductOrder findUniqueOrThrow
   */
  export type ProductOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrder to fetch.
     */
    where: ProductOrderWhereUniqueInput
  }


  /**
   * ProductOrder findFirst
   */
  export type ProductOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrder to fetch.
     */
    where?: ProductOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrders to fetch.
     */
    orderBy?: ProductOrderOrderByWithRelationInput | ProductOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOrders.
     */
    cursor?: ProductOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOrders.
     */
    distinct?: ProductOrderScalarFieldEnum | ProductOrderScalarFieldEnum[]
  }


  /**
   * ProductOrder findFirstOrThrow
   */
  export type ProductOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrder to fetch.
     */
    where?: ProductOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrders to fetch.
     */
    orderBy?: ProductOrderOrderByWithRelationInput | ProductOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOrders.
     */
    cursor?: ProductOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOrders.
     */
    distinct?: ProductOrderScalarFieldEnum | ProductOrderScalarFieldEnum[]
  }


  /**
   * ProductOrder findMany
   */
  export type ProductOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOrders to fetch.
     */
    where?: ProductOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOrders to fetch.
     */
    orderBy?: ProductOrderOrderByWithRelationInput | ProductOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductOrders.
     */
    cursor?: ProductOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOrders.
     */
    skip?: number
    distinct?: ProductOrderScalarFieldEnum | ProductOrderScalarFieldEnum[]
  }


  /**
   * ProductOrder create
   */
  export type ProductOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductOrder.
     */
    data: XOR<ProductOrderCreateInput, ProductOrderUncheckedCreateInput>
  }


  /**
   * ProductOrder createMany
   */
  export type ProductOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductOrders.
     */
    data: ProductOrderCreateManyInput | ProductOrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductOrder update
   */
  export type ProductOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductOrder.
     */
    data: XOR<ProductOrderUpdateInput, ProductOrderUncheckedUpdateInput>
    /**
     * Choose, which ProductOrder to update.
     */
    where: ProductOrderWhereUniqueInput
  }


  /**
   * ProductOrder updateMany
   */
  export type ProductOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductOrders.
     */
    data: XOR<ProductOrderUpdateManyMutationInput, ProductOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProductOrders to update
     */
    where?: ProductOrderWhereInput
  }


  /**
   * ProductOrder upsert
   */
  export type ProductOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductOrder to update in case it exists.
     */
    where: ProductOrderWhereUniqueInput
    /**
     * In case the ProductOrder found by the `where` argument doesn't exist, create a new ProductOrder with this data.
     */
    create: XOR<ProductOrderCreateInput, ProductOrderUncheckedCreateInput>
    /**
     * In case the ProductOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductOrderUpdateInput, ProductOrderUncheckedUpdateInput>
  }


  /**
   * ProductOrder delete
   */
  export type ProductOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
    /**
     * Filter which ProductOrder to delete.
     */
    where: ProductOrderWhereUniqueInput
  }


  /**
   * ProductOrder deleteMany
   */
  export type ProductOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOrders to delete
     */
    where?: ProductOrderWhereInput
  }


  /**
   * ProductOrder without action
   */
  export type ProductOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOrder
     */
    select?: ProductOrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductOrderInclude<ExtArgs> | null
  }



  /**
   * Model ProductImages
   */

  export type AggregateProductImages = {
    _count: ProductImagesCountAggregateOutputType | null
    _avg: ProductImagesAvgAggregateOutputType | null
    _sum: ProductImagesSumAggregateOutputType | null
    _min: ProductImagesMinAggregateOutputType | null
    _max: ProductImagesMaxAggregateOutputType | null
  }

  export type ProductImagesAvgAggregateOutputType = {
    Id: number | null
    Size: number | null
    RestaurantId: number | null
    productsId: number | null
  }

  export type ProductImagesSumAggregateOutputType = {
    Id: number | null
    Size: number | null
    RestaurantId: number | null
    productsId: number | null
  }

  export type ProductImagesMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    ImagePath: string | null
    Size: number | null
    RestaurantId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    Active: boolean | null
    productsId: number | null
  }

  export type ProductImagesMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    ImagePath: string | null
    Size: number | null
    RestaurantId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    Active: boolean | null
    productsId: number | null
  }

  export type ProductImagesCountAggregateOutputType = {
    Id: number
    Name: number
    ImagePath: number
    Size: number
    RestaurantId: number
    CreatedAt: number
    UpdatedAt: number
    DeletedAt: number
    Active: number
    productsId: number
    _all: number
  }


  export type ProductImagesAvgAggregateInputType = {
    Id?: true
    Size?: true
    RestaurantId?: true
    productsId?: true
  }

  export type ProductImagesSumAggregateInputType = {
    Id?: true
    Size?: true
    RestaurantId?: true
    productsId?: true
  }

  export type ProductImagesMinAggregateInputType = {
    Id?: true
    Name?: true
    ImagePath?: true
    Size?: true
    RestaurantId?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    Active?: true
    productsId?: true
  }

  export type ProductImagesMaxAggregateInputType = {
    Id?: true
    Name?: true
    ImagePath?: true
    Size?: true
    RestaurantId?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    Active?: true
    productsId?: true
  }

  export type ProductImagesCountAggregateInputType = {
    Id?: true
    Name?: true
    ImagePath?: true
    Size?: true
    RestaurantId?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    Active?: true
    productsId?: true
    _all?: true
  }

  export type ProductImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to aggregate.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImagesMaxAggregateInputType
  }

  export type GetProductImagesAggregateType<T extends ProductImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImages[P]>
      : GetScalarType<T[P], AggregateProductImages[P]>
  }




  export type ProductImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImagesWhereInput
    orderBy?: ProductImagesOrderByWithAggregationInput | ProductImagesOrderByWithAggregationInput[]
    by: ProductImagesScalarFieldEnum[] | ProductImagesScalarFieldEnum
    having?: ProductImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImagesCountAggregateInputType | true
    _avg?: ProductImagesAvgAggregateInputType
    _sum?: ProductImagesSumAggregateInputType
    _min?: ProductImagesMinAggregateInputType
    _max?: ProductImagesMaxAggregateInputType
  }

  export type ProductImagesGroupByOutputType = {
    Id: number
    Name: string
    ImagePath: string
    Size: number
    RestaurantId: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: Date | null
    Active: boolean
    productsId: number | null
    _count: ProductImagesCountAggregateOutputType | null
    _avg: ProductImagesAvgAggregateOutputType | null
    _sum: ProductImagesSumAggregateOutputType | null
    _min: ProductImagesMinAggregateOutputType | null
    _max: ProductImagesMaxAggregateOutputType | null
  }

  type GetProductImagesGroupByPayload<T extends ProductImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImagesGroupByOutputType[P]>
        }
      >
    >


  export type ProductImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    ImagePath?: boolean
    Size?: boolean
    RestaurantId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    Active?: boolean
    productsId?: boolean
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    Products?: boolean | ProductImages$ProductsArgs<ExtArgs>
  }, ExtArgs["result"]["productImages"]>

  export type ProductImagesSelectScalar = {
    Id?: boolean
    Name?: boolean
    ImagePath?: boolean
    Size?: boolean
    RestaurantId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    Active?: boolean
    productsId?: boolean
  }

  export type ProductImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    Products?: boolean | ProductImages$ProductsArgs<ExtArgs>
  }


  export type $ProductImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImages"
    objects: {
      Restaurant: Prisma.$RestaurantsPayload<ExtArgs>
      Products: Prisma.$ProductsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      ImagePath: string
      Size: number
      RestaurantId: number
      CreatedAt: Date
      UpdatedAt: Date
      DeletedAt: Date | null
      Active: boolean
      productsId: number | null
    }, ExtArgs["result"]["productImages"]>
    composites: {}
  }


  type ProductImagesGetPayload<S extends boolean | null | undefined | ProductImagesDefaultArgs> = $Result.GetResult<Prisma.$ProductImagesPayload, S>

  type ProductImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductImagesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductImagesCountAggregateInputType | true
    }

  export interface ProductImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImages'], meta: { name: 'ProductImages' } }
    /**
     * Find zero or one ProductImages that matches the filter.
     * @param {ProductImagesFindUniqueArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductImagesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductImagesFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductImages that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductImagesFindUniqueOrThrowArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductImagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductImagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindFirstArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductImagesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductImagesFindFirstArgs<ExtArgs>>
    ): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindFirstOrThrowArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductImagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductImagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImages.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImages.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const productImagesWithIdOnly = await prisma.productImages.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends ProductImagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductImagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductImages.
     * @param {ProductImagesCreateArgs} args - Arguments to create a ProductImages.
     * @example
     * // Create one ProductImages
     * const ProductImages = await prisma.productImages.create({
     *   data: {
     *     // ... data to create a ProductImages
     *   }
     * })
     * 
    **/
    create<T extends ProductImagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductImagesCreateArgs<ExtArgs>>
    ): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductImages.
     *     @param {ProductImagesCreateManyArgs} args - Arguments to create many ProductImages.
     *     @example
     *     // Create many ProductImages
     *     const productImages = await prisma.productImages.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductImagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductImagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductImages.
     * @param {ProductImagesDeleteArgs} args - Arguments to delete one ProductImages.
     * @example
     * // Delete one ProductImages
     * const ProductImages = await prisma.productImages.delete({
     *   where: {
     *     // ... filter to delete one ProductImages
     *   }
     * })
     * 
    **/
    delete<T extends ProductImagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductImagesDeleteArgs<ExtArgs>>
    ): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductImages.
     * @param {ProductImagesUpdateArgs} args - Arguments to update one ProductImages.
     * @example
     * // Update one ProductImages
     * const productImages = await prisma.productImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductImagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductImagesUpdateArgs<ExtArgs>>
    ): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImagesDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductImagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductImagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImages = await prisma.productImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductImagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductImagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductImages.
     * @param {ProductImagesUpsertArgs} args - Arguments to update or create a ProductImages.
     * @example
     * // Update or create a ProductImages
     * const productImages = await prisma.productImages.upsert({
     *   create: {
     *     // ... data to create a ProductImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImages we want to update
     *   }
     * })
    **/
    upsert<T extends ProductImagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductImagesUpsertArgs<ExtArgs>>
    ): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImages.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImagesCountArgs>(
      args?: Subset<T, ProductImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductImagesAggregateArgs>(args: Subset<T, ProductImagesAggregateArgs>): Prisma.PrismaPromise<GetProductImagesAggregateType<T>>

    /**
     * Group by ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesGroupByArgs} args - Group by arguments.
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
      T extends ProductImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImagesGroupByArgs['orderBy'] }
        : { orderBy?: ProductImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImages model
   */
  readonly fields: ProductImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Restaurant<T extends RestaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantsDefaultArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Products<T extends ProductImages$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, ProductImages$ProductsArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductImages model
   */ 
  interface ProductImagesFieldRefs {
    readonly Id: FieldRef<"ProductImages", 'Int'>
    readonly Name: FieldRef<"ProductImages", 'String'>
    readonly ImagePath: FieldRef<"ProductImages", 'String'>
    readonly Size: FieldRef<"ProductImages", 'Int'>
    readonly RestaurantId: FieldRef<"ProductImages", 'Int'>
    readonly CreatedAt: FieldRef<"ProductImages", 'DateTime'>
    readonly UpdatedAt: FieldRef<"ProductImages", 'DateTime'>
    readonly DeletedAt: FieldRef<"ProductImages", 'DateTime'>
    readonly Active: FieldRef<"ProductImages", 'Boolean'>
    readonly productsId: FieldRef<"ProductImages", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ProductImages findUnique
   */
  export type ProductImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where: ProductImagesWhereUniqueInput
  }


  /**
   * ProductImages findUniqueOrThrow
   */
  export type ProductImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where: ProductImagesWhereUniqueInput
  }


  /**
   * ProductImages findFirst
   */
  export type ProductImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }


  /**
   * ProductImages findFirstOrThrow
   */
  export type ProductImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }


  /**
   * ProductImages findMany
   */
  export type ProductImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }


  /**
   * ProductImages create
   */
  export type ProductImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImages.
     */
    data: XOR<ProductImagesCreateInput, ProductImagesUncheckedCreateInput>
  }


  /**
   * ProductImages createMany
   */
  export type ProductImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImagesCreateManyInput | ProductImagesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductImages update
   */
  export type ProductImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImages.
     */
    data: XOR<ProductImagesUpdateInput, ProductImagesUncheckedUpdateInput>
    /**
     * Choose, which ProductImages to update.
     */
    where: ProductImagesWhereUniqueInput
  }


  /**
   * ProductImages updateMany
   */
  export type ProductImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImagesUpdateManyMutationInput, ProductImagesUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImagesWhereInput
  }


  /**
   * ProductImages upsert
   */
  export type ProductImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImages to update in case it exists.
     */
    where: ProductImagesWhereUniqueInput
    /**
     * In case the ProductImages found by the `where` argument doesn't exist, create a new ProductImages with this data.
     */
    create: XOR<ProductImagesCreateInput, ProductImagesUncheckedCreateInput>
    /**
     * In case the ProductImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImagesUpdateInput, ProductImagesUncheckedUpdateInput>
  }


  /**
   * ProductImages delete
   */
  export type ProductImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter which ProductImages to delete.
     */
    where: ProductImagesWhereUniqueInput
  }


  /**
   * ProductImages deleteMany
   */
  export type ProductImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImagesWhereInput
  }


  /**
   * ProductImages.Products
   */
  export type ProductImages$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
  }


  /**
   * ProductImages without action
   */
  export type ProductImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductImagesInclude<ExtArgs> | null
  }



  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    Id: number | null
    Number: number | null
    RestaurantId: number | null
  }

  export type TableSumAggregateOutputType = {
    Id: number | null
    Number: number | null
    RestaurantId: number | null
  }

  export type TableMinAggregateOutputType = {
    Id: number | null
    Status: boolean | null
    Number: number | null
    Barcode: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    Active: boolean | null
    RestaurantId: number | null
  }

  export type TableMaxAggregateOutputType = {
    Id: number | null
    Status: boolean | null
    Number: number | null
    Barcode: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
    Active: boolean | null
    RestaurantId: number | null
  }

  export type TableCountAggregateOutputType = {
    Id: number
    Status: number
    Number: number
    Barcode: number
    CreatedAt: number
    UpdatedAt: number
    DeletedAt: number
    Active: number
    RestaurantId: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    Id?: true
    Number?: true
    RestaurantId?: true
  }

  export type TableSumAggregateInputType = {
    Id?: true
    Number?: true
    RestaurantId?: true
  }

  export type TableMinAggregateInputType = {
    Id?: true
    Status?: true
    Number?: true
    Barcode?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    Active?: true
    RestaurantId?: true
  }

  export type TableMaxAggregateInputType = {
    Id?: true
    Status?: true
    Number?: true
    Barcode?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    Active?: true
    RestaurantId?: true
  }

  export type TableCountAggregateInputType = {
    Id?: true
    Status?: true
    Number?: true
    Barcode?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    Active?: true
    RestaurantId?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    Id: number
    Status: boolean
    Number: number
    Barcode: string
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: Date | null
    Active: boolean
    RestaurantId: number
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Status?: boolean
    Number?: boolean
    Barcode?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    Active?: boolean
    RestaurantId?: boolean
    Order?: boolean | Table$OrderArgs<ExtArgs>
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    Id?: boolean
    Status?: boolean
    Number?: boolean
    Barcode?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    Active?: boolean
    RestaurantId?: boolean
  }

  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | Table$OrderArgs<ExtArgs>
    Restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>[]
      Restaurant: Prisma.$RestaurantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Status: boolean
      Number: number
      Barcode: string
      CreatedAt: Date
      UpdatedAt: Date
      DeletedAt: Date | null
      Active: boolean
      RestaurantId: number
    }, ExtArgs["result"]["table"]>
    composites: {}
  }


  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TableFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Table that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TableFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends TableFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
    **/
    create<T extends TableCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TableCreateArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tables.
     *     @param {TableCreateManyArgs} args - Arguments to create many Tables.
     *     @example
     *     // Create many Tables
     *     const table = await prisma.table.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TableCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
    **/
    delete<T extends TableDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TableDeleteArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TableUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TableUpdateArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TableDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TableUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
    **/
    upsert<T extends TableUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TableUpsertArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
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
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Order<T extends Table$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Table$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    Restaurant<T extends RestaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantsDefaultArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Table model
   */ 
  interface TableFieldRefs {
    readonly Id: FieldRef<"Table", 'Int'>
    readonly Status: FieldRef<"Table", 'Boolean'>
    readonly Number: FieldRef<"Table", 'Int'>
    readonly Barcode: FieldRef<"Table", 'String'>
    readonly CreatedAt: FieldRef<"Table", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Table", 'DateTime'>
    readonly DeletedAt: FieldRef<"Table", 'DateTime'>
    readonly Active: FieldRef<"Table", 'Boolean'>
    readonly RestaurantId: FieldRef<"Table", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }


  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
  }


  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }


  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
  }


  /**
   * Table.Order
   */
  export type Table$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
  }



  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    Id: number | null
    OrderId: number | null
    Amount: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    Id: number | null
    OrderId: number | null
    Amount: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    Id: number | null
    OrderId: number | null
    Amount: number | null
    PaymentType: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    Id: number | null
    OrderId: number | null
    Amount: number | null
    PaymentType: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    Id: number
    OrderId: number
    Amount: number
    PaymentType: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    Id?: true
    OrderId?: true
    Amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    Id?: true
    OrderId?: true
    Amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    Id?: true
    OrderId?: true
    Amount?: true
    PaymentType?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type PaymentsMaxAggregateInputType = {
    Id?: true
    OrderId?: true
    Amount?: true
    PaymentType?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type PaymentsCountAggregateInputType = {
    Id?: true
    OrderId?: true
    Amount?: true
    PaymentType?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    Id: number
    OrderId: number
    Amount: number
    PaymentType: string
    CreatedAt: Date
    UpdatedAt: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    OrderId?: boolean
    Amount?: boolean
    PaymentType?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    Id?: boolean
    OrderId?: boolean
    Amount?: boolean
    PaymentType?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }


  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      OrderId: number
      Amount: number
      PaymentType: string
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }


  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends PaymentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
    **/
    create<T extends PaymentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payments.
     *     @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payments = await prisma.payments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
    **/
    delete<T extends PaymentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>
    ): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
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
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Payments model
   */ 
  interface PaymentsFieldRefs {
    readonly Id: FieldRef<"Payments", 'Int'>
    readonly OrderId: FieldRef<"Payments", 'Int'>
    readonly Amount: FieldRef<"Payments", 'Int'>
    readonly PaymentType: FieldRef<"Payments", 'String'>
    readonly CreatedAt: FieldRef<"Payments", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }


  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }


  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }


  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }


  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }


  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }


  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }


  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
  }


  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }


  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }


  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
  }


  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentsInclude<ExtArgs> | null
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


  export const RestaurantsScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    RestaurantId: 'RestaurantId',
    Active: 'Active',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    DeletedAt: 'DeletedAt'
  };

  export type RestaurantsScalarFieldEnum = (typeof RestaurantsScalarFieldEnum)[keyof typeof RestaurantsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Description: 'Description',
    ImgUrl: 'ImgUrl',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    DeletedAt: 'DeletedAt',
    RestaurantId: 'RestaurantId',
    CategoryId: 'CategoryId',
    Status: 'Status',
    Active: 'Active'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const VariationsScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Value: 'Value',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    DeletedAt: 'DeletedAt',
    ProductId: 'ProductId',
    RestaurantId: 'RestaurantId',
    Active: 'Active'
  };

  export type VariationsScalarFieldEnum = (typeof VariationsScalarFieldEnum)[keyof typeof VariationsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    DeletedAt: 'DeletedAt',
    RestaurantId: 'RestaurantId',
    Status: 'Status',
    Active: 'Active'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    Id: 'Id',
    Status: 'Status',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    DeletedAt: 'DeletedAt',
    Paid: 'Paid',
    Active: 'Active',
    UserId: 'UserId',
    TableId: 'TableId',
    RestaurantId: 'RestaurantId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductOrderScalarFieldEnum: {
    Id: 'Id',
    Quantity: 'Quantity',
    OrderId: 'OrderId',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    VariationId: 'VariationId'
  };

  export type ProductOrderScalarFieldEnum = (typeof ProductOrderScalarFieldEnum)[keyof typeof ProductOrderScalarFieldEnum]


  export const ProductImagesScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    ImagePath: 'ImagePath',
    Size: 'Size',
    RestaurantId: 'RestaurantId',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    DeletedAt: 'DeletedAt',
    Active: 'Active',
    productsId: 'productsId'
  };

  export type ProductImagesScalarFieldEnum = (typeof ProductImagesScalarFieldEnum)[keyof typeof ProductImagesScalarFieldEnum]


  export const TableScalarFieldEnum: {
    Id: 'Id',
    Status: 'Status',
    Number: 'Number',
    Barcode: 'Barcode',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    DeletedAt: 'DeletedAt',
    Active: 'Active',
    RestaurantId: 'RestaurantId'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    Id: 'Id',
    OrderId: 'OrderId',
    Amount: 'Amount',
    PaymentType: 'PaymentType',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RestaurantsWhereInput = {
    AND?: RestaurantsWhereInput | RestaurantsWhereInput[]
    OR?: RestaurantsWhereInput[]
    NOT?: RestaurantsWhereInput | RestaurantsWhereInput[]
    Id?: IntFilter<"Restaurants"> | number
    Name?: StringFilter<"Restaurants"> | string
    RestaurantId?: IntFilter<"Restaurants"> | number
    Active?: BoolFilter<"Restaurants"> | boolean
    CreatedAt?: DateTimeFilter<"Restaurants"> | Date | string
    UpdatedAt?: DateTimeFilter<"Restaurants"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Restaurants"> | Date | string | null
    Categories?: CategoriesListRelationFilter
    Order?: OrderListRelationFilter
    ProductImages?: ProductImagesListRelationFilter
    Products?: ProductsListRelationFilter
    Table?: TableListRelationFilter
    Variations?: VariationsListRelationFilter
  }

  export type RestaurantsOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    RestaurantId?: SortOrder
    Active?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    Categories?: CategoriesOrderByRelationAggregateInput
    Order?: OrderOrderByRelationAggregateInput
    ProductImages?: ProductImagesOrderByRelationAggregateInput
    Products?: ProductsOrderByRelationAggregateInput
    Table?: TableOrderByRelationAggregateInput
    Variations?: VariationsOrderByRelationAggregateInput
  }

  export type RestaurantsWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    RestaurantId?: number
    AND?: RestaurantsWhereInput | RestaurantsWhereInput[]
    OR?: RestaurantsWhereInput[]
    NOT?: RestaurantsWhereInput | RestaurantsWhereInput[]
    Name?: StringFilter<"Restaurants"> | string
    Active?: BoolFilter<"Restaurants"> | boolean
    CreatedAt?: DateTimeFilter<"Restaurants"> | Date | string
    UpdatedAt?: DateTimeFilter<"Restaurants"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Restaurants"> | Date | string | null
    Categories?: CategoriesListRelationFilter
    Order?: OrderListRelationFilter
    ProductImages?: ProductImagesListRelationFilter
    Products?: ProductsListRelationFilter
    Table?: TableListRelationFilter
    Variations?: VariationsListRelationFilter
  }, "Id" | "RestaurantId">

  export type RestaurantsOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    RestaurantId?: SortOrder
    Active?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    _count?: RestaurantsCountOrderByAggregateInput
    _avg?: RestaurantsAvgOrderByAggregateInput
    _max?: RestaurantsMaxOrderByAggregateInput
    _min?: RestaurantsMinOrderByAggregateInput
    _sum?: RestaurantsSumOrderByAggregateInput
  }

  export type RestaurantsScalarWhereWithAggregatesInput = {
    AND?: RestaurantsScalarWhereWithAggregatesInput | RestaurantsScalarWhereWithAggregatesInput[]
    OR?: RestaurantsScalarWhereWithAggregatesInput[]
    NOT?: RestaurantsScalarWhereWithAggregatesInput | RestaurantsScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Restaurants"> | number
    Name?: StringWithAggregatesFilter<"Restaurants"> | string
    RestaurantId?: IntWithAggregatesFilter<"Restaurants"> | number
    Active?: BoolWithAggregatesFilter<"Restaurants"> | boolean
    CreatedAt?: DateTimeWithAggregatesFilter<"Restaurants"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Restaurants"> | Date | string
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"Restaurants"> | Date | string | null
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    Id?: IntFilter<"Products"> | number
    Name?: StringFilter<"Products"> | string
    Description?: StringFilter<"Products"> | string
    ImgUrl?: JsonFilter<"Products">
    CreatedAt?: DateTimeFilter<"Products"> | Date | string
    UpdatedAt?: DateTimeFilter<"Products"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Products"> | Date | string | null
    RestaurantId?: IntFilter<"Products"> | number
    CategoryId?: IntFilter<"Products"> | number
    Status?: BoolFilter<"Products"> | boolean
    Active?: BoolFilter<"Products"> | boolean
    ProductImages?: ProductImagesListRelationFilter
    Categories?: XOR<CategoriesRelationFilter, CategoriesWhereInput>
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
    Variations?: VariationsListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    ImgUrl?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    RestaurantId?: SortOrder
    CategoryId?: SortOrder
    Status?: SortOrder
    Active?: SortOrder
    ProductImages?: ProductImagesOrderByRelationAggregateInput
    Categories?: CategoriesOrderByWithRelationInput
    Restaurant?: RestaurantsOrderByWithRelationInput
    Variations?: VariationsOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    Name?: StringFilter<"Products"> | string
    Description?: StringFilter<"Products"> | string
    ImgUrl?: JsonFilter<"Products">
    CreatedAt?: DateTimeFilter<"Products"> | Date | string
    UpdatedAt?: DateTimeFilter<"Products"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Products"> | Date | string | null
    RestaurantId?: IntFilter<"Products"> | number
    CategoryId?: IntFilter<"Products"> | number
    Status?: BoolFilter<"Products"> | boolean
    Active?: BoolFilter<"Products"> | boolean
    ProductImages?: ProductImagesListRelationFilter
    Categories?: XOR<CategoriesRelationFilter, CategoriesWhereInput>
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
    Variations?: VariationsListRelationFilter
  }, "Id">

  export type ProductsOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    ImgUrl?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    RestaurantId?: SortOrder
    CategoryId?: SortOrder
    Status?: SortOrder
    Active?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Products"> | number
    Name?: StringWithAggregatesFilter<"Products"> | string
    Description?: StringWithAggregatesFilter<"Products"> | string
    ImgUrl?: JsonWithAggregatesFilter<"Products">
    CreatedAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"Products"> | Date | string | null
    RestaurantId?: IntWithAggregatesFilter<"Products"> | number
    CategoryId?: IntWithAggregatesFilter<"Products"> | number
    Status?: BoolWithAggregatesFilter<"Products"> | boolean
    Active?: BoolWithAggregatesFilter<"Products"> | boolean
  }

  export type VariationsWhereInput = {
    AND?: VariationsWhereInput | VariationsWhereInput[]
    OR?: VariationsWhereInput[]
    NOT?: VariationsWhereInput | VariationsWhereInput[]
    Id?: IntFilter<"Variations"> | number
    Name?: StringFilter<"Variations"> | string
    Value?: StringFilter<"Variations"> | string
    CreatedAt?: DateTimeFilter<"Variations"> | Date | string
    UpdatedAt?: DateTimeFilter<"Variations"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Variations"> | Date | string | null
    ProductId?: IntFilter<"Variations"> | number
    RestaurantId?: IntFilter<"Variations"> | number
    Active?: BoolFilter<"Variations"> | boolean
    OrderProduct?: ProductOrderListRelationFilter
    Products?: XOR<ProductsRelationFilter, ProductsWhereInput>
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
  }

  export type VariationsOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    ProductId?: SortOrder
    RestaurantId?: SortOrder
    Active?: SortOrder
    OrderProduct?: ProductOrderOrderByRelationAggregateInput
    Products?: ProductsOrderByWithRelationInput
    Restaurant?: RestaurantsOrderByWithRelationInput
  }

  export type VariationsWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: VariationsWhereInput | VariationsWhereInput[]
    OR?: VariationsWhereInput[]
    NOT?: VariationsWhereInput | VariationsWhereInput[]
    Name?: StringFilter<"Variations"> | string
    Value?: StringFilter<"Variations"> | string
    CreatedAt?: DateTimeFilter<"Variations"> | Date | string
    UpdatedAt?: DateTimeFilter<"Variations"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Variations"> | Date | string | null
    ProductId?: IntFilter<"Variations"> | number
    RestaurantId?: IntFilter<"Variations"> | number
    Active?: BoolFilter<"Variations"> | boolean
    OrderProduct?: ProductOrderListRelationFilter
    Products?: XOR<ProductsRelationFilter, ProductsWhereInput>
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
  }, "Id">

  export type VariationsOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    ProductId?: SortOrder
    RestaurantId?: SortOrder
    Active?: SortOrder
    _count?: VariationsCountOrderByAggregateInput
    _avg?: VariationsAvgOrderByAggregateInput
    _max?: VariationsMaxOrderByAggregateInput
    _min?: VariationsMinOrderByAggregateInput
    _sum?: VariationsSumOrderByAggregateInput
  }

  export type VariationsScalarWhereWithAggregatesInput = {
    AND?: VariationsScalarWhereWithAggregatesInput | VariationsScalarWhereWithAggregatesInput[]
    OR?: VariationsScalarWhereWithAggregatesInput[]
    NOT?: VariationsScalarWhereWithAggregatesInput | VariationsScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Variations"> | number
    Name?: StringWithAggregatesFilter<"Variations"> | string
    Value?: StringWithAggregatesFilter<"Variations"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Variations"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Variations"> | Date | string
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"Variations"> | Date | string | null
    ProductId?: IntWithAggregatesFilter<"Variations"> | number
    RestaurantId?: IntWithAggregatesFilter<"Variations"> | number
    Active?: BoolWithAggregatesFilter<"Variations"> | boolean
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    Id?: IntFilter<"Categories"> | number
    Name?: StringFilter<"Categories"> | string
    CreatedAt?: DateTimeFilter<"Categories"> | Date | string
    UpdatedAt?: DateTimeFilter<"Categories"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Categories"> | Date | string | null
    RestaurantId?: IntFilter<"Categories"> | number
    Status?: BoolFilter<"Categories"> | boolean
    Active?: BoolFilter<"Categories"> | boolean
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
    Products?: ProductsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    RestaurantId?: SortOrder
    Status?: SortOrder
    Active?: SortOrder
    Restaurant?: RestaurantsOrderByWithRelationInput
    Products?: ProductsOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    Name?: StringFilter<"Categories"> | string
    CreatedAt?: DateTimeFilter<"Categories"> | Date | string
    UpdatedAt?: DateTimeFilter<"Categories"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Categories"> | Date | string | null
    RestaurantId?: IntFilter<"Categories"> | number
    Status?: BoolFilter<"Categories"> | boolean
    Active?: BoolFilter<"Categories"> | boolean
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
    Products?: ProductsListRelationFilter
  }, "Id">

  export type CategoriesOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    RestaurantId?: SortOrder
    Status?: SortOrder
    Active?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Categories"> | number
    Name?: StringWithAggregatesFilter<"Categories"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"Categories"> | Date | string | null
    RestaurantId?: IntWithAggregatesFilter<"Categories"> | number
    Status?: BoolWithAggregatesFilter<"Categories"> | boolean
    Active?: BoolWithAggregatesFilter<"Categories"> | boolean
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    Id?: IntFilter<"Order"> | number
    Status?: EnumStatusFilter<"Order"> | $Enums.Status
    CreatedAt?: DateTimeFilter<"Order"> | Date | string
    UpdatedAt?: DateTimeFilter<"Order"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    Paid?: BoolFilter<"Order"> | boolean
    Active?: BoolFilter<"Order"> | boolean
    UserId?: IntFilter<"Order"> | number
    TableId?: IntFilter<"Order"> | number
    RestaurantId?: IntFilter<"Order"> | number
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
    Table?: XOR<TableRelationFilter, TableWhereInput>
    Payments?: PaymentsListRelationFilter
    OrderProducts?: ProductOrderListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    Id?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    Paid?: SortOrder
    Active?: SortOrder
    UserId?: SortOrder
    TableId?: SortOrder
    RestaurantId?: SortOrder
    Restaurant?: RestaurantsOrderByWithRelationInput
    Table?: TableOrderByWithRelationInput
    Payments?: PaymentsOrderByRelationAggregateInput
    OrderProducts?: ProductOrderOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    Status?: EnumStatusFilter<"Order"> | $Enums.Status
    CreatedAt?: DateTimeFilter<"Order"> | Date | string
    UpdatedAt?: DateTimeFilter<"Order"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    Paid?: BoolFilter<"Order"> | boolean
    Active?: BoolFilter<"Order"> | boolean
    UserId?: IntFilter<"Order"> | number
    TableId?: IntFilter<"Order"> | number
    RestaurantId?: IntFilter<"Order"> | number
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
    Table?: XOR<TableRelationFilter, TableWhereInput>
    Payments?: PaymentsListRelationFilter
    OrderProducts?: ProductOrderListRelationFilter
  }, "Id">

  export type OrderOrderByWithAggregationInput = {
    Id?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    Paid?: SortOrder
    Active?: SortOrder
    UserId?: SortOrder
    TableId?: SortOrder
    RestaurantId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Order"> | number
    Status?: EnumStatusWithAggregatesFilter<"Order"> | $Enums.Status
    CreatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    Paid?: BoolWithAggregatesFilter<"Order"> | boolean
    Active?: BoolWithAggregatesFilter<"Order"> | boolean
    UserId?: IntWithAggregatesFilter<"Order"> | number
    TableId?: IntWithAggregatesFilter<"Order"> | number
    RestaurantId?: IntWithAggregatesFilter<"Order"> | number
  }

  export type ProductOrderWhereInput = {
    AND?: ProductOrderWhereInput | ProductOrderWhereInput[]
    OR?: ProductOrderWhereInput[]
    NOT?: ProductOrderWhereInput | ProductOrderWhereInput[]
    Id?: IntFilter<"ProductOrder"> | number
    Quantity?: IntFilter<"ProductOrder"> | number
    OrderId?: IntFilter<"ProductOrder"> | number
    CreatedAt?: DateTimeFilter<"ProductOrder"> | Date | string
    UpdatedAt?: DateTimeFilter<"ProductOrder"> | Date | string
    VariationId?: IntFilter<"ProductOrder"> | number
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
    Variation?: XOR<VariationsRelationFilter, VariationsWhereInput>
  }

  export type ProductOrderOrderByWithRelationInput = {
    Id?: SortOrder
    Quantity?: SortOrder
    OrderId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    VariationId?: SortOrder
    Order?: OrderOrderByWithRelationInput
    Variation?: VariationsOrderByWithRelationInput
  }

  export type ProductOrderWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ProductOrderWhereInput | ProductOrderWhereInput[]
    OR?: ProductOrderWhereInput[]
    NOT?: ProductOrderWhereInput | ProductOrderWhereInput[]
    Quantity?: IntFilter<"ProductOrder"> | number
    OrderId?: IntFilter<"ProductOrder"> | number
    CreatedAt?: DateTimeFilter<"ProductOrder"> | Date | string
    UpdatedAt?: DateTimeFilter<"ProductOrder"> | Date | string
    VariationId?: IntFilter<"ProductOrder"> | number
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
    Variation?: XOR<VariationsRelationFilter, VariationsWhereInput>
  }, "Id">

  export type ProductOrderOrderByWithAggregationInput = {
    Id?: SortOrder
    Quantity?: SortOrder
    OrderId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    VariationId?: SortOrder
    _count?: ProductOrderCountOrderByAggregateInput
    _avg?: ProductOrderAvgOrderByAggregateInput
    _max?: ProductOrderMaxOrderByAggregateInput
    _min?: ProductOrderMinOrderByAggregateInput
    _sum?: ProductOrderSumOrderByAggregateInput
  }

  export type ProductOrderScalarWhereWithAggregatesInput = {
    AND?: ProductOrderScalarWhereWithAggregatesInput | ProductOrderScalarWhereWithAggregatesInput[]
    OR?: ProductOrderScalarWhereWithAggregatesInput[]
    NOT?: ProductOrderScalarWhereWithAggregatesInput | ProductOrderScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"ProductOrder"> | number
    Quantity?: IntWithAggregatesFilter<"ProductOrder"> | number
    OrderId?: IntWithAggregatesFilter<"ProductOrder"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"ProductOrder"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"ProductOrder"> | Date | string
    VariationId?: IntWithAggregatesFilter<"ProductOrder"> | number
  }

  export type ProductImagesWhereInput = {
    AND?: ProductImagesWhereInput | ProductImagesWhereInput[]
    OR?: ProductImagesWhereInput[]
    NOT?: ProductImagesWhereInput | ProductImagesWhereInput[]
    Id?: IntFilter<"ProductImages"> | number
    Name?: StringFilter<"ProductImages"> | string
    ImagePath?: StringFilter<"ProductImages"> | string
    Size?: IntFilter<"ProductImages"> | number
    RestaurantId?: IntFilter<"ProductImages"> | number
    CreatedAt?: DateTimeFilter<"ProductImages"> | Date | string
    UpdatedAt?: DateTimeFilter<"ProductImages"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"ProductImages"> | Date | string | null
    Active?: BoolFilter<"ProductImages"> | boolean
    productsId?: IntNullableFilter<"ProductImages"> | number | null
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
    Products?: XOR<ProductsNullableRelationFilter, ProductsWhereInput> | null
  }

  export type ProductImagesOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    ImagePath?: SortOrder
    Size?: SortOrder
    RestaurantId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    Active?: SortOrder
    productsId?: SortOrderInput | SortOrder
    Restaurant?: RestaurantsOrderByWithRelationInput
    Products?: ProductsOrderByWithRelationInput
  }

  export type ProductImagesWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ProductImagesWhereInput | ProductImagesWhereInput[]
    OR?: ProductImagesWhereInput[]
    NOT?: ProductImagesWhereInput | ProductImagesWhereInput[]
    Name?: StringFilter<"ProductImages"> | string
    ImagePath?: StringFilter<"ProductImages"> | string
    Size?: IntFilter<"ProductImages"> | number
    RestaurantId?: IntFilter<"ProductImages"> | number
    CreatedAt?: DateTimeFilter<"ProductImages"> | Date | string
    UpdatedAt?: DateTimeFilter<"ProductImages"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"ProductImages"> | Date | string | null
    Active?: BoolFilter<"ProductImages"> | boolean
    productsId?: IntNullableFilter<"ProductImages"> | number | null
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
    Products?: XOR<ProductsNullableRelationFilter, ProductsWhereInput> | null
  }, "Id">

  export type ProductImagesOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    ImagePath?: SortOrder
    Size?: SortOrder
    RestaurantId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    Active?: SortOrder
    productsId?: SortOrderInput | SortOrder
    _count?: ProductImagesCountOrderByAggregateInput
    _avg?: ProductImagesAvgOrderByAggregateInput
    _max?: ProductImagesMaxOrderByAggregateInput
    _min?: ProductImagesMinOrderByAggregateInput
    _sum?: ProductImagesSumOrderByAggregateInput
  }

  export type ProductImagesScalarWhereWithAggregatesInput = {
    AND?: ProductImagesScalarWhereWithAggregatesInput | ProductImagesScalarWhereWithAggregatesInput[]
    OR?: ProductImagesScalarWhereWithAggregatesInput[]
    NOT?: ProductImagesScalarWhereWithAggregatesInput | ProductImagesScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"ProductImages"> | number
    Name?: StringWithAggregatesFilter<"ProductImages"> | string
    ImagePath?: StringWithAggregatesFilter<"ProductImages"> | string
    Size?: IntWithAggregatesFilter<"ProductImages"> | number
    RestaurantId?: IntWithAggregatesFilter<"ProductImages"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"ProductImages"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"ProductImages"> | Date | string
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"ProductImages"> | Date | string | null
    Active?: BoolWithAggregatesFilter<"ProductImages"> | boolean
    productsId?: IntNullableWithAggregatesFilter<"ProductImages"> | number | null
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    Id?: IntFilter<"Table"> | number
    Status?: BoolFilter<"Table"> | boolean
    Number?: IntFilter<"Table"> | number
    Barcode?: StringFilter<"Table"> | string
    CreatedAt?: DateTimeFilter<"Table"> | Date | string
    UpdatedAt?: DateTimeFilter<"Table"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Table"> | Date | string | null
    Active?: BoolFilter<"Table"> | boolean
    RestaurantId?: IntFilter<"Table"> | number
    Order?: OrderListRelationFilter
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
  }

  export type TableOrderByWithRelationInput = {
    Id?: SortOrder
    Status?: SortOrder
    Number?: SortOrder
    Barcode?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    Active?: SortOrder
    RestaurantId?: SortOrder
    Order?: OrderOrderByRelationAggregateInput
    Restaurant?: RestaurantsOrderByWithRelationInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    Status?: BoolFilter<"Table"> | boolean
    Number?: IntFilter<"Table"> | number
    Barcode?: StringFilter<"Table"> | string
    CreatedAt?: DateTimeFilter<"Table"> | Date | string
    UpdatedAt?: DateTimeFilter<"Table"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Table"> | Date | string | null
    Active?: BoolFilter<"Table"> | boolean
    RestaurantId?: IntFilter<"Table"> | number
    Order?: OrderListRelationFilter
    Restaurant?: XOR<RestaurantsRelationFilter, RestaurantsWhereInput>
  }, "Id">

  export type TableOrderByWithAggregationInput = {
    Id?: SortOrder
    Status?: SortOrder
    Number?: SortOrder
    Barcode?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    Active?: SortOrder
    RestaurantId?: SortOrder
    _count?: TableCountOrderByAggregateInput
    _avg?: TableAvgOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
    _sum?: TableSumOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Table"> | number
    Status?: BoolWithAggregatesFilter<"Table"> | boolean
    Number?: IntWithAggregatesFilter<"Table"> | number
    Barcode?: StringWithAggregatesFilter<"Table"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"Table"> | Date | string | null
    Active?: BoolWithAggregatesFilter<"Table"> | boolean
    RestaurantId?: IntWithAggregatesFilter<"Table"> | number
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    Id?: IntFilter<"Payments"> | number
    OrderId?: IntFilter<"Payments"> | number
    Amount?: IntFilter<"Payments"> | number
    PaymentType?: StringFilter<"Payments"> | string
    CreatedAt?: DateTimeFilter<"Payments"> | Date | string
    UpdatedAt?: DateTimeFilter<"Payments"> | Date | string
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    Amount?: SortOrder
    PaymentType?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    Order?: OrderOrderByWithRelationInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    OrderId?: IntFilter<"Payments"> | number
    Amount?: IntFilter<"Payments"> | number
    PaymentType?: StringFilter<"Payments"> | string
    CreatedAt?: DateTimeFilter<"Payments"> | Date | string
    UpdatedAt?: DateTimeFilter<"Payments"> | Date | string
    Order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "Id">

  export type PaymentsOrderByWithAggregationInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    Amount?: SortOrder
    PaymentType?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Payments"> | number
    OrderId?: IntWithAggregatesFilter<"Payments"> | number
    Amount?: IntWithAggregatesFilter<"Payments"> | number
    PaymentType?: StringWithAggregatesFilter<"Payments"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type RestaurantsCreateInput = {
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesCreateNestedManyWithoutRestaurantInput
    Order?: OrderCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesCreateNestedManyWithoutRestaurantInput
    Products?: ProductsCreateNestedManyWithoutRestaurantInput
    Table?: TableCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsUncheckedCreateInput = {
    Id?: number
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesUncheckedCreateNestedManyWithoutRestaurantInput
    Order?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesUncheckedCreateNestedManyWithoutRestaurantInput
    Products?: ProductsUncheckedCreateNestedManyWithoutRestaurantInput
    Table?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUpdateManyWithoutRestaurantNestedInput
    Order?: OrderUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUpdateManyWithoutRestaurantNestedInput
    Table?: TableUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    Order?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUncheckedUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUncheckedUpdateManyWithoutRestaurantNestedInput
    Table?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantsCreateManyInput = {
    Id?: number
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
  }

  export type RestaurantsUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RestaurantsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsCreateInput = {
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Status?: boolean
    Active?: boolean
    ProductImages?: ProductImagesCreateNestedManyWithoutProductsInput
    Categories: CategoriesCreateNestedOneWithoutProductsInput
    Restaurant: RestaurantsCreateNestedOneWithoutProductsInput
    Variations?: VariationsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateInput = {
    Id?: number
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    RestaurantId: number
    CategoryId: number
    Status?: boolean
    Active?: boolean
    ProductImages?: ProductImagesUncheckedCreateNestedManyWithoutProductsInput
    Variations?: VariationsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    ProductImages?: ProductImagesUpdateManyWithoutProductsNestedInput
    Categories?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    Restaurant?: RestaurantsUpdateOneRequiredWithoutProductsNestedInput
    Variations?: VariationsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RestaurantId?: IntFieldUpdateOperationsInput | number
    CategoryId?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    ProductImages?: ProductImagesUncheckedUpdateManyWithoutProductsNestedInput
    Variations?: VariationsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsCreateManyInput = {
    Id?: number
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    RestaurantId: number
    CategoryId: number
    Status?: boolean
    Active?: boolean
  }

  export type ProductsUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RestaurantId?: IntFieldUpdateOperationsInput | number
    CategoryId?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VariationsCreateInput = {
    Name: string
    Value: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    OrderProduct?: ProductOrderCreateNestedManyWithoutVariationInput
    Products: ProductsCreateNestedOneWithoutVariationsInput
    Restaurant: RestaurantsCreateNestedOneWithoutVariationsInput
  }

  export type VariationsUncheckedCreateInput = {
    Id?: number
    Name: string
    Value: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    ProductId: number
    RestaurantId: number
    Active?: boolean
    OrderProduct?: ProductOrderUncheckedCreateNestedManyWithoutVariationInput
  }

  export type VariationsUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    OrderProduct?: ProductOrderUpdateManyWithoutVariationNestedInput
    Products?: ProductsUpdateOneRequiredWithoutVariationsNestedInput
    Restaurant?: RestaurantsUpdateOneRequiredWithoutVariationsNestedInput
  }

  export type VariationsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductId?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    OrderProduct?: ProductOrderUncheckedUpdateManyWithoutVariationNestedInput
  }

  export type VariationsCreateManyInput = {
    Id?: number
    Name: string
    Value: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    ProductId: number
    RestaurantId: number
    Active?: boolean
  }

  export type VariationsUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VariationsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductId?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriesCreateInput = {
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Status?: boolean
    Active?: boolean
    Restaurant: RestaurantsCreateNestedOneWithoutCategoriesInput
    Products?: ProductsCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateInput = {
    Id?: number
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    RestaurantId: number
    Status?: boolean
    Active?: boolean
    Products?: ProductsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    Restaurant?: RestaurantsUpdateOneRequiredWithoutCategoriesNestedInput
    Products?: ProductsUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    Products?: ProductsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesCreateManyInput = {
    Id?: number
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    RestaurantId: number
    Status?: boolean
    Active?: boolean
  }

  export type CategoriesUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriesUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderCreateInput = {
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    Restaurant: RestaurantsCreateNestedOneWithoutOrderInput
    Table: TableCreateNestedOneWithoutOrderInput
    Payments?: PaymentsCreateNestedManyWithoutOrderInput
    OrderProducts?: ProductOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    Id?: number
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    TableId: number
    RestaurantId: number
    Payments?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
    OrderProducts?: ProductOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    Restaurant?: RestaurantsUpdateOneRequiredWithoutOrderNestedInput
    Table?: TableUpdateOneRequiredWithoutOrderNestedInput
    Payments?: PaymentsUpdateManyWithoutOrderNestedInput
    OrderProducts?: ProductOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    TableId?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Payments?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
    OrderProducts?: ProductOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    Id?: number
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    TableId: number
    RestaurantId: number
  }

  export type OrderUpdateManyMutationInput = {
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    TableId?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductOrderCreateInput = {
    Quantity: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Order: OrderCreateNestedOneWithoutOrderProductsInput
    Variation: VariationsCreateNestedOneWithoutOrderProductInput
  }

  export type ProductOrderUncheckedCreateInput = {
    Id?: number
    Quantity: number
    OrderId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VariationId: number
  }

  export type ProductOrderUpdateInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateOneRequiredWithoutOrderProductsNestedInput
    Variation?: VariationsUpdateOneRequiredWithoutOrderProductNestedInput
  }

  export type ProductOrderUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    OrderId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VariationId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductOrderCreateManyInput = {
    Id?: number
    Quantity: number
    OrderId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VariationId: number
  }

  export type ProductOrderUpdateManyMutationInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOrderUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    OrderId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VariationId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImagesCreateInput = {
    Name: string
    ImagePath: string
    Size: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    Restaurant: RestaurantsCreateNestedOneWithoutProductImagesInput
    Products?: ProductsCreateNestedOneWithoutProductImagesInput
  }

  export type ProductImagesUncheckedCreateInput = {
    Id?: number
    Name: string
    ImagePath: string
    Size: number
    RestaurantId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    productsId?: number | null
  }

  export type ProductImagesUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ImagePath?: StringFieldUpdateOperationsInput | string
    Size?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    Restaurant?: RestaurantsUpdateOneRequiredWithoutProductImagesNestedInput
    Products?: ProductsUpdateOneWithoutProductImagesNestedInput
  }

  export type ProductImagesUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ImagePath?: StringFieldUpdateOperationsInput | string
    Size?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    productsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductImagesCreateManyInput = {
    Id?: number
    Name: string
    ImagePath: string
    Size: number
    RestaurantId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    productsId?: number | null
  }

  export type ProductImagesUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ImagePath?: StringFieldUpdateOperationsInput | string
    Size?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductImagesUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ImagePath?: StringFieldUpdateOperationsInput | string
    Size?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    productsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TableCreateInput = {
    Status?: boolean
    Number: number
    Barcode: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    Order?: OrderCreateNestedManyWithoutTableInput
    Restaurant: RestaurantsCreateNestedOneWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    Id?: number
    Status?: boolean
    Number: number
    Barcode: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    RestaurantId: number
    Order?: OrderUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    Status?: BoolFieldUpdateOperationsInput | boolean
    Number?: IntFieldUpdateOperationsInput | number
    Barcode?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    Order?: OrderUpdateManyWithoutTableNestedInput
    Restaurant?: RestaurantsUpdateOneRequiredWithoutTableNestedInput
  }

  export type TableUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Number?: IntFieldUpdateOperationsInput | number
    Barcode?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Order?: OrderUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    Id?: number
    Status?: boolean
    Number: number
    Barcode: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    RestaurantId: number
  }

  export type TableUpdateManyMutationInput = {
    Status?: BoolFieldUpdateOperationsInput | boolean
    Number?: IntFieldUpdateOperationsInput | number
    Barcode?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TableUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Number?: IntFieldUpdateOperationsInput | number
    Barcode?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    RestaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentsCreateInput = {
    Amount: number
    PaymentType: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Order: OrderCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateInput = {
    Id?: number
    OrderId: number
    Amount: number
    PaymentType: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type PaymentsUpdateInput = {
    Amount?: IntFieldUpdateOperationsInput | number
    PaymentType?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    OrderId?: IntFieldUpdateOperationsInput | number
    Amount?: IntFieldUpdateOperationsInput | number
    PaymentType?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyInput = {
    Id?: number
    OrderId: number
    Amount: number
    PaymentType: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    Amount?: IntFieldUpdateOperationsInput | number
    PaymentType?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    OrderId?: IntFieldUpdateOperationsInput | number
    Amount?: IntFieldUpdateOperationsInput | number
    PaymentType?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CategoriesListRelationFilter = {
    every?: CategoriesWhereInput
    some?: CategoriesWhereInput
    none?: CategoriesWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ProductImagesListRelationFilter = {
    every?: ProductImagesWhereInput
    some?: ProductImagesWhereInput
    none?: ProductImagesWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type TableListRelationFilter = {
    every?: TableWhereInput
    some?: TableWhereInput
    none?: TableWhereInput
  }

  export type VariationsListRelationFilter = {
    every?: VariationsWhereInput
    some?: VariationsWhereInput
    none?: VariationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantsCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    RestaurantId?: SortOrder
    Active?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
  }

  export type RestaurantsAvgOrderByAggregateInput = {
    Id?: SortOrder
    RestaurantId?: SortOrder
  }

  export type RestaurantsMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    RestaurantId?: SortOrder
    Active?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
  }

  export type RestaurantsMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    RestaurantId?: SortOrder
    Active?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
  }

  export type RestaurantsSumOrderByAggregateInput = {
    Id?: SortOrder
    RestaurantId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CategoriesRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type RestaurantsRelationFilter = {
    is?: RestaurantsWhereInput
    isNot?: RestaurantsWhereInput
  }

  export type ProductsCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    ImgUrl?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    RestaurantId?: SortOrder
    CategoryId?: SortOrder
    Status?: SortOrder
    Active?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    Id?: SortOrder
    RestaurantId?: SortOrder
    CategoryId?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    RestaurantId?: SortOrder
    CategoryId?: SortOrder
    Status?: SortOrder
    Active?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    RestaurantId?: SortOrder
    CategoryId?: SortOrder
    Status?: SortOrder
    Active?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    Id?: SortOrder
    RestaurantId?: SortOrder
    CategoryId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ProductOrderListRelationFilter = {
    every?: ProductOrderWhereInput
    some?: ProductOrderWhereInput
    none?: ProductOrderWhereInput
  }

  export type ProductsRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type ProductOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariationsCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    ProductId?: SortOrder
    RestaurantId?: SortOrder
    Active?: SortOrder
  }

  export type VariationsAvgOrderByAggregateInput = {
    Id?: SortOrder
    ProductId?: SortOrder
    RestaurantId?: SortOrder
  }

  export type VariationsMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    ProductId?: SortOrder
    RestaurantId?: SortOrder
    Active?: SortOrder
  }

  export type VariationsMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    ProductId?: SortOrder
    RestaurantId?: SortOrder
    Active?: SortOrder
  }

  export type VariationsSumOrderByAggregateInput = {
    Id?: SortOrder
    ProductId?: SortOrder
    RestaurantId?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    RestaurantId?: SortOrder
    Status?: SortOrder
    Active?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    Id?: SortOrder
    RestaurantId?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    RestaurantId?: SortOrder
    Status?: SortOrder
    Active?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    RestaurantId?: SortOrder
    Status?: SortOrder
    Active?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    Id?: SortOrder
    RestaurantId?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type TableRelationFilter = {
    is?: TableWhereInput
    isNot?: TableWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: PaymentsWhereInput
    some?: PaymentsWhereInput
    none?: PaymentsWhereInput
  }

  export type PaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    Id?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    Paid?: SortOrder
    Active?: SortOrder
    UserId?: SortOrder
    TableId?: SortOrder
    RestaurantId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    TableId?: SortOrder
    RestaurantId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    Id?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    Paid?: SortOrder
    Active?: SortOrder
    UserId?: SortOrder
    TableId?: SortOrder
    RestaurantId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    Id?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    Paid?: SortOrder
    Active?: SortOrder
    UserId?: SortOrder
    TableId?: SortOrder
    RestaurantId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    TableId?: SortOrder
    RestaurantId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type VariationsRelationFilter = {
    is?: VariationsWhereInput
    isNot?: VariationsWhereInput
  }

  export type ProductOrderCountOrderByAggregateInput = {
    Id?: SortOrder
    Quantity?: SortOrder
    OrderId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    VariationId?: SortOrder
  }

  export type ProductOrderAvgOrderByAggregateInput = {
    Id?: SortOrder
    Quantity?: SortOrder
    OrderId?: SortOrder
    VariationId?: SortOrder
  }

  export type ProductOrderMaxOrderByAggregateInput = {
    Id?: SortOrder
    Quantity?: SortOrder
    OrderId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    VariationId?: SortOrder
  }

  export type ProductOrderMinOrderByAggregateInput = {
    Id?: SortOrder
    Quantity?: SortOrder
    OrderId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    VariationId?: SortOrder
  }

  export type ProductOrderSumOrderByAggregateInput = {
    Id?: SortOrder
    Quantity?: SortOrder
    OrderId?: SortOrder
    VariationId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductsNullableRelationFilter = {
    is?: ProductsWhereInput | null
    isNot?: ProductsWhereInput | null
  }

  export type ProductImagesCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    ImagePath?: SortOrder
    Size?: SortOrder
    RestaurantId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    Active?: SortOrder
    productsId?: SortOrder
  }

  export type ProductImagesAvgOrderByAggregateInput = {
    Id?: SortOrder
    Size?: SortOrder
    RestaurantId?: SortOrder
    productsId?: SortOrder
  }

  export type ProductImagesMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    ImagePath?: SortOrder
    Size?: SortOrder
    RestaurantId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    Active?: SortOrder
    productsId?: SortOrder
  }

  export type ProductImagesMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    ImagePath?: SortOrder
    Size?: SortOrder
    RestaurantId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    Active?: SortOrder
    productsId?: SortOrder
  }

  export type ProductImagesSumOrderByAggregateInput = {
    Id?: SortOrder
    Size?: SortOrder
    RestaurantId?: SortOrder
    productsId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type TableCountOrderByAggregateInput = {
    Id?: SortOrder
    Status?: SortOrder
    Number?: SortOrder
    Barcode?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    Active?: SortOrder
    RestaurantId?: SortOrder
  }

  export type TableAvgOrderByAggregateInput = {
    Id?: SortOrder
    Number?: SortOrder
    RestaurantId?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    Id?: SortOrder
    Status?: SortOrder
    Number?: SortOrder
    Barcode?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    Active?: SortOrder
    RestaurantId?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    Id?: SortOrder
    Status?: SortOrder
    Number?: SortOrder
    Barcode?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
    Active?: SortOrder
    RestaurantId?: SortOrder
  }

  export type TableSumOrderByAggregateInput = {
    Id?: SortOrder
    Number?: SortOrder
    RestaurantId?: SortOrder
  }

  export type PaymentsCountOrderByAggregateInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    Amount?: SortOrder
    PaymentType?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    Amount?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    Amount?: SortOrder
    PaymentType?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    Amount?: SortOrder
    PaymentType?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    Id?: SortOrder
    OrderId?: SortOrder
    Amount?: SortOrder
  }

  export type CategoriesCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<CategoriesCreateWithoutRestaurantInput, CategoriesUncheckedCreateWithoutRestaurantInput> | CategoriesCreateWithoutRestaurantInput[] | CategoriesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutRestaurantInput | CategoriesCreateOrConnectWithoutRestaurantInput[]
    createMany?: CategoriesCreateManyRestaurantInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProductImagesCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<ProductImagesCreateWithoutRestaurantInput, ProductImagesUncheckedCreateWithoutRestaurantInput> | ProductImagesCreateWithoutRestaurantInput[] | ProductImagesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutRestaurantInput | ProductImagesCreateOrConnectWithoutRestaurantInput[]
    createMany?: ProductImagesCreateManyRestaurantInputEnvelope
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
  }

  export type ProductsCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<ProductsCreateWithoutRestaurantInput, ProductsUncheckedCreateWithoutRestaurantInput> | ProductsCreateWithoutRestaurantInput[] | ProductsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutRestaurantInput | ProductsCreateOrConnectWithoutRestaurantInput[]
    createMany?: ProductsCreateManyRestaurantInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type TableCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type VariationsCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<VariationsCreateWithoutRestaurantInput, VariationsUncheckedCreateWithoutRestaurantInput> | VariationsCreateWithoutRestaurantInput[] | VariationsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: VariationsCreateOrConnectWithoutRestaurantInput | VariationsCreateOrConnectWithoutRestaurantInput[]
    createMany?: VariationsCreateManyRestaurantInputEnvelope
    connect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
  }

  export type CategoriesUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<CategoriesCreateWithoutRestaurantInput, CategoriesUncheckedCreateWithoutRestaurantInput> | CategoriesCreateWithoutRestaurantInput[] | CategoriesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutRestaurantInput | CategoriesCreateOrConnectWithoutRestaurantInput[]
    createMany?: CategoriesCreateManyRestaurantInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProductImagesUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<ProductImagesCreateWithoutRestaurantInput, ProductImagesUncheckedCreateWithoutRestaurantInput> | ProductImagesCreateWithoutRestaurantInput[] | ProductImagesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutRestaurantInput | ProductImagesCreateOrConnectWithoutRestaurantInput[]
    createMany?: ProductImagesCreateManyRestaurantInputEnvelope
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<ProductsCreateWithoutRestaurantInput, ProductsUncheckedCreateWithoutRestaurantInput> | ProductsCreateWithoutRestaurantInput[] | ProductsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutRestaurantInput | ProductsCreateOrConnectWithoutRestaurantInput[]
    createMany?: ProductsCreateManyRestaurantInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type VariationsUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<VariationsCreateWithoutRestaurantInput, VariationsUncheckedCreateWithoutRestaurantInput> | VariationsCreateWithoutRestaurantInput[] | VariationsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: VariationsCreateOrConnectWithoutRestaurantInput | VariationsCreateOrConnectWithoutRestaurantInput[]
    createMany?: VariationsCreateManyRestaurantInputEnvelope
    connect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CategoriesUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<CategoriesCreateWithoutRestaurantInput, CategoriesUncheckedCreateWithoutRestaurantInput> | CategoriesCreateWithoutRestaurantInput[] | CategoriesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutRestaurantInput | CategoriesCreateOrConnectWithoutRestaurantInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutRestaurantInput | CategoriesUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: CategoriesCreateManyRestaurantInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutRestaurantInput | CategoriesUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutRestaurantInput | CategoriesUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductImagesUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<ProductImagesCreateWithoutRestaurantInput, ProductImagesUncheckedCreateWithoutRestaurantInput> | ProductImagesCreateWithoutRestaurantInput[] | ProductImagesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutRestaurantInput | ProductImagesCreateOrConnectWithoutRestaurantInput[]
    upsert?: ProductImagesUpsertWithWhereUniqueWithoutRestaurantInput | ProductImagesUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ProductImagesCreateManyRestaurantInputEnvelope
    set?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    disconnect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    delete?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    update?: ProductImagesUpdateWithWhereUniqueWithoutRestaurantInput | ProductImagesUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: ProductImagesUpdateManyWithWhereWithoutRestaurantInput | ProductImagesUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
  }

  export type ProductsUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<ProductsCreateWithoutRestaurantInput, ProductsUncheckedCreateWithoutRestaurantInput> | ProductsCreateWithoutRestaurantInput[] | ProductsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutRestaurantInput | ProductsCreateOrConnectWithoutRestaurantInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutRestaurantInput | ProductsUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ProductsCreateManyRestaurantInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutRestaurantInput | ProductsUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutRestaurantInput | ProductsUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type TableUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutRestaurantInput | TableUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutRestaurantInput | TableUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: TableUpdateManyWithWhereWithoutRestaurantInput | TableUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type VariationsUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<VariationsCreateWithoutRestaurantInput, VariationsUncheckedCreateWithoutRestaurantInput> | VariationsCreateWithoutRestaurantInput[] | VariationsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: VariationsCreateOrConnectWithoutRestaurantInput | VariationsCreateOrConnectWithoutRestaurantInput[]
    upsert?: VariationsUpsertWithWhereUniqueWithoutRestaurantInput | VariationsUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: VariationsCreateManyRestaurantInputEnvelope
    set?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    disconnect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    delete?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    connect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    update?: VariationsUpdateWithWhereUniqueWithoutRestaurantInput | VariationsUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: VariationsUpdateManyWithWhereWithoutRestaurantInput | VariationsUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: VariationsScalarWhereInput | VariationsScalarWhereInput[]
  }

  export type CategoriesUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<CategoriesCreateWithoutRestaurantInput, CategoriesUncheckedCreateWithoutRestaurantInput> | CategoriesCreateWithoutRestaurantInput[] | CategoriesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutRestaurantInput | CategoriesCreateOrConnectWithoutRestaurantInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutRestaurantInput | CategoriesUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: CategoriesCreateManyRestaurantInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutRestaurantInput | CategoriesUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutRestaurantInput | CategoriesUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductImagesUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<ProductImagesCreateWithoutRestaurantInput, ProductImagesUncheckedCreateWithoutRestaurantInput> | ProductImagesCreateWithoutRestaurantInput[] | ProductImagesUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutRestaurantInput | ProductImagesCreateOrConnectWithoutRestaurantInput[]
    upsert?: ProductImagesUpsertWithWhereUniqueWithoutRestaurantInput | ProductImagesUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ProductImagesCreateManyRestaurantInputEnvelope
    set?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    disconnect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    delete?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    update?: ProductImagesUpdateWithWhereUniqueWithoutRestaurantInput | ProductImagesUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: ProductImagesUpdateManyWithWhereWithoutRestaurantInput | ProductImagesUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<ProductsCreateWithoutRestaurantInput, ProductsUncheckedCreateWithoutRestaurantInput> | ProductsCreateWithoutRestaurantInput[] | ProductsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutRestaurantInput | ProductsCreateOrConnectWithoutRestaurantInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutRestaurantInput | ProductsUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ProductsCreateManyRestaurantInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutRestaurantInput | ProductsUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutRestaurantInput | ProductsUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type TableUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutRestaurantInput | TableUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutRestaurantInput | TableUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: TableUpdateManyWithWhereWithoutRestaurantInput | TableUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type VariationsUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<VariationsCreateWithoutRestaurantInput, VariationsUncheckedCreateWithoutRestaurantInput> | VariationsCreateWithoutRestaurantInput[] | VariationsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: VariationsCreateOrConnectWithoutRestaurantInput | VariationsCreateOrConnectWithoutRestaurantInput[]
    upsert?: VariationsUpsertWithWhereUniqueWithoutRestaurantInput | VariationsUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: VariationsCreateManyRestaurantInputEnvelope
    set?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    disconnect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    delete?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    connect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    update?: VariationsUpdateWithWhereUniqueWithoutRestaurantInput | VariationsUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: VariationsUpdateManyWithWhereWithoutRestaurantInput | VariationsUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: VariationsScalarWhereInput | VariationsScalarWhereInput[]
  }

  export type ProductImagesCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput> | ProductImagesCreateWithoutProductsInput[] | ProductImagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductsInput | ProductImagesCreateOrConnectWithoutProductsInput[]
    createMany?: ProductImagesCreateManyProductsInputEnvelope
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
  }

  export type CategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type RestaurantsCreateNestedOneWithoutProductsInput = {
    create?: XOR<RestaurantsCreateWithoutProductsInput, RestaurantsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutProductsInput
    connect?: RestaurantsWhereUniqueInput
  }

  export type VariationsCreateNestedManyWithoutProductsInput = {
    create?: XOR<VariationsCreateWithoutProductsInput, VariationsUncheckedCreateWithoutProductsInput> | VariationsCreateWithoutProductsInput[] | VariationsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: VariationsCreateOrConnectWithoutProductsInput | VariationsCreateOrConnectWithoutProductsInput[]
    createMany?: VariationsCreateManyProductsInputEnvelope
    connect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
  }

  export type ProductImagesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput> | ProductImagesCreateWithoutProductsInput[] | ProductImagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductsInput | ProductImagesCreateOrConnectWithoutProductsInput[]
    createMany?: ProductImagesCreateManyProductsInputEnvelope
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
  }

  export type VariationsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<VariationsCreateWithoutProductsInput, VariationsUncheckedCreateWithoutProductsInput> | VariationsCreateWithoutProductsInput[] | VariationsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: VariationsCreateOrConnectWithoutProductsInput | VariationsCreateOrConnectWithoutProductsInput[]
    createMany?: VariationsCreateManyProductsInputEnvelope
    connect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
  }

  export type ProductImagesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput> | ProductImagesCreateWithoutProductsInput[] | ProductImagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductsInput | ProductImagesCreateOrConnectWithoutProductsInput[]
    upsert?: ProductImagesUpsertWithWhereUniqueWithoutProductsInput | ProductImagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductImagesCreateManyProductsInputEnvelope
    set?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    disconnect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    delete?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    update?: ProductImagesUpdateWithWhereUniqueWithoutProductsInput | ProductImagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductImagesUpdateManyWithWhereWithoutProductsInput | ProductImagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
  }

  export type CategoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    upsert?: CategoriesUpsertWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProductsInput, CategoriesUpdateWithoutProductsInput>, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type RestaurantsUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<RestaurantsCreateWithoutProductsInput, RestaurantsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutProductsInput
    upsert?: RestaurantsUpsertWithoutProductsInput
    connect?: RestaurantsWhereUniqueInput
    update?: XOR<XOR<RestaurantsUpdateToOneWithWhereWithoutProductsInput, RestaurantsUpdateWithoutProductsInput>, RestaurantsUncheckedUpdateWithoutProductsInput>
  }

  export type VariationsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<VariationsCreateWithoutProductsInput, VariationsUncheckedCreateWithoutProductsInput> | VariationsCreateWithoutProductsInput[] | VariationsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: VariationsCreateOrConnectWithoutProductsInput | VariationsCreateOrConnectWithoutProductsInput[]
    upsert?: VariationsUpsertWithWhereUniqueWithoutProductsInput | VariationsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: VariationsCreateManyProductsInputEnvelope
    set?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    disconnect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    delete?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    connect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    update?: VariationsUpdateWithWhereUniqueWithoutProductsInput | VariationsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: VariationsUpdateManyWithWhereWithoutProductsInput | VariationsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: VariationsScalarWhereInput | VariationsScalarWhereInput[]
  }

  export type ProductImagesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput> | ProductImagesCreateWithoutProductsInput[] | ProductImagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductsInput | ProductImagesCreateOrConnectWithoutProductsInput[]
    upsert?: ProductImagesUpsertWithWhereUniqueWithoutProductsInput | ProductImagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductImagesCreateManyProductsInputEnvelope
    set?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    disconnect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    delete?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    update?: ProductImagesUpdateWithWhereUniqueWithoutProductsInput | ProductImagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductImagesUpdateManyWithWhereWithoutProductsInput | ProductImagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
  }

  export type VariationsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<VariationsCreateWithoutProductsInput, VariationsUncheckedCreateWithoutProductsInput> | VariationsCreateWithoutProductsInput[] | VariationsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: VariationsCreateOrConnectWithoutProductsInput | VariationsCreateOrConnectWithoutProductsInput[]
    upsert?: VariationsUpsertWithWhereUniqueWithoutProductsInput | VariationsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: VariationsCreateManyProductsInputEnvelope
    set?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    disconnect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    delete?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    connect?: VariationsWhereUniqueInput | VariationsWhereUniqueInput[]
    update?: VariationsUpdateWithWhereUniqueWithoutProductsInput | VariationsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: VariationsUpdateManyWithWhereWithoutProductsInput | VariationsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: VariationsScalarWhereInput | VariationsScalarWhereInput[]
  }

  export type ProductOrderCreateNestedManyWithoutVariationInput = {
    create?: XOR<ProductOrderCreateWithoutVariationInput, ProductOrderUncheckedCreateWithoutVariationInput> | ProductOrderCreateWithoutVariationInput[] | ProductOrderUncheckedCreateWithoutVariationInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutVariationInput | ProductOrderCreateOrConnectWithoutVariationInput[]
    createMany?: ProductOrderCreateManyVariationInputEnvelope
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
  }

  export type ProductsCreateNestedOneWithoutVariationsInput = {
    create?: XOR<ProductsCreateWithoutVariationsInput, ProductsUncheckedCreateWithoutVariationsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutVariationsInput
    connect?: ProductsWhereUniqueInput
  }

  export type RestaurantsCreateNestedOneWithoutVariationsInput = {
    create?: XOR<RestaurantsCreateWithoutVariationsInput, RestaurantsUncheckedCreateWithoutVariationsInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutVariationsInput
    connect?: RestaurantsWhereUniqueInput
  }

  export type ProductOrderUncheckedCreateNestedManyWithoutVariationInput = {
    create?: XOR<ProductOrderCreateWithoutVariationInput, ProductOrderUncheckedCreateWithoutVariationInput> | ProductOrderCreateWithoutVariationInput[] | ProductOrderUncheckedCreateWithoutVariationInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutVariationInput | ProductOrderCreateOrConnectWithoutVariationInput[]
    createMany?: ProductOrderCreateManyVariationInputEnvelope
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
  }

  export type ProductOrderUpdateManyWithoutVariationNestedInput = {
    create?: XOR<ProductOrderCreateWithoutVariationInput, ProductOrderUncheckedCreateWithoutVariationInput> | ProductOrderCreateWithoutVariationInput[] | ProductOrderUncheckedCreateWithoutVariationInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutVariationInput | ProductOrderCreateOrConnectWithoutVariationInput[]
    upsert?: ProductOrderUpsertWithWhereUniqueWithoutVariationInput | ProductOrderUpsertWithWhereUniqueWithoutVariationInput[]
    createMany?: ProductOrderCreateManyVariationInputEnvelope
    set?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    disconnect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    delete?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    update?: ProductOrderUpdateWithWhereUniqueWithoutVariationInput | ProductOrderUpdateWithWhereUniqueWithoutVariationInput[]
    updateMany?: ProductOrderUpdateManyWithWhereWithoutVariationInput | ProductOrderUpdateManyWithWhereWithoutVariationInput[]
    deleteMany?: ProductOrderScalarWhereInput | ProductOrderScalarWhereInput[]
  }

  export type ProductsUpdateOneRequiredWithoutVariationsNestedInput = {
    create?: XOR<ProductsCreateWithoutVariationsInput, ProductsUncheckedCreateWithoutVariationsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutVariationsInput
    upsert?: ProductsUpsertWithoutVariationsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutVariationsInput, ProductsUpdateWithoutVariationsInput>, ProductsUncheckedUpdateWithoutVariationsInput>
  }

  export type RestaurantsUpdateOneRequiredWithoutVariationsNestedInput = {
    create?: XOR<RestaurantsCreateWithoutVariationsInput, RestaurantsUncheckedCreateWithoutVariationsInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutVariationsInput
    upsert?: RestaurantsUpsertWithoutVariationsInput
    connect?: RestaurantsWhereUniqueInput
    update?: XOR<XOR<RestaurantsUpdateToOneWithWhereWithoutVariationsInput, RestaurantsUpdateWithoutVariationsInput>, RestaurantsUncheckedUpdateWithoutVariationsInput>
  }

  export type ProductOrderUncheckedUpdateManyWithoutVariationNestedInput = {
    create?: XOR<ProductOrderCreateWithoutVariationInput, ProductOrderUncheckedCreateWithoutVariationInput> | ProductOrderCreateWithoutVariationInput[] | ProductOrderUncheckedCreateWithoutVariationInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutVariationInput | ProductOrderCreateOrConnectWithoutVariationInput[]
    upsert?: ProductOrderUpsertWithWhereUniqueWithoutVariationInput | ProductOrderUpsertWithWhereUniqueWithoutVariationInput[]
    createMany?: ProductOrderCreateManyVariationInputEnvelope
    set?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    disconnect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    delete?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    update?: ProductOrderUpdateWithWhereUniqueWithoutVariationInput | ProductOrderUpdateWithWhereUniqueWithoutVariationInput[]
    updateMany?: ProductOrderUpdateManyWithWhereWithoutVariationInput | ProductOrderUpdateManyWithWhereWithoutVariationInput[]
    deleteMany?: ProductOrderScalarWhereInput | ProductOrderScalarWhereInput[]
  }

  export type RestaurantsCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<RestaurantsCreateWithoutCategoriesInput, RestaurantsUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutCategoriesInput
    connect?: RestaurantsWhereUniqueInput
  }

  export type ProductsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type RestaurantsUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<RestaurantsCreateWithoutCategoriesInput, RestaurantsUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutCategoriesInput
    upsert?: RestaurantsUpsertWithoutCategoriesInput
    connect?: RestaurantsWhereUniqueInput
    update?: XOR<XOR<RestaurantsUpdateToOneWithWhereWithoutCategoriesInput, RestaurantsUpdateWithoutCategoriesInput>, RestaurantsUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoriesInput | ProductsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoriesInput | ProductsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoriesInput | ProductsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoriesInput | ProductsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoriesInput | ProductsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoriesInput | ProductsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type RestaurantsCreateNestedOneWithoutOrderInput = {
    create?: XOR<RestaurantsCreateWithoutOrderInput, RestaurantsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutOrderInput
    connect?: RestaurantsWhereUniqueInput
  }

  export type TableCreateNestedOneWithoutOrderInput = {
    create?: XOR<TableCreateWithoutOrderInput, TableUncheckedCreateWithoutOrderInput>
    connectOrCreate?: TableCreateOrConnectWithoutOrderInput
    connect?: TableWhereUniqueInput
  }

  export type PaymentsCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type ProductOrderCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput> | ProductOrderCreateWithoutOrderInput[] | ProductOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutOrderInput | ProductOrderCreateOrConnectWithoutOrderInput[]
    createMany?: ProductOrderCreateManyOrderInputEnvelope
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type ProductOrderUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput> | ProductOrderCreateWithoutOrderInput[] | ProductOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutOrderInput | ProductOrderCreateOrConnectWithoutOrderInput[]
    createMany?: ProductOrderCreateManyOrderInputEnvelope
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type RestaurantsUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<RestaurantsCreateWithoutOrderInput, RestaurantsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutOrderInput
    upsert?: RestaurantsUpsertWithoutOrderInput
    connect?: RestaurantsWhereUniqueInput
    update?: XOR<XOR<RestaurantsUpdateToOneWithWhereWithoutOrderInput, RestaurantsUpdateWithoutOrderInput>, RestaurantsUncheckedUpdateWithoutOrderInput>
  }

  export type TableUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<TableCreateWithoutOrderInput, TableUncheckedCreateWithoutOrderInput>
    connectOrCreate?: TableCreateOrConnectWithoutOrderInput
    upsert?: TableUpsertWithoutOrderInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutOrderInput, TableUpdateWithoutOrderInput>, TableUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutOrderInput | PaymentsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutOrderInput | PaymentsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutOrderInput | PaymentsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type ProductOrderUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput> | ProductOrderCreateWithoutOrderInput[] | ProductOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutOrderInput | ProductOrderCreateOrConnectWithoutOrderInput[]
    upsert?: ProductOrderUpsertWithWhereUniqueWithoutOrderInput | ProductOrderUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductOrderCreateManyOrderInputEnvelope
    set?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    disconnect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    delete?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    update?: ProductOrderUpdateWithWhereUniqueWithoutOrderInput | ProductOrderUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductOrderUpdateManyWithWhereWithoutOrderInput | ProductOrderUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductOrderScalarWhereInput | ProductOrderScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutOrderInput | PaymentsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutOrderInput | PaymentsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutOrderInput | PaymentsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type ProductOrderUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput> | ProductOrderCreateWithoutOrderInput[] | ProductOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOrderCreateOrConnectWithoutOrderInput | ProductOrderCreateOrConnectWithoutOrderInput[]
    upsert?: ProductOrderUpsertWithWhereUniqueWithoutOrderInput | ProductOrderUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductOrderCreateManyOrderInputEnvelope
    set?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    disconnect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    delete?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    connect?: ProductOrderWhereUniqueInput | ProductOrderWhereUniqueInput[]
    update?: ProductOrderUpdateWithWhereUniqueWithoutOrderInput | ProductOrderUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductOrderUpdateManyWithWhereWithoutOrderInput | ProductOrderUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductOrderScalarWhereInput | ProductOrderScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderProductsInput = {
    create?: XOR<OrderCreateWithoutOrderProductsInput, OrderUncheckedCreateWithoutOrderProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderProductsInput
    connect?: OrderWhereUniqueInput
  }

  export type VariationsCreateNestedOneWithoutOrderProductInput = {
    create?: XOR<VariationsCreateWithoutOrderProductInput, VariationsUncheckedCreateWithoutOrderProductInput>
    connectOrCreate?: VariationsCreateOrConnectWithoutOrderProductInput
    connect?: VariationsWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderProductsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderProductsInput, OrderUncheckedCreateWithoutOrderProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderProductsInput
    upsert?: OrderUpsertWithoutOrderProductsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderProductsInput, OrderUpdateWithoutOrderProductsInput>, OrderUncheckedUpdateWithoutOrderProductsInput>
  }

  export type VariationsUpdateOneRequiredWithoutOrderProductNestedInput = {
    create?: XOR<VariationsCreateWithoutOrderProductInput, VariationsUncheckedCreateWithoutOrderProductInput>
    connectOrCreate?: VariationsCreateOrConnectWithoutOrderProductInput
    upsert?: VariationsUpsertWithoutOrderProductInput
    connect?: VariationsWhereUniqueInput
    update?: XOR<XOR<VariationsUpdateToOneWithWhereWithoutOrderProductInput, VariationsUpdateWithoutOrderProductInput>, VariationsUncheckedUpdateWithoutOrderProductInput>
  }

  export type RestaurantsCreateNestedOneWithoutProductImagesInput = {
    create?: XOR<RestaurantsCreateWithoutProductImagesInput, RestaurantsUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutProductImagesInput
    connect?: RestaurantsWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutProductImagesInput = {
    create?: XOR<ProductsCreateWithoutProductImagesInput, ProductsUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductImagesInput
    connect?: ProductsWhereUniqueInput
  }

  export type RestaurantsUpdateOneRequiredWithoutProductImagesNestedInput = {
    create?: XOR<RestaurantsCreateWithoutProductImagesInput, RestaurantsUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutProductImagesInput
    upsert?: RestaurantsUpsertWithoutProductImagesInput
    connect?: RestaurantsWhereUniqueInput
    update?: XOR<XOR<RestaurantsUpdateToOneWithWhereWithoutProductImagesInput, RestaurantsUpdateWithoutProductImagesInput>, RestaurantsUncheckedUpdateWithoutProductImagesInput>
  }

  export type ProductsUpdateOneWithoutProductImagesNestedInput = {
    create?: XOR<ProductsCreateWithoutProductImagesInput, ProductsUncheckedCreateWithoutProductImagesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductImagesInput
    upsert?: ProductsUpsertWithoutProductImagesInput
    disconnect?: ProductsWhereInput | boolean
    delete?: ProductsWhereInput | boolean
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProductImagesInput, ProductsUpdateWithoutProductImagesInput>, ProductsUncheckedUpdateWithoutProductImagesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderCreateNestedManyWithoutTableInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RestaurantsCreateNestedOneWithoutTableInput = {
    create?: XOR<RestaurantsCreateWithoutTableInput, RestaurantsUncheckedCreateWithoutTableInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutTableInput
    connect?: RestaurantsWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableInput | OrderUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableInput | OrderUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableInput | OrderUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RestaurantsUpdateOneRequiredWithoutTableNestedInput = {
    create?: XOR<RestaurantsCreateWithoutTableInput, RestaurantsUncheckedCreateWithoutTableInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutTableInput
    upsert?: RestaurantsUpsertWithoutTableInput
    connect?: RestaurantsWhereUniqueInput
    update?: XOR<XOR<RestaurantsUpdateToOneWithWhereWithoutTableInput, RestaurantsUpdateWithoutTableInput>, RestaurantsUncheckedUpdateWithoutTableInput>
  }

  export type OrderUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableInput | OrderUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableInput | OrderUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableInput | OrderUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput
    upsert?: OrderUpsertWithoutPaymentsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentsInput, OrderUpdateWithoutPaymentsInput>, OrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriesCreateWithoutRestaurantInput = {
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Status?: boolean
    Active?: boolean
    Products?: ProductsCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateWithoutRestaurantInput = {
    Id?: number
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Status?: boolean
    Active?: boolean
    Products?: ProductsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesCreateOrConnectWithoutRestaurantInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutRestaurantInput, CategoriesUncheckedCreateWithoutRestaurantInput>
  }

  export type CategoriesCreateManyRestaurantInputEnvelope = {
    data: CategoriesCreateManyRestaurantInput | CategoriesCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutRestaurantInput = {
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    Table: TableCreateNestedOneWithoutOrderInput
    Payments?: PaymentsCreateNestedManyWithoutOrderInput
    OrderProducts?: ProductOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutRestaurantInput = {
    Id?: number
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    TableId: number
    Payments?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
    OrderProducts?: ProductOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderCreateManyRestaurantInputEnvelope = {
    data: OrderCreateManyRestaurantInput | OrderCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type ProductImagesCreateWithoutRestaurantInput = {
    Name: string
    ImagePath: string
    Size: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    Products?: ProductsCreateNestedOneWithoutProductImagesInput
  }

  export type ProductImagesUncheckedCreateWithoutRestaurantInput = {
    Id?: number
    Name: string
    ImagePath: string
    Size: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    productsId?: number | null
  }

  export type ProductImagesCreateOrConnectWithoutRestaurantInput = {
    where: ProductImagesWhereUniqueInput
    create: XOR<ProductImagesCreateWithoutRestaurantInput, ProductImagesUncheckedCreateWithoutRestaurantInput>
  }

  export type ProductImagesCreateManyRestaurantInputEnvelope = {
    data: ProductImagesCreateManyRestaurantInput | ProductImagesCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type ProductsCreateWithoutRestaurantInput = {
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Status?: boolean
    Active?: boolean
    ProductImages?: ProductImagesCreateNestedManyWithoutProductsInput
    Categories: CategoriesCreateNestedOneWithoutProductsInput
    Variations?: VariationsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutRestaurantInput = {
    Id?: number
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    CategoryId: number
    Status?: boolean
    Active?: boolean
    ProductImages?: ProductImagesUncheckedCreateNestedManyWithoutProductsInput
    Variations?: VariationsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutRestaurantInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutRestaurantInput, ProductsUncheckedCreateWithoutRestaurantInput>
  }

  export type ProductsCreateManyRestaurantInputEnvelope = {
    data: ProductsCreateManyRestaurantInput | ProductsCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type TableCreateWithoutRestaurantInput = {
    Status?: boolean
    Number: number
    Barcode: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    Order?: OrderCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutRestaurantInput = {
    Id?: number
    Status?: boolean
    Number: number
    Barcode: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    Order?: OrderUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutRestaurantInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput>
  }

  export type TableCreateManyRestaurantInputEnvelope = {
    data: TableCreateManyRestaurantInput | TableCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type VariationsCreateWithoutRestaurantInput = {
    Name: string
    Value: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    OrderProduct?: ProductOrderCreateNestedManyWithoutVariationInput
    Products: ProductsCreateNestedOneWithoutVariationsInput
  }

  export type VariationsUncheckedCreateWithoutRestaurantInput = {
    Id?: number
    Name: string
    Value: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    ProductId: number
    Active?: boolean
    OrderProduct?: ProductOrderUncheckedCreateNestedManyWithoutVariationInput
  }

  export type VariationsCreateOrConnectWithoutRestaurantInput = {
    where: VariationsWhereUniqueInput
    create: XOR<VariationsCreateWithoutRestaurantInput, VariationsUncheckedCreateWithoutRestaurantInput>
  }

  export type VariationsCreateManyRestaurantInputEnvelope = {
    data: VariationsCreateManyRestaurantInput | VariationsCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: CategoriesWhereUniqueInput
    update: XOR<CategoriesUpdateWithoutRestaurantInput, CategoriesUncheckedUpdateWithoutRestaurantInput>
    create: XOR<CategoriesCreateWithoutRestaurantInput, CategoriesUncheckedCreateWithoutRestaurantInput>
  }

  export type CategoriesUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: CategoriesWhereUniqueInput
    data: XOR<CategoriesUpdateWithoutRestaurantInput, CategoriesUncheckedUpdateWithoutRestaurantInput>
  }

  export type CategoriesUpdateManyWithWhereWithoutRestaurantInput = {
    where: CategoriesScalarWhereInput
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type CategoriesScalarWhereInput = {
    AND?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
    OR?: CategoriesScalarWhereInput[]
    NOT?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
    Id?: IntFilter<"Categories"> | number
    Name?: StringFilter<"Categories"> | string
    CreatedAt?: DateTimeFilter<"Categories"> | Date | string
    UpdatedAt?: DateTimeFilter<"Categories"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Categories"> | Date | string | null
    RestaurantId?: IntFilter<"Categories"> | number
    Status?: BoolFilter<"Categories"> | boolean
    Active?: BoolFilter<"Categories"> | boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
  }

  export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    Id?: IntFilter<"Order"> | number
    Status?: EnumStatusFilter<"Order"> | $Enums.Status
    CreatedAt?: DateTimeFilter<"Order"> | Date | string
    UpdatedAt?: DateTimeFilter<"Order"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    Paid?: BoolFilter<"Order"> | boolean
    Active?: BoolFilter<"Order"> | boolean
    UserId?: IntFilter<"Order"> | number
    TableId?: IntFilter<"Order"> | number
    RestaurantId?: IntFilter<"Order"> | number
  }

  export type ProductImagesUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: ProductImagesWhereUniqueInput
    update: XOR<ProductImagesUpdateWithoutRestaurantInput, ProductImagesUncheckedUpdateWithoutRestaurantInput>
    create: XOR<ProductImagesCreateWithoutRestaurantInput, ProductImagesUncheckedCreateWithoutRestaurantInput>
  }

  export type ProductImagesUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: ProductImagesWhereUniqueInput
    data: XOR<ProductImagesUpdateWithoutRestaurantInput, ProductImagesUncheckedUpdateWithoutRestaurantInput>
  }

  export type ProductImagesUpdateManyWithWhereWithoutRestaurantInput = {
    where: ProductImagesScalarWhereInput
    data: XOR<ProductImagesUpdateManyMutationInput, ProductImagesUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type ProductImagesScalarWhereInput = {
    AND?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
    OR?: ProductImagesScalarWhereInput[]
    NOT?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
    Id?: IntFilter<"ProductImages"> | number
    Name?: StringFilter<"ProductImages"> | string
    ImagePath?: StringFilter<"ProductImages"> | string
    Size?: IntFilter<"ProductImages"> | number
    RestaurantId?: IntFilter<"ProductImages"> | number
    CreatedAt?: DateTimeFilter<"ProductImages"> | Date | string
    UpdatedAt?: DateTimeFilter<"ProductImages"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"ProductImages"> | Date | string | null
    Active?: BoolFilter<"ProductImages"> | boolean
    productsId?: IntNullableFilter<"ProductImages"> | number | null
  }

  export type ProductsUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutRestaurantInput, ProductsUncheckedUpdateWithoutRestaurantInput>
    create: XOR<ProductsCreateWithoutRestaurantInput, ProductsUncheckedCreateWithoutRestaurantInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutRestaurantInput, ProductsUncheckedUpdateWithoutRestaurantInput>
  }

  export type ProductsUpdateManyWithWhereWithoutRestaurantInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    Id?: IntFilter<"Products"> | number
    Name?: StringFilter<"Products"> | string
    Description?: StringFilter<"Products"> | string
    ImgUrl?: JsonFilter<"Products">
    CreatedAt?: DateTimeFilter<"Products"> | Date | string
    UpdatedAt?: DateTimeFilter<"Products"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Products"> | Date | string | null
    RestaurantId?: IntFilter<"Products"> | number
    CategoryId?: IntFilter<"Products"> | number
    Status?: BoolFilter<"Products"> | boolean
    Active?: BoolFilter<"Products"> | boolean
  }

  export type TableUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutRestaurantInput, TableUncheckedUpdateWithoutRestaurantInput>
    create: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput>
  }

  export type TableUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutRestaurantInput, TableUncheckedUpdateWithoutRestaurantInput>
  }

  export type TableUpdateManyWithWhereWithoutRestaurantInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type TableScalarWhereInput = {
    AND?: TableScalarWhereInput | TableScalarWhereInput[]
    OR?: TableScalarWhereInput[]
    NOT?: TableScalarWhereInput | TableScalarWhereInput[]
    Id?: IntFilter<"Table"> | number
    Status?: BoolFilter<"Table"> | boolean
    Number?: IntFilter<"Table"> | number
    Barcode?: StringFilter<"Table"> | string
    CreatedAt?: DateTimeFilter<"Table"> | Date | string
    UpdatedAt?: DateTimeFilter<"Table"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Table"> | Date | string | null
    Active?: BoolFilter<"Table"> | boolean
    RestaurantId?: IntFilter<"Table"> | number
  }

  export type VariationsUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: VariationsWhereUniqueInput
    update: XOR<VariationsUpdateWithoutRestaurantInput, VariationsUncheckedUpdateWithoutRestaurantInput>
    create: XOR<VariationsCreateWithoutRestaurantInput, VariationsUncheckedCreateWithoutRestaurantInput>
  }

  export type VariationsUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: VariationsWhereUniqueInput
    data: XOR<VariationsUpdateWithoutRestaurantInput, VariationsUncheckedUpdateWithoutRestaurantInput>
  }

  export type VariationsUpdateManyWithWhereWithoutRestaurantInput = {
    where: VariationsScalarWhereInput
    data: XOR<VariationsUpdateManyMutationInput, VariationsUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type VariationsScalarWhereInput = {
    AND?: VariationsScalarWhereInput | VariationsScalarWhereInput[]
    OR?: VariationsScalarWhereInput[]
    NOT?: VariationsScalarWhereInput | VariationsScalarWhereInput[]
    Id?: IntFilter<"Variations"> | number
    Name?: StringFilter<"Variations"> | string
    Value?: StringFilter<"Variations"> | string
    CreatedAt?: DateTimeFilter<"Variations"> | Date | string
    UpdatedAt?: DateTimeFilter<"Variations"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Variations"> | Date | string | null
    ProductId?: IntFilter<"Variations"> | number
    RestaurantId?: IntFilter<"Variations"> | number
    Active?: BoolFilter<"Variations"> | boolean
  }

  export type ProductImagesCreateWithoutProductsInput = {
    Name: string
    ImagePath: string
    Size: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    Restaurant: RestaurantsCreateNestedOneWithoutProductImagesInput
  }

  export type ProductImagesUncheckedCreateWithoutProductsInput = {
    Id?: number
    Name: string
    ImagePath: string
    Size: number
    RestaurantId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
  }

  export type ProductImagesCreateOrConnectWithoutProductsInput = {
    where: ProductImagesWhereUniqueInput
    create: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput>
  }

  export type ProductImagesCreateManyProductsInputEnvelope = {
    data: ProductImagesCreateManyProductsInput | ProductImagesCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesCreateWithoutProductsInput = {
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Status?: boolean
    Active?: boolean
    Restaurant: RestaurantsCreateNestedOneWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateWithoutProductsInput = {
    Id?: number
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    RestaurantId: number
    Status?: boolean
    Active?: boolean
  }

  export type CategoriesCreateOrConnectWithoutProductsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
  }

  export type RestaurantsCreateWithoutProductsInput = {
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesCreateNestedManyWithoutRestaurantInput
    Order?: OrderCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesCreateNestedManyWithoutRestaurantInput
    Table?: TableCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsUncheckedCreateWithoutProductsInput = {
    Id?: number
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesUncheckedCreateNestedManyWithoutRestaurantInput
    Order?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesUncheckedCreateNestedManyWithoutRestaurantInput
    Table?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsCreateOrConnectWithoutProductsInput = {
    where: RestaurantsWhereUniqueInput
    create: XOR<RestaurantsCreateWithoutProductsInput, RestaurantsUncheckedCreateWithoutProductsInput>
  }

  export type VariationsCreateWithoutProductsInput = {
    Name: string
    Value: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    OrderProduct?: ProductOrderCreateNestedManyWithoutVariationInput
    Restaurant: RestaurantsCreateNestedOneWithoutVariationsInput
  }

  export type VariationsUncheckedCreateWithoutProductsInput = {
    Id?: number
    Name: string
    Value: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    RestaurantId: number
    Active?: boolean
    OrderProduct?: ProductOrderUncheckedCreateNestedManyWithoutVariationInput
  }

  export type VariationsCreateOrConnectWithoutProductsInput = {
    where: VariationsWhereUniqueInput
    create: XOR<VariationsCreateWithoutProductsInput, VariationsUncheckedCreateWithoutProductsInput>
  }

  export type VariationsCreateManyProductsInputEnvelope = {
    data: VariationsCreateManyProductsInput | VariationsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type ProductImagesUpsertWithWhereUniqueWithoutProductsInput = {
    where: ProductImagesWhereUniqueInput
    update: XOR<ProductImagesUpdateWithoutProductsInput, ProductImagesUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductImagesCreateWithoutProductsInput, ProductImagesUncheckedCreateWithoutProductsInput>
  }

  export type ProductImagesUpdateWithWhereUniqueWithoutProductsInput = {
    where: ProductImagesWhereUniqueInput
    data: XOR<ProductImagesUpdateWithoutProductsInput, ProductImagesUncheckedUpdateWithoutProductsInput>
  }

  export type ProductImagesUpdateManyWithWhereWithoutProductsInput = {
    where: ProductImagesScalarWhereInput
    data: XOR<ProductImagesUpdateManyMutationInput, ProductImagesUncheckedUpdateManyWithoutProductsInput>
  }

  export type CategoriesUpsertWithoutProductsInput = {
    update: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateWithoutProductsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    Restaurant?: RestaurantsUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutProductsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RestaurantsUpsertWithoutProductsInput = {
    update: XOR<RestaurantsUpdateWithoutProductsInput, RestaurantsUncheckedUpdateWithoutProductsInput>
    create: XOR<RestaurantsCreateWithoutProductsInput, RestaurantsUncheckedCreateWithoutProductsInput>
    where?: RestaurantsWhereInput
  }

  export type RestaurantsUpdateToOneWithWhereWithoutProductsInput = {
    where?: RestaurantsWhereInput
    data: XOR<RestaurantsUpdateWithoutProductsInput, RestaurantsUncheckedUpdateWithoutProductsInput>
  }

  export type RestaurantsUpdateWithoutProductsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUpdateManyWithoutRestaurantNestedInput
    Order?: OrderUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUpdateManyWithoutRestaurantNestedInput
    Table?: TableUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantsUncheckedUpdateWithoutProductsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    Order?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUncheckedUpdateManyWithoutRestaurantNestedInput
    Table?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type VariationsUpsertWithWhereUniqueWithoutProductsInput = {
    where: VariationsWhereUniqueInput
    update: XOR<VariationsUpdateWithoutProductsInput, VariationsUncheckedUpdateWithoutProductsInput>
    create: XOR<VariationsCreateWithoutProductsInput, VariationsUncheckedCreateWithoutProductsInput>
  }

  export type VariationsUpdateWithWhereUniqueWithoutProductsInput = {
    where: VariationsWhereUniqueInput
    data: XOR<VariationsUpdateWithoutProductsInput, VariationsUncheckedUpdateWithoutProductsInput>
  }

  export type VariationsUpdateManyWithWhereWithoutProductsInput = {
    where: VariationsScalarWhereInput
    data: XOR<VariationsUpdateManyMutationInput, VariationsUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductOrderCreateWithoutVariationInput = {
    Quantity: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Order: OrderCreateNestedOneWithoutOrderProductsInput
  }

  export type ProductOrderUncheckedCreateWithoutVariationInput = {
    Id?: number
    Quantity: number
    OrderId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ProductOrderCreateOrConnectWithoutVariationInput = {
    where: ProductOrderWhereUniqueInput
    create: XOR<ProductOrderCreateWithoutVariationInput, ProductOrderUncheckedCreateWithoutVariationInput>
  }

  export type ProductOrderCreateManyVariationInputEnvelope = {
    data: ProductOrderCreateManyVariationInput | ProductOrderCreateManyVariationInput[]
    skipDuplicates?: boolean
  }

  export type ProductsCreateWithoutVariationsInput = {
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Status?: boolean
    Active?: boolean
    ProductImages?: ProductImagesCreateNestedManyWithoutProductsInput
    Categories: CategoriesCreateNestedOneWithoutProductsInput
    Restaurant: RestaurantsCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutVariationsInput = {
    Id?: number
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    RestaurantId: number
    CategoryId: number
    Status?: boolean
    Active?: boolean
    ProductImages?: ProductImagesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutVariationsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutVariationsInput, ProductsUncheckedCreateWithoutVariationsInput>
  }

  export type RestaurantsCreateWithoutVariationsInput = {
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesCreateNestedManyWithoutRestaurantInput
    Order?: OrderCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesCreateNestedManyWithoutRestaurantInput
    Products?: ProductsCreateNestedManyWithoutRestaurantInput
    Table?: TableCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsUncheckedCreateWithoutVariationsInput = {
    Id?: number
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesUncheckedCreateNestedManyWithoutRestaurantInput
    Order?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesUncheckedCreateNestedManyWithoutRestaurantInput
    Products?: ProductsUncheckedCreateNestedManyWithoutRestaurantInput
    Table?: TableUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsCreateOrConnectWithoutVariationsInput = {
    where: RestaurantsWhereUniqueInput
    create: XOR<RestaurantsCreateWithoutVariationsInput, RestaurantsUncheckedCreateWithoutVariationsInput>
  }

  export type ProductOrderUpsertWithWhereUniqueWithoutVariationInput = {
    where: ProductOrderWhereUniqueInput
    update: XOR<ProductOrderUpdateWithoutVariationInput, ProductOrderUncheckedUpdateWithoutVariationInput>
    create: XOR<ProductOrderCreateWithoutVariationInput, ProductOrderUncheckedCreateWithoutVariationInput>
  }

  export type ProductOrderUpdateWithWhereUniqueWithoutVariationInput = {
    where: ProductOrderWhereUniqueInput
    data: XOR<ProductOrderUpdateWithoutVariationInput, ProductOrderUncheckedUpdateWithoutVariationInput>
  }

  export type ProductOrderUpdateManyWithWhereWithoutVariationInput = {
    where: ProductOrderScalarWhereInput
    data: XOR<ProductOrderUpdateManyMutationInput, ProductOrderUncheckedUpdateManyWithoutVariationInput>
  }

  export type ProductOrderScalarWhereInput = {
    AND?: ProductOrderScalarWhereInput | ProductOrderScalarWhereInput[]
    OR?: ProductOrderScalarWhereInput[]
    NOT?: ProductOrderScalarWhereInput | ProductOrderScalarWhereInput[]
    Id?: IntFilter<"ProductOrder"> | number
    Quantity?: IntFilter<"ProductOrder"> | number
    OrderId?: IntFilter<"ProductOrder"> | number
    CreatedAt?: DateTimeFilter<"ProductOrder"> | Date | string
    UpdatedAt?: DateTimeFilter<"ProductOrder"> | Date | string
    VariationId?: IntFilter<"ProductOrder"> | number
  }

  export type ProductsUpsertWithoutVariationsInput = {
    update: XOR<ProductsUpdateWithoutVariationsInput, ProductsUncheckedUpdateWithoutVariationsInput>
    create: XOR<ProductsCreateWithoutVariationsInput, ProductsUncheckedCreateWithoutVariationsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutVariationsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutVariationsInput, ProductsUncheckedUpdateWithoutVariationsInput>
  }

  export type ProductsUpdateWithoutVariationsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    ProductImages?: ProductImagesUpdateManyWithoutProductsNestedInput
    Categories?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    Restaurant?: RestaurantsUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutVariationsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RestaurantId?: IntFieldUpdateOperationsInput | number
    CategoryId?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    ProductImages?: ProductImagesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type RestaurantsUpsertWithoutVariationsInput = {
    update: XOR<RestaurantsUpdateWithoutVariationsInput, RestaurantsUncheckedUpdateWithoutVariationsInput>
    create: XOR<RestaurantsCreateWithoutVariationsInput, RestaurantsUncheckedCreateWithoutVariationsInput>
    where?: RestaurantsWhereInput
  }

  export type RestaurantsUpdateToOneWithWhereWithoutVariationsInput = {
    where?: RestaurantsWhereInput
    data: XOR<RestaurantsUpdateWithoutVariationsInput, RestaurantsUncheckedUpdateWithoutVariationsInput>
  }

  export type RestaurantsUpdateWithoutVariationsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUpdateManyWithoutRestaurantNestedInput
    Order?: OrderUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUpdateManyWithoutRestaurantNestedInput
    Table?: TableUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantsUncheckedUpdateWithoutVariationsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    Order?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUncheckedUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUncheckedUpdateManyWithoutRestaurantNestedInput
    Table?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantsCreateWithoutCategoriesInput = {
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Order?: OrderCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesCreateNestedManyWithoutRestaurantInput
    Products?: ProductsCreateNestedManyWithoutRestaurantInput
    Table?: TableCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsUncheckedCreateWithoutCategoriesInput = {
    Id?: number
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Order?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesUncheckedCreateNestedManyWithoutRestaurantInput
    Products?: ProductsUncheckedCreateNestedManyWithoutRestaurantInput
    Table?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsCreateOrConnectWithoutCategoriesInput = {
    where: RestaurantsWhereUniqueInput
    create: XOR<RestaurantsCreateWithoutCategoriesInput, RestaurantsUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductsCreateWithoutCategoriesInput = {
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Status?: boolean
    Active?: boolean
    ProductImages?: ProductImagesCreateNestedManyWithoutProductsInput
    Restaurant: RestaurantsCreateNestedOneWithoutProductsInput
    Variations?: VariationsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutCategoriesInput = {
    Id?: number
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    RestaurantId: number
    Status?: boolean
    Active?: boolean
    ProductImages?: ProductImagesUncheckedCreateNestedManyWithoutProductsInput
    Variations?: VariationsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductsCreateManyCategoriesInputEnvelope = {
    data: ProductsCreateManyCategoriesInput | ProductsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantsUpsertWithoutCategoriesInput = {
    update: XOR<RestaurantsUpdateWithoutCategoriesInput, RestaurantsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<RestaurantsCreateWithoutCategoriesInput, RestaurantsUncheckedCreateWithoutCategoriesInput>
    where?: RestaurantsWhereInput
  }

  export type RestaurantsUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: RestaurantsWhereInput
    data: XOR<RestaurantsUpdateWithoutCategoriesInput, RestaurantsUncheckedUpdateWithoutCategoriesInput>
  }

  export type RestaurantsUpdateWithoutCategoriesInput = {
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUpdateManyWithoutRestaurantNestedInput
    Table?: TableUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantsUncheckedUpdateWithoutCategoriesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUncheckedUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUncheckedUpdateManyWithoutRestaurantNestedInput
    Table?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoriesInput, ProductsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoriesInput, ProductsUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoriesInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type RestaurantsCreateWithoutOrderInput = {
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesCreateNestedManyWithoutRestaurantInput
    Products?: ProductsCreateNestedManyWithoutRestaurantInput
    Table?: TableCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsUncheckedCreateWithoutOrderInput = {
    Id?: number
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesUncheckedCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesUncheckedCreateNestedManyWithoutRestaurantInput
    Products?: ProductsUncheckedCreateNestedManyWithoutRestaurantInput
    Table?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsCreateOrConnectWithoutOrderInput = {
    where: RestaurantsWhereUniqueInput
    create: XOR<RestaurantsCreateWithoutOrderInput, RestaurantsUncheckedCreateWithoutOrderInput>
  }

  export type TableCreateWithoutOrderInput = {
    Status?: boolean
    Number: number
    Barcode: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    Restaurant: RestaurantsCreateNestedOneWithoutTableInput
  }

  export type TableUncheckedCreateWithoutOrderInput = {
    Id?: number
    Status?: boolean
    Number: number
    Barcode: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    RestaurantId: number
  }

  export type TableCreateOrConnectWithoutOrderInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutOrderInput, TableUncheckedCreateWithoutOrderInput>
  }

  export type PaymentsCreateWithoutOrderInput = {
    Amount: number
    PaymentType: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type PaymentsUncheckedCreateWithoutOrderInput = {
    Id?: number
    Amount: number
    PaymentType: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
  }

  export type PaymentsCreateManyOrderInputEnvelope = {
    data: PaymentsCreateManyOrderInput | PaymentsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ProductOrderCreateWithoutOrderInput = {
    Quantity: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Variation: VariationsCreateNestedOneWithoutOrderProductInput
  }

  export type ProductOrderUncheckedCreateWithoutOrderInput = {
    Id?: number
    Quantity: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VariationId: number
  }

  export type ProductOrderCreateOrConnectWithoutOrderInput = {
    where: ProductOrderWhereUniqueInput
    create: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput>
  }

  export type ProductOrderCreateManyOrderInputEnvelope = {
    data: ProductOrderCreateManyOrderInput | ProductOrderCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantsUpsertWithoutOrderInput = {
    update: XOR<RestaurantsUpdateWithoutOrderInput, RestaurantsUncheckedUpdateWithoutOrderInput>
    create: XOR<RestaurantsCreateWithoutOrderInput, RestaurantsUncheckedCreateWithoutOrderInput>
    where?: RestaurantsWhereInput
  }

  export type RestaurantsUpdateToOneWithWhereWithoutOrderInput = {
    where?: RestaurantsWhereInput
    data: XOR<RestaurantsUpdateWithoutOrderInput, RestaurantsUncheckedUpdateWithoutOrderInput>
  }

  export type RestaurantsUpdateWithoutOrderInput = {
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUpdateManyWithoutRestaurantNestedInput
    Table?: TableUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantsUncheckedUpdateWithoutOrderInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUncheckedUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUncheckedUpdateManyWithoutRestaurantNestedInput
    Table?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type TableUpsertWithoutOrderInput = {
    update: XOR<TableUpdateWithoutOrderInput, TableUncheckedUpdateWithoutOrderInput>
    create: XOR<TableCreateWithoutOrderInput, TableUncheckedCreateWithoutOrderInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutOrderInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutOrderInput, TableUncheckedUpdateWithoutOrderInput>
  }

  export type TableUpdateWithoutOrderInput = {
    Status?: BoolFieldUpdateOperationsInput | boolean
    Number?: IntFieldUpdateOperationsInput | number
    Barcode?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    Restaurant?: RestaurantsUpdateOneRequiredWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutOrderInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Number?: IntFieldUpdateOperationsInput | number
    Barcode?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    RestaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentsUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentsScalarWhereInput = {
    AND?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    OR?: PaymentsScalarWhereInput[]
    NOT?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    Id?: IntFilter<"Payments"> | number
    OrderId?: IntFilter<"Payments"> | number
    Amount?: IntFilter<"Payments"> | number
    PaymentType?: StringFilter<"Payments"> | string
    CreatedAt?: DateTimeFilter<"Payments"> | Date | string
    UpdatedAt?: DateTimeFilter<"Payments"> | Date | string
  }

  export type ProductOrderUpsertWithWhereUniqueWithoutOrderInput = {
    where: ProductOrderWhereUniqueInput
    update: XOR<ProductOrderUpdateWithoutOrderInput, ProductOrderUncheckedUpdateWithoutOrderInput>
    create: XOR<ProductOrderCreateWithoutOrderInput, ProductOrderUncheckedCreateWithoutOrderInput>
  }

  export type ProductOrderUpdateWithWhereUniqueWithoutOrderInput = {
    where: ProductOrderWhereUniqueInput
    data: XOR<ProductOrderUpdateWithoutOrderInput, ProductOrderUncheckedUpdateWithoutOrderInput>
  }

  export type ProductOrderUpdateManyWithWhereWithoutOrderInput = {
    where: ProductOrderScalarWhereInput
    data: XOR<ProductOrderUpdateManyMutationInput, ProductOrderUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutOrderProductsInput = {
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    Restaurant: RestaurantsCreateNestedOneWithoutOrderInput
    Table: TableCreateNestedOneWithoutOrderInput
    Payments?: PaymentsCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderProductsInput = {
    Id?: number
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    TableId: number
    RestaurantId: number
    Payments?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderProductsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderProductsInput, OrderUncheckedCreateWithoutOrderProductsInput>
  }

  export type VariationsCreateWithoutOrderProductInput = {
    Name: string
    Value: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    Products: ProductsCreateNestedOneWithoutVariationsInput
    Restaurant: RestaurantsCreateNestedOneWithoutVariationsInput
  }

  export type VariationsUncheckedCreateWithoutOrderProductInput = {
    Id?: number
    Name: string
    Value: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    ProductId: number
    RestaurantId: number
    Active?: boolean
  }

  export type VariationsCreateOrConnectWithoutOrderProductInput = {
    where: VariationsWhereUniqueInput
    create: XOR<VariationsCreateWithoutOrderProductInput, VariationsUncheckedCreateWithoutOrderProductInput>
  }

  export type OrderUpsertWithoutOrderProductsInput = {
    update: XOR<OrderUpdateWithoutOrderProductsInput, OrderUncheckedUpdateWithoutOrderProductsInput>
    create: XOR<OrderCreateWithoutOrderProductsInput, OrderUncheckedCreateWithoutOrderProductsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderProductsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderProductsInput, OrderUncheckedUpdateWithoutOrderProductsInput>
  }

  export type OrderUpdateWithoutOrderProductsInput = {
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    Restaurant?: RestaurantsUpdateOneRequiredWithoutOrderNestedInput
    Table?: TableUpdateOneRequiredWithoutOrderNestedInput
    Payments?: PaymentsUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderProductsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    TableId?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Payments?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type VariationsUpsertWithoutOrderProductInput = {
    update: XOR<VariationsUpdateWithoutOrderProductInput, VariationsUncheckedUpdateWithoutOrderProductInput>
    create: XOR<VariationsCreateWithoutOrderProductInput, VariationsUncheckedCreateWithoutOrderProductInput>
    where?: VariationsWhereInput
  }

  export type VariationsUpdateToOneWithWhereWithoutOrderProductInput = {
    where?: VariationsWhereInput
    data: XOR<VariationsUpdateWithoutOrderProductInput, VariationsUncheckedUpdateWithoutOrderProductInput>
  }

  export type VariationsUpdateWithoutOrderProductInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    Products?: ProductsUpdateOneRequiredWithoutVariationsNestedInput
    Restaurant?: RestaurantsUpdateOneRequiredWithoutVariationsNestedInput
  }

  export type VariationsUncheckedUpdateWithoutOrderProductInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductId?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RestaurantsCreateWithoutProductImagesInput = {
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesCreateNestedManyWithoutRestaurantInput
    Order?: OrderCreateNestedManyWithoutRestaurantInput
    Products?: ProductsCreateNestedManyWithoutRestaurantInput
    Table?: TableCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsUncheckedCreateWithoutProductImagesInput = {
    Id?: number
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesUncheckedCreateNestedManyWithoutRestaurantInput
    Order?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    Products?: ProductsUncheckedCreateNestedManyWithoutRestaurantInput
    Table?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsCreateOrConnectWithoutProductImagesInput = {
    where: RestaurantsWhereUniqueInput
    create: XOR<RestaurantsCreateWithoutProductImagesInput, RestaurantsUncheckedCreateWithoutProductImagesInput>
  }

  export type ProductsCreateWithoutProductImagesInput = {
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Status?: boolean
    Active?: boolean
    Categories: CategoriesCreateNestedOneWithoutProductsInput
    Restaurant: RestaurantsCreateNestedOneWithoutProductsInput
    Variations?: VariationsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutProductImagesInput = {
    Id?: number
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    RestaurantId: number
    CategoryId: number
    Status?: boolean
    Active?: boolean
    Variations?: VariationsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutProductImagesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProductImagesInput, ProductsUncheckedCreateWithoutProductImagesInput>
  }

  export type RestaurantsUpsertWithoutProductImagesInput = {
    update: XOR<RestaurantsUpdateWithoutProductImagesInput, RestaurantsUncheckedUpdateWithoutProductImagesInput>
    create: XOR<RestaurantsCreateWithoutProductImagesInput, RestaurantsUncheckedCreateWithoutProductImagesInput>
    where?: RestaurantsWhereInput
  }

  export type RestaurantsUpdateToOneWithWhereWithoutProductImagesInput = {
    where?: RestaurantsWhereInput
    data: XOR<RestaurantsUpdateWithoutProductImagesInput, RestaurantsUncheckedUpdateWithoutProductImagesInput>
  }

  export type RestaurantsUpdateWithoutProductImagesInput = {
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUpdateManyWithoutRestaurantNestedInput
    Order?: OrderUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUpdateManyWithoutRestaurantNestedInput
    Table?: TableUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantsUncheckedUpdateWithoutProductImagesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    Order?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUncheckedUpdateManyWithoutRestaurantNestedInput
    Table?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type ProductsUpsertWithoutProductImagesInput = {
    update: XOR<ProductsUpdateWithoutProductImagesInput, ProductsUncheckedUpdateWithoutProductImagesInput>
    create: XOR<ProductsCreateWithoutProductImagesInput, ProductsUncheckedCreateWithoutProductImagesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProductImagesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProductImagesInput, ProductsUncheckedUpdateWithoutProductImagesInput>
  }

  export type ProductsUpdateWithoutProductImagesInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    Categories?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    Restaurant?: RestaurantsUpdateOneRequiredWithoutProductsNestedInput
    Variations?: VariationsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProductImagesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RestaurantId?: IntFieldUpdateOperationsInput | number
    CategoryId?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    Variations?: VariationsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type OrderCreateWithoutTableInput = {
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    Restaurant: RestaurantsCreateNestedOneWithoutOrderInput
    Payments?: PaymentsCreateNestedManyWithoutOrderInput
    OrderProducts?: ProductOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTableInput = {
    Id?: number
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    RestaurantId: number
    Payments?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
    OrderProducts?: ProductOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTableInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput>
  }

  export type OrderCreateManyTableInputEnvelope = {
    data: OrderCreateManyTableInput | OrderCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantsCreateWithoutTableInput = {
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesCreateNestedManyWithoutRestaurantInput
    Order?: OrderCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesCreateNestedManyWithoutRestaurantInput
    Products?: ProductsCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsUncheckedCreateWithoutTableInput = {
    Id?: number
    Name: string
    RestaurantId: number
    Active?: boolean
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Categories?: CategoriesUncheckedCreateNestedManyWithoutRestaurantInput
    Order?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    ProductImages?: ProductImagesUncheckedCreateNestedManyWithoutRestaurantInput
    Products?: ProductsUncheckedCreateNestedManyWithoutRestaurantInput
    Variations?: VariationsUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsCreateOrConnectWithoutTableInput = {
    where: RestaurantsWhereUniqueInput
    create: XOR<RestaurantsCreateWithoutTableInput, RestaurantsUncheckedCreateWithoutTableInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutTableInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutTableInput, OrderUncheckedUpdateWithoutTableInput>
    create: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutTableInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutTableInput, OrderUncheckedUpdateWithoutTableInput>
  }

  export type OrderUpdateManyWithWhereWithoutTableInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutTableInput>
  }

  export type RestaurantsUpsertWithoutTableInput = {
    update: XOR<RestaurantsUpdateWithoutTableInput, RestaurantsUncheckedUpdateWithoutTableInput>
    create: XOR<RestaurantsCreateWithoutTableInput, RestaurantsUncheckedCreateWithoutTableInput>
    where?: RestaurantsWhereInput
  }

  export type RestaurantsUpdateToOneWithWhereWithoutTableInput = {
    where?: RestaurantsWhereInput
    data: XOR<RestaurantsUpdateWithoutTableInput, RestaurantsUncheckedUpdateWithoutTableInput>
  }

  export type RestaurantsUpdateWithoutTableInput = {
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUpdateManyWithoutRestaurantNestedInput
    Order?: OrderUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantsUncheckedUpdateWithoutTableInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUncheckedUpdateManyWithoutRestaurantNestedInput
    Order?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    ProductImages?: ProductImagesUncheckedUpdateManyWithoutRestaurantNestedInput
    Products?: ProductsUncheckedUpdateManyWithoutRestaurantNestedInput
    Variations?: VariationsUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type OrderCreateWithoutPaymentsInput = {
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    Restaurant: RestaurantsCreateNestedOneWithoutOrderInput
    Table: TableCreateNestedOneWithoutOrderInput
    OrderProducts?: ProductOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentsInput = {
    Id?: number
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    TableId: number
    RestaurantId: number
    OrderProducts?: ProductOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
  }

  export type OrderUpsertWithoutPaymentsInput = {
    update: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrderUpdateWithoutPaymentsInput = {
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    Restaurant?: RestaurantsUpdateOneRequiredWithoutOrderNestedInput
    Table?: TableUpdateOneRequiredWithoutOrderNestedInput
    OrderProducts?: ProductOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    TableId?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
    OrderProducts?: ProductOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type CategoriesCreateManyRestaurantInput = {
    Id?: number
    Name: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Status?: boolean
    Active?: boolean
  }

  export type OrderCreateManyRestaurantInput = {
    Id?: number
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    TableId: number
  }

  export type ProductImagesCreateManyRestaurantInput = {
    Id?: number
    Name: string
    ImagePath: string
    Size: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
    productsId?: number | null
  }

  export type ProductsCreateManyRestaurantInput = {
    Id?: number
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    CategoryId: number
    Status?: boolean
    Active?: boolean
  }

  export type TableCreateManyRestaurantInput = {
    Id?: number
    Status?: boolean
    Number: number
    Barcode: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
  }

  export type VariationsCreateManyRestaurantInput = {
    Id?: number
    Name: string
    Value: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    ProductId: number
    Active?: boolean
  }

  export type CategoriesUpdateWithoutRestaurantInput = {
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    Products?: ProductsUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    Products?: ProductsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateManyWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderUpdateWithoutRestaurantInput = {
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    Table?: TableUpdateOneRequiredWithoutOrderNestedInput
    Payments?: PaymentsUpdateManyWithoutOrderNestedInput
    OrderProducts?: ProductOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    TableId?: IntFieldUpdateOperationsInput | number
    Payments?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
    OrderProducts?: ProductOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    TableId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductImagesUpdateWithoutRestaurantInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ImagePath?: StringFieldUpdateOperationsInput | string
    Size?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    Products?: ProductsUpdateOneWithoutProductImagesNestedInput
  }

  export type ProductImagesUncheckedUpdateWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ImagePath?: StringFieldUpdateOperationsInput | string
    Size?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    productsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductImagesUncheckedUpdateManyWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ImagePath?: StringFieldUpdateOperationsInput | string
    Size?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    productsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsUpdateWithoutRestaurantInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    ProductImages?: ProductImagesUpdateManyWithoutProductsNestedInput
    Categories?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    Variations?: VariationsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CategoryId?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    ProductImages?: ProductImagesUncheckedUpdateManyWithoutProductsNestedInput
    Variations?: VariationsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CategoryId?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TableUpdateWithoutRestaurantInput = {
    Status?: BoolFieldUpdateOperationsInput | boolean
    Number?: IntFieldUpdateOperationsInput | number
    Barcode?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    Order?: OrderUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Number?: IntFieldUpdateOperationsInput | number
    Barcode?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    Order?: OrderUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Number?: IntFieldUpdateOperationsInput | number
    Barcode?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VariationsUpdateWithoutRestaurantInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    OrderProduct?: ProductOrderUpdateManyWithoutVariationNestedInput
    Products?: ProductsUpdateOneRequiredWithoutVariationsNestedInput
  }

  export type VariationsUncheckedUpdateWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    OrderProduct?: ProductOrderUncheckedUpdateManyWithoutVariationNestedInput
  }

  export type VariationsUncheckedUpdateManyWithoutRestaurantInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductImagesCreateManyProductsInput = {
    Id?: number
    Name: string
    ImagePath: string
    Size: number
    RestaurantId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Active?: boolean
  }

  export type VariationsCreateManyProductsInput = {
    Id?: number
    Name: string
    Value: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    RestaurantId: number
    Active?: boolean
  }

  export type ProductImagesUpdateWithoutProductsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ImagePath?: StringFieldUpdateOperationsInput | string
    Size?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    Restaurant?: RestaurantsUpdateOneRequiredWithoutProductImagesNestedInput
  }

  export type ProductImagesUncheckedUpdateWithoutProductsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ImagePath?: StringFieldUpdateOperationsInput | string
    Size?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductImagesUncheckedUpdateManyWithoutProductsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ImagePath?: StringFieldUpdateOperationsInput | string
    Size?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VariationsUpdateWithoutProductsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Active?: BoolFieldUpdateOperationsInput | boolean
    OrderProduct?: ProductOrderUpdateManyWithoutVariationNestedInput
    Restaurant?: RestaurantsUpdateOneRequiredWithoutVariationsNestedInput
  }

  export type VariationsUncheckedUpdateWithoutProductsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    OrderProduct?: ProductOrderUncheckedUpdateManyWithoutVariationNestedInput
  }

  export type VariationsUncheckedUpdateManyWithoutProductsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductOrderCreateManyVariationInput = {
    Id?: number
    Quantity: number
    OrderId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ProductOrderUpdateWithoutVariationInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateOneRequiredWithoutOrderProductsNestedInput
  }

  export type ProductOrderUncheckedUpdateWithoutVariationInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    OrderId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOrderUncheckedUpdateManyWithoutVariationInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    OrderId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateManyCategoriesInput = {
    Id?: number
    Name: string
    Description: string
    ImgUrl: JsonNullValueInput | InputJsonValue
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    RestaurantId: number
    Status?: boolean
    Active?: boolean
  }

  export type ProductsUpdateWithoutCategoriesInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    ProductImages?: ProductImagesUpdateManyWithoutProductsNestedInput
    Restaurant?: RestaurantsUpdateOneRequiredWithoutProductsNestedInput
    Variations?: VariationsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoriesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    ProductImages?: ProductImagesUncheckedUpdateManyWithoutProductsNestedInput
    Variations?: VariationsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoriesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    ImgUrl?: JsonNullValueInput | InputJsonValue
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Status?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentsCreateManyOrderInput = {
    Id?: number
    Amount: number
    PaymentType: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type ProductOrderCreateManyOrderInput = {
    Id?: number
    Quantity: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    VariationId: number
  }

  export type PaymentsUpdateWithoutOrderInput = {
    Amount?: IntFieldUpdateOperationsInput | number
    PaymentType?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateWithoutOrderInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Amount?: IntFieldUpdateOperationsInput | number
    PaymentType?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyWithoutOrderInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Amount?: IntFieldUpdateOperationsInput | number
    PaymentType?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOrderUpdateWithoutOrderInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Variation?: VariationsUpdateOneRequiredWithoutOrderProductNestedInput
  }

  export type ProductOrderUncheckedUpdateWithoutOrderInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VariationId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductOrderUncheckedUpdateManyWithoutOrderInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VariationId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyTableInput = {
    Id?: number
    Status?: $Enums.Status
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Paid?: boolean
    Active?: boolean
    UserId: number
    RestaurantId: number
  }

  export type OrderUpdateWithoutTableInput = {
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    Restaurant?: RestaurantsUpdateOneRequiredWithoutOrderNestedInput
    Payments?: PaymentsUpdateManyWithoutOrderNestedInput
    OrderProducts?: ProductOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTableInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
    Payments?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
    OrderProducts?: ProductOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutTableInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paid?: BoolFieldUpdateOperationsInput | boolean
    Active?: BoolFieldUpdateOperationsInput | boolean
    UserId?: IntFieldUpdateOperationsInput | number
    RestaurantId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RestaurantsCountOutputTypeDefaultArgs instead
     */
    export type RestaurantsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestaurantsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductsCountOutputTypeDefaultArgs instead
     */
    export type ProductsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VariationsCountOutputTypeDefaultArgs instead
     */
    export type VariationsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VariationsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriesCountOutputTypeDefaultArgs instead
     */
    export type CategoriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TableCountOutputTypeDefaultArgs instead
     */
    export type TableCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TableCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RestaurantsDefaultArgs instead
     */
    export type RestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestaurantsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductsDefaultArgs instead
     */
    export type ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VariationsDefaultArgs instead
     */
    export type VariationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VariationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriesDefaultArgs instead
     */
    export type CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductOrderDefaultArgs instead
     */
    export type ProductOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductOrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductImagesDefaultArgs instead
     */
    export type ProductImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductImagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TableDefaultArgs instead
     */
    export type TableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TableDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentsDefaultArgs instead
     */
    export type PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentsDefaultArgs<ExtArgs>

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