import React, { useEffect, useRef } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../store/slices/users';

export const UserList = () => {
    const { list: users } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const render = useRef(0);

    useEffect(() => {

        if(render.current === 0) {
            render.current = render.current + 1;
            return;
        }
        dispatch(fetchAllUsers());
        
    }, []);

    return (
    <div className='container'>
        <div className="flex flex-wrap flex-row gap-5 justify-center mt-5">
            {
                users.map((user) => {
                    return (
                        <div key={ user.id } className='w-72 rounded overflow-hidden shadow-lg'>
                            <div className='flex px-4 py-4'>
                                <img className="w-10 h-10 rounded-full mr-4" src={`${user.avatar}`} alt="Avatar of Jonathan Reinink" />
                                <div className='flex flex-col'>
                                    <p className='w-full'>{ user.first_name + ' ' + user.last_name }</p>
                                    <p className='text-gray-500 font-semibold text-sm'>{ user.email }</p>  
                                </div>     
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
