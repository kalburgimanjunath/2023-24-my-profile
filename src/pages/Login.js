export default function Login() {
  return (
    <div className="m-20 relative text-left">
      <div className="font-bold text-2lx">Login</div>
      <div className="border-2 p-5 m-10 align-center justify-center">
        <form action="/loginpost" method="post">
          <input
            type="text"
            className="p-2 border-2 m-2"
            required
            placeholder="Enter username"
          />
          <input
            type="password"
            className="p-2 border-2 m-2"
            required
            placeholder="Enter password"
          />
          <button type="submit" className="bg-pink-100 m-2 p-2 border-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
