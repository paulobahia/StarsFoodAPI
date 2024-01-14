
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.RestaurantsScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  RestaurantId: 'RestaurantId',
  Active: 'Active'
};

exports.Prisma.ProductsScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  Description: 'Description',
  ImgUrl: 'ImgUrl',
  CreatedTime: 'CreatedTime',
  UpdateTime: 'UpdateTime',
  RestaurantId: 'RestaurantId',
  CategoryId: 'CategoryId',
  Status: 'Status',
  Active: 'Active'
};

exports.Prisma.VariationsScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  Value: 'Value',
  CreatedTime: 'CreatedTime',
  UpdateTime: 'UpdateTime',
  ProductId: 'ProductId',
  RestaurantId: 'RestaurantId',
  Active: 'Active'
};

exports.Prisma.CategoriesScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  CreatedTime: 'CreatedTime',
  UpdateTime: 'UpdateTime',
  RestaurantId: 'RestaurantId',
  Status: 'Status',
  Active: 'Active'
};

exports.Prisma.OrderScalarFieldEnum = {
  Id: 'Id',
  Status: 'Status',
  CreatedTime: 'CreatedTime',
  UpdateTime: 'UpdateTime',
  Paid: 'Paid',
  Active: 'Active',
  UserId: 'UserId',
  TableId: 'TableId',
  RestaurantId: 'RestaurantId'
};

exports.Prisma.ProductOrderScalarFieldEnum = {
  Id: 'Id',
  Quantity: 'Quantity',
  OrderId: 'OrderId',
  CreatedTime: 'CreatedTime',
  UpdateTime: 'UpdateTime',
  VariationId: 'VariationId'
};

exports.Prisma.ProductImagesScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  ImagePath: 'ImagePath',
  Size: 'Size',
  RestaurantId: 'RestaurantId',
  CreatedTime: 'CreatedTime',
  UpdateTime: 'UpdateTime',
  Active: 'Active',
  ProductId: 'ProductId'
};

exports.Prisma.TableScalarFieldEnum = {
  Id: 'Id',
  Status: 'Status',
  Number: 'Number',
  CreatedTime: 'CreatedTime',
  UpdateTime: 'UpdateTime',
  Active: 'Active',
  RestaurantId: 'RestaurantId'
};

exports.Prisma.PaymentsScalarFieldEnum = {
  Id: 'Id',
  OrderId: 'OrderId',
  Amount: 'Amount',
  PaymentType: 'PaymentType',
  CreatedTime: 'CreatedTime',
  UpdateTime: 'UpdateTime'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Status = exports.$Enums.Status = {
  WAITING: 'WAITING',
  IN_PRODUCTION: 'IN_PRODUCTION',
  DONE: 'DONE',
  COMPLETED: 'COMPLETED',
  PAID_OUT: 'PAID_OUT'
};

exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Dev\\StarFoodAPI\\prisma\\generated\\StarFood",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_STAR_FOOD_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "CmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9TVEFSX0ZPT0RfVVJMIikKfQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9TdGFyRm9vZCIKfQoKbW9kZWwgUmVzdGF1cmFudHMgewogIElkICAgICAgICAgICAgSW50ICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgTmFtZSAgICAgICAgICBTdHJpbmcKICBSZXN0YXVyYW50SWQgIEludCAgICAgICAgICAgICBAdW5pcXVlCiAgQWN0aXZlICAgICAgICBCb29sZWFuICAgICAgICAgQGRlZmF1bHQodHJ1ZSkKICBDYXRlZ29yaWVzICAgIENhdGVnb3JpZXNbXQogIE9yZGVyICAgICAgICAgT3JkZXJbXQogIFByb2R1Y3RJbWFnZXMgUHJvZHVjdEltYWdlc1tdCiAgUHJvZHVjdHMgICAgICBQcm9kdWN0c1tdCiAgVGFibGUgICAgICAgICBUYWJsZVtdCiAgVmFyaWF0aW9ucyAgICBWYXJpYXRpb25zW10KfQoKbW9kZWwgUHJvZHVjdHMgewogIElkICAgICAgICAgICAgSW50ICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgTmFtZSAgICAgICAgICBTdHJpbmcKICBEZXNjcmlwdGlvbiAgIFN0cmluZwogIEltZ1VybCAgICAgICAgSnNvbgogIENyZWF0ZWRUaW1lICAgRGF0ZVRpbWUgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIFVwZGF0ZVRpbWUgICAgRGF0ZVRpbWUgICAgICAgIEB1cGRhdGVkQXQKICBSZXN0YXVyYW50SWQgIEludAogIENhdGVnb3J5SWQgICAgSW50CiAgU3RhdHVzICAgICAgICBCb29sZWFuICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgQWN0aXZlICAgICAgICBCb29sZWFuICAgICAgICAgQGRlZmF1bHQodHJ1ZSkKICBQcm9kdWN0SW1hZ2VzIFByb2R1Y3RJbWFnZXNbXQogIENhdGVnb3JpZXMgICAgQ2F0ZWdvcmllcyAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtDYXRlZ29yeUlkXSwgcmVmZXJlbmNlczogW0lkXSkKICBSZXN0YXVyYW50ICAgIFJlc3RhdXJhbnRzICAgICBAcmVsYXRpb24oZmllbGRzOiBbUmVzdGF1cmFudElkXSwgcmVmZXJlbmNlczogW0lkXSkKICBWYXJpYXRpb25zICAgIFZhcmlhdGlvbnNbXQoKICBAQGluZGV4KFtDYXRlZ29yeUlkXSwgbWFwOiAiUHJvZHVjdHNfQ2F0ZWdvcnlJZF9ma2V5IikKICBAQGluZGV4KFtSZXN0YXVyYW50SWRdLCBtYXA6ICJQcm9kdWN0c19SZXN0YXVyYW50SWRfZmtleSIpCn0KCm1vZGVsIFZhcmlhdGlvbnMgewogIElkICAgICAgICAgICBJbnQgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIE5hbWUgICAgICAgICBTdHJpbmcKICBWYWx1ZSAgICAgICAgU3RyaW5nCiAgQ3JlYXRlZFRpbWUgIERhdGVUaW1lICAgICAgIEBkZWZhdWx0KG5vdygpKQogIFVwZGF0ZVRpbWUgICBEYXRlVGltZSAgICAgICBAdXBkYXRlZEF0CiAgUHJvZHVjdElkICAgIEludAogIFJlc3RhdXJhbnRJZCBJbnQKICBBY3RpdmUgICAgICAgQm9vbGVhbiAgICAgICAgQGRlZmF1bHQodHJ1ZSkKICBPcmRlclByb2R1Y3QgUHJvZHVjdE9yZGVyW10KICBQcm9kdWN0cyAgICAgUHJvZHVjdHMgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW1Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtJZF0pCiAgUmVzdGF1cmFudCAgIFJlc3RhdXJhbnRzICAgIEByZWxhdGlvbihmaWVsZHM6IFtSZXN0YXVyYW50SWRdLCByZWZlcmVuY2VzOiBbSWRdKQoKICBAQGluZGV4KFtQcm9kdWN0SWRdLCBtYXA6ICJWYXJpYXRpb25zX1Byb2R1Y3RJZF9ma2V5IikKICBAQGluZGV4KFtSZXN0YXVyYW50SWRdLCBtYXA6ICJWYXJpYXRpb25zX1Jlc3RhdXJhbnRJZF9ma2V5IikKfQoKbW9kZWwgQ2F0ZWdvcmllcyB7CiAgSWQgICAgICAgICAgIEludCAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgTmFtZSAgICAgICAgIFN0cmluZwogIENyZWF0ZWRUaW1lICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkKICBVcGRhdGVUaW1lICAgRGF0ZVRpbWUgICAgQHVwZGF0ZWRBdAogIFJlc3RhdXJhbnRJZCBJbnQKICBTdGF0dXMgICAgICAgQm9vbGVhbiAgICAgQGRlZmF1bHQoZmFsc2UpCiAgQWN0aXZlICAgICAgIEJvb2xlYW4gICAgIEBkZWZhdWx0KHRydWUpCiAgUmVzdGF1cmFudCAgIFJlc3RhdXJhbnRzIEByZWxhdGlvbihmaWVsZHM6IFtSZXN0YXVyYW50SWRdLCByZWZlcmVuY2VzOiBbSWRdKQogIFByb2R1Y3RzICAgICBQcm9kdWN0c1tdCgogIEBAaW5kZXgoW1Jlc3RhdXJhbnRJZF0sIG1hcDogIkNhdGVnb3JpZXNfUmVzdGF1cmFudElkX2ZrZXkiKQp9Cgptb2RlbCBPcmRlciB7CiAgSWQgICAgICAgICAgICBJbnQgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIFN0YXR1cyAgICAgICAgU3RhdHVzICAgICAgICAgQGRlZmF1bHQoV0FJVElORykKICBDcmVhdGVkVGltZSAgIERhdGVUaW1lICAgICAgIEBkZWZhdWx0KG5vdygpKQogIFVwZGF0ZVRpbWUgICAgRGF0ZVRpbWUgICAgICAgQHVwZGF0ZWRBdAogIFBhaWQgICAgICAgICAgQm9vbGVhbiAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgQWN0aXZlICAgICAgICBCb29sZWFuICAgICAgICBAZGVmYXVsdCh0cnVlKQogIFVzZXJJZCAgICAgICAgSW50CiAgVGFibGVJZCAgICAgICBJbnQKICBSZXN0YXVyYW50SWQgIEludAogIFJlc3RhdXJhbnQgICAgUmVzdGF1cmFudHMgICAgQHJlbGF0aW9uKGZpZWxkczogW1Jlc3RhdXJhbnRJZF0sIHJlZmVyZW5jZXM6IFtJZF0pCiAgVGFibGUgICAgICAgICBUYWJsZSAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbVGFibGVJZF0sIHJlZmVyZW5jZXM6IFtJZF0pCiAgUGF5bWVudHMgICAgICBQYXltZW50c1tdCiAgT3JkZXJQcm9kdWN0cyBQcm9kdWN0T3JkZXJbXQoKICBAQGluZGV4KFtSZXN0YXVyYW50SWRdLCBtYXA6ICJPcmRlcl9SZXN0YXVyYW50SWRfZmtleSIpCiAgQEBpbmRleChbVGFibGVJZF0sIG1hcDogIk9yZGVyX1RhYmxlSWRfZmtleSIpCn0KCm1vZGVsIFByb2R1Y3RPcmRlciB7CiAgSWQgICAgICAgICAgSW50ICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIFF1YW50aXR5ICAgIEludAogIE9yZGVySWQgICAgIEludAogIENyZWF0ZWRUaW1lIERhdGVUaW1lICAgQGRlZmF1bHQobm93KCkpCiAgVXBkYXRlVGltZSAgRGF0ZVRpbWUgICBAdXBkYXRlZEF0CiAgVmFyaWF0aW9uSWQgSW50CiAgT3JkZXIgICAgICAgT3JkZXIgICAgICBAcmVsYXRpb24oZmllbGRzOiBbT3JkZXJJZF0sIHJlZmVyZW5jZXM6IFtJZF0pCiAgVmFyaWF0aW9uICAgVmFyaWF0aW9ucyBAcmVsYXRpb24oZmllbGRzOiBbVmFyaWF0aW9uSWRdLCByZWZlcmVuY2VzOiBbSWRdKQoKICBAQGluZGV4KFtPcmRlcklkXSwgbWFwOiAiUHJvZHVjdE9yZGVyX09yZGVySWRfZmtleSIpCiAgQEBpbmRleChbVmFyaWF0aW9uSWRdLCBtYXA6ICJQcm9kdWN0T3JkZXJfVmFyaWF0aW9uSWRfZmtleSIpCn0KCm1vZGVsIFByb2R1Y3RJbWFnZXMgewogIElkICAgICAgICAgICBJbnQgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIE5hbWUgICAgICAgICBTdHJpbmcKICBJbWFnZVBhdGggICAgU3RyaW5nCiAgU2l6ZSAgICAgICAgIEludAogIFJlc3RhdXJhbnRJZCBJbnQKICBDcmVhdGVkVGltZSAgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpCiAgVXBkYXRlVGltZSAgIERhdGVUaW1lICAgIEB1cGRhdGVkQXQKICBBY3RpdmUgICAgICAgQm9vbGVhbiAgICAgQGRlZmF1bHQodHJ1ZSkKICBQcm9kdWN0SWQgICAgSW50PwogIFByb2R1Y3RzICAgICBQcm9kdWN0cz8gICBAcmVsYXRpb24oZmllbGRzOiBbUHJvZHVjdElkXSwgcmVmZXJlbmNlczogW0lkXSkKICBSZXN0YXVyYW50ICAgUmVzdGF1cmFudHMgQHJlbGF0aW9uKGZpZWxkczogW1Jlc3RhdXJhbnRJZF0sIHJlZmVyZW5jZXM6IFtJZF0pCgogIEBAaW5kZXgoW1Byb2R1Y3RJZF0sIG1hcDogIlByb2R1Y3RJbWFnZXNfUHJvZHVjdElkX2ZrZXkiKQogIEBAaW5kZXgoW1Jlc3RhdXJhbnRJZF0sIG1hcDogIlByb2R1Y3RJbWFnZXNfUmVzdGF1cmFudElkX2ZrZXkiKQp9Cgptb2RlbCBUYWJsZSB7CiAgSWQgICAgICAgICAgIEludCAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgU3RhdHVzICAgICAgIEJvb2xlYW4gICAgIEBkZWZhdWx0KGZhbHNlKQogIE51bWJlciAgICAgICBJbnQKICBDcmVhdGVkVGltZSAgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpCiAgVXBkYXRlVGltZSAgIERhdGVUaW1lICAgIEB1cGRhdGVkQXQKICBBY3RpdmUgICAgICAgQm9vbGVhbiAgICAgQGRlZmF1bHQodHJ1ZSkKICBSZXN0YXVyYW50SWQgSW50CiAgT3JkZXIgICAgICAgIE9yZGVyW10KICBSZXN0YXVyYW50ICAgUmVzdGF1cmFudHMgQHJlbGF0aW9uKGZpZWxkczogW1Jlc3RhdXJhbnRJZF0sIHJlZmVyZW5jZXM6IFtJZF0pCgogIEBAaW5kZXgoW1Jlc3RhdXJhbnRJZF0sIG1hcDogIlRhYmxlX1Jlc3RhdXJhbnRJZF9ma2V5IikKfQoKbW9kZWwgUGF5bWVudHMgewogIElkICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgT3JkZXJJZCAgICAgSW50CiAgQW1vdW50ICAgICAgSW50CiAgUGF5bWVudFR5cGUgU3RyaW5nCiAgQ3JlYXRlZFRpbWUgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgVXBkYXRlVGltZSAgRGF0ZVRpbWUgQHVwZGF0ZWRBdAogIE9yZGVyICAgICAgIE9yZGVyICAgIEByZWxhdGlvbihmaWVsZHM6IFtPcmRlcklkXSwgcmVmZXJlbmNlczogW0lkXSkKCiAgQEBpbmRleChbT3JkZXJJZF0sIG1hcDogIlBheW1lbnRzX09yZGVySWRfZmtleSIpCn0KCmVudW0gU3RhdHVzIHsKICBXQUlUSU5HCiAgSU5fUFJPRFVDVElPTgogIERPTkUKICBDT01QTEVURUQKICBQQUlEX09VVAp9Cg==",
  "inlineSchemaHash": "5568e535c7cee400f848236fdd341ffb0987ccce40f7f2847e1bf640657b524f",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/StarFood",
    "generated/StarFood",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Restaurants\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Categories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Categories\",\"relationName\":\"CategoriesToRestaurants\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToRestaurants\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductImages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductImages\",\"relationName\":\"ProductImagesToRestaurants\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"ProductsToRestaurants\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Table\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Table\",\"relationName\":\"RestaurantsToTable\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Variations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Variations\",\"relationName\":\"RestaurantsToVariations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Products\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ImgUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CategoryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductImages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductImages\",\"relationName\":\"ProductImagesToProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Categories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Categories\",\"relationName\":\"CategoriesToProducts\",\"relationFromFields\":[\"CategoryId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"ProductsToRestaurants\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Variations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Variations\",\"relationName\":\"ProductsToVariations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Variations\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"ProductId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderProduct\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductOrder\",\"relationName\":\"ProductOrderToVariations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Products\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"ProductsToVariations\",\"relationFromFields\":[\"ProductId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"RestaurantsToVariations\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Categories\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"CategoriesToRestaurants\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"CategoriesToProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Order\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Status\",\"default\":\"WAITING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Paid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TableId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"OrderToRestaurants\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Table\",\"relationName\":\"OrderToTable\",\"relationFromFields\":[\"TableId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Payments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payments\",\"relationName\":\"OrderToPayments\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductOrder\",\"relationName\":\"OrderToProductOrder\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductOrder\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"VariationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToProductOrder\",\"relationFromFields\":[\"OrderId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Variation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Variations\",\"relationName\":\"ProductOrderToVariations\",\"relationFromFields\":[\"VariationId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductImages\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ImagePath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Products\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"ProductImagesToProducts\",\"relationFromFields\":[\"ProductId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"ProductImagesToRestaurants\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Table\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToTable\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"RestaurantsToTable\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Payments\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToPayments\",\"relationFromFields\":[\"OrderId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Status\":{\"values\":[{\"name\":\"WAITING\",\"dbName\":null},{\"name\":\"IN_PRODUCTION\",\"dbName\":null},{\"name\":\"DONE\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"PAID_OUT\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/StarFood/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/StarFood/schema.prisma")
