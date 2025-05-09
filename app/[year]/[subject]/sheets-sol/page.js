'use client';
import Link from 'next/link';
import Image from 'next/image';
import SidebarLinks from '@/app/(components)/(commoncomponents)/(sidebarlinks)/page';
import { useParams } from 'next/navigation';

export default function EGSheetsSolution() {
    const { year, subject } = useParams(); 
    console.log("Year(eg/assignments)", year);
    console.log("Subject(eg/assignments)", subject);
    const formattedSubject = subject.toUpperCase();
  return (
    <>
      <div
        className="text-center py-4"
        style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
      >
        <h1 className="text-white mb-3">SWN | {formattedSubject}-Sheets </h1>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
          {/* Main Content */}
          <div className="col-lg-9 py-4 order-1 order-lg-2">
            {/* Back Button */}
            <div className="gap-3 mb-4">
              <Link
                href={`/${year}/${subject}`}
                className="btn btn-info text-white px-4"
                style={{ backgroundColor: "#4ECDC4" }}
              >
                Back
              </Link>
            </div>
            <div className="row g-4">
              {/* Introduction Sheet */}
              <div className="col-md-4 col-sm-6">
                <div className="card shadow-sm h-100 sheet-card">
                  <div className="card-body text-center">
                    <Link href="/eg/sheets/introduction" className="text-decoration-none">
                      <Image
                        src="/images/introduction.png"
                        alt="Introduction"
                        width={200}
                        height={200}
                        className="img-fluid mb-3"
                      />
                      <h5 className="card-title text-info">Introduction</h5>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sheet 1-8 */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sheetNumber) => (
                <div key={sheetNumber} className="col-md-4 col-sm-6">
                  <div className="card shadow-sm h-100 sheet-card">
                    <div className="card-body text-center">
                      <Link href={`/1st-year/eg/sheets-sol/sheet${sheetNumber}`} className="text-decoration-none">
                        <Image
                          src={`/images/sheet${sheetNumber}.png`}
                          alt={`Sheet ${sheetNumber}`}
                          width={200}
                          height={200}
                          className="img-fluid mb-3"
                        />
                        <h5 className="card-title text-info">Sheet {sheetNumber}</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Sidebar */}
          <SidebarLinks/>
        </div>
      </div>
    </>
  );
} 