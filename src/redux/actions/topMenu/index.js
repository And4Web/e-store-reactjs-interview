let topMenuData = ['Men', 'Women', 'Best Sellers'];

const getTopMenu = () => {
  return {
    type: 'TopMenu',
    data: topMenuData,
  }
}

export default getTopMenu