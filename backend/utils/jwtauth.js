import JWT from 'jsonwebtoken'

const getJwt = (user) => {
    const {_id, profile} = user;
    // console.log(_id)
    const userStudent = {
        id: _id,
        profile: profile
    };
    const tokenStudent = JWT.sign(userStudent, process.env.JWT_SECURE, { expiresIn: '7D' });
    // console.log("hii jwtauth",tokenStudent)

    return tokenStudent;

}

export const sentToken = (user, res, statuscode, message) => {
    const token = getJwt(user)

    const options = {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Create a new Date object
        httpOnly: true // Consider adding httpOnly for security
      };    

    res.status(statuscode).cookie("token", token, options).json({
        success: true,
        statuscode,
        message,
        token,
        user
    })
}