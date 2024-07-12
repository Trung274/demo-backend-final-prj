import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useStore } from "@/store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { User } from '@/stores/userStore';

interface FormData extends Omit<User, 'profile'> {
  profile: {
    name?: string;
    avatar?: string;
    description?: string;
    website?: string;
    slogan?: string;
    employees?: string;
    industry?: string;
    phone?: string;
    city?: string;
    address?: string;
    socialMedia?: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
    }
  }
}

const ProfileSettings: React.FC = () => {
  const { userStore } = useStore();
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();
  const [roleType, setRoleType] = useState<'user' | 'business'>('user');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await userStore.pullUser();
        if (userStore.currentUser) {
          const user = userStore.currentUser;
          setValue('firstName', user.firstName);
          setValue('lastName', user.lastName);
          setValue('email', user.email);
          setValue('roleId', user.roleId);
          setValue('profile', user.profile || {});
          setRoleType(user.roleId === '66627f747573d122a0410137' ? 'user' : 'business');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };
    fetchUserData();
  }, [userStore, setValue]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await userStore.updateProfile(data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error (e.g., show an error message)
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 flex justify-center">
            <button
              className={`mr-2 px-4 py-2 rounded-lg ${roleType === 'user' ? 'bg-themePrimary text-white' : 'bg-gray-200'}`}
              type="button"
              disabled
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              User
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${roleType === 'business' ? 'bg-themePrimary text-white' : 'bg-gray-200'}`}
              type="button"
              disabled
            >
              <FontAwesomeIcon icon={faBuilding} className="mr-2" />
              Business
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                {...register('firstName', { required: 'First name is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
              {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                {...register('lastName', { required: 'Last name is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
              {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                {roleType === 'user' ? 'Name' : 'Business Name'}
              </label>
              <input
                {...register('profile.name')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder={roleType === 'user' ? 'Name' : 'Business Name'}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
                Avatar URL
              </label>
              <input
                {...register('profile.avatar')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="avatar"
                type="text"
                placeholder="Avatar URL"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                {...register('profile.description')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Description"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slogan">
                Slogan
              </label>
              <input
                {...register('profile.slogan')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="slogan"
                type="text"
                placeholder="Slogan"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                {...register('profile.phone')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Phone"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                {...register('profile.city')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="City"
              />
            </div>

            {roleType === 'user' && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Social Media</label>
                <div className="ml-4">
                  <div className="mb-2">
                    <label className="block text-gray-700 text-sm mb-1" htmlFor="facebook">Facebook</label>
                    <input
                      {...register('profile.socialMedia.facebook')}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="facebook"
                      type="text"
                      placeholder="Facebook URL"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 text-sm mb-1" htmlFor="twitter">Twitter</label>
                    <input
                      {...register('profile.socialMedia.twitter')}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="twitter"
                      type="text"
                      placeholder="Twitter URL"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-1" htmlFor="linkedin">LinkedIn</label>
                    <input
                      {...register('profile.socialMedia.linkedin')}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="linkedin"
                      type="text"
                      placeholder="LinkedIn URL"
                    />
                  </div>
                </div>
              </div>
            )}

            {roleType === 'business' && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
                    Website
                  </label>
                  <input
                    {...register('profile.website')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="website"
                    type="url"
                    placeholder="Website URL"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employees">
                    Number of Employees
                  </label>
                  <input
                    {...register('profile.employees')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="employees"
                    type="text"
                    placeholder="Number of Employees"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="industry">
                    Industry
                  </label>
                  <input
                    {...register('profile.industry')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="industry"
                    type="text"
                    placeholder="Industry"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                    Address
                  </label>
                  <input
                    {...register('profile.address')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Address"
                  />
                </div>
              </>
            )}

            <div className="flex items-center justify-between">
              <button
                className="bg-themePrimary hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProfileSettings;