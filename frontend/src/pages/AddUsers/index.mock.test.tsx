import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: string;
  profile: {
    name: string;
    avatar: string;
    description: string;
    website: string;
    slogan: string;
    employees: string;
    industry: string;
    phone: string;
    city: string;
    address: string;
    socialMedia: {
      facebook: string;
      twitter: string;
      linkedin: string;
    }
  }
}

const AddPeopleBusinesses: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
  const [roleType, setRoleType] = useState<'user' | 'business'>('user');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    // Here you would typically send this data to your API
    try {
      const response = await fetch('/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        // Handle success (e.g., show a success message, reset form)
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Add People & Businesses</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 flex justify-center">
            <button
              className={`mr-2 px-4 py-2 rounded-lg ${roleType === 'user' ? 'bg-themePrimary text-white' : 'bg-gray-200'}`}
              onClick={() => setRoleType('user')}
              type="button"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              User
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${roleType === 'business' ? 'bg-themePrimary text-white' : 'bg-gray-200'}`}
              onClick={() => setRoleType('business')}
              type="button"
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
                {...register("firstName", { required: "First name is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
              {errors.firstName && <span className="text-red-500 text-xs italic">{errors.firstName.message}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
              {errors.lastName && <span className="text-red-500 text-xs italic">{errors.lastName.message}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
              {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
            </div>
            <input type="hidden" {...register("roleId")} value={roleType} />
            
            {/* Profile Fields */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile.name">
                {roleType === 'business' ? 'Business Name' : 'Full Name'}
              </label>
              <input
                {...register("profile.name")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="profile.name"
                type="text"
                placeholder={roleType === 'business' ? 'Business Name' : 'Full Name'}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile.description">
                Description
              </label>
              <textarea
                {...register('profile.description')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[150px] resize-y"
                id="description"
                placeholder="Description"
                rows={20}
              />
            </div>
            {roleType === 'business' && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile.website">
                    Website
                  </label>
                  <input
                    {...register("profile.website")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="profile.website"
                    type="text"
                    placeholder="Website"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile.slogan">
                    Slogan
                  </label>
                  <input
                    {...register("profile.slogan")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="profile.slogan"
                    type="text"
                    placeholder="Slogan"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile.employees">
                    Number of Employees
                  </label>
                  <input
                    {...register("profile.employees")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="profile.employees"
                    type="text"
                    placeholder="Number of Employees"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile.industry">
                    Industry
                  </label>
                  <input
                    {...register("profile.industry")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="profile.industry"
                    type="text"
                    placeholder="Industry"
                  />
                </div>
              </>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile.phone">
                Phone
              </label>
              <input
                {...register("profile.phone")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="profile.phone"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile.city">
                City
              </label>
              <input
                {...register("profile.city")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="profile.city"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile.address">
                Address
              </label>
              <input
                {...register("profile.address")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="profile.address"
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Social Media</label>
              <div className="mb-2">
                <input
                  {...register("profile.socialMedia.facebook")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Facebook URL"
                />
              </div>
              <div className="mb-2">
                <input
                  {...register("profile.socialMedia.twitter")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Twitter URL"
                />
              </div>
              <div>
                <input
                  {...register("profile.socialMedia.linkedin")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="LinkedIn URL"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-themePrimary hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create {roleType === 'business' ? 'Business' : 'User'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddPeopleBusinesses;