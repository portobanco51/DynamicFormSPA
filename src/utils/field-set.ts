const fieldSet = [
  [
    {
      id: "firstName",
      placeholder: "First name",
      required: true,
      type: "text",
    },
    {
      id: "lastName",
      placeholder: "Last name",
      required: true,
      type: "text",
    },
  ],
  {
    id: "email",
    required: true,
    type: "email",
  },
  {
    id: "address1",
    placeholder: "Address 1",
    type: "text",
  },
  [
    {
      id: "city",
      type: "text",
    },
    {
      id: "state",
      type: "text",
    },
    {
      id: "zip",
      type: "number",
    },
  ],
  {
    id: "phone",
    required: true,
    type: "text",
  },
  {
    id: "jobTitle",
    options: [
      "Engineer - Lead",
      "Engineer - Mid level",
      "Engineer - Junior",
      "Engineer - Front End focused",
      "Engineer - Backend focused",
      "Engineer - Full stack",
    ],
    placeholder: "Please select job title",
    type: "select",
  },
  {
    id: "reason",
    placeholder:
      "Describe why you are a good fit for the job you are applying for.",
    type: "textarea",
  },
];

export default fieldSet;
