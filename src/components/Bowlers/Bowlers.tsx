import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../layout/DefaultLayout";
import SingleSelect from "../Forms/SingleSelect";
import MultiSelect from "../Forms/MultiSelect";
import PlayerSixesChart from "../Charts/BowlersChart";
import axios from "axios";
import PlayerBarChart from "../Charts/BowlersBarchart";



const Bowlers = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedOppositeTeam, setSelectedOppositeTeam] = useState<string[]>(
    []
  );
  const [selectedOppositeTeam2, setSelectedOppositeTeam2] = useState<string[]>(
    []
  );
  const [selectedPlayer, setSelectedPlayer] = useState<string[]>([]);
  const [selectedPlayer2, setSelectedPlayer2] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [bowlersOptions, setBowlersOptions] = useState<
    { value: string; text: string; selected: boolean }[]
  >([]);
  const [teamsOptions, setTeamsOptions] = useState<
    { value: string; text: string; selected: boolean }[]
  >([]);
  const [teamsOptions2, setTeamsOptions2] = useState<
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
          "http://127.0.0.1:5000/api/bowling/countries"
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


        const teamsResponse2 = await axios.get(
          "http://127.0.0.1:5000/api/batting/countries"
        );
        const teamsData2: string[] = teamsResponse2.data;
        const updatedTeamsOptions2 = [
          ...teamsData2.map((team) => ({
            value: team,
            text: team,
            selected: false,
          })),
          { value: "Other", text: "Other", selected: false },
        ];
        setTeamsOptions2(updatedTeamsOptions2);

        // Fetch additional data
        // Example:
        // const additionalDataResponse = await axios.get('http://127.0.0.1:5000/api/other-data');
        // setData(additionalDataResponse.data);
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
          const url = `http://127.0.0.1:5000/api/bowling/other-data?selectedTeam=${selectedTeam}&oppositeTeam=${selectedOppositeTeam}&players=${selectedPlayer}`;
          const additionalDataResponse = await axios.get(url);
          setData(additionalDataResponse.data);
          const url2 = `http://127.0.0.1:5000/api/bowling/other-data2?selectedTeam=${selectedTeam}&oppositeTeam=${selectedOppositeTeam}&players=${selectedPlayer2}`;
          const additionalDataResponse2 = await axios.get(url2);
          setData2(additionalDataResponse2.data);
        } catch (error) {
          console.error("Error fetching additional data:", error);
        }
      }
    };

    fetchData();
  }, [selectedTeam, selectedOppositeTeam, selectedPlayer]);

  const oppositeTeamsOptions = teamsOptions2.filter(
    (team) => team.value !== selectedTeam
  );

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Bowlers" />

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
                    Player for line Chart
                  </label>
                  <MultiSelect
                    options={bowlersOptions}
                    selectedOptions={selectedPlayer}
                    setSelectedOptions={setSelectedPlayer}
                  />
                  
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Players for Bar chart
                  </label>
                  <MultiSelect
                    options={bowlersOptions}
                    selectedOptions={selectedPlayer2}
                    setSelectedOptions={setSelectedPlayer2}
                  />
                  
                </div>
                {/* <div>
                  <button className="bg-blue-500 min-h-[50px] min-w-[200px] rounded-lg text-white pt mt-11">
                    Filter
                  </button>
                </div> */}
              </div>
              {/* <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Two columns per row
    gap: "20px",
    maxHeight: "100%",
  }}
>
  {data && (
    <>
      <PlayerSixesChart data={data} />
      <PlayerSixesChart data={data} />
      <PlayerSixesChart data={data} />
      <PlayerSixesChart data={data} />
    </>
  )}
</div> */}
              <div className="container mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {data && (
                    <>
                      <PlayerSixesChart data={data} />
                      <PlayerSixesChart data={data} />
                      {/* <PlayerSixesChart data={data} />
                      <PlayerSixesChart data={data} /> */}
                    </>
                  )}
                  {data2 && (
                    <>
                      <PlayerBarChart data={data2}/>
                      <PlayerBarChart data={data2}/>
                      {/* <PlayerSixesChart data={data} />
                      <PlayerSixesChart data={data} /> */}
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
