import Zdog from 'zdog'
import { colors, baseColors, sprinklesColors } from './data'

const diameters = {
  '0' : 120,
  '1' : 100,
  '2' : 80
}
const lengths = {
  'tier': 40,
  'frosting': 10
}

const TAU = Zdog.TAU

const generateSprinklePoints = (baseDiameter) => {
  const gap = 10
  const radius = baseDiameter/2
  const extreme = Math.floor(radius/1.4142)
  let points = []
  
  for (let i = 0; i < extreme; i += gap) {
    for (let j = 0; j < extreme; j += gap) {
      points.push({
        x: i,
        z: j
      },{
        x: i,
        z: -j
      },{
        x: -i,
        z: -j
      },{
        x: -i,
        z: j
      })
    }
  }

  return points
}

const cakePainter = (element, data) => {
  const cake = new Zdog.Illustration({
    element: element,
    dragRotate: true,
    rotate: {
      x: -TAU/8
    }
  })

  data.layers.forEach((layer, index) => {
    new Zdog.Cylinder({
      addTo: cake,
      diameter: diameters[layer.level],
      length: lengths[layer.type],
      color: colors[layer.flavor],
      backface: baseColors[layer.flavor],
      rotate: { x: TAU/4 },
      translate: { y: - ( index * 0.5 * (lengths.tier + lengths.frosting)) }
    })
  })

  if (data.toppings === 'sprinkles') {
    let cakeHeight = 0
    data.layers.forEach(layer => {
      cakeHeight += lengths[layer.type]
    })
    const lastLevel = data.layers[data.layers.length - 1].level
    const baseDiameter = diameters[lastLevel]

    const sprinklesGroup = new Zdog.Group({
      addTo: cake,
      translate: { y: -(cakeHeight - lengths.tier/2) }
    })

    const points = generateSprinklePoints(baseDiameter)
  
    points.forEach((point) => {
      const { x,z } = point
      const rand = Math.floor(Math.random() * 4)    
      const color = sprinklesColors[rand]
  
      new Zdog.Shape({
        addTo: sprinklesGroup,
        stroke: 3,
        rotate: { x: Zdog.TAU/4 },
        translate: { x, z },
        color
      })
    })
  }
  
  function animate() {
    cake.updateRenderGraph();
    requestAnimationFrame( animate );
  }    
  animate();
}

export default cakePainter