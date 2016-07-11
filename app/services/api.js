import ApiAbstract from './api-abstract';

class Api extends ApiAbstract {

    constructor(config) {
        super(config);
    }

    fetch() {

        var options = {
            url: 'http://api.giphy.com/v1/stickers/trending',
            query: {
                api_key: 'dc6zaTOxFJmzC',
                limit: 5
            }
        };

        return this.requestManager.get(options);

    }

}

export default Api;