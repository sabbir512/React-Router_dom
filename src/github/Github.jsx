import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sabbir512")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <>
      <div className="text-center m-4 bg-gray-500 text-white text-3xl p-3">
        Github Name:{data.name}
        <div> Github Followers: {data.followers}</div>
        <img src={data.avatar_url} alt="git-pictures" className="w-[300px]" />
      </div>
    </>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/sabbir512");
  return response.json();
};
