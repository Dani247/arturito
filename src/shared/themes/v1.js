export default {
  colors: {
    P: {
      // Header,
      backgroundColor: '#494E6B',
      color: '#000'
    },
    S: {
      backgroundColor: '#98878F',
      color: '#000'
    },
    T:{
      backgroundColor: '#985E6D',
      color: '#000'
    },
    C:{
      backgroundColor: '#192231',
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
      fontWeight: 'lighter',
      padding: '.5rem',
      borderRadius: 2,
      fontSize: '1.2rem',
      textDecoration: 'none',
      margin: '0.5em 10%',
      color: '#fff',
      position: 'relative',
      width: '80% ',
      display: 'inline-block',
      backgroundColor: '#192231',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#4B8BBE'
      }
    },
    S: {
      fontWeight: 'lighter',
      padding: '.5rem',
      borderRadius: 2,
      fontSize: '1.2rem',
      textDecoration: 'none',
      margin: '0.5em 10%',
      color: '#fff',
      position: 'relative',
      width: '80% ',
      display: 'inline-block',
      backgroundColor: '#494E6B',
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
