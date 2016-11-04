const vec3 = require('pex-math/Vec3')
const ray = require('pex-geom/Ray')

// give me ray and geometry and i'll give you intersection points
module.exports = function (out, rayOrigin, rayDirection, vertices, triangles) {
  out.length = 0
  for (let i = 0; i < triangles.length; i++) {
    let point = []
    let triangle = triangles[i]
    let p0 = vec3.copy(vertices[triangle[0]])
    let p1 = vec3.copy(vertices[triangle[1]])
    let p2 = vec3.copy(vertices[triangle[2]])
    let res = ray.hitTestTriangle3([rayOrigin, rayDirection], p0, p1, p2, point)
    if (res === 1) {
      out.push(point)
    }
  }
  out.sort((a, b) => {
    return vec3.distance(rayOrigin, a) - vec3.distance(rayOrigin, b)
  })
  return out
}
