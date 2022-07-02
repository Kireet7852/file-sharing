const router = require('express').Router();
const File = require('../models/file');

router.get('/:uuid', async (req, res) => {
    try{
        // Extract link and get file from storage send download stream 
        const file = await File.findOne({ uuid: req.params.uuid });
        // Link expired
        if(!file) {
                throw new Error('link not exist')
        } 
        const response = await file.save();
        const filePath = `${__dirname}/../${file.path}`;
        res.download(filePath);
    }
    catch(err){
        return 'err';
    }
});


module.exports = router;