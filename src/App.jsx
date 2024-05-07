import React from 'react'
import WebsiteContainer from './component/WebsiteContainer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './page/ErrorPage'
import Body from './component/Body'
import WatchPage from './page/WatchPage'
import appStore from './Redux/appStore'
import { Provider } from 'react-redux'
import ContactPage from './page/ContactPage'
import AboutPage from './page/AboutPage'
import ResultPage from './page/ResultPage'
import Channel from './page/Channel'



const App = () => {

  const appRouter = createBrowserRouter([
        {
          path: '/',
          element:<WebsiteContainer/>,
          errorElement:<ErrorPage/>,
          children:[
              {
                path: '/',
                element: <Body/>
              },
              {
                path: '/watch',
                element: <WatchPage/>,

              },
                {
                  path: '/channel',
                  element: <Channel/>
                },
              {
                path: '/contact',
                element: <ContactPage/>,

              },
              {
                path: '/about',
                element: <AboutPage/>,
              },
              {
                path: '/results',
                element: <ResultPage/>
              }
          ]
        }
    ])

  return (
    <div>
      <Provider store={appStore}>
      <RouterProvider router={appRouter} />
      </Provider>
  </div>
  )
}

export default App