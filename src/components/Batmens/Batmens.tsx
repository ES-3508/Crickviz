import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../layout/DefaultLayout";
import SingleSelect from "../Forms/SingleSelect";
import MultiSelect from "../Forms/MultiSelect";
import PlayerSixesChart from "../Charts/BatmensChart";
import axios from "axios";
import PlayerBarChart from "../Charts/BatmensBarchart";

const Bowlers = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedOppositeTeam, setSelectedOppositeTeam] = useState<string[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [bowlersOptions, setBowlersOptions] = useState<
    { value: string; text: string; selected: boolean }[]
  >([]);
  const [teamsOptions, setTeamsOptions] = useState<
    { value: string; text: string; selected: boolean }[]
  >([]);
  const [data, setData] = useState<any>(null); // Initialize data state
  const [data2, setData2] = useState<any>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch bowlers
        const bowlersResponse = await axios.get(
          `http://127.0.0.1:5000/api/unique-batsmen?country=${selectedTeam}`
        );
        const bowlersData: string[] = bowlersResponse.data;
        const bowlersOptions = bowlersData.map((bowler) => ({
          value: bowler,
          text: bowler,
          selected: false,
        }));
        setBowlersOptions(bowlersOptions);

        // Fetch teams
        const teamsResponse = await axios.get(
          "http://127.0.0.1:5000/api/countries"
        );
        const teamsData: string[] = teamsResponse.data;
        const updatedTeamsOptions = [
          ...teamsData.map((team) => ({
            value: team,
            text: team,
            selected: false,
          })),
          { value: "Other", text: "Other", selected: false },
        ];
        setTeamsOptions(updatedTeamsOptions);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedTeam]);

  useEffect(() => {
    const fetchData = async () => {
      if (
        selectedTeam &&
        selectedOppositeTeam.length > 0 &&
        selectedPlayer.length > 0
      ) {
        try {
          const url = `http://127.0.0.1:5000/api/other-data?selectedTeam=${selectedTeam}&oppositeTeam=${selectedOppositeTeam}&players=${selectedPlayer}`;
          const additionalDataResponse = await axios.get(url);
          setData(additionalDataResponse.data);
          const url2 = `http://127.0.0.1:5000/api/other-data2?selectedTeam=${selectedTeam}&oppositeTeam=${selectedOppositeTeam}&players=${selectedPlayer}`;
          const additionalDataResponse2 = await axios.get(url2);
          setData2(additionalDataResponse2.data);
        } catch (error) {
          console.error("Error fetching additional data:", error);
        }
      }
    };

    fetchData();
  }, [selectedTeam, selectedOppositeTeam, selectedPlayer]);

  const oppositeTeamsOptions = [
    { value: "all", text: "All", selected: false },
    ...teamsOptions.filter((team) => team.value !== selectedTeam),
    { value: "all", text: "All", selected: false },
  ];

  // const handleOppositeTeamChange = (selectedOptions) => {
  //   if (selectedOptions.includes("All")) {
  //     setSelectedOppositeTeam(["All"]);
  //   } else {
  //     setSelectedOppositeTeam(selectedOptions);
  //   }
  // };

  const filtersOptions = [
    { value: "runs", text: "Runs", selected: false },
    { value: "wickets", text: "Wickets", selected: false },
    { value: "Fours", text: "Fours", selected: false },
    { value: "Sixes", text: "Sixes", selected: false },
    // Add more options as needed
  ];

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Batmens" />

      <div className="grid">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="bg-blue-200 border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <div className="flex flex-row gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Team
                  </label>
                  <SingleSelect
                    options={teamsOptions}
                    selectedOption={selectedTeam}
                    setSelectedOption={setSelectedTeam}
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Opposite Team
                  </label>
                  <MultiSelect
                    options={oppositeTeamsOptions}
                    selectedOptions={selectedOppositeTeam}
                    setSelectedOptions={setSelectedOppositeTeam}
                  />
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Player
                  </label>
                  <MultiSelect
                    options={bowlersOptions}
                    selectedOptions={selectedPlayer}
                    setSelectedOptions={setSelectedPlayer}
                  />
                </div>
              </div>

              <div className="container mx-auto" style={{ height: '50vh' }}>
                <div className="flex flex-wrap -mx-4 h-full space-x-4 space-y-4">
                  {data && (
                    <>
                      <div className="w-full md:w-1/2 px-4 mb-4 h-1/2">
                        <div className="h-full">
                          <PlayerSixesChart data={data} />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-4 mb-4 h-1/2">
                        <div className="h-full">
                          <PlayerSixesChart data={data} />
                        </div>
                      </div>
                    </>
                  )}
                  {data2 && (
                    <>
                      <div className="w-full md:w-1/2 px-4 mb-4 h-1/2">
                        <div className="h-full">
                          <PlayerBarChart data={data2} />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-4 mb-4 h-1/2">
                        <div className="h-full">
                          <PlayerBarChart data={data2} />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Bowlers;
