/* eslint-disable no-unused-vars */
import chefPh from "../../assets/projects/chefs-ph.png"
import brainBox from "../../assets/projects/brain-box-.png"
import sportyFy from "../../assets/projects/sportify-camp-3a941.web.app_.png"




const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-[#0a192f] w-full md:h-screen text-gray-300"
    >
      <div className="mx-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-green-600">Projects</p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        <div style={{backgroundImage:`url(${chefPh})`}}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effect */}
            <div>
              <div>
                <span></span>
                <div>
                  <a href="/">
                    <button></button>
                  </a>
                  <a href="/">
                    <button></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
