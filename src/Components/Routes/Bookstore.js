import React from "react";
import SecondNavbar from "../SubComponents/SecondNavbar";
import Icon from "../../Assets/img/icon.png";
import BookForSale from "../SubComponents/BookStore/BookForSale";
import BookForRequests from "../SubComponents/BookStore/BookForRequests";
import FilterBar from "../SubComponents/Shared/FilterBar";
import { HashLink } from "react-router-hash-link";
import GetData from "../Api/GetData";
import BookStoreSearchbar from "../SubComponents/Shared/BookStoreSearchbar";

class Bookstore extends React.Component {
  constructor() {
    super();
    this.state = {
      UsedBooksData: [],
      RequestedBooksData: [],
      SaleVisible: 3,
      RequestVisible: 3,
    };
    this.LoadMoreSale = this.LoadMoreSale.bind(this);
    this.ShowLessSale = this.ShowLessSale.bind(this);
    this.LoadMoreRequest = this.LoadMoreRequest.bind(this);
    this.ShowLessRequest = this.ShowLessRequest.bind(this);
  }

  LoadMoreSale() {
    this.setState((old) => {
      return { SaleVisible: old.SaleVisible + 3 };
    });
  }
  ShowLessSale() {
    this.setState(() => {
      return { SaleVisible: 3 };
    });
  }
  LoadMoreRequest() {
    this.setState((old) => {
      return { RequestVisible: old.RequestVisible + 3 };
    });
  }
  ShowLessRequest() {
    this.setState((old) => {
      return { RequestVisible: 3 };
    });
  }

  componentDidMount() {
    const res = GetData.UsedBookListing(this.state.UsedBooksData);
    res.then((value) => {
      if (value.data?.data?.docs) {
        this.setState({ UsedBooksData: value.data.data.docs });
      } else {
        this.setState({ UsedBooksData: [] });
      }
    });

    const response = GetData.RequestedBookListing(
      this.state.RequestedBooksData
    );
    response.then((value) => {
      if (value.data?.data?.docs) {
        this.setState({ RequestedBooksData: value.data.data.docs });
      } else {
        this.setState({ RequestedBooksData: [] });
      }
    });
  }

  render() {
    {
      console.log("booksData", this.state.UsedBooksData);
    }
    const RenderingSaleBooks = this.state.UsedBooksData.slice(
      0,
      this.state.SaleVisible
    ).map((Book) => {
      return (
        <BookForSale
          key={Book.bookID}
          image={Book.bookImage}
          Img={Book.bookImages}
          Id={Book.bookID}
          Name={Book.bookName}
          Date={Book.createdOn}
          Price={Book.price}
          icon={Icon}
          Category={Book.bookType}
        />
      );
    });
    const RenderingRequestedBooks = this.state.RequestedBooksData.slice(
      0,
      this.state.RequestVisible
    ).map((Book) => {
      return (
        <BookForRequests
          key={Book.bookID}
          Img={Book.bookImages}
          Id={Book.bookID}
          Name={Book.bookName}
          Date={Book.createdOn}
          Price={Book.price}
          Category={Book.bookType}
          Description={Book.description}
          icon={Icon}
        />
      );
    });
    return (
      <>
        {console.log(this.state)}
        <SecondNavbar />
        <div className="pb-3" style={{ backgroundColor: "#E0EEFF" }}>
          <BookStoreSearchbar ButtonValue="Post Ad" from="Bookstore" />
        </div>
        <div className="MaxWidth">
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-11 mx-auto">
                <div className="row">
                  <div className="col-12 col-md-8 pr-0">
                    <div className="row m-0 p-0">
                      <div className="col-12">
                        <div className="btm_bordr">
                          <h4 className="mb-2">For Sale</h4>
                        </div>
                        <div className="row">
                          {RenderingSaleBooks}
                          {this.state.SaleVisible <
                          this.state.UsedBooksData.length ? (
                            <div
                              className="col-12 text-center"
                              onClick={this.LoadMoreSale}
                            >
                              <p className="Bold" style={{ cursor: "pointer" }}>
                                load More
                              </p>
                            </div>
                          ) : (
                            <div
                              className="col-12 text-center"
                              onClick={this.ShowLessSale}
                            >
                              <p className="Bold" style={{ cursor: "pointer" }}>
                                Show Less
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12 my-5">
                        <div className="btm_bordr">
                          <HashLink
                            to="/MyBackpack#anno"
                            scroll={(el) =>
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "end",
                              })
                            }
                          >
                            <h4>Requests</h4>
                          </HashLink>
                        </div>
                        <div className="row">
                          {/* {RenderingRequestedBooks} */}
                          {this.state.RequestVisible <
                          this.state.RequestedBooksData.length ? (
                            <div
                              className="col-12 text-center"
                              onClick={this.LoadMoreRequest}
                            >
                              <p className="Bold" style={{ cursor: "pointer" }}>
                                load More
                              </p>
                            </div>
                          ) : (
                            <div
                              className="col-12 text-center"
                              onClick={this.ShowLessRequest}
                            >
                              <p className="Bold" style={{ cursor: "pointer" }}>
                                Show Less
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 mt-3">
                    <FilterBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Bookstore;
