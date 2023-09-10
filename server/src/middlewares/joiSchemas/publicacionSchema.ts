import Joi from 'joi';

const  id_pueblic = Joi.string().uuid().min(1).required();
const  message = Joi.string().min(1).min(1).max(280).required();


export const addMEssageSchema = Joi.object({
	message
});

export const editMessageSchema = Joi.object({
	id_pueblic,
	message
});