'use client';
import Link from 'next/link';
import Navigation from './(components)/(commoncomponents)/Navbar';
import { useEffect } from 'react';

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="bg-primary bg-gradient py-5 d-flex align-items-center min-vh-85">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-white">
            <h1 className="display-3 fw-bold mb-4">
              Welcome to StudyWithNotes
            </h1>
            <h4 className="mb-4 opacity-75">
              Your Complete Academic Resource Hub for Engineering Studies
            </h4>
            <p className="lead mb-4">
              Access comprehensive study materials, previous year papers, and interactive resources to excel in your engineering journey.
            </p>
            <div className="d-flex gap-3">
              <Link href="#year-selection" className="btn btn-light btn-lg rounded-pill px-4">
                Get Started
              </Link>
              <Link href="/about" className="btn btn-outline-light btn-lg rounded-pill px-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Year Selection Component
const YearSelection = () => {
  const years = [
    { 
      label: "1st Year", 
      href: "/1st-year",
      icon: "bi-1-circle-fill",
      description: "Foundational engineering subjects and fundamental concepts"
    },
    { 
      label: "2nd Year", 
      href: "/2nd-year",
      icon: "bi-2-circle-fill",
      description: "Advanced topics and specialized engineering domains"
    }
  ];

  return (
    <div id="year-selection" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 mb-3 text-info">Select Your Year</h2>
        <p className="lead text-muted">Choose your academic year to access relevant materials</p>
      </div>
      <div className="row justify-content-center g-4">
        {years.map((year, index) => (
          <div key={index} className="col-md-5">
            <Link href={year.href} className="text-decoration-none">
              <div className="card h-100 border-0 shadow-lg hover-card">
                <div className="card-body text-center p-5">
                  <div className="mb-4">
                    <i className={`bi ${year.icon} fs-1 text-info`}></i>
                  </div>
                  <h3 className="card-title mb-3">{year.label}</h3>
                  <p className="card-text text-muted">{year.description}</p>
                  <div className="mt-4">
                    <span className="btn btn-outline-info rounded-pill px-4">
                      Explore Resources <i className="bi bi-arrow-right ms-2"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Quick Access Component
const QuickAccess = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 mb-3 text-primary">Quick Access</h2>
          <p className="lead text-muted">Directly jump to popular subjects</p>
        </div>
        <div className="row g-4">
          {[
            { title: "Engineering Graphics", href: "/1st-year/eg", icon: "bi-bezier" },
            { title: "Environmental Science", href: "/1st-year/es", icon: "bi-tree" },
            { title: "Engineering Calculus", href: "/1st-year/calculus", icon: "bi-calculator" },
            { title: "Engineering Chemistry", href: "/1st-year/ec", icon: "bi-eyedropper" }
          ].map((subject, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <Link href={subject.href} className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle bg-white shadow-sm d-inline-flex align-items-center justify-content-center p-3 mb-3" style={{width: "60px", height: "60px"}}>
                      <i className={`bi ${subject.icon} fs-3 text-primary`}></i>
                    </div>
                    <h4 className="card-title">{subject.title}</h4>
                    <div className="mt-3">
                      <span className="text-primary">Browse Materials <i className="bi bi-arrow-right ms-1"></i></span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Features Component
const Features = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 mb-3 text-info">What We Offer</h2>
        <p className="lead text-muted">Comprehensive resources to support your academic journey</p>
      </div>
      <div className="row g-4">
        {[
          {
            icon: "bi-book-fill",
            title: "Comprehensive Study Materials",
            description: "Well-structured notes covering the entire syllabus with easy-to-understand explanations"
          },
          {
            icon: "bi-file-text-fill",
            title: "Previous Year Question Papers",
            description: "Access to a wide collection of previous year papers with solutions to improve your exam preparation"
          },
          {
            icon: "bi-pencil-fill",
            title: "Practice Assignments",
            description: "Topic-wise assignments to test your understanding and enhance your problem-solving skills"
          },
          {
            icon: "bi-mortarboard-fill",
            title: "Interactive Tutorials",
            description: "Engaging tutorials with visual aids to help you grasp complex concepts more effectively"
          }
        ].map((feature, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="feature-icon-bg rounded p-3 d-inline-flex align-items-center justify-content-center mb-3">
                  <i className={`bi ${feature.icon} fs-2 text-info`}></i>
                </div>
                <h4 className="card-title mb-3">{feature.title}</h4>
                <p className="card-text text-muted">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Updates Component
// const Updates = () => {
//   return (
//     <div className="bg-light py-5">
//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="display-5 mb-3 text-info">Latest Updates</h2>
//           <p className="lead text-muted">Stay informed about our newest resources and events</p>
//         </div>
//         <div className="row g-4">
//           <div className="col-lg-4">
//             <div className="card h-100 border-0 shadow-sm">
//               <div className="card-body p-4">
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="me-3">
//                     <span className="badge bg-info rounded-pill px-3 py-2">NEW</span>
//                   </div>
//                   <h5 className="card-title mb-0">Study Materials Updated</h5>
//                 </div>
//                 <p className="card-text">Latest study materials and resources have been added to all subjects with improved content and examples.</p>
//                 <div className="mt-3">
//                   <Link href="/notes" className="btn btn-sm btn-outline-info rounded-pill px-3">
//                     Explore Now <i className="bi bi-arrow-right ms-1"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="card h-100 border-0 shadow-sm">
//               <div className="card-body p-4">
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="me-3">
//                     <span className="badge bg-warning text-dark rounded-pill px-3 py-2">UPCOMING</span>
//                   </div>
//                   <h5 className="card-title mb-0">Live Tutorial Sessions</h5>
//                 </div>
//                 <p className="card-text">Join our upcoming live tutorial sessions on complex engineering topics with expert faculty members.</p>
//                 <div className="mt-3">
//                   <Link href="/events" className="btn btn-sm btn-outline-warning rounded-pill px-3">
//                     Register Now <i className="bi bi-arrow-right ms-1"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="card h-100 border-0 shadow-sm">
//               <div className="card-body p-4">
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="me-3">
//                     <span className="badge bg-success rounded-pill px-3 py-2">FEATURED</span>
//                   </div>
//                   <h5 className="card-title mb-0">Interactive Learning Tools</h5>
//                 </div>
//                 <p className="card-text">New interactive learning tools and simulations added to help visualize engineering concepts better.</p>
//                 <div className="mt-3">
//                   <Link href="/tools" className="btn btn-sm btn-outline-success rounded-pill px-3">
//                     Try Now <i className="bi bi-arrow-right ms-1"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Getting Started Component
const GettingStarted = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 mb-3 text-info">Getting Started</h2>
        <p className="lead text-muted">Follow these simple steps to begin your learning journey</p>
      </div>
      <div className="row g-4">
        {[
          {
            step: "1",
            title: "Choose Your Subject",
            description: "Select from our wide range of engineering subjects based on your curriculum"
          },
          {
            step: "2",
            title: "Access Resources",
            description: "Find study materials, assignments, and question papers for your selected subject"
          },
          {
            step: "3",
            title: "Start Learning",
            description: "Begin your learning journey with our comprehensive materials and interactive content"
          }
        ].map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4 text-center">
                <div className="mb-4">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-info text-white" style={{ width: "60px", height: "60px" }}>
                    <span className="h4 mb-0">{item.step}</span>
                  </div>
                </div>
                <h4 className="card-title mb-3">{item.title}</h4>
                <p className="card-text text-muted">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link href="#year-selection" className="btn btn-info btn-lg rounded-pill px-4">
          Start Now <i className="bi bi-arrow-right ms-2"></i>
        </Link>
      </div>
    </div>
  );
};



// Main Home Component
export default function Home() {
  useEffect(() => {
    // Add any client-side initialization here
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if(elementPosition < viewportHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (<>
  <header className="py-4 bg-white border-bottom border-dark">
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-md-5">
              <div className="slok1 p-3">
                <p className="text-secondary">Bhagavad Gita: Adhyay 2, Slok 47</p>
                <h2 className="my-3">
                  कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।<br />
                  मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
                </h2>
                <p className="text-secondary">
                  <span className="text-danger">अर्थ:</span> तुम्हें अपने निश्चित कर्मों का
                  पालन करने का अधिकार है लेकिन तुम अपने कर्मों का फल प्राप्त करने के
                  अधिकारी नहीं हो, तुम स्वयं को अपने कर्मों के फलों का कारण मत मानो और न
                  ही अकर्मा रहने में आसक्ति रखो।
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="slok2 p-3">
                <p className="text-secondary">Bhagavad Gita: Adhyay 6, Slok 35</p>
                <h2 className="my-3">
                  असंशयं महाबाहो मनो दुर्निग्रहं चलम् ।<br />
                  अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते
                </h2>
                <p className="text-secondary">
                  <span className="text-danger">अर्थ:</span>
                  भगवान् श्रीकृष्ण ने कहा-हे महाबाहु कुन्तीपुत्र! जो तुमने कहा वह सत्य
                  है, मन को नियंत्रित करना वास्तव में कठिन है। किन्तु अभ्यास और विरक्ति
                  द्वारा इसे नियंत्रित किया जा सकता है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    <main>
      <Navigation />
      <HeroSection />
      <YearSelection />
      <QuickAccess />
      <Features />
      {/* <Updates /> */}
      <GettingStarted />

    </main></>
  );
}