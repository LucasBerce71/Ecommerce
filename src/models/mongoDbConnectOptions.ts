export interface IMongoDBConnectOptions {
  autoIndex: boolean;
  maxPoolSize: number;
  serverSelectionTimeoutMS: number;
  socketTimeoutMS: number;
  family: number;
};