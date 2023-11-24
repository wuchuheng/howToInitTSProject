
type ArgsType = {
    command: {
        title: string
        desc: string
        args: {
            name: string
            type: string
            required: boolean
            desc: string
        }[]
    }
    options: {
        name: string
        alias: string
        type: string
        required: boolean
        desc: string
    }[]
}

type ParsedResultType = {
    args: {
        name: string
        value: string
    }[]
    options: {
        name: string
        value: string
    }[]
}

/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/11/22 00:21
 */

const main = (argConfig: ArgsType, cliStr: string): Promise<ParsedResultType> => {

    return new Promise<ParsedResultType>((resolve, reject) => {

    }

};

main({
        command: {
            title: 'qjs.convertJson5Variable [json5 file]',
            desc: 'convert the variable in json5 file',
            args: [
                {
                    name: 'json5file',
                    type:'string',
                    required: true,
                    desc: 'the file path of json5 '
                }
            ]
        },

        // -p "${cliNamePath}" \
        // -output_file "${swapFile}"
        options: [
            {
                name: 'machineName',
                alias: 'm',
                type:'string',
                required: true,
                desc: "the machine hardware name",
            },
            {
                name: 'OSName',
                alias: 'o',
                type:'string',
                required: true,
                desc: "the OS name",
            },
            {
                name: 'cliRootPath',
                alias: 'c',
                type:'string',
                required: true,
                desc: "the cli root path",
            },
        ]
    },
    "./command_config.json5 -m x86_64 --OSName Drawin -c src/cli/qjs"
).then(result => {
    console.log(result)
}).catch(e => {
    console.log(e)


export default main;
