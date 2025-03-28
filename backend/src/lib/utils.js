import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
    console.log("Generating token for userId:", userId); // Log the userId being used
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn:"7d"
    })

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,//prevent XSS attacks cross site scripting attacks
        sameSite: 'strict',//CSRF attacks cross-site 
        secure:process.env.NODE_ENV !== "development"
    })
    return token;
}
