import { SpaceCraft, Containership } from "./base-ships";
import { MillenniumFalcon } from "./starfighters";

let ship = new SpaceCraft('hyperdrive');
ship.jumpIntoHyperspace();

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;
console.log(`Facon is good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`);
