import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/tabs';
import SearchTab from './SearchTab';

const PokedexTab = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Search a Pokemon</Tab>
        <Tab>My Favorites</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SearchTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PokedexTab;
