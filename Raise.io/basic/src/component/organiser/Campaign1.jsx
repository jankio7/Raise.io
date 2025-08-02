import {
  collection,
  

  deleteDoc,
  

  doc,
  

  onSnapshot,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import ResponsivePaginationComponent from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import { RingLoader } from "react-spinners";
export default function Campaign1() {
  const [load, setLoad] = useState(true);
  const [AllCampaign, setCampaign] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 4;
  // useEffect(fn, [dependency])

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    const q = query(
      collection(db, "campaign")
      //  where("type","==","Education")
    );
    onSnapshot(q, (campaignCol) => {
      setCampaign(
        campaignCol.docs.map((el) => {
          return { id: el.id, ...el.data() };
        })
      );
      setLoad(false);
      setTotalPages(Math.ceil(campaignCol.docs.length / limit));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const DeleteCampaign = async (CampaignId, status) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",

      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //         let data={
        //     status:!status
        // }
        console.log(CampaignId);

        // await deleteDoc(doc(db, "camapign", CampaignId))
        await deleteDoc(doc(db, "campaign", CampaignId))
          .then(() => {
            
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          {load ? (
            <RingLoader
              color="#00BD56"
              size={30}
              cssOverride={{ display: "block", margin: "0 auto" }}
              loading={load}
            />
          ) : (
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="wrapper">
                  <div
                    className="row no-gutters"
                    style={{ boxShadow: "0px 0px 15px gray" }}
                  >
                    <div className="col-lg col-md order-md-last d-flex align-items-stretch">
                      <div className="contact-wrap table-responsive w-100 p-md-5 p-4">
                        <h3 className="mb-4">Campaign Detail</h3>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">S.no</th>
                              <th scope="col">Title</th>
                              <th scope="col">Image</th>
                              {/* <th scope="col">Category</th> */}
                              <th scope="col">Description</th>
                              <th scope="col">Total Amount</th>
                              <th scope="col">Start Date</th>

                              <th scope="col">Actions</th>
                            </tr>
                          </thead>

                          {AllCampaign?.slice(
                            (currentPage - 1) * limit,
                            (currentPage - 1) * limit + limit
                          )?.map((el, index) => {
                            return (
                              <tbody>
                                <tr>
                                  <th scope="row">{index + 1}</th>
                                  <td>{el.campaigntitle}</td>
                                  <td>
                                    <img
                                      className="img-fluid  w-40 h-40"
                                      src={el.image}
                                    />
                                  </td>
                                  {/* <td>{el.type}</td> */}
                                  <td>{el.description}</td>
                                  <td>{el.goalAmount}</td>
                                  <td>{el.startdate}</td>

                                  <td className="">
                                    <th>
                                      {" "}
                                      <Link
                                        to={
                                          "/organiser/campaign/update/" + el.id
                                        }
                                        className="btn btn-success my-1"
                                      >
                                        Edit
                                      </Link>
                                    </th>
                                    <th>
                                      {" "}
                                      <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                          DeleteCampaign(el.id);
                                        }}
                                      >
                                        Delete
                                      </button>
                                    </th>
                                  </td>
                                </tr>
                              </tbody>
                            );
                          })}

                          <tfoot>
                            <tr>
                              <td colSpan={6}>
                                <ResponsivePaginationComponent
                                  current={currentPage}
                                  total={totalPages}
                                  onPageChange={setCurrentPage}
                                />
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
