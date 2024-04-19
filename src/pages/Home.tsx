import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Home/TableOne';
// import TableOne from '../components/Tables/TableOne';
import DefaultLayout from '../layout/DefaultLayout';

const Home = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Home" />

      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default Home;
