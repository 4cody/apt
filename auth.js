import passport from "passport";
// import LocalStrategy from require('passport-local').Strategy;
import User from "./models/user.js";
// import JwtStrategy from require('passport-jwt').Strategy;
// import ExtractJwt from require('passport-jwt').ExtractJwt;
import jwt from "jsonwebtoken";

const config = require("./config.js");
// export const local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

export const getToken = (user) => {
  return jwt.sign(user, config.secretKey, { expiresIn: 3600 });
};

// const opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = config.secretKey;

// export const jwtPassport = passport.use(
//   new JwtStrategy(opts, (jwt_payload, done) => {
//     console.log("JWT payload:", jwt_payload);
//     User.findOne({ _id: jwt_payload._id }, (err, user) => {
//       if (err) {
//         return done(err, false);
//       } else if (user) {
//         return done(null, user);
//       } else {
//         return done(null, false);
//       }
//     });
//   })
// );

export const verifyUser = passport.authenticate("jwt", { session: false });

export const verifyAdmin = (req, res, next) => {
  if (req.user.admin) {
    return next();
  } else {
    const err = new Error("You are not authorized to perform this operation!");
    err.status = 403;
    return next(err);
  }
};
