const core = require('@actions/core');
const github = require('@actions/github');

try {
    const inputStr = core.getInput('string');
    console.log(`input string: ${inputStr}`);

    const lowercase = inputStr.toLowerCase();
    console.log(`lowercase: ${lowercase}`);
    core.setOutput("lowercase", lowercase);

    const uppercase = inputStr.toUpperCase();
    console.log(`uppercase: ${uppercase}`);
    core.setOutput("uppercase", uppercase);

} catch (error) {
    core.setFailed(error.message);
}