#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const {argv} = require("nexe");

console.log("hello")

yargs(hideBin(process.argv))
    .command('serve [port]', 'start the server', (yargs) => {
        return yargs
            .positional('port', {
                describe: 'port to bind on',
                required: true,
                default: 5000
            })
    }, (argv) => {
        if (argv.verbose) console.info(`start server on :${argv.port}`)
        serve(argv.port)
    })
    .option('verbose', {
        alias: 'v',
        type: 'boolean',
        description: 'Run with verbose logging'
    })
    .parse()
