const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  const journeyStartLocation = [];
  this.journeys.forEach((journey) =>
    journeyStartLocation.push(journey.startLocation)
  );
  return journeyStartLocation;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndLocation = [];
  this.journeys.forEach((journey) =>
    journeyEndLocation.push(journey.endLocation)
  );
  return journeyEndLocation;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const filteredArray = this.journeys.filter(
    (journey) => journey.transport === transport
  );
  return filteredArray;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const filteredArray = this.journeys.filter(
    (journey) => journey.distance > minDistance
  );
  return filteredArray;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce(
    (runningTotal, journey) => runningTotal + journey.distance,
    0
  );
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {};

module.exports = Traveller;
