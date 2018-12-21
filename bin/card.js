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
  telegram: chalk.cyan("https://t.me/yasin0424"),
  keybase: chalk.cyan("https://keybase.io/yas1n"),
  wire: chalk.cyan("https://keybase.io/yas1n"),
  github: chalk.cyan("https://github.com/yshuman1"),
  linkedin: chalk.cyan("https://linkedin.com/in/yshuman"),
  web: chalk.cyan("https://yasin.io"),
  npx: chalk.white("npx yasin"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelTelegram: chalk.white.bold("   Telegram:"),
  labelKeybase: chalk.white.bold("   Keybase:"),
  labelWire: chalk.white.bold("   Wire:"),

  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelWeb: chalk.white.bold("       Web:"),
  labelCard: chalk.white.bold("      Card:")
};

// Actual strings we're going to output
var newline = "\n";
var heading = `${data.name} ${data.handle}`;
var working = `${data.labelWork}  ${data.work}`;
var twittering = `${data.labelTwitter}  ${data.twitter}`;
var telegraming = `${data.labelTelegram}  ${data.telegram}`;
var keybasing = `${data.labelKeybase}  ${data.keybase}`;
var wiring = `${data.labelWire}  ${data.wire}`;

var githubing = `${data.labelGitHub}  ${data.github}`;
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
var webing = `${data.labelWeb}  ${data.web}`;
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
  telegraming +
  newline +
  keybasing +
  newline +
  wiring +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
