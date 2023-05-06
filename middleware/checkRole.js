module.exports = (role) => {
    return async function (req, res, next) {
        if(req.user.role !== role) {
            res.status(403).json({
                status: "failed",
                message: `kamu gak bisa akses ini karena buka ${role}`
            })
        } else {
            next()
        }
    }
}