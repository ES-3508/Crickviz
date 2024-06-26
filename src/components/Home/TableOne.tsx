import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';
import srilanka from '../../images/brand/srilanka.png';
import india from '../../images/brand/india.png';
import australia from '../../images/brand/australia.png';
import newzealand from '../../images/brand/newzealand.png';
// import genetic from '../../images/brand/genetic-data-svgrepo-com.svg'
import sl from '../../images/brand/sl.svg';
import ind from '../../images/brand/ind.svg';
import aus from '../../images/brand/aus.svg';
import pak from '../../images/brand/pak.svg';
import newz from '../../images/brand/newz.svg';

const brandData: BRAND[] = [
  {
    logo: sl,
    counrtyName: 'Sri Lanka',
    rank: 1
    // name: 'Google',
    // visitors: 3.5,
    // revenues: '5,768',
    // sales: 590,
    // conversion: 4.8,
  },
  {
    logo: ind,
    counrtyName: 'India',
    rank: 2
    // name: 'Twitter',
    // visitors: 2.2,
    // revenues: '4,635',
    // sales: 467,
    // conversion: 4.3,
  },
  {
    logo: pak,
    counrtyName: 'Pakistan',
    rank: 3
    // name: 'Github',
    // visitors: 2.1,
    // revenues: '4,290',
    // sales: 420,
    // conversion: 3.7,
  },
  {
    logo: aus,
    counrtyName: 'Australia',
    rank: 4
    // name: 'Vimeo',
    // visitors: 1.5,
    // revenues: '3,580',
    // sales: 389,
    // conversion: 2.5,
  },
 
  {
    logo: newz,
    counrtyName: 'Newzealand',
    rank: 5
    // name: 'Facebook',
    // visitors: 3.5,
    // revenues: '6,768',
    // sales: 390,
    // conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className='flex flex-row'>
    <div className=" basis-3/4 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Countries
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Flag
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Country Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Rank
            </h5>
          </div>
          {/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sales
            </h5>
          </div> */}
          {/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div> */}
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-3 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={brand.logo} alt="Brand" />
              </div>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className=" text-black dark:text-white">{brand.counrtyName}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className=" text-black dark:text-white">{brand.rank}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
    <div className='basis-1/4' >
        <p className="text-black dark:text-white pt-10 pl-13"> Today's Match-------------------</p>
        <img src={srilanka} className='absolute top-0 right-0 pt-50 pr-3'></img>
        <div className='flex justify-between items-center pt-45 pl-13'>
            <p className="text-black dark:text-white">Highlights-----------</p>
        </div>
        <div className='flex flex-row pl-10'>
            <img src={india} className='h-50 mt-5 w-1/3 rounded-md mx-1'></img>
            <img src={australia} className='h-50 mt-5 w-1/3 rounded-md mx-1'></img>
            <img src={newzealand} className='h-50 mt-5 w-1/3 rounded-md mx-1'></img>
        </div>
    </div>
        
    </div>
    
   
  );
};

export default TableOne;
