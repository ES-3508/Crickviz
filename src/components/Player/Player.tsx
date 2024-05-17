import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
// import CheckboxFive from '../../components/Checkboxes/CheckboxFive';
// import CheckboxFour from '../../components/Checkboxes/CheckboxFour';
// import CheckboxOne from '../../components/Checkboxes/CheckboxOne';
// import CheckboxThree from '../../components/Checkboxes/CheckboxThree';
// import CheckboxTwo from '../../components/Checkboxes/CheckboxTwo';
// import SwitcherFour from '../../components/Switchers/SwitcherFour';
// import SwitcherOne from '../../components/Switchers/SwitcherOne';
// import SwitcherThree from '../../components/Switchers/SwitcherThree';
// import SwitcherTwo from '../../components/Switchers/SwitcherTwo';
import DefaultLayout from "../../layout/DefaultLayout";
// import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
// import DatePickerTwo from '../../components/Forms/DatePicker/DatePickerTwo';
import SelectGroupTwo from "../../components/Forms/SelectGroup/SelectGroupTwo";
import MultiSelect from "../../components/Forms/MultiSelect";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChartThree from "../Charts/ChartThree";

const Player = () => {
  const options=[
    { value: '1', text: 'Option 1', selected: false },
    { value: '2', text: 'Option 2', selected: false },
    { value: '3', text: 'Option 3', selected: false },
  ]
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Player" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Player Details
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                {/* --------Country Dropdown field-------- */}
                <div className="mb-5 block">
                  <SelectGroupTwo />
                </div>
                <label className="mb-3 block text-black dark:text-white">
                  Team
                </label>
                <input
                  type="text"
                  placeholder="Enter Team Name"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Player
                </label>
                <input
                  type="text"
                  placeholder="Enter Player"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                />
              </div>

              <div>
                <label className="mb-3 block font-medium text-black dark:text-white">
                  Player Type
                </label>
                <input
                  type="text"
                  placeholder="Enter Player Type"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                />
              </div>
            </div>
          </div>

          {/* <!-- Toggle switch input --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <ChartOne />
            </div>
          </div>

          {/* <!-- Time and date --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <ChartThree />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Textarea Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Ground Details
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Select Ground
                </label>
                {/* <textarea
                  rows={6}
                  placeholder="Default textarea"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea> */}
                {/*--------- Dropdown field-------- */}
                <MultiSelect options={options} id="multiSelect" />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Head to Head
                </label>
                {/* <textarea
                  rows={6}
                  placeholder="Active textarea"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                ></textarea> */}
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Team
                </label>
                <textarea
                  placeholder="Enter team Name"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                ></textarea>
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Player
                </label>
                <textarea
                  placeholder="Enter Player"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                ></textarea>
              </div>
              
            </div>
          </div>

          {/* <!-- Checkbox and radio --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <ChartTwo />
            </div>
          </div>

          {/* <!-- Select input --> */}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Player;
