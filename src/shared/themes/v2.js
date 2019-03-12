export default {
  colors: {
    P: {
      backgroundColor: '#0F1626',
      color: '#fff'
    },
    S: {
      backgroundColor: '#AB987A',
      color: '#fff'
    },
    T:{
      backgroundColor: '#FF533D',
      color: '#000'
    },
    C:{
      backgroundColor: '#F5F5F5',
      color: '#fff'
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
  },
  errorMsg: {
    backgroundColor: '#ccc',
    color: 'red',
    width: '80%',
    margin: '0 10%'
  }
}
