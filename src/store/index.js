import { createStore } from "vuex";
import commands from "./commands";

export default createStore({
  state: {
    entityName: null,
    commandString: `php artisan make:`,
    commands: commands,
    selectedCommand: null,
    optionsSelected: [],
    options: [],
  },
  mutations: {
    setSelectedCommand: (state, cmd) => (state.selectedCommand = cmd),
    setEntityName: (state, name) => (state.entityName = name),
    setOptions: (state, options) => (state.options = options),
  },
  actions: {},
  modules: {},
  getters: {
    getResult(state) {
      const { commandString, selectedCommand, options, entityName } = state;

      const optionsWithoutValue = options
        .filter((option) => option.isChecked && option.value === null)
        .map((option) => option.name)
        .join(" ");

      const optionsWithValue = options
        .filter((option) => option.isChecked && option.value?.need)
        .map((option) => `${option.name}=${option.value.value}`)
        .join(" ");

      return `${commandString}${selectedCommand.name}  ${entityName}${selectedCommand.entitySuffix} ${optionsWithoutValue} ${optionsWithValue}`;
    },

    getEntityName: (state) => state.entityName,
    getCommands: (state) => state.commands,
    getSelectedCommand: (state) => state.selectedCommand,
  },
});
