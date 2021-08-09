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
      if (commandString && selectedCommand && options && entityName) {
        const optionsWithoutValue = options
          .filter((option) => option.isChecked && option.value === null)
          .map((option) => option.name)
          .join(" ");

        const optionsWithValue = options
          .filter((option) => option.isChecked && option.value?.need)
          .map((option) => `${option.name}=${option.value.value}`)
          .join(" ");

        return `${commandString}${selectedCommand.name}  ${entityName}${selectedCommand.entitySuffix} ${optionsWithoutValue} ${optionsWithValue}`;
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
