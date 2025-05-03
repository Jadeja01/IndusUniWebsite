'use client';
import Link from 'next/link';
import Image from 'next/image';
import sidebarLinks from './(components)/(commoncomponents)/(sidebarlinks)/page';

export default function Home() {
  return (
    <>
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

      <div className="firstyear text-center py-4 mb-5" style={{backgroundImage: 'linear-gradient(to right, #764ba2, #667eea)'}}>
        <h1 className="text-white">SWN | First Year</h1>
      </div>

      <div className="container mb-5">
        <div className="row justify-content-between">
          <div className="col-lg-8">
            <div className="bg-white rounded p-4">
              <div className="row justify-content-evenly">
                {[
                  { href: '/eg', src: '/images/eglogo.png', alt: 'Engineering Graphics' },
                  { href: '/es', src: '/images/eslogo.png', alt: 'Environmental Science' },
                  { href: '/iks', src: '/images/ikslogo.png', alt: 'Indian Knowledge System' },
                  { href: '/tcss', src: '/images/tcsslogo.png', alt: 'Technical Communication' },
                  { href: '/calculus', src: '/images/calculuslogo.png', alt: 'Calculus' },
                  { href: '/ec', src: '/images/chemistrylogo.png', alt: 'Chemistry' },
                  { href: '/boe', src: '/images/boelogo.png', alt: 'Basic of Energy' },
                  { href: '/automobile', src: '/images/automobile engineering.png', alt: 'Automobile Engineering' }
                ].map((item, index) => (
                  <div key={index} className="col-md-6 col-lg-6 mb-4">
                    <div className="text-center">
                      <Link href={item.href} className="d-inline-block">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={300}
                          height={200}
                          className="img-fluid rounded"
                          style={{ objectFit: 'contain' }}
                          priority={index < 4}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-lg-3 px-0 order-2 order-lg-1">
            <div
              className="card h-100 rounded-0 border-end"
              style={{ position: "sticky", top: "0" }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="card-title text-center mb-4">Course Plan:</h3>
                <div className="d-flex flex-column w-100">
                  {sidebarLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="nav-link py-3 border-bottom text-center"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary py-5 mt-5"></div>
      
      <a
  className="btn btn-success d-block w-auto mx-auto my-4 px-4 py-2 fw-bold"
  href="https://chat.whatsapp.com/Fq1P6DdGipgD2DNClxMlIX" // full link here
  target="_blank"
  rel="noopener noreferrer"
>
  Join Our WhatsApp Group
</a>
      
    </>
  );
}