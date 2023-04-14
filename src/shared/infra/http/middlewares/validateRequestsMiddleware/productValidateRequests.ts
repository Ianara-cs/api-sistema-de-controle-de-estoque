import { celebrate, Joi, Segments } from 'celebrate'

export const productRegistrationValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().messages({
      "string.empty": `The name field cannot be empty!`,
      "any.required": "The name field is required!"
    }),

    expirationDate: Joi.date().required().iso().greater('now').messages({
      "date.format": "The expirationDate field must be in ISO 8601 date format!",
      "date.greater": "The expirationDate field is greater than the current date!",
      "any.required": "The expirationDate field is required!"
    }),

    manufactureDate: Joi.date().required().iso().messages({
      "date.base": "ManufactureDate field cannot be empty!",
      "date.format": "The manufactureDate field must be in ISO 8601 date format!",
      "any.required": "The manufactureDate field is required!"
    })
  })
})

export const productUpdateValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().messages({
      "string.empty": `The name field cannot be empty!`,
      "any.required": "The name field is required!"
    }),
  })
})

export const productSupplierValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    supplierId: Joi.string().required().messages({
      "string.empty": `The supplierId field cannot be empty!`,
      "any.required": "The supplierId field is required!"
    }),

  })
})

export const productExpirationDateValidator = celebrate({
  [Segments.QUERY]:  Joi.object().keys({
    expiration_date: Joi.date().required().iso().messages({
      "string.isoDate": "The expirationDate field must be in ISO 8601 date format!",
      "any.required": "The expirationDate field is required!"
    }),
  })
})

export const productManufactureDateValidator = celebrate({
  [Segments.QUERY]:  Joi.object().keys({
    manufacture_date: Joi.date().required().iso().messages({
      "date.format": "The manufactureDate field must be in ISO 8601 date format!",
      "any.required": "The manufactureDate field is required!" 
    })
  })
})