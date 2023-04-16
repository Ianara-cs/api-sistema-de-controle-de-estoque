import { celebrate, Joi, Segments } from 'celebrate'

export const supplierRegistrationValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().messages({
      "string.empty": "The name field cannot be empty!",
      "any.required": "The city field is required!"
    }),

    email: Joi.string().required().email().messages({
      "string.empty": "The email field cannot be empty!",
      "string.email": "The email field must be of type email",
      "any.required": "The city field is required!"
    }),

    cnpj: Joi.string().required().pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)
    .messages({
      "string.empty": "The cnpj field cannot be empty!",
      "string.pattern.base": "The cnpj field must be of type cnpj!",
      "any.required": "The city field is required!"
    }), 

    phone: Joi.string().required().pattern(/\b\d{2}\d{5}\d{4}\b/)
    .messages({
      "string.empty": "The phone field cannot be empty!",
      "string.pattern.base": "The phone field must be of type phone!",
      "any.required": "The city field is required!"
    }), 

    city: Joi.string().required().empty().messages({
      "string.empty": "The city field cannot be empty!",
      "any.required": "The city field is required!"
    }), 

    country: Joi.string().required().empty().messages({
      "string.empty": "The country field cannot be empty!",
      "any.required": "The country field is required!"
    }),

    neighborhood: Joi.string().required().empty().messages({
      "string.empty": "The neighborhood field cannot be empty!",
      "any.required": "The neighborhood field is required!"
    }),

    number: Joi.number().integer().required().messages({
      "number.base": "The number field must be integer!",
      "any.required": "The number field is required!"
    }),

    state: Joi.string().required().empty().messages({
      "string.empty": "The state field cannot be empty!",
      "any.required": "The state field is required!"
    }),

    street: Joi.string().required().empty().messages({
      "string.empty": "The street field cannot be empty!",
      "any.required": "The street field is required!"
    }),

    zipCode: Joi.string().required().empty().pattern(/^\d{5}\d{3}$/)
    .messages({
      "string.empty": "The zipCode field cannot be empty!",
      "string.pattern.base": "The zipCode field must be of type zipCode!",
      "any.required": "The zipCode field is required!"
    }), 
  })
})

export const supplierAddressValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    city: Joi.string().required().empty().messages({
      "string.empty": "The city field cannot be empty!",
      "any.required": "The city field is required!"
    }), 

    country: Joi.string().required().empty().messages({
      "string.empty": "The country field cannot be empty!",
      "any.required": "The country field is required!"
    }),

    neighborhood: Joi.string().required().empty().messages({
      "string.empty": "The neighborhood field cannot be empty!",
      "any.required": "The neighborhood field is required!"
    }),

    number: Joi.number().integer().required().messages({
      "number.base": "The number field must be integer!",
      "any.required": "The number field is required!"
    }),

    state: Joi.string().required().empty().messages({
      "string.empty": "The state field cannot be empty!",
      "any.required": "The state field is required!"
    }),

    street: Joi.string().required().empty().messages({
      "string.empty": "The street field cannot be empty!",
      "any.required": "The street field is required!"
    }),

    zipCode: Joi.string().required().empty().pattern(/^\d{5}\d{3}$/)
    .messages({
      "string.empty": "The zipCode field cannot be empty!",
      "string.pattern.base": "The zipCode field must be of type zipCode!",
      "any.required": "The zipCode field is required!"
    }), 
  })
})