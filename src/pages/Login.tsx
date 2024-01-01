
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Log in to IBM</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="ibmId" className="block mb-1 font-semibold">IBMid</label>
            <input
              type="text"
              id="ibmId"
              name="ibmId"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your IBMid"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your password"
            />
          </div>
          <button className="bg-blue-500 text-white rounded-full py-2 px-6 flex items-center justify-center">
            Continue <span className="ml-2">&#8594;</span>
          </button>
        </form>
        <div className="mt-4">
          <p>Don't have an account?</p>
          <p>Create an IBMid</p>
          <p>Forgot IBMid? Contact the IBMid help desk</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
