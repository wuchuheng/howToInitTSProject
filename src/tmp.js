// // A simple command-line argument parser function for QuickJS
// function parseArgs(args) {
//     const parsed = {};
//     args.forEach(arg => {
//         const [key, value] = arg.split('=');
//         if (key.startsWith('--')) {
//             parsed[key.substring(2)] = value || true;
//         }
//     });
//     return parsed;
// }
//
// // Example usage
// const args = parseArgs(scriptArgs.slice(1)); // `scriptArgs` is QuickJS's equivalent of Node.js's `process.argv`
// console.log(JSON.stringify(args));
