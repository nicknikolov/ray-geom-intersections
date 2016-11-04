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
// - rayOrigin, where your ray starts from (e.g. [0, 0, 0])
// - rayDirection, where it points to (e.g. [0, 1, 0])
// - vertices is an array of [x, y, z], the geometry vertices
// - triangles is an array of [i, j, k], the geometry triangles
// output:
// - result is an array of [x, y, z], the points of intersection ordered by distance (closest first)
```

## License
MIT
