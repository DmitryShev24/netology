const yargs = require("yargs/yargs");
const {hideBin} = require("yargs/helpers");
let newDate = new Date;
const argv = yargs(hideBin(process.argv))
    .command(
        'add',
        'desc',
        {},
        (argv) => {
            if (argv.date) {
                newDate.setDate(newDate.getDate() + argv.date)
                return console.log(newDate);
            }
            if (argv.month) {
                newDate.setMonth(newDate.getMonth()  + argv.month)
                return console.log(newDate);
            }
            if (argv.year) {
                newDate.setFullYear(newDate.getFullYear() + argv.year)
                return console.log(newDate);
            }
        }
    )
    .command(
        'sub',
        'desc',
        {},
        (argv) => {
            if (argv.date) {
                newDate.setDate(newDate.getDate() - argv.date)
                return console.log(newDate);
            }
            if (argv.month) {
                newDate.setMonth(newDate.getMonth() - argv.month)
                return console.log(newDate);
            }
            if (argv.year) {
                newDate.setFullYear(newDate.getFullYear() - argv.year)
                return console.log(newDate);
            }
        }
    )
    .option(
        'year', {
            alias: 'y',
            description: 'display current year',
        }
    )
    .option(
        'month', {
            alias: 'm',
            description: 'display current month',
        }
    )
    .option(
        'date', {
            alias: 'd',
            description: 'display current date',
        }
    ).argv

if (argv._ == 'sub' || argv._ == 'add') {
    process.exit(0)
}
if (argv.year) {
    console.log(newDate.getFullYear());
} else if (argv.month) {
    console.log(newDate.getMonth()+1);
} else if (argv.date) {
    console.log(newDate.getDate());
} else {
    console.log(argv)
}