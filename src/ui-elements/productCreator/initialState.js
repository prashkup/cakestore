const initialState = {
  tierFlavor: 'chocolate',
  frostingFlavor: 'pineapple',
  toppings: 'none',
  layers: [
    {
      type: 'tier',
      flavor: 'butterscotch',
      level: 0
    },
    {
      type: 'frosting',
      flavor: 'chocolate',
      level: 0
    }
  ],
  price: 115
}

export default initialState