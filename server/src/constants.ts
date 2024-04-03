import { join } from 'path';
import * as pkgUp from 'pkg-up';

export const SERVER_WORKSPACE_PKG_JSON_PATH = pkgUp.pkgUpSync();
if (!SERVER_WORKSPACE_PKG_JSON_PATH)
  throw new Error('package.json path could not be found');
export const ROOT_PKG_JSON_PATH = join(
  SERVER_WORKSPACE_PKG_JSON_PATH,
  '..',
  '..',
);

function rootBasedPath(name: string): string {
  return join(ROOT_PKG_JSON_PATH, name);
}

export const GRAPHQL_SCHEMA_PATH = rootBasedPath('schema.graphql');
export const PORT = process.env.PORT || 3000;
