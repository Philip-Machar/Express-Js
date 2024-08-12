const notFound = (req, res, next) => {
    const error = new Error({msg: 'Not found'});
    error.status = 404;
    next(error);
}

export default notFound;
