import { SpaceCraft, Containership } from "./base-ships";
import { MillenniumFalcon } from "./starfighters";

import * as _ from 'lodash';

console.log(_.pad("Typescript Examples", 40, "="));

let ship = new SpaceCraft('hyperdrive');
ship.jumpIntoHyperspace();

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;
console.log(`Facon is good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`);
