import pluralize from "pluralize";
export default function ({ name, options }) {
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
    pivotName = [pivot.value.value, name]
      .map((w) => pluralize(w))
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
    pivotName || pluralize(name).toLowerCase().replaceAll(" ", "_");

  return `${suffix}${nameToDisplay}_table`;
}
