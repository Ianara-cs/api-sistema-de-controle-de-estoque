import { celebrate, Joi, Segments } from 'celebrate'

export const inventoryRegistrationValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().empty().messages({
      "string.empty": "The name field cannot be empty!",
      "any.required": "The name field is required!"
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

    zipCode: Joi.string().required().empty().pattern(/^\d{5}-?\d{3}$/)
    .messages({
      "string.empty": "The zipCode field cannot be empty!",
      "string.pattern.base": "The zipCode field must be of type zipCode!",
      "any.required": "The zipCode field is required!"
    }), 
  })
})

export const inventoryUpdateValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().empty().messages({
      "string.empty": "The name field cannot be empty!",
      "any.required": "The name field is required!"
    }),
  })
})

export const itemRegistrationValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    productId: Joi.string().required().empty().messages({
      "string.empty": "The productId field cannot be empty!",
      "any.required": "The productId field is required!"
    }),

    supplierId: Joi.string().required().empty().messages({
      "string.empty": "The supplierId field cannot be empty!",
      "any.required": "The supplierId field is required!"
    }),

    quantity: Joi.number().integer().required().messages({
      "number.integer": "The quantity field must be integer!",
      "any.required": "The quantity field is required!"
    }),
  })
})

export const quantityValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    quantity: Joi.number().integer().required().messages({
      "number.integer": "The quantity field must be integer!",
      "any.required": "The quantity field is required!"
    }),
  })
})

export const itemExpirationDateValidator = celebrate({
  [Segments.QUERY]:  Joi.object().keys({
    expiration_date: Joi.date().required().iso().messages({
      "string.isoDate": "The expirationDate field must be in ISO 8601 date format!",
      "any.required": "The expirationDate field is required!"
    }),
  })
})