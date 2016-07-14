import logger from './logger.js';
import safeStringify from './safe-stringify.js';
import localStorage from './local-storage.js';
import convertImageToData from './convert-image-to-data.js';

class Helpers {

    constructor() {
        this.logger = logger;
        this.safeStringify = safeStringify;
        this.localStorage = localStorage;
        this.convertImageToData = convertImageToData;
    }
    
}

const helpers = new Helpers();

export default helpers;