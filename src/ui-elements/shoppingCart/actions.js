const CHANGE_CART_CONTENTS = 'CHANGE_CART_CONTENTS'

const changeCartContents = (payload) => {
  return {
    type: CHANGE_CART_CONTENTS,
    payload,
  }
}

export { CHANGE_CART_CONTENTS, changeCartContents }
