export default {
  colorsCombined: {
    P: {
      // Header,
      backgroundColor: '#494E6B',
      color: '#fff'
    },
    S: {
      backgroundColor: '#98878F',
      color: '#fff'
    },
    T:{
      backgroundColor: '#985E6D',
      color: '#000'
    },
    C:{
      backgroundColor: '#192231',
      color: '#fff'
    },
    gradientBackground: {
      backgroundColor: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(93,222,213,1) 100%, rgba(0,212,255,1) 100%)',
      color: '#fff'
    }
  },
  color:{
    P: {
      color: '#494E6B'
    },
    S: {
      color: '#98878F'
    },
    T:{
      color: '#985E6D'
    },
    C:{
      color: '#192231'
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
