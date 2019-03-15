const styles = theme => ({
  headerContainer: {
    width: '100%',
    position: 'fixed',
    backgroundColor: theme.nicePallete.primary,
    height: '56px',
    zIndex: 1
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
      fontSize: '1rem',
      width: '100%',
      maxHeight: '50px',
      display: 'inline-block',
      height: '100%'
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
  reactLogo:{
    maxWidth: '50px'
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
