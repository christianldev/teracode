import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const FaqTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          General
        </Tab>
        <Tab index={1} variant="desktop">
          Proceso
        </Tab>
        <Tab index={2} variant="desktop">
          Privacidad
        </Tab>
        <Tab index={3} variant="desktop">
          Términos y condiciones
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          General
        </Tab>
        <Tab index={1} variant="mobile">
          Proceso
        </Tab>
        <Tab index={2} variant="mobile">
          Privacidad
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          Términos y condiciones
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default FaqTabList;
