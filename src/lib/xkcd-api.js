import jsonp from 'jsonp-promise';

// xkcd's REST API does not have CORS enabled - however there is a JSONP API that can be used.
const getLatestComic = async (number = undefined) => await jsonp(`http://dynamic.xkcd.com/api-0/jsonp/comic/${number}`).promise;

export {
    getLatestComic
};
