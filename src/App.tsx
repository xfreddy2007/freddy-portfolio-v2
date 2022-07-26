import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '~react-pages';

const App:React.FC = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

export default App;
