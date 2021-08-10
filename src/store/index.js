import { createStore } from "vuex";
import commands from "./commands";

export default createStore({
  state: {
    entityName: null,
    commandString: `php artisan make:`,
    commands: commands,
    selectedCommand: null,
    options: [],
    allCommands: [],
    currentCommand: "",
  },
  mutations: {
    setSelectedCommand: (state, cmd) => (state.selectedCommand = cmd),
    setEntityName: (state, name) => (state.entityName = name),
    setOptions: (state, options) => (state.options = options),
    addCommand(state, newCommand) {
      state.allCommands = [...state.allCommands, newCommand];
    },
    deleteCommand: (state, command) =>
      (state.allCommands = state.allCommands.filter(
        (cmd) => cmd.order != command.order
      )),
  },
  actions: {},
  modules: {},
  getters: {
    getResultOfOne(state) {
      const { commandString, selectedCommand, options, entityName } = state;
      const capitalize = (str, lower = false) =>
        (lower ? str.toLowerCase() : str).replace(
          /(?:^|\s|["'([{])+\S/g,
          (match) => match.toUpperCase()
        );

      if (commandString && selectedCommand && options && entityName) {
        const optionsWithoutValue = options
          .filter((option) => option?.other == false)
          .filter((option) => option.isChecked && option.value === null)
          .map((option) => option.name)
          .join(" ");

        const optionsWithValue = options
          .filter((option) => option?.other == false)
          .filter((option) => option.isChecked && option.value?.need)
          .map((option) => `${option.name}=${option.value.value}`)
          .join(" ");

        let name = "";

        if (selectedCommand.name === "migration" && options.length) {
          const getOptions = (n) => options.find((o) => o.name === n);

          const create = getOptions(" suffix create");
          const alter = getOptions(" suffix alter");
          const pivot = getOptions(" pivot");

          let suffix = "";

          if (create.isChecked) {
            suffix += "create_";
          }
          if (alter.isChecked) {
            suffix += "alter_";
          }

          let pivotName = "";

          if (pivot.isChecked) {
            pivotName = [pivot.value.value, entityName]
              //.map((model) => model /*pluralize */)
              .map((w) => w.toLowerCase())
              .map((w) => w.trim())
              .sort((x, y) => {
                if (x < y) return -1;
                if (x > y) return 1;
                return 0;
              })
              .join("_");
          }
          const nameToDisplay =
            pivotName || entityName.toLowerCase().replaceAll(" ", "_");

          name = `${suffix}${nameToDisplay}_table`;
        } else {
          name = capitalize(entityName).replaceAll(" ", "");
        }

        return `${commandString}${selectedCommand.name}  ${name}${selectedCommand.entitySuffix} ${optionsWithoutValue} ${optionsWithValue}`;
      }
      return "";
    },
    getResult(state) {
      const hasNoCommand = !state.allCommands.length;
      if (hasNoCommand) return "";

      return state.allCommands
        .sort((c1, c2) => c1.order - c2.order)
        .map((cmd) => cmd.command)
        .join(" && ");
    },

    getEntityName: (state) => state.entityName,
    getCommands: (state) => state.commands,
    getSelectedCommand: (state) => state.selectedCommand,
    getAllCommands: (state) => state.allCommands,
  },
});
