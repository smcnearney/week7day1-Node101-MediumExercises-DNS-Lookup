const dns = require('dns');
const readline = require("readline")
const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Domain Name: ", function(url) {
    rl.close();
    dns.lookup(url, function(error, address) {
        if (error) {
            console.log(error.message);
            return;
        }
        console.log("IP Address: ", address);
    })
})