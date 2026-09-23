import userModel from "../modules/auth.module.js";
import bcrypt from "bcryptjs";
import {
  createAccessToken,
  createRefreshToken,
  readRefreshToken,
} from "../utils/auth.js";

export const authRegisterController = async (req, res) => {
  try {
    const { name, email, password, number } = req.body;

    const allreadyExistEmail = await userModel.findOne({ email });

    if (allreadyExistEmail) {
      return res.status(400).json({
        message: "email allready exist",
      });
    }

    const user = await userModel.create({
      name,
      email,
      number,
      hashPassword: await bcrypt.hash(password, 6),
    });

    const accessToken = createAccessToken({
      userId: user._id,
    });

    const refreshToken = createRefreshToken({
      userId: user._id,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    await userModel.findByIdAndUpdate(user._id, {
      refreshToken,
    });

    return res.status(201).json({
      message: "user register succefully",
      accessToken,
      data: {
        user: {
          name: user.name,
          email: user.email,
          id: user._id,
        },
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

export const authLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.hashPassword);

    if (!isValidPassword) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    const accessToken = createAccessToken({
      userId: user._id,
    });

    const refreshToken = createRefreshToken({
      userId: user._id,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    await userModel.findOneAndUpdate({ email }, { refreshToken });

    return res.status(200).json({
      messsage: "userr loggeIn succesfully",
      accessToken,
      data: {
        user: {
          name: user.name,
          email: user.email,
          id: user._id,
        },
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

export const authRefreshController = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(400).json({
      message: "refresh not found",
    });
  }

  try {
    const decoded = readRefreshToken(refreshToken);

    const { userId } = decoded;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }

    if (refreshToken !== user.refreshToken) {
      await userModel.findByIdAndUpdate(user._id, { refreshToken: null });

      return res.status(400).json({
        message: "refresh Token mismatch",
      });
    }

    const accessToken = createAccessToken({
      userId: user._id,
    });

    const newRefreshToken = createRefreshToken({
      userId: user._id,
    });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
    });

    await userModel.findByIdAndUpdate(user._id, {
      refreshToken: newRefreshToken,
    });

    return res.status(200).json({
      message: "refresh token roteted",
      accessToken,
      data: {
        user: {
          name: user.name,
          email: user.email,
          id: user._id,
        },
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "internal server error",
    });
  }
};

export const authMeController = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await userModel.findById(userId);

    return res.status(200).json({
      message: "user find succefully",
      data: {
        user: {
          name: user.name,
          email: user.email,
          id: user._id,
        },
      },
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

export const authLogoutController = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(400).json({
      message: "user allready logout",
    });
  }

  try {
    const decoded = readRefreshToken(refreshToken);

    const { userId } = decoded;

    await userModel.findByIdAndUpdate(userId, {
      refreshToken: null,
    });

    res.clearCookie("refreshToken");

    return res.status(200).json({
      message: "user logOut seccufully",
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
