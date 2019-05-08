import { combineReducers } from 'redux';

const requireModule = require.context('.', true, /^(?!.\/index).*Reducer.js$/);

const modules = {};

requireModule.keys().forEach(filename => {
    const moduleName = filename.replace(/(\.\/|\.js)/g, '');
    modules[moduleName] = requireModule(filename).default;
});

export default combineReducers(modules);
