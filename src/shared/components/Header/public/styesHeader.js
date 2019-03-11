const styles = theme => ({
  headerContainer: {
    width: '100%',
    position: 'fixed',
    backgroundColor: '#521751',
    height: '56px'
    
  },
  toolbarNavigation:{
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 1rem'
  },
  toolbarLogo:{
    marginLeft: '1rem',
    '& a': {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1rem'
    }
  },
  toolbarNavigaionItems:{
    '& a': {
      color: 'white',
      textDecoration: 'none',
    },
    '& a:hover, & a:active':{
      color: '#fa923f'
    },
    '& ul': {
      margin: '0',
      padding: '0',
      display: 'flex'
    },
    '& li': {
      padding: '0 0.5rem',
    }
  },
  spacer: {
    flex: '1'
  },
  '@media (max-width: 768px)': {
    toolbarNavigaionItems:{
      display: 'none'
    }
  },
  '@media (min-width: 769px)': {
    toolbarToggleButton:{
      display: 'none'
    },
    toolbarLogo: {
      marginLeft: '0'
    }
  }
})


export default styles