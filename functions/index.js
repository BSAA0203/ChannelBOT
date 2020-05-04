const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express');
const cors = require('cors');

const sb = require('./Router/school_bus');
const sn = require('./Router/school_number');
const ls = require('./Router/library_state');
const ci = require('./Router/cafe_info');

const bus = require('./Crawling/bus');
const number = require('./Crawling/number');
const library = require('./Crawling/library');
const cafe = require('./Crawling/cafe');

admin.initializeApp();

const app = express();
app.use(cors());
app.use('/sb', sb);
app.use('/sn', sn);
app.use('/ci', ci);
app.use('/ls', ls);

exports.helloWorld = functions
    .region('asia-northeast1')
    .https
    .onRequest(app);

exports.bus = bus.scheduledFunction;
exports.number_schedul = number.scheduledFunction;
exports.number = number.number;
exports.library_schedul = library.scheduledFunction;
exports.library = library.library;
// exports.cafe = this.cafe.scheduledFunction;