import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useStore } from '@/store';
import agent from '@/agent';
import { User } from '@/stores/userStore';

interface SearchFormData {
  search: string;
}

const ManageUsers: React.FC = () => {
  const { userStore } = useStore();
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const { register, handleSubmit } = useForm<SearchFormData>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await agent.Users.all();
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleFilter = (role: string) => {
    setFilter(role);
    if (role === 'all') {
      setFilteredUsers(users);
    } else {
      const roleId = role === 'user' ? '66627f747573d122a0410137' : '66627f747573d122a0410138';
      setFilteredUsers(users.filter(user => user.roleId === roleId));
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

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await agent.Users.delete(id);
        fetchUsers(); // Refresh the user list
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleShowProfile = (id: string) => {
    console.log('Show profile for user with id:', id);
  };

  const getRoleName = (roleId: string) => {
    switch (roleId) {
      case '66627f747573d122a0410137':
        return 'User';
      case '66627f747573d122a0410138':
        return 'Business';
      default:
        return 'Admin';
    }
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
                  <td className="px-6 py-4 whitespace-nowrap">{getRoleName(user.roleId)}</td>
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

export default ManageUsers;