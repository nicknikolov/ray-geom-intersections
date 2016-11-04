# ray-geom-intersections

Provide all intersection points from a given geometry and ray.

## Installation

`$ npm i -S ray-geom-intersections`

## Usage

```javascript
const intersections = require('geom-ray-intersections')
const result = intersections([], rayOrigin, rayDirection, vertices, triangles)
// input:
// - out
// - rayOrigin is a vec3, it's where you ray starts from
// - rayDirection is a vec3, it's where it points to
// - vertices is an array of vec3s, the geometry vertices
// - triangles is an array of vec3s, the geometry triangles
// output:
// - result is an array of vec3s, the points if intersection ordered by distance (closest first)

```

## License
MIT
