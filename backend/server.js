const mongoose = require("mongoose");
const expressServer = require("./src/config/express");
const cluster = require("cluster");
const OS = require("os");
const express = require('express');
const path = require('path');
require("dotenv").config();

class App {
  port;
  databaseUrl;

  constructor() {
    this.validateEnvVars();

    this.port = process.env.PORT || 8080;
    this.databaseUrl = process.env.DATABASE_URL;

    this.buildCluster();
  }

  validateEnvVars = () => {
    const errorMessage = "Required Environment Variable:";

    if (!process.env.DATABASE_URL) {
      throw new Error(`${errorMessage} DATABASE_URL`);
    }

    if (!process.env.AUTH_ROUNDS) {
      throw new Error(`${errorMessage} AUTH_ROUNDS`);
    }

    if (!process.env.AUTH_SECRET) {
      throw new Error(`${errorMessage} AUTH_SECRET`);
    }
  };

  database = () => {
    mongoose.connect(this.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    mongoose.connection.on("connected", () => {
      console.log("Connected Database");
    });

    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log("Close database connection");
        process.exit(0);
      });
    });

    mongoose.connection.on("error", (error) => {
      console.log("Connection Error: " + error);
    });
  };

  buildCluster = () => {
    let workers = Number(process.env.WORKERS || 1);

    if (process.env.AUTO_SCALE === "true") {
      workers = this.autoScale(workers);
    }

    if (cluster.isMaster) {
      console.log("Master Cluster Online");

      for (let i = 0; i < workers; i += 1) {
        console.log(`Creating instances ${workers}`);
        cluster.fork();
      }

      cluster.on("exit", (worker) => {
        console.error(`Worker ${worker.id} Offline`);
        cluster.fork();
      });
    } else {
      expressServer.listen(this.port, () => {
        this.database();
        console.log(`Server running on port ${this.port}`);
      });
    }
  };

  autoScale = (workersByCpu) => {
    const cpus = OS.cpus().length;
    const workers = cpus * workersByCpu;
    return workers;
  };

  setupStaticFileServing() {
    expressServer.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  }
}

new App();
