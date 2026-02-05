//src/services/auth.service.js 

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const registerUser = async (data) => {
    const { username, password } = data;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        throw new Error('Username already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    return newUser;
};

export const loginUser = async (data) => {
    const { username, password } = data;
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
};

export const changePassword = async (userId, oldPassword, newPassword) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isOldPasswordValid) {
        throw new Error('Old password is incorrect');
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();
    return user;
};

export const resetPassword = async (username, newPassword) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('User not found');
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();
    return user;
};

export const getUserProfile = async (userId) => {
    const user = await User.findById(userId).select('-password');
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

export const updateUserProfile = async (userId, data) => {
    const user = await User.findByIdAndUpdate(userId, data, { new: true }).select('-password');
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

export const deleteUserAccount = async (userId) => {
    const user = await User.findByIdAndDelete(userId);  
    if (!user) {
        throw new Error('User not found');
    }   
    return user;
};

export const logoutUser = async (token) => {
    // Invalidate token logic can be implemented here (e.g., storing in a blacklist)
    return true;
};

export const refreshToken = (oldToken) => {
    try {
        const decoded = jwt.verify(oldToken, process.env.JWT_SECRET);
        const newToken = jwt.sign({ id: decoded.id, username: decoded.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return newToken;
    } catch (error) {
        throw new Error('Invalid token');
    }
};

export const getAllUsers = async () => {
    const users = await User.find().select('-password');
    return users;
};

export const assignRoleToUser = async (userId, role) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    user.role = role;
    await user.save();
    return user;
};

export const revokeUserRole = async (userId) => {
    const user = await User.findById(userId);   
    if (!user) {
        throw new Error('User not found');
    }
    user.role = null;
    await user.save();
    return user;
};

export const getUserRoles = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return user.role;
};

export const isUserAuthorized = async (userId, requiredRole) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return user.role === requiredRole;
};

export const deactivateUserAccount = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    user.isActive = false;
    await user.save();
    return user;
};

export const activateUserAccount = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    user.isActive = true;
    await user.save();
    return user;
};

export const getActiveUsers = async () => {
    const users = await User.find({ isActive: true }).select('-password');
    return users;
};

export const getInactiveUsers = async () => {
    const users = await User.find({ isActive: false }).select('-password');
    return users;
};

export const updateUserSettings = async (userId, settings) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    user.settings = { ...user.settings, ...settings };
    await user.save();
    return user;
};

export const getUserSettings = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return user.settings;
};

export const logUserActivity = async (userId, activity) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }   
    user.activityLog.push({ activity, date: new Date() });
    await user.save();
    return user;
};

export const getUserActivityLog = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }   
    return user.activityLog;
};

export const clearUserActivityLog = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    user.activityLog = [];
    await user.save();
    return user;
};

export const getUsersByRole = async (role) => {
    const users = await User.find({ role }).select('-password');
    return users;
};

