import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from "@/store";
import { Observer } from "mobx-react-lite";
import LoadingSpinner from "@/components/LoadingSpinner";
import UserInfo from "@/components/UserInfo/UserInfo";
import AboutMe from "@/components/AboutMe/AboutMe";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import profile from 'assets/img/profile.jpg';
import saul from '../../assets/temp/saul.jpg';

const UserProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { userStore } = useStore();

  const mockUser = {
    firstName: "Saul",
    lastName: "Goodman",
    email: "bettercallsaul@gmail.com",
    profile: {
        name: "Saul Goodman",
        avatar: saul,
        description: `
            <h2>Full-Stack Developer</h2>
            <h3>Profile:</h3>
            <p>Highly skilled Full-Stack Developer with 5 years of experience in designing and implementing robust web applications.
            Proficient in both frontend and backend technologies, with a strong emphasis on creating scalable and efficient
            code. Adept at collaborating with cross-functional teams to deliver high-quality software solutions. Known for a
            meticulous attention to detail and a passion for learning and applying new technologies to solve complex problems.
            </p>
<h3>Technical Skills:</h3>
<ul>
<li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Angular, Vue.js</li>
<li><strong>Backend:</strong> Node.js, Express, Django, Ruby on Rails</li>
<li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Redis</li>
<li><strong>DevOps:</strong> Docker, Kubernetes, Jenkins, CI/CD</li>
<li><strong>Cloud Services:</strong> AWS, Azure, Google Cloud</li>
<li><strong>Tools:</strong> Git, Webpack, Babel, Jira, Trello</li>
<li><strong>Testing:</strong> Jest, Mocha, Chai, Selenium</li>
</ul>
<h3>Experience:</h3>
<p>Throughout my career, I have successfully led multiple projects from conception to deployment, ensuring seamless
integration of new features and functionalities. My expertise spans across developing user-friendly interfaces and
maintaining server-side logic, delivering end-to-end solutions that meet client requirements. I thrive in fast-paced
environments, continuously seeking to improve my skill set and contribute to team success.</p>
<h3>Projects:</h3>
<ul>
<li><strong>Project A:</strong> Developed a comprehensive e-commerce platform using React, Node.js, and MongoDB,
    resulting in a 20% increase in user engagement and a 15% boost in sales.</li>
<li><strong>Project B:</strong> Implemented a real-time chat application with WebSocket, Express, and PostgreSQL,
    enhancing communication efficiency within the organization.</li>
<li><strong>Project C:</strong> Led the development of a custom CMS using Django and Vue.js, which streamlined
    content management and reduced operational costs by 25%.</li>
</ul>
<h3>Education:</h3>
<p>Bachelor's Degree in Computer Science from XYZ University.</p>
<h3>Certifications:</h3>
<ul>
<li>Certified AWS Solutions Architect</li>
<li>Certified Kubernetes Administrator (CKA)</li>
<li>Google Cloud Professional Cloud Developer</li>
</ul>
<h3>Professional Attributes:</h3>
<ul>
<li><strong>Team Player:</strong> Excellent collaboration skills with a proven track record of working effectively
    in diverse team settings.</li>
<li><strong>Problem Solver:</strong> Strong analytical and troubleshooting abilities, with a focus on delivering
    optimal solutions.</li>
<li><strong>Adaptable:</strong> Quick learner who is always open to new challenges and technologies.</li>
<li><strong>Communicator:</strong> Effective communication skills, capable of conveying technical concepts to both
    technical and non-technical stakeholders.</li>
</ul>
        `,
        slogan: "Fullstack Developer",
        phone: "+1234567890",
        city: "Albuquerque, NM",
        socialMedia: {
            facebook: "https://facebook.com/bettercallsaul",
            twitter: "https://twitter.com/bettercallsaul",
            linkedin: "https://linkedin.com/in/saulgoodman"
        }
    }
};

  useEffect(() => {
    async function loadCategories() {
      await userStore.getUserById(id);
    }
    loadCategories();
  }, [id, userStore]);

  return <Observer>{() => {
    const { isLoadingBusinesses, userProfile } = userStore;
    if (isLoadingBusinesses) {
      return <LoadingSpinner />;
    } else if (userProfile) {
      return (
        <>
          <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
            <img src={profile} alt="Contact-Us" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
            <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
            <div className="container p-16 relative z-3">
              <div className="w-10/12 m-auto pt-10 pb-7">
                <div className="text-center">
                  <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">Candidate Profile</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-12 pb-20 bg-light">
            <div className="container">
              <div className="lg:grid grid-cols-12 gap-6">
                <div className="col-span-4">
                  <UserInfo
                    firstName={userProfile.firstName}
                    lastName={userProfile.lastName}
                    email={userProfile.email}
                    profile={userProfile.profile}
                  />
                  <SocialMedia
                    facebook={mockUser.profile.socialMedia.facebook}
                    twitter={mockUser.profile.socialMedia.twitter}
                    linkedin={mockUser.profile.socialMedia.linkedin}
                  />
                </div>
                <div className="col-span-8">
                  <AboutMe
                    firstName={mockUser.firstName}
                    lastName={mockUser.lastName}
                    email={mockUser.email}
                    profile={mockUser.profile}
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )
    } else {
      return null;
    }
  }}</Observer>
};

export default UserProfile;