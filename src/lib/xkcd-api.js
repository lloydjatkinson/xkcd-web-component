import jsonp from 'jsonp-promise';

const getLatestComic = async () => await jsonp('http://dynamic.xkcd.com/api-0/jsonp/comic/').promise;

export {
    getLatestComic
};