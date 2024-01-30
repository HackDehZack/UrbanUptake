const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10; // Adjust the cost factor as needed

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Basic email regex pattern

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        return emailRegex.test(email);
      },
      message: (props) => `${props.value} is not a valid email address`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20,
  },
  profilePicUrl: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

// Pre-save hook to hash password
userSchema.pre("save", function (next) {
  const user = this;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // Generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // Hash the password using the new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // Override the plaintext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

const User = model("User", userSchema);
module.exports = User;
