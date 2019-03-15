const styles = theme => ({
  sideDrawer: {
    height: '100%',
    backgroundColor: theme.nicePallete.primary,
    boxShadow: '1px 0px 7px rgba(0,0,0,0.5)',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '70%',
    maxWidth: '400px',
    zIndex: '200',
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease-out',
    '& ul': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    '& a': {
      color: theme.colorsCombined.C.color,
      textDecoration: 'none',
      fontSize: '1.2rem'
    },
    '& li':{
      margin: '1rem 0'
    },
    '& a:hover, & a:active': {
      color: '#fa923f'
    }
  },
  sideDrawerOpen: {
    transform: 'translateX(0)',
    display: 'flex'
  },
  buttonSignOut:{
    position: 'absolute',
    bottom: '5px',
    color: '#1c1c1c',
    backgroundColor: 'white',
    padding: '10px 18px'
  },
  '@media (min-width: 760px)': {
    sideDrawer: {
      display: 'none'
    }
  }
})

export default styles