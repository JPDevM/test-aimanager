// Dependencies
import { CheckIcon } from '@heroicons/react/solid';

// Media
import ConecteIcon from '../images/icons/iconos_001.png';
import PlanifiqueIcon from '../images/icons/iconos_002.png';
import ControleIcon from '../images/icons/iconos_003.png';
import ImgConecte from '../images/cover/img_007_width500px.png';
import ImgPlanifique from '../images/cover/img_005_width500px.png';
import ImgControle from '../images/cover/img_004_width500px.png';

const FeaturesSurvey = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
            Funcionalidades para una gestión de excelecia
          </h1>
          <p className="mt-5 text-xl text-gray-500 text-justify sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            mollitia libero aliquid aperiam iusto natus omnis.
          </p>
        </div>
        {/* Grid Features */}
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-8 xl:gap-12 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {/* Block 1 */}
          <div className="border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6">
              {/* icon */}
              <div className="w-full flex justify-center">
                <img className="w-1/5" src={ConecteIcon} alt="" />
              </div>
              <div className="w-full flex justify-center">
                <p className="pt-2 font-bold text-lg text-green-800">Conecte</p>
              </div>
              <div className="w-full text-center">
                <p className="py-4 font-bold text-xl text-gray-800">
                  Unifique la información que reciben sus colaboradores
                </p>
              </div>
              <div className="w-full flex justify-center">
                <img className="w-full" src={ImgConecte} alt="" />
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 ">
              {/* icon */}
              <div className="w-full flex justify-center">
                <img className="w-1/5" src={PlanifiqueIcon} alt="" />
              </div>
              <div className="w-full flex justify-center">
                <p className="pt-2 font-bold text-lg text-indigo-900">
                  Planifique
                </p>
              </div>
              <div className="w-full text-center">
                <p className="py-4 font-bold text-xl text-gray-800">
                  Asigne tareas en tiempo real y siga su cumplimiento
                </p>
              </div>
              <div className="w-full flex justify-center">
                <img className="w-full" src={ImgPlanifique} alt="" />
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 ">
              {/* icon */}
              <div className="w-full flex justify-center">
                <img className="w-1/5" src={ControleIcon} alt="" />
              </div>
              <div className="w-full flex justify-center">
                <p className="pt-2 font-bold text-lg text-red-700">Controle</p>
              </div>
              <div className="w-full text-center">
                <p className="py-4 font-bold text-xl text-gray-800">
                  Supervice con auditorías y checklist georeferenciales.
                </p>
              </div>
              <div className="w-full flex justify-center">
                <img className="w-full" src={ImgControle} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Grid Features */}
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-6 md:gap-8 xl:gap-12 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          <div className="bg-gray-400 text-center text-white py-8 rounded-md">
            Logo
          </div>
          <div className="bg-gray-400 text-center text-white py-8 rounded-md">
            Logo
          </div>
          <div className="bg-gray-400 text-center text-white py-8 rounded-md">
            Logo
          </div>
          <div className="bg-gray-400 text-center text-white py-8 rounded-md">
            Logo
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturesSurvey;
