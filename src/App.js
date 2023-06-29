import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  //Mock DataBase
  const database = [
    {
      username : "user1",
      password: "password1"
    },
    {
      username : "user2",
      password: "password2"
    }
  ];

  const errors = {
    uname: "errorUsername",
    pass: "errorPassword"
  }

  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) =>
      name === errorMessage.name && (
          <div className="error">{errorMessage.message}</div>
      );

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  let { uname, pass } = document.forms[0];

  const userData = database.find((user) =>
  user.username === uname.value)

  if(userData){
    if(userData.password !== pass.value){
      setErrorMessage({
        name: "pass",
        message: errors.pass
      });
    }else {
      setIsSubmitted(true);
    }
  }else {
    setErrorMessage({
      name: "username",
      message: errors.uname
    })
  }

  const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
  )

  return (
    <div className="App">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
