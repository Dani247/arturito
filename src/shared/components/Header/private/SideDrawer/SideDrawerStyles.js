const styles = ({
  sideDrawer: {
    height: '100%',
    backgroundColor: 'white',
    boxShadow: '1px 0px 7px rgba(0,0,0,0.5)',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '70%',
    maxWidth: '400px',
    zIndex: '200',
    '& ul': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    '& a': {
      color: '#521751',
      textDecoration: 'none',
      fontSize: '1.2rem'
    },
    '& li':{
      margin: '0.5rem 0'
    },
    '& a:hover, & a:active': {
      color: '#fa923f'
    }
  }
})

export default styles