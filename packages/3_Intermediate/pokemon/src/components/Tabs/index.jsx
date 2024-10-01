import { useEffect, useState } from 'react';

import './Tabs.css';

function Tabs({ tabs }) {
  useEffect(() => {
    const currentUrl = window.location.href;
    const selectedTabId = currentUrl.split('#tab-')?.at(1);
    if (selectedTabId) {
      setSelectedTabId(selectedTabId);
    }
  }, []);

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  return (
    <div>
      <header>
        <ul className='tab__header'>
          {
            tabs.map((tab) => (
              <li key={tab.id}>
                <a href={`#tab-${tab.id}`}>
                  <TabHeader isSelected={tab.id === selectedTabId} onClick={() => setSelectedTabId(tab.id)}>
                    {tab.header}
                  </TabHeader>
                </a>
             </li>
            ))
          }
        </ul>
      </header>
      <div key={selectedTabId}>
        {tabs.find((tab) => tab.id === selectedTabId)?.content || <p>empty tab</p>}
      </div>
    </div>
  );
}

function TabHeader({ isSelected, children, onClick }) {
  return (
    <div className={`tab__heading ${isSelected && 'tab__heading--selected'}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Tabs;
