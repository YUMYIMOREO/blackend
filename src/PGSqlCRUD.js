const express = require("express");
const Sequelize = require("sequelize");
const app = express();

app.use(express.json());

const dbUrl = 'postgres://webadmin.MARiei55204@node57084-supisara-noderest.proen.app.ruk-com.cloud:11662/Books';
//const dbUrl = "https://node57080-supisara-noderest.proen.app.ruk-com.cloud";

const sequelize = new Sequelize(dbUrl);