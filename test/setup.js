'use strict';

var Chai = require('chai');

var Factory = require('../lib');

global.expect = Chai.expect;
global.API_KEY = 'test_fd34e1b5ea86a597ec89f7f2e46940c874d';
global.Lob = Factory(global.API_KEY);
