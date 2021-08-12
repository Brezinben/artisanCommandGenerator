import { createStore } from "vuex";
import commands from "./commands";
import buildMigrationName from "./migrationLogic";
import pluralize from "pluralize";
const localStorageKey = "artisanCmd";

export default createStore({
  state: {
    entityName: null,
    commandString: `php artisan make:`,
    commands: commands,
    selectedCommand: null,
    options: [],
    allCommands: JSON.parse(localStorage.getItem(localStorageKey)) || [],
    currentCommand: "",
  },
  mutations: {
    setSelectedCommand: (state, cmd) => (state.selectedCommand = cmd),
    setEntityName: (state, name) => (state.entityName = name),
    setOptions: (state, options) => (state.options = options),
    addCommand(state, newCommand) {
      state.allCommands = [...state.allCommands, newCommand];
      localStorage.setItem(localStorageKey, JSON.stringify(state.allCommands));
    },
    deleteCommand: (state, command) => {
      state.allCommands = state.allCommands.filter(
        (cmd) => cmd.order != command.order
      );
      localStorage.setItem(localStorageKey, JSON.stringify(state.allCommands));
    },
    commandHasChanged: (state, payload) => {
      const { oldValue, newValue } = payload;
      state.allCommands.find((cmd) => cmd.command == oldValue).command =
        newValue.trim().replaceAll("  ", " ");
      localStorage.setItem(localStorageKey, JSON.stringify(state.allCommands));
    },
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
          .filter((option) => option.isChecked && option.value === null)
          .filter((option) => !option?.other || option.other == false)
          .map((option) => option.name)
          .join(" ");

        const optionsWithValue = options
          .filter((option) => option.isChecked && option.value?.need)
          .filter((option) => !option?.other || option.other == false)
          .map((option) => `${option.name}=${option.value.value}`)
          .join(" ");

        let name = "";

        if (selectedCommand.name === "migration" && options.length) {
          name = buildMigrationName({ name: entityName, options: options });
        } else {
          //Model in sigular for best pratice
          const lowerName = entityName.toLowerCase();
          const singularName = pluralize.singular(lowerName);
          name = capitalize(singularName).replaceAll(" ", "");
        }

        return `${commandString}${selectedCommand.name}  ${name}${selectedCommand.entitySuffix} ${optionsWithoutValue} ${optionsWithValue}`;
      }
      return "";
    },
    getResult(state) {
      const hasNoCommand = !state.allCommands.length;
      if (hasNoCommand) return "";

      return state.allCommands
        .filter((cmd) => cmd.command)
        .sort((c1, c2) => c1.order - c2.order)
        .map((cmd) => cmd.command)
        .join(" && ");
    },

    getEntityName: (state) => state.entityName,
    getCommands: (state) => state.commands,
    getSelectedCommand: (state) => state.selectedCommand,
    getAllCommands: (state) =>
      state.allCommands
        .filter((cmd) => cmd.command)
        .sort((c1, c2) => c1.order - c2.order),
  },
});
