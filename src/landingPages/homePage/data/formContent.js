import Joi from "joi-browser";

export const formContent = [
  {
    fieldLabel: "Company Information",
    fieldVarLabel: "CompanyInfoData",
    formContent: [
      {
        title: "Company Name",
        variableName: "companyName",
        inputPlaceHolder: "Company Name",
        htmlType: "inputField",
        joiValidation: Joi.string()
          .min(4)
          .max(30)
          .required()
          .label("Company Name"),
      },

      {
        title: "Company Type",
        variableName: "businessType",
        inputPlaceHolder: "Select Company Type",
        htmlType: "inputField",
        joiValidation: Joi.string().required().label("Business Type"),
      },

      {
        title: "Business Length",
        variableName: "businessLength",
        inputPlaceHolder: "Business Length",
        htmlType: "inputField",
        joiValidation: Joi.number()
          .required()
          .required()
          .label("Business Length"),
      },
      {
        title: "Year Incorporated",
        variableName: "yearIncor",
        inputPlaceHolder: "Year Incorporated",
        htmlType: "inputField",
        joiValidation: Joi.number().required().label("Year Incorporated"),
      },
      {
        title: "Executive Profiles",
        variableName: "executiveInfo",
        inputPlaceHolder: "Executive Profiles (max 500 letters)",
        htmlType: "textAreaField",
        joiValidation: Joi.string()
          .min(8)
          .max(500)
          .required()
          .label("Executive Information"),
      },
    ],
  },

  {
    fieldLabel: "Offering Details",
    fieldVarLabel: "OfferDetailsData",
    formContent: [
      {
        title: "Annual Revenue",
        variableName: "annualRevenue",
        inputPlaceHolder: "Annual revenues for the past 4 years",
        htmlType: "inputField",
        joiValidation: Joi.number().required().label("Annual revenues"),
      },

      {
        title: "Current Offering",
        variableName: "currentOffering",
        inputPlaceHolder: "Your current offerings",
        htmlType: "inputField",
        joiValidation: Joi.number().required().label("Current offerings"),
      },

      {
        title: "Number of staff",
        variableName: "numberOfStaff",
        inputPlaceHolder: "Number of staff",
        htmlType: "inputField",
        joiValidation: Joi.number().required().label("Number of staff"),
      },
      {
        title: "Offering Type",
        variableName: "offeringType",
        inputPlaceHolder: "Offering global or domestic",
        htmlType: "inputField",
        joiValidation: Joi.string().required().label("Offering type"),
      },
      {
        title: "Expected Revenue",
        variableName: "expectedRevenue",
        inputPlaceHolder: "Expected revenues in adopting the IRIS solution",
        htmlType: "inputField",
        joiValidation: Joi.number().required().label("Expected revenues"),
      },
    ],
  },

  // Uncomment below to test out dynamic form rendering
  // {
  //   fieldLabel: "More Detail",
  //   fieldVarLabel: "MoreDetail",
  //   formContent: [
  //     {
  //       title: "CEO AGE",
  //       variableName: "CeoAge",
  //       inputPlaceHolder: "CEO Age",
  //       htmlType: "inputField",
  //       joiValidation: Joi.number().required().label("CEO AGE"),
  //     },
  //   ],
  // },
];
