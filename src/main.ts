import { logger } from './utils/logger';
import { Config } from './types/config';
import { readConfig } from './utils/jsonfile';

async function start_application(config: Config) {
  logger.info(config.test);
}

(async () => {
  await readConfig('./config/config.json').then(
    async (config) => await start_application(config),
  );
})();
