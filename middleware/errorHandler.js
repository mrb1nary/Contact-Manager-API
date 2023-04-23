const errorHandler = (err, req, res, next) => {
const statusCode = res.statusCode ? res.statusCode : 500;
switch(statusCode){
    case 400:
        res.status(statusCode).json({
            title: "Validation Failed",
            message: err.message,
            stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
        })
        break;
    case 404:
        res.status(statusCode).json({
            title: "Not Found",
            message: err.message,
            stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
        })
        break;
    default:
        break;
}



}

module.exports = errorHandler;