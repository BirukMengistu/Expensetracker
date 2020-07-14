// @desc get controller
// @route /api/v1/transaction get controller

exports.getTransactions = (req, res , next) => {
    res.send('getTransactions')
}
// @desc get controller
// @route /api/v1/transaction post controller
// @Access public
exports.addTransactions = (req, res , next) => {
    res.send('Add Transactions')
}

// @desc delete controller
// @route /api/v1/transaction/:id delete controller
// @Access public
exports.deleteTransactions = (req, res , next) => {
    res.send('delete Transactions')
}