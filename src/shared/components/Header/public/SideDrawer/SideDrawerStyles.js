const styles = theme => ({
  sideDrawer: {
    height: '100%',
    backgroundColor: theme.colorsCombined.C.backgroundColor,
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
      height: '100%',
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
      margin: '0.5rem 0'
    },
    '& a:hover, & a:active': {
      color: '#fa923f'
    }
  },
  sideDrawerOpen: {
    transform: 'translateX(0)'
  },
  '@media (min-width: 760px)': {
    sideDrawer: {
      display: 'none'
    }
  }
})

export default styles