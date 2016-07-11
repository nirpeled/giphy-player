import ApiAbstract from './api-abstract';

class Api extends ApiAbstract {

    constructor(config) {
        super(config);
    }

    fetch() {

        var options = {
            url: 'http://api.giphy.com/v1/gifs/random',
            query: {
                api_key: 'dc6zaTOxFJmzC'
            }
        };

        return this.requestManager.get(options);

    }

}

export default Api;