import User from "../models/user.js";

export const userIndex = (req, res, next) => {
  User.find()
    .then((users) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(users);
    })
    .catch((err) => next(err));
};

export const userRegister = (req, res) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    async (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        if (req.body.firstname) {
          user.firstname = req.body.firstname;
        }
        if (req.body.lastname) {
          user.lastname = req.body.lastname;
        }
        try {
          const user = await user.save();
          passport.authenticate("local")(req, res, () => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({ success: true, status: "Registration Successful!" });
          });
        } catch (err) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.json({ err: err });
        }
      }
    }
  );
};

export const userLogin = (req, res) => {
  const token = authenticate.getToken({ _id: req.user._id });
  res.status = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    token: token,
    status: "You are successfully logged in!",
  });
};

export const userLogout = (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie("session-id");
    res.redirect("/");
  } else {
    const err = new Error("You are not logged in!");
    err.status = 401;
    return next(err);
  }
};
