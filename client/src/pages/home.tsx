import { Layout } from '@/components/layouts/Layout';
import Home from '@/components/screens/home/Home';

const HomePage = () => {
  return (
    <Layout rightSide={false}>
      <Home />
    </Layout>
  );
};

export default HomePage;
