export default {
  colors: {
    primary: {
      backgroundColor: '#306998',
      color: 'black'
    },
    secondary: {
      backgroundColor: '#4B8BBE',
      color: 'black'
    }
  },
  niceInput: {
    fontSize: 18,
    padding: '10px 10px 10px 5px',
    display: 'block',
    width: '80% ',
    margin: '0.5em 10%',
    border: 'none',
    borderBottom: '1px solid #757575',
    outline: 'none'
  },
  niceButton: {
    primary: {
      borderRadius: 5,
      fontSize: 22,
      textDecoration: 'none',
      margin: '0.5em 10%',
      color: '#FFE873',
      position: 'relative',
      width: '80% ',
      display: 'inline-block',
      backgroundColor: '#306998',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#4B8BBE'
      }
    }
  }
}
