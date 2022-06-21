import "./connect.scss";
import React, {useState} from 'react';
import styled, {createGlobalStyle, css} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    /*font-family: Arial, Helvetica, sans-serif;*/
    background: linear-gradient(to bottom, #f05053, #e1eec3);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 80px;
  border-radius: 5px;
  border: 1px solid #ddd;
  /*
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  */
`;

const StyledFormWrapper = styled.div`
position: relative;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  height: 120vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  color: #fff;
  max-width: 700px;
  padding: 40px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  color: #fff;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  color: #fff;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
    color: #fff;
  }
  label {
    padding-right: 20px;
    color: #fff;
  }
  input {
    margin-right: 10px;
    color: #fff;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initalState = {
  name: '',
  email: '',
  message: '',
  website: ''
};
const ContactImg = styled.img`
    top: 60%;
    left: 50%;
    height: 200px;
    width: 200px;
    margin-right: -50%;
    transform: translate(-225%, 80%);
    z-index: 0; 
    position: absolute;
    
    border-top: 3px solid transparent;
    border-radius: 25px;
    @media screen and (max-width: 850px) {
    align-items: center;
        display:block;
    position: absolute;
    left: 150%;


}
`;
function Contact() {
    const [state, setState] = useState(initalState);
    const [error, setError] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log('submitted!');
      console.log(state);
  
      for (let key in state) {
        if (state[key] === '') {
          setError(`You must provide the ${key}`)
          return
        }
      }
      setError('');
      // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      // const test = regex.test(state.email);
      // console.log(test);
  
      console.log("Succeeded!!!")
    };
  
    const handleInput = e => {
      const inputName = e.currentTarget.name;
      const value = e.currentTarget.value;
  
      setState(prev => ({ ...prev, [inputName]: value }));
    };
  
    return (
      <>
        <StyledFormWrapper id = {'/connect'}>
        
        <div className='bit5'/>
          <StyledForm onSubmit={handleSubmit}>
            <h2>Contact Form</h2>
            <label htmlFor="name">Name</label>
            <StyledInput
              type="text"
              name="name"
              value={state.name}
              onChange={handleInput}
            />
            <label htmlFor="email">Email</label>
            <StyledInput
              type="email"
              name="email"
              value={state.email}
              onChange={handleInput}
            />
            <StyledFieldset>
              <legend>What kind of website do you need?</legend>
              <label>
                <input
                  type="radio"
                  value="Personal"
                  name="website"
                  checked={state.website === 'Personal'}
                  onChange={handleInput}
                />
                Personal
              </label>
              <label>
                <input
                  type="radio"
                  value="NFT"
                  name="website"
                  checked={state.website === 'NFT'}
                  onChange={handleInput}
                />
                NFT
              </label>
              <label>
                <input
                  type="radio"
                  value="Landing Page"
                  name="website"
                  checked={state.website === 'Landing Page'}
                  onChange={handleInput}
                />
                Landing Page
              </label>
            </StyledFieldset>
            <label htmlFor="message">Message</label>
            <StyledTextArea
              name="message"
              value={state.message}
              onChange={handleInput}
            />
            {error && (
              <StyledError>
                <p>{error}</p>
              </StyledError>
            )}
            <StyledButton type="submit">Send Message</StyledButton>
          </StyledForm>

        <ContactImg src={'./images/cthulu.gif'} type='image/gif' className='me2'/>
        </StyledFormWrapper>
      </>
    );
  }
  
  export default Contact;