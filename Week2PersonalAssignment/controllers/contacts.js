const mongodb = require('../database/connection');
const ObjectId = require('mongodb').ObjectId;

const getAllRecords = async (req, res, next) => {
  const result = await mongodb.getDb().db("kofi_contacts").collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getOneRecord = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("kofi_contacts")
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAllRecords, getOneRecord };

