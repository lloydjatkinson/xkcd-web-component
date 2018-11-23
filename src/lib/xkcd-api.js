import jsonp from 'jsonp-promise';

const getLatestComic = async (number = undefined) => await jsonp(`http://dynamic.xkcd.com/api-0/jsonp/comic/${number}`).promise;

export {
    getLatestComic
};