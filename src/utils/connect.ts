import mongoose from 'mongoose';
import config from 'config';

import logger from './logger';

async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);

    logger.info('Connectd to DB');
  } catch (error) {
    logger.error('Error connect to DB: ' + error);
    process.exit(1);
  }
}

export default connect;
