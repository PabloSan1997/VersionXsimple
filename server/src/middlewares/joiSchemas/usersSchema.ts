import Joi from 'joi';


const name = Joi.string().min(1).max(80).required();
const email = Joi.string().email().min(1).required();
const password = Joi.string().min(1).required();
const token = Joi.string().min(5).required();

export const addUserSchema = Joi.object({
	email,
	name,
	password
});

export const loginUserSchema = Joi.object({
	email,
	password
});

export const logginTokenSchema = Joi.object({
	token
});