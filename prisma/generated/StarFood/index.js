
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
  Active: 'Active',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt',
  DeletedAt: 'DeletedAt'
};

exports.Prisma.ProductsScalarFieldEnum = {
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

exports.Prisma.VariationsScalarFieldEnum = {
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

exports.Prisma.CategoriesScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt',
  DeletedAt: 'DeletedAt',
  RestaurantId: 'RestaurantId',
  Status: 'Status',
  Active: 'Active'
};

exports.Prisma.OrderScalarFieldEnum = {
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

exports.Prisma.ProductOrderScalarFieldEnum = {
  Id: 'Id',
  Quantity: 'Quantity',
  OrderId: 'OrderId',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt',
  VariationId: 'VariationId'
};

exports.Prisma.ProductImagesScalarFieldEnum = {
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

exports.Prisma.TableScalarFieldEnum = {
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

exports.Prisma.PaymentsScalarFieldEnum = {
  Id: 'Id',
  OrderId: 'OrderId',
  Amount: 'Amount',
  PaymentType: 'PaymentType',
  CreatedAt: 'CreatedAt',
  UpdatedAt: 'UpdatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
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
  "inlineSchema": "ZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gIm15c3FsIg0KICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfU1RBUl9GT09EX1VSTCIpDQp9DQoNCmdlbmVyYXRvciBjbGllbnQgew0KICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9TdGFyRm9vZCINCn0NCg0KbW9kZWwgUmVzdGF1cmFudHMgew0KICBJZCAgICAgICAgICAgIEludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBOYW1lICAgICAgICAgIFN0cmluZw0KICBSZXN0YXVyYW50SWQgIEludCAgICAgICAgICAgICBAdW5pcXVlDQogIEFjdGl2ZSAgICAgICAgQm9vbGVhbiAgICAgICAgIEBkZWZhdWx0KHRydWUpDQogIENyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KICBVcGRhdGVkQXQgICAgIERhdGVUaW1lICAgICAgICBAdXBkYXRlZEF0DQogIERlbGV0ZWRBdCAgICAgRGF0ZVRpbWU/DQogIENhdGVnb3JpZXMgICAgQ2F0ZWdvcmllc1tdDQogIE9yZGVyICAgICAgICAgT3JkZXJbXQ0KICBQcm9kdWN0SW1hZ2VzIFByb2R1Y3RJbWFnZXNbXQ0KICBQcm9kdWN0cyAgICAgIFByb2R1Y3RzW10NCiAgVGFibGUgICAgICAgICBUYWJsZVtdDQogIFZhcmlhdGlvbnMgICAgVmFyaWF0aW9uc1tdDQp9DQoNCm1vZGVsIFByb2R1Y3RzIHsNCiAgSWQgICAgICAgICAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgTmFtZSAgICAgICAgICBTdHJpbmcNCiAgRGVzY3JpcHRpb24gICBTdHJpbmcNCiAgSW1nVXJsICAgICAgICBKc29uDQogIENyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KICBVcGRhdGVkQXQgICAgIERhdGVUaW1lICAgICAgICBAdXBkYXRlZEF0DQogIERlbGV0ZWRBdCAgICAgRGF0ZVRpbWU/DQogIFJlc3RhdXJhbnRJZCAgSW50DQogIENhdGVnb3J5SWQgICAgSW50DQogIFN0YXR1cyAgICAgICAgQm9vbGVhbiAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQ0KICBBY3RpdmUgICAgICAgIEJvb2xlYW4gICAgICAgICBAZGVmYXVsdCh0cnVlKQ0KICBQcm9kdWN0SW1hZ2VzIFByb2R1Y3RJbWFnZXNbXQ0KICBDYXRlZ29yaWVzICAgIENhdGVnb3JpZXMgICAgICBAcmVsYXRpb24oZmllbGRzOiBbQ2F0ZWdvcnlJZF0sIHJlZmVyZW5jZXM6IFtJZF0pDQogIFJlc3RhdXJhbnQgICAgUmVzdGF1cmFudHMgICAgIEByZWxhdGlvbihmaWVsZHM6IFtSZXN0YXVyYW50SWRdLCByZWZlcmVuY2VzOiBbSWRdKQ0KICBWYXJpYXRpb25zICAgIFZhcmlhdGlvbnNbXQ0KDQogIEBAaW5kZXgoW0NhdGVnb3J5SWRdLCBtYXA6ICJQcm9kdWN0c19DYXRlZ29yeUlkX2ZrZXkiKQ0KICBAQGluZGV4KFtSZXN0YXVyYW50SWRdLCBtYXA6ICJQcm9kdWN0c19SZXN0YXVyYW50SWRfZmtleSIpDQp9DQoNCm1vZGVsIFZhcmlhdGlvbnMgew0KICBJZCAgICAgICAgICAgSW50ICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgTmFtZSAgICAgICAgIFN0cmluZw0KICBWYWx1ZSAgICAgICAgU3RyaW5nDQogIENyZWF0ZWRBdCAgICBEYXRlVGltZSAgICAgICBAZGVmYXVsdChub3coKSkNCiAgVXBkYXRlZEF0ICAgIERhdGVUaW1lICAgICAgIEB1cGRhdGVkQXQNCiAgRGVsZXRlZEF0ICAgIERhdGVUaW1lPw0KICBQcm9kdWN0SWQgICAgSW50DQogIFJlc3RhdXJhbnRJZCBJbnQNCiAgQWN0aXZlICAgICAgIEJvb2xlYW4gICAgICAgIEBkZWZhdWx0KHRydWUpDQogIE9yZGVyUHJvZHVjdCBQcm9kdWN0T3JkZXJbXQ0KICBQcm9kdWN0cyAgICAgUHJvZHVjdHMgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW1Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtJZF0pDQogIFJlc3RhdXJhbnQgICBSZXN0YXVyYW50cyAgICBAcmVsYXRpb24oZmllbGRzOiBbUmVzdGF1cmFudElkXSwgcmVmZXJlbmNlczogW0lkXSkNCg0KICBAQGluZGV4KFtQcm9kdWN0SWRdLCBtYXA6ICJWYXJpYXRpb25zX1Byb2R1Y3RJZF9ma2V5IikNCiAgQEBpbmRleChbUmVzdGF1cmFudElkXSwgbWFwOiAiVmFyaWF0aW9uc19SZXN0YXVyYW50SWRfZmtleSIpDQp9DQoNCm1vZGVsIENhdGVnb3JpZXMgew0KICBJZCAgICAgICAgICAgSW50ICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgTmFtZSAgICAgICAgIFN0cmluZw0KICBDcmVhdGVkQXQgICAgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpDQogIFVwZGF0ZWRBdCAgICBEYXRlVGltZSAgICBAdXBkYXRlZEF0DQogIERlbGV0ZWRBdCAgICBEYXRlVGltZT8NCiAgUmVzdGF1cmFudElkIEludA0KICBTdGF0dXMgICAgICAgQm9vbGVhbiAgICAgQGRlZmF1bHQoZmFsc2UpDQogIEFjdGl2ZSAgICAgICBCb29sZWFuICAgICBAZGVmYXVsdCh0cnVlKQ0KICBSZXN0YXVyYW50ICAgUmVzdGF1cmFudHMgQHJlbGF0aW9uKGZpZWxkczogW1Jlc3RhdXJhbnRJZF0sIHJlZmVyZW5jZXM6IFtJZF0pDQogIFByb2R1Y3RzICAgICBQcm9kdWN0c1tdDQoNCiAgQEBpbmRleChbUmVzdGF1cmFudElkXSwgbWFwOiAiQ2F0ZWdvcmllc19SZXN0YXVyYW50SWRfZmtleSIpDQp9DQoNCm1vZGVsIE9yZGVyIHsNCiAgSWQgICAgICAgICAgICBJbnQgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBTdGF0dXMgICAgICAgIFN0YXR1cyAgICAgICAgIEBkZWZhdWx0KFdBSVRJTkcpDQogIENyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgICAgQGRlZmF1bHQobm93KCkpDQogIFVwZGF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgICAgQHVwZGF0ZWRBdA0KICBEZWxldGVkQXQgICAgIERhdGVUaW1lPw0KICBQYWlkICAgICAgICAgIEJvb2xlYW4gICAgICAgIEBkZWZhdWx0KGZhbHNlKQ0KICBBY3RpdmUgICAgICAgIEJvb2xlYW4gICAgICAgIEBkZWZhdWx0KHRydWUpDQogIFVzZXJJZCAgICAgICAgSW50DQogIFRhYmxlSWQgICAgICAgSW50DQogIFJlc3RhdXJhbnRJZCAgSW50DQogIFJlc3RhdXJhbnQgICAgUmVzdGF1cmFudHMgICAgQHJlbGF0aW9uKGZpZWxkczogW1Jlc3RhdXJhbnRJZF0sIHJlZmVyZW5jZXM6IFtJZF0pDQogIFRhYmxlICAgICAgICAgVGFibGUgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW1RhYmxlSWRdLCByZWZlcmVuY2VzOiBbSWRdKQ0KICBQYXltZW50cyAgICAgIFBheW1lbnRzW10NCiAgT3JkZXJQcm9kdWN0cyBQcm9kdWN0T3JkZXJbXQ0KDQogIEBAaW5kZXgoW1Jlc3RhdXJhbnRJZF0sIG1hcDogIk9yZGVyX1Jlc3RhdXJhbnRJZF9ma2V5IikNCiAgQEBpbmRleChbVGFibGVJZF0sIG1hcDogIk9yZGVyX1RhYmxlSWRfZmtleSIpDQp9DQoNCm1vZGVsIFByb2R1Y3RPcmRlciB7DQogIElkICAgICAgICAgIEludCAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgUXVhbnRpdHkgICAgSW50DQogIE9yZGVySWQgICAgIEludA0KICBDcmVhdGVkQXQgICBEYXRlVGltZSAgIEBkZWZhdWx0KG5vdygpKQ0KICBVcGRhdGVkQXQgICBEYXRlVGltZSAgIEB1cGRhdGVkQXQNCiAgVmFyaWF0aW9uSWQgSW50DQogIE9yZGVyICAgICAgIE9yZGVyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW09yZGVySWRdLCByZWZlcmVuY2VzOiBbSWRdKQ0KICBWYXJpYXRpb24gICBWYXJpYXRpb25zIEByZWxhdGlvbihmaWVsZHM6IFtWYXJpYXRpb25JZF0sIHJlZmVyZW5jZXM6IFtJZF0pDQoNCiAgQEBpbmRleChbT3JkZXJJZF0sIG1hcDogIlByb2R1Y3RPcmRlcl9PcmRlcklkX2ZrZXkiKQ0KICBAQGluZGV4KFtWYXJpYXRpb25JZF0sIG1hcDogIlByb2R1Y3RPcmRlcl9WYXJpYXRpb25JZF9ma2V5IikNCn0NCg0KbW9kZWwgUHJvZHVjdEltYWdlcyB7DQogIElkICAgICAgICAgICBJbnQgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBOYW1lICAgICAgICAgU3RyaW5nDQogIEltYWdlUGF0aCAgICBTdHJpbmcNCiAgU2l6ZSAgICAgICAgIEludA0KICBSZXN0YXVyYW50SWQgSW50DQogIENyZWF0ZWRBdCAgICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkNCiAgVXBkYXRlZEF0ICAgIERhdGVUaW1lICAgIEB1cGRhdGVkQXQNCiAgRGVsZXRlZEF0ICAgIERhdGVUaW1lPw0KICBBY3RpdmUgICAgICAgQm9vbGVhbiAgICAgQGRlZmF1bHQodHJ1ZSkNCiAgUmVzdGF1cmFudCAgIFJlc3RhdXJhbnRzIEByZWxhdGlvbihmaWVsZHM6IFtSZXN0YXVyYW50SWRdLCByZWZlcmVuY2VzOiBbSWRdKQ0KICBQcm9kdWN0cyAgICAgUHJvZHVjdHM/ICAgQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RzSWRdLCByZWZlcmVuY2VzOiBbSWRdKQ0KICBwcm9kdWN0c0lkICAgSW50Pw0KDQogIEBAaW5kZXgoW1Jlc3RhdXJhbnRJZF0sIG1hcDogIlByb2R1Y3RJbWFnZXNfUmVzdGF1cmFudElkX2ZrZXkiKQ0KfQ0KDQptb2RlbCBUYWJsZSB7DQogIElkICAgICAgICAgICBJbnQgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBTdGF0dXMgICAgICAgQm9vbGVhbiAgICAgQGRlZmF1bHQoZmFsc2UpDQogIE51bWJlciAgICAgICBJbnQNCiAgQmFyY29kZSAgICAgIFN0cmluZw0KICBDcmVhdGVkQXQgICAgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpDQogIFVwZGF0ZWRBdCAgICBEYXRlVGltZSAgICBAdXBkYXRlZEF0DQogIERlbGV0ZWRBdCAgICBEYXRlVGltZT8NCiAgQWN0aXZlICAgICAgIEJvb2xlYW4gICAgIEBkZWZhdWx0KHRydWUpDQogIFJlc3RhdXJhbnRJZCBJbnQNCiAgT3JkZXIgICAgICAgIE9yZGVyW10NCiAgUmVzdGF1cmFudCAgIFJlc3RhdXJhbnRzIEByZWxhdGlvbihmaWVsZHM6IFtSZXN0YXVyYW50SWRdLCByZWZlcmVuY2VzOiBbSWRdKQ0KDQogIEBAaW5kZXgoW1Jlc3RhdXJhbnRJZF0sIG1hcDogIlRhYmxlX1Jlc3RhdXJhbnRJZF9ma2V5IikNCn0NCg0KbW9kZWwgUGF5bWVudHMgew0KICBJZCAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBPcmRlcklkICAgICBJbnQNCiAgQW1vdW50ICAgICAgSW50DQogIFBheW1lbnRUeXBlIFN0cmluZw0KICBDcmVhdGVkQXQgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgVXBkYXRlZEF0ICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KICBPcmRlciAgICAgICBPcmRlciAgICBAcmVsYXRpb24oZmllbGRzOiBbT3JkZXJJZF0sIHJlZmVyZW5jZXM6IFtJZF0pDQoNCiAgQEBpbmRleChbT3JkZXJJZF0sIG1hcDogIlBheW1lbnRzX09yZGVySWRfZmtleSIpDQp9DQoNCmVudW0gU3RhdHVzIHsNCiAgV0FJVElORw0KICBJTl9QUk9EVUNUSU9ODQogIERPTkUNCiAgQ09NUExFVEVEDQogIFBBSURfT1VUDQp9DQo=",
  "inlineSchemaHash": "9b9157029e559ecf626d9ff8628a4b378c6fd3cb0b0cb2bfb89a646a41fe924f",
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"Restaurants\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"DeletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Categories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Categories\",\"relationName\":\"CategoriesToRestaurants\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToRestaurants\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductImages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductImages\",\"relationName\":\"ProductImagesToRestaurants\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"ProductsToRestaurants\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Table\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Table\",\"relationName\":\"RestaurantsToTable\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Variations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Variations\",\"relationName\":\"RestaurantsToVariations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Products\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ImgUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"DeletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CategoryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductImages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductImages\",\"relationName\":\"ProductImagesToProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Categories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Categories\",\"relationName\":\"CategoriesToProducts\",\"relationFromFields\":[\"CategoryId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"ProductsToRestaurants\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Variations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Variations\",\"relationName\":\"ProductsToVariations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Variations\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"DeletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProductId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderProduct\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductOrder\",\"relationName\":\"ProductOrderToVariations\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Products\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"ProductsToVariations\",\"relationFromFields\":[\"ProductId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"RestaurantsToVariations\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Categories\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"DeletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"CategoriesToRestaurants\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"CategoriesToProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Order\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Status\",\"default\":\"WAITING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"DeletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Paid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TableId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"OrderToRestaurants\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Table\",\"relationName\":\"OrderToTable\",\"relationFromFields\":[\"TableId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Payments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payments\",\"relationName\":\"OrderToPayments\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductOrder\",\"relationName\":\"OrderToProductOrder\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductOrder\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"VariationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToProductOrder\",\"relationFromFields\":[\"OrderId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Variation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Variations\",\"relationName\":\"ProductOrderToVariations\",\"relationFromFields\":[\"VariationId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductImages\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ImagePath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"DeletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"ProductImagesToRestaurants\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Products\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"ProductImagesToProducts\",\"relationFromFields\":[\"productsId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productsId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Table\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Barcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"DeletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RestaurantId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToTable\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Restaurant\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Restaurants\",\"relationName\":\"RestaurantsToTable\",\"relationFromFields\":[\"RestaurantId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Payments\":{\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UpdatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToPayments\",\"relationFromFields\":[\"OrderId\"],\"relationToFields\":[\"Id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Status\":{\"values\":[{\"name\":\"WAITING\",\"dbName\":null},{\"name\":\"IN_PRODUCTION\",\"dbName\":null},{\"name\":\"DONE\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"PAID_OUT\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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
