import chalk from 'chalk';
import express from 'express';
import { createServer } from 'http';

import { createApolloServer } from './apollo-server';
import { PORT } from './constants';

const app = express();

async function main() {
  const httpServer = createServer(app);
  const apolloServer = await createApolloServer(httpServer, app);

  await new Promise<void>((resolve) =>
    app.listen(PORT, () => {
      console.log(
        [
          chalk.bgMagentaBright.black.bold('GraphQL API listening on '),
          chalk.bgWhite.black(
            `\thttp://localhost:${PORT}${apolloServer.graphqlPath}\t`,
          ),
        ].join(' '),
      );
      resolve();
    }),
  );
}

main().catch((err) => {
  console.log(err);
});
