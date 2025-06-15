// export default function WSManualPage({ params }) {
//   const { year, subject } = params;
//   const { data, loading } = useSubject();
//   const [selectedPdf, setSelectedPdf] = useState(null);

//   const handleCardClick = (fileUrl) => {
//     setSelectedPdf(fileUrl);
//     setTimeout(() => {
//       const myModal = new bootstrap.Modal(document.getElementById("pdfModal"));
//       myModal.show();
//     }, 0);
//   };

//   const handleCloseModal = () => {
//     setTimeout(() => {
//       const myModal = bootstrap.Modal.getInstance(
//         document.getElementById("pdfModal")
//       );
//       myModal.hide();
//       setSelectedPdf(null);
//     }, 0);
//   };

//   return (
//     <>
//       {/* Header */}
//       <div
//         className="text-center py-4"
//         style={{ background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)" }}
//       >
//         <h1 className="text-white mb-3">
//           SWN | {subject.toUpperCase()} - Workshop Manual
//         </h1>
//       </div>

//       <div className="container-fluid">
//         <div className="row" style={{ minHeight: "calc(100vh - 160px)" }}>
//           {/* Main Content */}
//           <div className="col-lg-9 py-4 order-1 order-lg-2">
//             {/* Back Button */}
//             <div className="gap-3 mb-4">
//               <Link
//                 href={`/${year}/${subject}`}
//                 className="btn btn-info text-white px-4"
//                 style={{ backgroundColor: "#4ECDC4" }}
//               >
//                 Back
//               </Link>
//             </div>

//             {/* Workshop Manual Section */}
//             <div className="d-flex justify-content-center align-items-center mb-4">
//               {loading || !data ? (
//                 <div className="text-center py-5 w-100">Loading manual...</div>
//               ) : !data.files || !data.files[0]?.manual ? (
//                 <div className="text-center py-5 w-100">No manual available</div>
//               ) : (
//                 <iframe
//                   src={data.files[0].manual}
//                   style={{ width: "95%", height: "900px", border: "none" }}
//                   title="Workshop Manual PDF"
//                 />
//               )}
//             </div>
//             </div>
//             {/* Sidebar */}
//             <SidebarLinks />
//           </div>
//         </div>
//       </div>
//         {/* PDF Modal */}
//         <div
//             className="modal fade"
//             id="pdfModal"
//             tabIndex="-1"
//             aria-labelledby="pdfModalLabel"
//             aria-hidden="true"
//             data-bs-backdrop="static"
//             data-bs-keyboard="false"
//             style={{ zIndex: 1050 }}
//         >
//             <div className="modal-dialog modal-lg modal-dialog-centered">
//                 <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="pdfModalLabel">
//                     {selectedPdf ? "Workshop Manual" : "Loading..."}
//                     </h5>
//                     <button
//                     type="button"
//                     className="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                     onClick={handleCloseModal}
//                     ></button>
//                 </div>
//                 <div className="modal-body">
//                     {selectedPdf && (
//                     <iframe
//                         src={selectedPdf}
//                         style={{ width: "100%", height: "600px", border: "none" }}
//                         title="PDF Viewer"
//                     />
//                     )}
//                 </div>
//                 </div>
//             </div>
//         </div>
//     </>
//     );
// }
export default function WSManualPage({ params }) {
    return (<><div>No manual available</div></>)
}
