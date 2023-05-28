const filtersHandler = (state) => {
  const { products, filters: { brands, rating, sortBy, categories, priceRange, searchValue } } = state;
  let newData = products;
  newData = searchValue ? newData.filter(({title, brand}) => title.toLowerCase().includes(searchValue.toLowerCase()) || brand.toLowerCase().includes(searchValue.toLowerCase())) : newData;
  newData = priceRange ? newData.filter(({price}) => price <= parseInt(priceRange)) : newData;
  newData = brands.length > 0 ? newData.filter(({brand}) => brands.some(b => b === brand)) : newData;
  newData = rating ? newData.filter(({rating: prodRating}) => Number(prodRating.slice(0,1)) >= Number(rating)) : newData;
  newData = sortBy ? newData.sort((a, b) => sortBy === 'highToLow' ? (b.price - a.price) : (a.price - b.price)) : newData;
  newData = categories.length > 0 ? newData.filter(({ category }) => category?.some(cat => categories.includes(cat))) : newData;
  return newData;
}

export {
  filtersHandler
}