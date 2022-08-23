import React from 'react';
import {Outlet, Navigate} from 'react-router-dom'
import { useQuery } from 'react-query';
import { loginAdd } from "./api";


const ProtectedRouter = ({token}) => {
    const { isLoading, error, data } = useQuery('repoData', () =>
 loginAdd()
  )




  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  console.log(data);

    return (
        <div>
            {token ? <Outlet/> : <Navigate to='/login'/> }
        </div>
    );
}

export default ProtectedRouter;
