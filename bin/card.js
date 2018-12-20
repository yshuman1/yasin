#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require("chalk");
var boxen = require("boxen");

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};
// Text + chalk definitions
let data = {
  name: chalk.white("Yasin Shuman /"),
  handle: chalk.cyan("yasin0424"),
  work: chalk.white("Full Stack Developer"),
  twitter: chalk.cyan("https://twitter.com/yasin0424"),
  github: chalk.cyan("https://github.com/yshuman1"),
  linkedin: chalk.cyan("https://linkedin.com/in/yshuman"),
  web: chalk.cyan("https://yasin.io"),
  cell: chalk.cyan("1-415-966-6335"),
  npx: chalk.white("npx yasin"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelWeb: chalk.white.bold("       Web:"),
  labelCell: chalk.white.bold("       Cell:"),
  labelCard: chalk.white.bold("      Card:")
};

// Actual strings we're going to output
var newline = "\n";
var heading = `${data.name} ${data.handle}`;
var working = `${data.labelWork}  ${data.work}`;
var twittering = `${data.labelTwitter}  ${data.twitter}`;
var githubing = `${data.labelGitHub}  ${data.github}`;
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
var webing = `${data.labelWeb}  ${data.web}`;
var cell = `${data.labelCell} ${data.cell}`;
var carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
let output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  cell +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
