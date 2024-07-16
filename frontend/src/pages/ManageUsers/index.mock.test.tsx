import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// Mock data
const mockUsers = [
  { _id: '1', firstName: 'John', lastName: 'Doe', roleId: 'user' },
  { _id: '2', firstName: 'Jane', lastName: 'Smith', roleId: 'business' },
  { _id: '3', firstName: 'Bob', lastName: 'Johnson', roleId: 'admin' },
  { _id: '4', firstName: 'Alice', lastName: 'Brown', roleId: 'user' },
  { _id: '5', firstName: 'Michael', lastName: 'Davis', roleId: 'business' },
  { _id: '6', firstName: 'Emily', lastName: 'Wilson', roleId: 'user' },
  { _id: '7', firstName: 'David', lastName: 'Taylor', roleId: 'admin' },
  { _id: '8', firstName: 'Sarah', lastName: 'Anderson', roleId: 'business' },
  { _id: '9', firstName: 'Daniel', lastName: 'Martinez', roleId: 'user' },
  { _id: '10', firstName: 'Olivia', lastName: 'Thomas', roleId: 'business' },
];

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  roleId: string;
}

interface SearchFormData {
  search: string;
}

const MockManageUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(mockUsers);
  const [filter, setFilter] = useState<string>('all');
  const { register, handleSubmit } = useForm<SearchFormData>();

  useEffect(() => {
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  const handleFilter = (role: string) => {
    setFilter(role);
    if (role === 'all') {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter(user => user.roleId === role));
    }
  };

  const handleSearch: SubmitHandler<SearchFormData> = (data) => {
    const searchTerm = data.search.toLowerCase();
    const filtered = users.filter(user =>
      user.firstName.toLowerCase().includes(searchTerm) ||
      user.lastName.toLowerCase().includes(searchTerm)
    );
    setFilteredUsers(filtered);
  };

  const handleEdit = (id: string) => {
    console.log('Edit user with id:', id);
  };

  const handleDelete = (id: string) => {
    const updatedUsers = users.filter(user => user._id !== id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleShowProfile = (id: string) => {
    console.log('Show profile for user with id:', id);
  };

  return (
    <div className="rounded-lg shadow-lg bg-white">
      <div className="h-16 bg-themeDark mb-8 flex items-center px-10 rounded-lg">
        <p className="text-xxs text-white">Manage Users</p>
      </div>
      <main className="flex-grow mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <button onClick={() => handleFilter('all')} className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-themePrimary text-white' : 'bg-gray-200 text-gray-700'}`}>All</button>
            <button onClick={() => handleFilter('user')} className={`px-4 py-2 rounded ml-2 ${filter === 'user' ? 'bg-themePrimary text-white' : 'bg-gray-200 text-gray-700'}`}>User</button>
            <button onClick={() => handleFilter('business')} className={`px-4 py-2 rounded ml-2 ${filter === 'business' ? 'bg-themePrimary text-white' : 'bg-gray-200 text-gray-700'}`}>Business</button>
          </div>
          <form onSubmit={handleSubmit(handleSearch)} className="flex-grow ml-4">
            <input
              {...register('search')}
              type="text"
              placeholder="Search users..."
              className="border rounded py-2 px-3 w-64 float-right"
            />
          </form>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user._id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.roleId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onClick={() => handleShowProfile(user._id)} className="text-themePrimary hover:text-blue-900 mr-2">Show Profile</button>
                    <button onClick={() => handleEdit(user._id)} className="text-themePrimary hover:text-blue-900 mr-2">Edit</button>
                    <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default MockManageUsers;