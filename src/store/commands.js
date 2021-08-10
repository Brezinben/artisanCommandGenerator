export const commonsOptions = [
  {
    name: "--help",
    description:
      "Display help for the given command. When no command is given display help for the list command.",
    short: "-h",
    value: null,
  },
  {
    name: "--quiet",
    description: "Do not output any message.",
    short: "-q",
    value: null,
  },
  {
    name: "--version",
    description: "Display this application version.",
    short: "-V",
    value: null,
  },
  {
    name: "--ansi",
    description: "Force ANSI output.",
    short: "",
    value: null,
  },
  {
    name: "--no-ansi",
    description: "Disable ANSI output.",
    short: "",
    value: null,
  },
  {
    name: "--no-interaction",
    description: "Do not ask any interactive question.",
    short: "-n",
    value: null,
  },
  {
    name: "--env",
    description: "The environment the command should run under.",
    short: "",
    value: { need: true, value: "Env" },
  },
  {
    name: "-v",
    description: "Increase the verbosity of messages, normal output.",
    short: "-v",
    value: null,
  },
  {
    name: "-vv",
    description: "Increase the verbosity of messages, more verbose.",
    short: "-vv",
    value: null,
  },
  {
    name: "-vvv",
    description: "Increase the verbosity of messages, for debug.",
    short: "-vvv",
    value: null,
  },
];

export default [
  {
    name: "cast",
    entitySuffix: "Cast",
    options: [],
  },
  {
    name: "channel",
    entitySuffix: "Channel",
    options: [],
  },
  {
    name: "command",
    entitySuffix: "",
    options: [
      {
        name: "--command",
        description: "The terminal command that should be assigned.",
        short: "",
        value: { need: true, value: "Command" },
      },
    ],
  },

  {
    name: "component",
    entitySuffix: "",
    options: [
      {
        name: "--force ",
        description: "Create the class even if the component already exists",
        short: "",
        value: null,
      },
      {
        name: "--inline",
        description: "Create a component that renders an inline view",
        short: "",
        value: null,
      },
    ],
  },
  {
    name: "controller",
    entitySuffix: "Controller",
    tipsName: "singular",
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
        description: "Generate a nested resource controller class.",
        short: "",
        value: { need: true, value: "Model" },
      },
    ],
  },

  {
    name: "event",
    entitySuffix: "",
    options: [],
  },
  {
    name: "exception",
    entitySuffix: "Exception",
    options: [
      {
        name: "--render",
        description: "Create the exception with an empty render method.",
        short: "",
        value: null,
      },
      {
        name: "--report",
        description: "Create the exception with an empty report method.",
        short: "",
        value: null,
      },
    ],
  },
  {
    name: "factory",
    entitySuffix: "",
    options: [
      {
        name: "--model",
        description: "The name of the model.",
        short: "",
        value: { need: true, value: "Model" },
      },
    ],
  },
  {
    name: "job",
    entitySuffix: "Job",
    options: [
      {
        name: "--sync",
        description: "Indicates that job should be synchronous.",
        short: "",
        value: null,
      },
    ],
  },
  {
    name: "listener",
    entitySuffix: "",
    options: [
      {
        name: "--event",
        description: "The event class being listened for.",
        short: "",
        value: { need: true, value: "Event" },
      },
      {
        name: "--queued",
        description: "Indicates the event listener should be queued.",
        short: "",
        value: null,
      },
    ],
  },
  {
    name: "mail",
    entitySuffix: "",
    options: [
      {
        name: "--markdown",
        description: "Create a new Markdown template for the mailable.",
        short: "-m",
        value: null,
      },
      {
        name: "--force",
        description: "Create the class even if the mailable already exists.",
        short: "-f",
        value: null,
      },
    ],
  },
  {
    name: "middleware",
    entitySuffix: "",
    options: [],
  },
  {
    name: "migration",
    entitySuffix: "",
    options: [
      {
        name: " suffix create",
        description: "To correspond to best practice.",
        short: "",
        value: null,
        other: true,
      },
      {
        name: " suffix alter",
        description: "To correspond to best practice.",
        short: "",
        value: null,
        other: true,
      },
      {
        name: " pivot",
        description: "To correspond to best practice.",
        short: "",
        value: { need: true, value: "Model" },
        other: true,
      },
      {
        name: "--create",
        description: "The table to be created.",
        short: "",
        value: { need: true, value: "Table" },
      },
      {
        name: "--table",
        description: "The table to migrate.",
        short: "",
        value: { need: true, value: "Table" },
      },
      {
        name: "--path",
        description: "The location where the migration file should be created.",
        short: "",
        value: { need: true, value: "Path" },
      },
      {
        name: "--realpath",
        description:
          "Indicate any provided migration file paths are pre-resolved absolute path.",
        short: "",
        value: null,
      },
      {
        name: "--fullpath",
        description: "Output the full path of the migration.",
        short: "",
        value: null,
      },
    ],
  },
  {
    name: "model",
    tipsName: "singular",
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
          "Generate a migration, seeder, factory, and resource controller for the model.",
        short: "-a",
        value: null,
      },
      {
        name: "--force",
        description: "Create the class even if the model already exists.",
        short: "-f",
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
  {
    name: "notification",
    entitySuffix: "",
    options: [
      {
        name: "--markdown",
        description: "Create a new Markdown template for the notification.",
        short: "-m",
        value: null,
      },
      {
        name: "--force",
        description:
          "Create the class even if the notification already exists.",
        short: "-f",
        value: null,
      },
    ],
  },
  {
    name: "observer",
    entitySuffix: "Observer",
    options: [
      {
        name: "--model",
        description: "The model that the observer applies to.",
        short: "",
        value: { need: true, value: "Model" },
      },
    ],
  },
  {
    name: "policy",
    entitySuffix: "Policy",
    options: [
      {
        name: "--model",
        description: "The model that the policy applies to.",
        short: "-m",
        value: { need: true, value: "Model" },
      },
      {
        name: "--guard",
        description: "The guard that the policy relies on.",
        short: "-g",
        value: { need: true, value: "Model" },
      },
    ],
  },
  {
    name: "provider",
    entitySuffix: "Provider",
    options: [],
  },
  {
    name: "request",
    entitySuffix: "Request",
    options: [],
  },
  {
    name: "resource",
    entitySuffix: "Resource",
    options: [
      {
        name: "--collection",
        description:
          "Create a ResourceCollection instead of individual Resource class.",
        short: "",
        value: { need: true, value: "Model" },
      },
    ],
  },
  {
    name: "rule",
    entitySuffix: "",
    options: [],
  },
  {
    name: "seeder",
    entitySuffix: "TableSeeder",
    options: [],
  },
  {
    name: "test",
    entitySuffix: "Test",
    options: [
      {
        name: "--unit",
        description: "Create a unit (or, otherwise, feature) test.",
        short: "",
        value: null,
      },
    ],
  },
].map((cmd) => {
  cmd.isChecked = false;
  cmd.options = cmd.options
    .map((opt) => {
      opt.isChecked = false;
      return opt;
    })
    .sort((x, y) => {
      if (x.name < y.name) return -1;
      if (x.name > y.name) return 1;
      return 0;
    });
  cmd.options = [...cmd.options, ...commonsOptions];

  return cmd;
});
