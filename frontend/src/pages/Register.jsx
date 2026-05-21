function Register() {
  return (
    <div className="page">
      <h1>Register</h1>
      <form className="form">
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button">Create Account</button>
      </form>
    </div>
  );
}

export default Register;
