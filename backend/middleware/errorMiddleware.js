const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error); // Pass the error to the next middleware
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode; // If the status code is 200, set it to 500, otherwise use the status code that was passed in
    let message = err.message;

    if(err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = 'Resource not found';
    }

    res.status(statusCode).json({
        message, 
        stack: process.env.NODE_ENV === 'production' ? null : err.stack, // If we're in production, don't show the stack trace

    });
};

export { notFound, errorHandler };