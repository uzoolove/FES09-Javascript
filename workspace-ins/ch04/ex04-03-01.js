function log(target, level, message) {
  const now = new Date();
  console.log(`[${now.getHours()}:${now.getMinutes()}] [${target}] [${level}] ${message}`);
}
log('console', 'DEBUG', 'debug message...');

var logger = _.curry(log);
logger('file')('INFO')('info message...');

var consoleLog = logger('console');
var fileLog = logger('file');
logger.debug = consoleLog('DEBUG');
logger.info = fileLog('INFO');

logger.info('serve start on port 1234');
logger.debug('server test ... OK');