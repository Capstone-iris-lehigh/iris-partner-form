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
        title: "Contact Name",
        variableName: "contactName",
        inputPlaceHolder: "Contact Name",
        htmlType: "inputField",
        joiValidation: Joi.string()
          .min(3)
          .max(30)
          .required()
          .label("Contact Name"),
      },

      {
        title: "Country Code",
        variableName: "countryCode",
        inputPlaceHolder: "Country Code",
        htmlType: "countryCodeSelection",
        joiValidation: Joi.label("Country Code"),
      },

      {
        title: "Phone",
        variableName: "phone",
        inputPlaceHolder: "Phone Number",
        htmlType: "inputField",
        joiValidation: Joi.number().label("Phone").required(),
      },

      {
        title: "Email",
        variableName: "email",
        inputPlaceHolder: "Email",
        htmlType: "inputField",
        joiValidation: Joi.string().email().label("Email").required(),
      },

      {
        title: "Company Website",
        variableName: "website",
        inputPlaceHolder: "Website Url",
        htmlType: "inputField",
        joiValidation: Joi.string().required().label("Company Website"),
      },

      {
        title: "Industry Type/Sector",
        variableName: "industryType",
        inputPlaceHolder: "Industry Type/Sector",
        htmlType: "inputSelection",
        options: [
          "Consulting Civil Engineering",
          "Infrastructure Concessionaire",
          "Telco",
          "IT Software",
          "Other - Please Specify",
        ],
        joiValidation: Joi.string().required().label("Industry Type/Sector"),
      },

      {
        title: "Global Regions",
        variableName: "globalRegions",
        inputPlaceHolder: "Global Regions",
        htmlType: "inputField",
        joiValidation: Joi.string().required().label("Global Regions"),
      },

      {
        title: "Year Incorporated",
        variableName: "yearIncor",
        inputPlaceHolder: "Year Incorporated",
        htmlType: "inputField",
        joiValidation: Joi.number().required().label("Year Incorporated"),
      },

      {
        title: "Type of Partnership",
        variableName: "typeOfPartnership",
        inputPlaceHolder: "Type of Partnership",
        htmlType: "inputSelection",
        options: [
          "AI/ML",
          "Iot",
          "Geospatial Development",
          "IT Integrator",
          "Channel Reseller",
          "Other - Please Specify",
        ],
        joiValidation: Joi.string().required().label("Type of Partnership"),
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
        inputPlaceHolder: "Annual revenue",
        htmlType: "inputSelection",
        options: [
          "10,000 - 100,000",
          "100,000 - 1,000,000",
          "1,000,000 - 10,000,000",
          "10,000,000 - 100,000,000",
          "100,000,000 - 1,000,000,000",
          "1,000,000,000 - 10,000,000,000",
        ],
        joiValidation: Joi.string().required().label("Annual Revenues"),
      },

      {
        title: "Number of staff",
        variableName: "numberOfStaff",
        inputPlaceHolder: "Number of staff",
        htmlType: "inputField",
        joiValidation: Joi.number().required().label("Number of Staff"),
      },

      {
        title: "Number of Client Countries",
        variableName: "NumberOfClientCountries:",
        inputPlaceHolder: "Number of Client Countries",
        htmlType: "inputField",

        joiValidation: Joi.number()
          .required()
          .label("Number of Client Countries"),
      },

      {
        title: "Client Type",
        variableName: "clientType",
        inputPlaceHolder: "Client Type",
        htmlType: "inputSelection",
        options: [
          "Public Sector",
          "Private Sector",
          "Institutional",
          "Law Enforcement",
          "Military/Defense",
          "Other - Please Specify",
        ],
        joiValidation: Joi.string().required().label("Client Type"),
      },

      {
        title: "Expected Revenue as a IRIS Partner",
        variableName: "expectedRevenue",
        inputPlaceHolder: "Expected Revenue as a IRIS Partner ",
        htmlType: "inputField",
        joiValidation: Joi.number().label("Expected revenues"),
      },

      {
        title: "Monthly Hours can dedicate to Iris",
        variableName: "hourWithIris",
        inputPlaceHolder: "Monthly Hours can dedicate to Iris ",
        // inputPlaceHolder:
        //   "Number of hours per month dedicated to Business Development of the IRIS Smart City Technology",
        htmlType: "inputField",
        joiValidation: Joi.number().label("Expected revenues"),
      },

      {
        title: "Partnership Expectation",
        variableName: "partnershipExpectation",
        inputPlaceHolder:
          "What does good look like: Tell us what a successful partnership looks like. (250 words)",
        htmlType: "textAreaField",
        joiValidation: Joi.string()
          .min(50)
          .max(1000)
          .required()
          .label("Partnership Expectation"),
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
