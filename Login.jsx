import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log({ state, name, email, password });

    // Add authentication logic here (e.g., API call)
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form 
        onSubmit={onSubmitHandler} 
        className="bg-white shadow-lg p-6 rounded-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center">
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </h2>
        <p className="text-gray-500 text-center mb-4">
          Please {state === 'Sign Up' ? "Sign Up" : "Log in"} to book an appointment.
        </p>

        {state === 'Sign Up' && (
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
        )}

        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 mt-5 rounded-lg hover:bg-blue-600 transition-all"
        >
          {state === 'Sign Up' ? "Sign Up" : "Login"}
        </button>

        <p className="text-sm text-center mt-4">
          {state === 'Sign Up' ? "Already have an account?" : "Don't have an account?"}{" "}
          <span 
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? "Login" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
