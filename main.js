const yargs = require("yargs");
const { addContact, listContacts, removeContact } = require("./contacts");
const chalk = require("chalk");
console.log(chalk.blue("Welcome to the contact manager"));
yargs.command({
  command: "create",
  aliases: ["c"],
  describe: console.log("[create new contact]"),
  builder: {
      fullname: {
          alias: "f",
          describe: "Person fullname",
          demandOption: true,
          type: "string",
      },
      phone: {
          alias: "p",
          describe: "Person Phone Number",
          demandOption: true,
          type: "number",
      },
      email: {
          alias: "e",
          describe: "Person Email Address",
          demandOption: true,
          type: "string",
      },
  },
  handler({ fullname, phone, email }) {
      addContact(fullname, phone, email);
  },
});

yargs.command({
  command: "list",
  aliases: ["l"],
  describe: console.log("[listing the saved contacts]"),
  handler() {
      listContacts();
  },
});

yargs.command({
  command: "remove",
  aliases: ["r"],
  describe: console.log("[remove contact]"),
  builder: {
      fullname: {
          alias: "f",
          describe: "Person fullname",
          demandOption: true,
          type: "string",
      },
  },
  handler({ fullname }) {
      removeContact(fullname);
  },
});

yargs.parse();

