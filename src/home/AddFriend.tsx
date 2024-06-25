import React from "react";
import CopyInput from "./CopyInput";
import { useEffect, useState } from "react";

const AddFriend: React.FC = () => {
  const [name, setName] = useState<string>('Your friend');
  const [id, setId] = useState<string>('default_id');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    const idParam = urlParams.get('id');
    if (nameParam) {
      setName(nameParam);
    }
    if (idParam) {
      setId(idParam);
    }
  }, []);


  return (
    <div className="bg-white flex flex-col justify-center max-w-xl">
      <h1 className="md:text-6xl text-5xl text-slate-800 font-bold text-left">{name}
        <span className="md:text-4xl text-3xl text-slate-600 font-semibold">&nbsp; wants to add you on step competition!</span>
      </h1>
      <CopyInput name={name} userId={id} />
      <div className="text-lg text-slate-600 font-semibold mt-4 mb-1 mx-1 space-y-1 ">
        <div>1. join the app</div>
        <div>2. select invite friend</div>
        <div>3. enter the user id above</div>
        <div>4. start competing with {name}!</div>
      </div>
    </div>
  );
};

export default AddFriend;