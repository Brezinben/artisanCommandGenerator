let data = [
  {
    name: "channel",
    entitySuffix: "Channel",
    options: [],
  },
  // {
  //   name: "command",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  {
    name: "controller",
    entitySuffix: "Controller",
    options: [
      {
        name: "--resource",
        description:
          "The controller will contain a method for each of the available resource operations – index(), create(), store(), show(), edit(), update(), destroy().",
        short: "",
        value: null,
      },
      {
        name: "--api",
        description:
          "Similar to –resource above, but generate only 5 methods: index(), store(), show(), update(), destroy(). Because create/edit forms are not needed for API.",
        short: "",
        value: null,
      },
      {
        name: "--invokable",
        description: "Generates controller with one __invoke() method.",
        short: "",
        value: null,
      },
      {
        name: "--model",
        description:
          "If you are using route model binding and would like the resource controller’s methods to type-hint a model instance.",
        short: "",
        value: { need: true, value: "Model" },
      },
      {
        name: "--parent",
        description: "Generate a nested resource controller class",
        short: "",
        value: { need: true, value: "Model" },
      },
    ],
  },
  // {
  //   name: "event",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "exception",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "factory",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "job",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "listener",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "mail",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "middleware",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "migration",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  {
    name: "model",
    entitySuffix: "",
    options: [
      {
        name: "--migration",
        description: "Create a new migration file for the model.",
        short: "-m",
        value: null,
      },
      {
        name: "--controller",
        description: "Create a new controller for the model.",
        short: "-c",
        value: null,
      },
      {
        name: "--resource",
        description:
          "Indicates if the generated controller should be a resource controller.",
        short: "-r",
        value: null,
      },
      {
        name: "--factory",
        description: "Create a new factory for the model.",
        short: "-f",
        value: null,
      },
      {
        name: "--all",
        description:
          "Generate all of the above: a migration, factory, and resource controller for the model.",
        short: "-a",
        value: null,
      },
      {
        name: "--force",
        description: "Create the class even if the model already exists.",
        short: "",
        value: null,
      },
      {
        name: "--pivot",
        description:
          "Indicates if the generated model should be a custom intermediate table model.",
        short: "",
        value: null,
      },
    ],
  },
  // {
  //   name: "notification",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "observer",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "policy",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "provider",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "request",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "resource",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "rule",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "seeder",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
  // {
  //   name: "test",
  //   options: [
  //     {
  //       name: "",
  //       description: "",
  //       short: "",
  //       value: "",
  //     },
  //   ],
  // },
];
console.log(data);
data = data.map((cmd) => {
  cmd.isChecked = false;
  cmd.options.map((opt) => {
    opt.isChecked = false;
  });
  return cmd;
});

export default data;
