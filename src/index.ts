type ArgsType = {
  command: {
    title: string;
    desc: string;
    args: {
      name: string;
      type: string;
      desc: string;
    }[];
  };
  options: {
    name: string;
    alias: string;
    type: string;
    desc: string;
  }[];
};

type ParsedResultType = {
  args: {
    name: string;
    value: string;
  }[];
  options: {
    name: string;
    value: string;
  }[];
};

/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/22 00:21
 */

const main = async (
  argConfig: ArgsType,
  inputArgs: string[]
): Promise<ParsedResultType> => {
  // if the length of input args from cli is less than the config, throw error.
  if (
    inputArgs.length <
    argConfig.command.args.length + argConfig.options.length
  ) {
    throw Error("Input parameter error");
  }

  // if the length of the input args from cli is less than the config, throw error.
  const argLen = 0;

  // parse the args from the cli.
  const argList: string[] = [];
  for (let i = 0; i < argConfig.command.args.length; i++) {
    const inputVal = inputArgs[i];
  }
};

const argsConfig: ArgsType = {
  command: {
    title: "qjs.convertJson5Variable [json5 file]",
    desc: "convert the variable in json5 file",
    args: [
      {
        name: "json5file",
        type: "string",
        desc: "the file path of json5 ",
      },
    ],
  },
  options: [
    {
      name: "machineName",
      alias: "m",
      type: "string",
      desc: "the machine hardware name",
    },
    {
      name: "OSName",
      alias: "o",
      type: "string",
      desc: "the OS name",
    },
    {
      name: "cliRootPath",
      alias: "c",
      type: "string",
      desc: "the cli root path",
    },
  ],
};

main(argsConfig, [
  "./command_config.json5",
  "-m",
  "x86_64",
  "--OSName",
  "Drawin",
  "-c",
  "src/cli/qjs",
])
  .then((res) => {
    console.log(res);
  })
  .then((err) => {
    console.log(err);
  });

export default main;
