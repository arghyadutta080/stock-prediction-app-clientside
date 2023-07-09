import React, { useContext, useState } from 'react'
import StockContext from "../contexts/StockContext";
import { BsFillKeyFill, BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

const SignUp = ({setSign}) => {
    const s = useContext(StockContext);
    
  const handleClose = s.handleClose;
  const signIn = ()=>{
    setSign(true);
  }

  const [phone , setPhone] = useState("");
  const [pass , setPass] = useState("");
  const [fname , setFName] = useState("");
  const [lname , setLName] = useState("");
  
  return (
    <>
    <div
      onClick={handleClose}
      id="container"
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        className="bg-black bg-opacity-80 2xl:bg-inherit flex flex-col text-white border-4 border-blue-400 rounded-xl p-2  2xl:w-[400px] min-[360px]:w-[310px] min-[400px]:w-[360px] min-[500px]:w-[400px] min-[800px]:w-[500px] min-[900px]:w-[600px] lg:w-[320px] min-[1080px]:w-[700px] xl:w-[390px] 2xl:h-[740px] min-[360px]:h-[540px] min-[390px]:h-[580px] min-[400px]:h-[600px] min-[500px]:h-[580px] min-[600px]:h-[640px] min-[700px]:h-[720px] min-[800px]:h-[770px] min-[900px]:h-[820px] lg:h-[480px] min-[1080px]:h-[1000px] xl:h-[640px]" >
        <div className="relative left-[95%] top-[1%]">
          <h1 onClick={handleClose} id="close" className="font-bold text-xl cursor-pointer">
            X
          </h1>
        </div>
        <div className="mb-4 relative top-[5vh] lg:top-[1vh] min-[1080px]:top-[8vh] xl:top-[0vh] 2xl:top-[12vh]">
          <h1 className="2xl:text-3xl font-bold  text-center min-[360px]:text-xl min-[800px]:text-3xl min-[900px]:text-4xl lg:text-2xl min-[1080px]:text-4xl ">
            Welcome
          </h1>
        </div>
        <form action="" className="text-center">
          <div className="flex flex-col gap-4 relative top-[10vh] lg:top-[3vh] min-[1080px]:top-[14vh] xl:top-[4vh] 2xl:top-[18vh]">
            
              <div className="flex items-center">
                <BsFillPersonFill size={25} className="relative 2xl:left-[3.5vh] min-[360px]:left-[4.5vh]  min-[500px]:left-[4vh] min-[600px]:left-[3vh] lg:left-[5vh]  min-[1080px]:left-[2vh] xl:left-[4vh]" />
                <input
                value={fname}
                onChange={(e)=>{setFName(e.target.value)}}
                  type="name"
                  id="name"
                  name="name"
                  className="text-white bg-transparent  border-2 rounded-lg border-blue-400  placeholder:text-white pl-10 pr-2 font-semibold 2xl:h-14 2xl:w-[35vh] 2xl:text-xl min-[360px]:h-10 min-[360px]:w-[35vh] min-[390px]:w-[30vh] min-[400px]:w-[32vh]  min-[500px]:w-[43vh] min-[600px]:w-[27vh] min-[600px]:pl-12 min-[700px]:h-16 min-[700px]:w-[30vh] min-[800px]:w-[36vh] min-[800px]:text-2xl min-[900px]:pl-14 min-[900px]:w-[38vh]  lg:h-8 lg:text-lg  min-[1080px]:text-2xl min-[1080px]:w-[26vh]  min-[1080px]:h-16 xl:w-[40vh]"
                  placeholder="First Name"
                />
              </div>

              <div className="flex items-center">
                <BsFillPersonFill size={25} className="relative 2xl:left-[3.5vh] min-[360px]:left-[4.5vh]  min-[500px]:left-[4vh] min-[600px]:left-[3vh] lg:left-[5vh]  min-[1080px]:left-[2vh] xl:left-[4vh]" />
                <input
                value={lname}
                onChange={(e)=>{setLName(e.target.value)}}
                  type="name"
                  id="name"
                  name="name"
                  className="text-white bg-transparent  border-2 rounded-lg border-blue-400  placeholder:text-white pl-10 pr-2 font-semibold 2xl:h-14 2xl:w-[35vh] 2xl:text-xl min-[360px]:h-10 min-[360px]:w-[35vh] min-[390px]:w-[30vh] min-[400px]:w-[32vh]  min-[500px]:w-[43vh] min-[600px]:w-[27vh] min-[600px]:pl-12 min-[700px]:h-16 min-[700px]:w-[30vh] min-[800px]:w-[36vh] min-[800px]:text-2xl min-[900px]:pl-14 min-[900px]:w-[38vh]  lg:h-8 lg:text-lg  min-[1080px]:text-2xl min-[1080px]:w-[26vh]  min-[1080px]:h-16 xl:w-[40vh]"
                  placeholder="Last Name"
                />
              </div>
            
              <div className="flex items-center">
              <BsFillTelephoneFill size={25} className="relative 2xl:left-[3.5vh] min-[360px]:left-[4.5vh]  min-[500px]:left-[4vh] min-[600px]:left-[3vh] lg:left-[5vh]  min-[1080px]:left-[2vh] xl:left-[4vh]" />
              <input
               value={phone}
               onChange={(e)=>{setPhone(e.target.value)}}
                type="number"
                id="number"
                
                name="number"
                className="text-white bg-transparent  border-2 rounded-lg border-blue-400   placeholder:text-white pl-10 pr-2 font-semibold 2xl:h-14 2xl:w-[35vh] 2xl:text-xl min-[360px]:h-10 min-[360px]:w-[35vh] min-[390px]:w-[30vh] min-[400px]:w-[32vh] min-[500px]:w-[43vh] min-[600px]:w-[27vh] min-[600px]:pl-12 min-[700px]:h-16 min-[700px]:w-[30vh] min-[800px]:w-[36vh] min-[800px]:text-2xl min-[900px]:pl-14 min-[900px]:w-[38vh] lg:h-8 lg:text-lg  min-[1080px]:text-2xl min-[1080px]:w-[26vh]  min-[1080px]:h-16 xl:w-[40vh]"
                placeholder="Phone Number"
              />
            </div>

            <div className="flex items-center">
              <BsFillKeyFill size={25} className="relative 2xl:left-[3.5vh] min-[360px]:left-[4.5vh] min-[500px]:left-[4vh] min-[600px]:left-[3vh] lg:left-[5vh]  min-[1080px]:left-[2vh] xl:left-[4vh]" />
              <input
              value={pass}
              onChange={(e)=>{setPass(e.target.value)}}
                type="password"
                id="password"
                name="password"
                className="text-white bg-transparent  border-2 rounded-lg border-blue-400  placeholder:text-white pl-10 pr-2 font-semibold 2xl:h-14 2xl:w-[35vh] 2xl:text-xl min-[360px]:h-10 min-[360px]:w-[35vh] min-[390px]:w-[30vh] min-[400px]:w-[32vh] min-[500px]:w-[43vh] min-[600px]:w-[27vh] min-[600px]:pl-12 min-[700px]:h-16 min-[700px]:w-[30vh] min-[800px]:w-[36vh] min-[800px]:text-2xl min-[900px]:pl-14 min-[900px]:w-[38vh]  lg:h-8 lg:text-lg  min-[1080px]:text-2xl min-[1080px]:w-[26vh]  min-[1080px]:h-16 xl:w-[40vh]"
                placeholder="Password"
              />
            </div>

            <div className="mt-5">
              <button className="border border-blue-500 rounded-lg  text-center p-2 font-semibold bg-blue-600 hover:bg-[#0d07b0]  w-[15vh] 2xl:text-xl min-[800px]:text-2xl lg:text-lg min-[1080px]:text-2xl">
                Register
              </button>
            </div>

            <div className="flex flex-col mt-5">
              <h1 className="font-semibold 2xl:text-base min-[800px]:text-2xl lg:text-lg min-[1080px]:text-2xl">
                Have An Account Already ?
              </h1>
              <h1
                 onClick={signIn}
                className="text-yellow-400 font-bold hover:text-orange-500 hover:cursor-pointer 2xl:text-base min-[800px]:text-2xl lg:text-lg min-[1080px]:text-2xl"
              >
                Login Now !
              </h1>
            </div>
          </div>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default SignUp