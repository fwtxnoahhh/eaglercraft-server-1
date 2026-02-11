// Logger.js

class Logger {
    static logEvent(event) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] EVENT: ${event}`);
    }

    static logError(error) {
        const timestamp = new Date().toISOString();
        console.error(`[${timestamp}] ERROR: ${error}`);
    }

    static logInfo(info) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] INFO: ${info}`);
    }
}

module.exports = Logger;