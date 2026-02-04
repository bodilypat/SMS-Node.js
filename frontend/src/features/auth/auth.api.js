//src/features/auth/auth.api.js

import api from "../../services/api";

export const loginApi = async (data) => 
    await api.post("/auth/login", data);

export const registerApi = async (data) =>
    await api.post("/auth/register", data);

export const forgotPasswordApi = async (email) =>
    await api.post("/auth/forgot-password", { email });

export const resetPasswordApi = async (token, password) =>
    await api.post("/auth/reset-password", { token, password });

export const verifyEmailApi = async (token) =>
    await api.post("/auth/verify-email", { token });

export const resendVerificationEmailApi = async (email) =>
    await api.post("/auth/resend-verification-email", { email });

export const logoutApi = async () =>
    await api.post("/auth/logout");


