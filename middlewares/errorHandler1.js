function errorHandler(asyncController) {
    return async (req, res) => {
        try {
            await asyncController(req, res)
        } catch (err) {
            if (err.message === "KEY_ERROR" || err.message === "INVALID_DATA_INPUT") {
                return res.status(err.statusCode ? err.statusCode : 400).json({ message : err.message });
            } 
            else {
                return res.status(500).json({ message : err.message });
            }
        }
    }
}

module.exports = errorHandler;