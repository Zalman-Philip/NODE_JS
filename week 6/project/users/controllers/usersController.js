const express = require("express");
const router = express.Router();
const handelError = require("../../util/errorHandler");
const { sendAllUsers, sendUserById, createUser } = require("../service/usersService")
const {validateUser, validateUserPatch} = require("../../validation/validation")

const getAllUsers = async(req, res) => {
  try {
    const users = await sendAllUsers()
    res.send(users)
  } catch (error) {
    handelError(res, 500, error.message)
  }
};
const getUserById = async(req, res) => {
  try {
    const userId = req.params.id
    const user = await sendUserById(userId)
    res.send(user)
  } catch (error) {
    handelError(res, 500, error.message)
  }
};
const signIn = async(req, res) => {
    const {error} = validateUser(req.body)
    if(error) throw new Error(error.details.message)
    const user = await createUser(req.body)
    res.send("sign up successfully")
  try {
  } catch (error) {
    handelError(res, 500, "failed to sign up")
  }
};
const updateUserPartly = async(req, res) => {
  try {
    const {error} = validateUserPatch(req.body)
    if(error) throw new Error(error.details.message)
    const user  = await editUser(req.body)
    res.send(user)
  } catch (error) {
    handelError(res, 400, error.message)
  }
};
const updateUser = async (req, res) => {
  try {
  } catch (error) {}
};
const deleteUser = async(req, res) => {
  try {
  } catch (error) {}
};

module.exports = {getAllUsers,getUserById,signIn,updateUserPartly,updateUser,deleteUser}
 const login = () => {
    
 }