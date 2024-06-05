const Data = require('../models/Data');

const GetData = async (req, res) => {
    try {
        console.log(req.qurey)
        const lim=req.query.q || 100
        console.log(lim)
        const data = await Data.find({}).limit(lim);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'some error occured' });
    }
};

const AddData = async (req, res) => {
    try {
        const newData = new Data(req.body);
        const savedData = await newData.save();
        res.status(200).json(savedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'some error error' });
    }
};

module.exports={AddData,GetData}