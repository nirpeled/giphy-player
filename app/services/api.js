import ApiAbstract from './api-abstract';

class Api extends ApiAbstract {

    constructor(config) {
        super(config);
    }

    fetch(offset) {

        var options = {
            url: 'http://api.giphy.com/v1/gifs/trending',
            query: {
                api_key: 'dc6zaTOxFJmzC',
                limit: 5,
                offset
            }
        };

        return this.requestManager.get(options);

    }

}

export default Api;