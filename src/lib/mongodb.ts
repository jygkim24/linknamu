import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 없습니다. .env.local을 확인하세요.");
}

// 개발 중에는 핫 리로드마다 연결이 새로 생기지 않도록 전역에 보관
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise =
  globalForMongo._mongoClientPromise ?? new MongoClient(uri).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClientPromise = clientPromise;
}

// 데이터베이스 이름은 URI 경로(/linknamu)를 그대로 사용
export async function getDb() {
  const client = await clientPromise;
  return client.db();
}
