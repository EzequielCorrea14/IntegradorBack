const productBodyValidator = (request, response, next) => {
    const { name, price, cc, vel, km, image1, image2, image3, description, stock } = request.body;
    const validationArray = [];
    if(typeof name !== "string") validationArray.push('Name must be string.')
    if(typeof price !== "number") validationArray.push('Price must be number')
    if(price < 0) validationArray.push('Price must be a positive number')
    if(typeof cc !== "number") validationArray.push('cc must be number')
    if(cc < 0) validationArray.push('cc must be a positive number')
    if(typeof vel !== "number") validationArray.push('vel must be number')
    if(vel < 0) validationArray.push('vel must be a positive number')
    if(typeof km !== "number") validationArray.push('km must be number')
    if(km < 0) validationArray.push('km must be a positive number')
    if(typeof color !== "string") validationArray.push('color must be a positive number')
    if(typeof image1 !== "url") validationArray.push('Image1 must be url.')
    if(typeof image2 !== "url") validationArray.push('Image2 must be url.')
    if(typeof image3 !== "url") validationArray.push('Image3 must be url.')
    if(typeof description !== "string") validationArray.push('Description must be string.')
    if(typeof stock !== "number") validationArray.push('Stock must be number')
    if(stock < 0) validationArray.push('Stock must be a positive number')

    if(validationArray.length > 0) {
        return response.status(400).json({ message: validationArray.join(' ') })
    }
      next();
  };
  
export default productBodyValidator ;