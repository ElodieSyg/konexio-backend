// Functions
function renamePicture(req, res, next) {
    const pathToFile = path.join(__dirname, req.path)
    const newPathToFile = path.join(__dirname, `username-date-heure.png`)

    /*     const date = new Date();
        console.log(date);
     */

    console.log('req_path', req.path)


    fs.rename(pathToFile, newPathToFile, function (err) {
        if (err) {
            return err
        } else {
            res.json({
                status: 'OK',
                message: 'Successfully renamed the file!',
            })
        };
    });
    next();
};