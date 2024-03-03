import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  console.log("test", user);
  console.log(loading);

  const handleSingout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
    console.log("singOut Succes");
  };

  //Common route//

  // useEffect(() => {
  //   if (!loading) {
  //     !user && navigate("/login");
  //   }
  // }, [user, navigate, loading]);

  return (
    <div className="flex flex-col justify-center items-center w-[600px] mx-auto mt-20 mb-12 gap-8">
      <div className="text-5xl font-bold ">Home Pase</div>
      <div className="text-2xl font-semibold">Welcome to {user?.email}</div>
      <p className="text-lg text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est neque
        deleniti et cupiditate amet totam incidunt quae delectus corporis?
        Aperiam nesciunt qui tempore! At rerum neque velit eum odio aliquam.
      </p>
      <button
        onClick={handleSingout}
        className="bg-gray-500 rounded-md text-white py-2 px-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
