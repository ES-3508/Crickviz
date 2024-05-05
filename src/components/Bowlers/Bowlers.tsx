import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../layout/DefaultLayout";
import MultiSelect from "../Forms/MultiSelect";

const Bowlers = () => {
  const [selectedTeam, setSelectedTeam] = useState<string[]>([]);
  const [selectedOppositeTeam, setSelectedOppositeTeam] = useState<string[]>(
    []
  );
  const [selectedPlayer, setSelectedPlayer] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

  // Define the options for each dropdown
  const teamsOptions = [
    { value: "Sri Lanka", text: "Sri Lanka", selected: false },
    { value: "England", text: "England", selected: false },
    { value: "India", text: "India", selected: false },
    // Add more options as needed
  ];

  const oppositeTeamsOptions = [
    { value: "India", text: "India", selected: false },
    { value: "All", text: "All", selected: false },
    // Add more options as needed
  ];

  const playersOptions = [
    { value: "Wanindu Hasaranga", text: "Wanindu Hasaranga", selected: false },
    { value: "Dasun Shanaka", text: "Dasun Shanaka", selected: false },
    { value: "Kusal Mendis", text: "Kusal Mendis", selected: false },
    { value: "Rehan Ahamed", text: "Rehan Ahamed", selected: false },
    { value: "Moen Ali", text: "Moen Ali", selected: false },
    {
      value: "Maheesh Theekshana",
      text: "Maheesh Theekshana",
      selected: false,
    },
    {
      value: "Tillakaratne Dilshan",
      text: "Tillakaratne Dilshan",
      selected: false,
    },
    { value: "Angelo Mathews", text: "Angelo Mathews", selected: false },
    // Add more options as needed
  ];

  const filtersOptions = [
    { value: "runs", text: "Runs", selected: false },
    { value: "wickets", text: "Wickets", selected: false },
    { value: "Fours", text: "Fours", selected: false },
    { value: "Sixes", text: "Sixes", selected: false },
    // Add more options as needed
  ];

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Bowlers" />

      <div className="grid">
        <div className="   flex flex-col gap-9">
          <div className="  rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="  bg-blue-200 border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <div className="flex flex-row gap-5.5 p-6.5">
                {/* Dropdown for selecting team */}
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Team
                  </label>
                  <MultiSelect options={teamsOptions} />
                </div>

                {/* Dropdown for selecting opposite team */}
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Opposite Team
                  </label>
                  <MultiSelect options={oppositeTeamsOptions} />
                </div>

                {/* Dropdown for selecting player */}
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Player
                  </label>
                  <MultiSelect options={playersOptions} />
                </div>

                {/* Dropdown for selecting filter */}
                <div>
                  {/* <label className="mb-3 block text-black dark:text-white">
                    Filters
                  </label> */}

                  <button className="bg-blue-500 min-h-[50px] min-w-[200px] rounded-lg text-white pt mt-11">
                    Filter
                  </button>

                  {/* <MultiSelect
                    options={filtersOptions}
                    onSelect={setSelectedFilter}
                  /> */}
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)", // Two images per row
                  gap: "20px", // Adjust the gap between images
                  maxHeight: "100%", // Fill the available height
                }}
              >
                <div style={{ maxWidth: "100%" }}>
                  <img
                    src="/images/10.png"
                    alt="Description of your image"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </div>
                <div style={{ maxWidth: "100%" }}>
                  <img
                    src="/images/11.png"
                    alt="Description of your image"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </div>
                <div style={{ maxWidth: "100%" }}>
                  <img
                    src="/images/12.png"
                    alt="Description of your image"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </div>
                <div style={{ maxWidth: "100%" }}>
                  <img
                    src="/images/13.png"
                    alt="Description of your image"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
              ; ; ;
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Bowlers;
