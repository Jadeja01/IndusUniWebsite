'use client';
import Link from 'next/link';
import Image from 'next/image';
import sidebarLinks from '@/app/(components)/(commoncomponents)/(sidebarlinks)/page';

export default function IntroductionSheet() {
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | EG/Introduction</h1>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            <div className="card shadow">
              <div className="card-body">
                <div className="text-center mb-4">
                  <Image
                    src="/images/introduction.png"
                    alt="Introduction Sheet"
                    width={600}
                    height={400}
                    className="img-fluid rounded shadow-sm"
                  />
                </div>

                <div className="text-center mt-4">
                  <Link href="/eg/sheets" className="btn btn-info text-white">
                    Back to Sheets
                  </Link>
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
      </div>
    </>
  );
} 